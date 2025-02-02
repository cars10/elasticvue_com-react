'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/images/logo/blue_96.png'
import OctoCat from '@/components/layout/Header/Octocat/Octocat'
import { useState } from 'react'
import Button, { ButtonColor } from '@/components/shared/Button/Button'

const links = [
  { label: 'home', href: '/' },
  { label: 'usage', href: '/usage' },
  { label: 'features', href: '/features' },
  {
    label: 'code',
    color: 'white' as ButtonColor,
    href: 'https://github.com/cars10/elasticvue',
    rel: 'noopened',
    target: '_blank',
    prefetch: false
  }
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="text-white flex w-full top-0 border-b-1 border-[#454545]">
        <div className="mx-auto flex h-full max-w-[92%] lg:max-w-[50%] flex-1 flex-row justify-between py-4">
          <div className="flex flex-1 items-center">
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
            className={`${menuOpen ? 'absolute z-2 left-0 top-18 bottom-0 flex w-full flex-col items-start gap-4 bg-primary py-4 shadow-main' : 'mr-14 hidden py-3 lg:mr-0 lg:flex'}`}
            onClick={() => setMenuOpen(false)}
          >
            {links.map((attributes, index) => (
              <Button key={index} {...attributes} className="ml-4" dense />
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
          className="hidden lg:inline-block"
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
