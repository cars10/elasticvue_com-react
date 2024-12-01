FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN npm install -g --arch=x64 --platform=linux --libc=glibc sharp


FROM node:20-alpine AS builder
ENV NEXT_SHARP_PATH=/usr/local/lib/node_modules/sharp
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn run build


FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_SHARP_PATH=/usr/local/lib/node_modules/sharp

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps --chown=nextjs:nodejs /usr/local/lib/node_modules/sharp /usr/local/lib/node_modules/sharp
#COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

#COPY .env.production /app/.env.production
#RUN chown -R nextjs:nodejs /app/.env.production

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
