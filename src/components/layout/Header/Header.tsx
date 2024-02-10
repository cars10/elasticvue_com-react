'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/images/logo/white_104.webp'
import externalLinkSvg from '@/images/icons/external.svg'
import OctoCat from '@/components/Octocat/Octocat'
import { useState } from 'react'

const links = [
  { label: 'home', attributes: { href: '/' } },
  { label: 'usage', attributes: { href: '/usage' } },
  { label: 'features', attributes: { href: '/features' } },
  { label: 'code', attributes: { href: 'https://github.com/cars10/elasticvue', rel: 'noopened', target: '_blank', prefetch: false }, external: true }
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="h-16 lg:h-24 text-white py-3">
        <div className="lg:w-[70%] w-[92%] max-w-[1344px] h-full mx-auto flex flex-1 flex-row justify-between">
          <div className="h-100 flex flex-1 items-center">
            <Link href="/" className="mr-3">
              <Image alt="Elasticvue logo" width={52} src={Logo} priority className="w-9 lg:w-[52px]" />
            </Link>
            <Link href="/" className="text-white visited:text-white text-2xl lg:text-3xl leading-none mt-1 lg:mt-0">
              <span className="linkUnderlineHover">elasticvue</span>
            </Link>
          </div>

          <div className="py-3 mr-14 lg:mr-0 hidden lg:flex">
            {links.map(({ label, attributes, external }, index) => (
              <Link
                key={index}
                className={`ml-4 lg:ml-10 px-3 py-1 inline-block h-8 text-xl text-white visited:text-white leading-none linkUnderlineHover ${pathname === attributes.href ? 'active' : ''}`}
                {...attributes}
              >
                {external && <Image src={externalLinkSvg} alt=">" className="inline-block mr-2" width="14" />}

                {label}
              </Link>
            ))}
          </div>

          <button aria-label="Menu" className="mr-1 p-2" onBlur={() => (setMenuOpen(false))} onClick={() => (setMenuOpen(true))}>
            <div className="h-1 w-7 bg-white rounded mb-1"></div>
            <div className="h-1 w-7 bg-white rounded mb-1"></div>
            <div className="h-1 w-7 bg-white rounded"></div>
          </button>
        </div>

        <Link
          aria-label="Elasticvue on GitHub"
          className="github-corner hidden lg:inline-block"
          href="https://github.com/cars10/elasticvue"
          rel="noopener"
          target="_blank"
          title="Elasticvue on GitHub"
          tabIndex={-1}
          prefetch={false}
        >
          <OctoCat />
        </Link>
      </header>
    </>
  )
}
