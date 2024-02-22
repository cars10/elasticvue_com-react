import type { Metadata, Viewport } from 'next'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import '../styles/globals.css'
import type React from 'react'
import Script from 'next/script'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Elasticvue - Elasticsearch gui for the browser',
  keywords: 'elasticsearch, browser, gui, frontend, web ui',
  description:
    'Elasticvue is a free and open-source elasticsearch gui for the browser',
  metadataBase: new URL('https://elasticvue.com'),
  openGraph: {
    type: 'website',
    url: 'https://elasticvue.com'
  },
  verification: {
    google: 'uo3x_fKJzdUFBjOV4C4_Ch47l3YfmFHcP-ITH7U6TbE'
  }
}

export const viewport: Viewport = {
  themeColor: '#25315a',
  initialScale: 1,
  userScalable: true,
  width: 'device-width'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full flex-col">
        <Script
          async
          src="https://umami.cars10k.de/script.js"
          data-website-id="2bdbc085-c773-4332-8f2b-17d1253e4c6a"
          data-do-not-track="true"
          data-domains="elasticvue.com"
        />
        <Head>
          <meta
            content="uo3x_fKJzdUFBjOV4C4_Ch47l3YfmFHcP-ITH7U6TbE"
            name="google-site-verification"
          />
        </Head>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
