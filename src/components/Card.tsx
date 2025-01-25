import type React from 'react'
import Image from 'next/image'

import externalLink from '@/images/icons/external.svg'
import DownloadIcon from '@/images/icons/download.svg'

import Rating from './Rating'
import Button from './shared/Button/Button'

type Props = {
  icon?: string
  title: string
  link?: { href: string; text: string },
  links?: { href: string; text: string }[]
  badge?: boolean
  rating?: { amount: number; stars: number }
  downloads?: string
  children: React.ReactNode
}

export default function Card({
  icon,
  title,
  link,
  links,
  badge,
  rating,
  downloads,
  children
}: Props) {
  return (
    <>
      <div className="relative h-full overflow-hidden rounded-sm border-t border-[#ededed] p-3 text-center shadow-main transition-shadow duration-200 ease-in hover:shadow-main-ele dark:bg-secondary dark:border-none">
        {badge && (
          <div className="absolute -right-9 top-8 w-40 rotate-45 bg-[#358639] py-1 text-xs font-bold text-white">
            <strong>recommended</strong>
          </div>
        )}

        <h3 className="mb-2 mt-4 text-xl font-bold">
          {icon && (
            <Image
              src={icon}
              width="18"
              alt=""
              className="mb-1 mr-1 inline-block"
            />
          )}{' '}
          {title}
        </h3>

        <div className="mb-3">
          {rating && <Rating amount={rating.amount} stars={rating.stars} />}
          {downloads && (
            <div>
              <Image
                src={DownloadIcon}
                alt=""
                width="18"
                className="mb-1 mr-1 inline-block"
              />{' '}
              {downloads} downloads
            </div>
          )}
        </div>

        <div className="p-3">
          {children}

          {link && (<Button link={link} image={externalLink} />)}
          <div className="flex flex-col lg:flex-row justify-evenly">
            {links && links.map((link, index) => (<Button link={link} image={externalLink} key={index} />))}
          </div>
        </div>
      </div>
    </>
  )
}
