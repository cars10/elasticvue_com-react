import type React from 'react'
import Image from 'next/image'

import externalLink from '@/images/icons/external.svg'
import DownloadIcon from '@/images/icons/download.svg'

import Rating from './Rating'

type Props = { icon?: string, title: string, link?: { href: string, text: string }, badge?: boolean, rating?: { amount: number, stars: number }, downloads?: string, children: React.ReactNode }

export default function Card({ icon, title, link, badge, rating, downloads, children }: Props) {
  return (
    <>
      <div className="text-center p-3 rounded border-t border-[#ededed] shadow-main hover:shadow-main-ele transition-shadow duration-200 ease-in relative overflow-hidden h-full">
        {badge && <div className="font-bold absolute text-white bg-[#358639] rotate-45 -right-9 top-8 w-40 py-1 text-xs"><strong>recommended</strong></div>}

        <h3 className="mt-4 mb-2 text-xl font-bold">
          {icon && <Image src={icon} width="18" alt="" className="inline-block mb-1 mr-1" />} {title}
        </h3>

        <div className="mb-3">
          {rating && <Rating amount={rating.amount} stars={rating.stars} />}
          {downloads &&
            <div><Image src={DownloadIcon} alt="" width="18" className="inline-block mb-1 mr-1" /> {downloads} downloads</div>
          }
        </div>

        <div className="p-3">
          {children}

          {link &&
            <a className="mb-2 mt-3 bg-primary text-white visited:text-white px-4 py-3 rounded inline-block shadow hover:bg-primary-light" href={link.href} rel="noopener" target="_blank">
              <Image src={externalLink} alt=">" width="14" className="inline-block mb-1 mr-2" /> <span className="inline-block">{link.text}</span>
            </a>
          }
        </div>
      </div>
    </>
  )
}
