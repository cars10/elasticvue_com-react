'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/images/logo/blue_96.png'
import OctoCat from '@/components/layout/Header/Octocat/Octocat'
import { useState } from 'react'

const links = [
  { label: 'home', attributes: { href: '/' } },
  { label: 'usage', attributes: { href: '/usage' } },
  { label: 'features', attributes: { href: '/features' } },
  {
    label: 'code',
    classNames: 'bg-white text-primary shadow-xs',
    attributes: {
      href: 'https://github.com/cars10/elasticvue',
      rel: 'noopened',
      target: '_blank',
      prefetch: false
    }
  }
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="py-4 text-white flex absolute w-full top-0">
        <div className="mx-auto flex h-full max-w-[92%] lg:max-w-[50%] flex-1 flex-row justify-between py-4">
          <div className="h-100 flex flex-1 items-center">
            <Link href="/" className="mr-3">
              <Image
                alt="Elasticvue logo"
                width={52}
                src={Logo}
                priority
                className="w-9 lg:w-[52px] bg-white shadow-primary shadow-xs hover:shadow-xl rounded-xl p-1"
              />
            </Link>
          </div>

          <div
            className={`${menuOpen ? 'absolute left-0 top-16 flex w-full flex-col items-start gap-4 bg-primary py-4 shadow-main' : 'mr-14 hidden py-3 lg:mr-0 lg:flex'}`}
            onClick={() => setMenuOpen(false)}
          >
            {links.map(({ label, classNames, attributes }, index) => (
              <Link
                key={index}
                className={`ml-4 inline-block h-8 px-3 pb-1 pt-1.5 text-lg leading-none lg:ml-10 hover:bg-white hover:text-primary hover:shadow-xl rounded-xl ${pathname === attributes.href ? 'active' : ''} ${classNames || ''}`}
                {...attributes}
              >{label}</Link>
            ))}
          </div>

          <button
            aria-label="Menu"
            className="mr-1 p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="mb-1 h-1 w-7 rounded-sm bg-white"></div>
            <div className="mb-1 h-1 w-7 rounded-sm bg-white"></div>
            <div className="h-1 w-7 rounded-sm bg-white"></div>
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
