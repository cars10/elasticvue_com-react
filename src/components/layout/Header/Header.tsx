'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/images/logo/white_104.webp'
import externalLinkSvg from '@/images/icons/external.svg'
import OctoCat from '@/components/layout/Header/Octocat/Octocat'
import { useCallback, useState } from 'react'

const links = [
  { label: 'home', attributes: { href: '/' } },
  { label: 'usage', attributes: { href: '/usage' } },
  { label: 'features', attributes: { href: '/features' } },
  {
    label: 'code',
    attributes: {
      href: 'https://github.com/cars10/elasticvue',
      rel: 'noopened',
      target: '_blank',
      prefetch: false,
    },
    external: true,
  },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navClasses = useCallback(() => {
    if (!menuOpen) return 'py-3 mr-14 lg:mr-0 hidden lg:flex'
    return 'absolute top-16 left-0 flex flex-col bg-primary w-full py-4 gap-4 items-start shadow-main'
  }, [menuOpen])

  return (
    <>
      <header className='h-16 py-3 text-white lg:h-24'>
        <div className='mx-auto flex h-full w-[92%] max-w-[1344px] flex-1 flex-row justify-between lg:w-[70%]'>
          <div className='h-100 flex flex-1 items-center'>
            <Link href='/' className='mr-3'>
              <Image
                alt='Elasticvue logo'
                width={52}
                src={Logo}
                priority
                className='w-9 lg:w-[52px]'
              />
            </Link>
            <Link
              href='/'
              className='mt-1 text-2xl leading-none text-white visited:text-white lg:mt-0 lg:text-3xl'
            >
              <span className='linkUnderlineHover'>elasticvue</span>
            </Link>
          </div>

          <div className={navClasses()} onClick={() => setMenuOpen(false)}>
            {links.map(({ label, attributes, external }, index) => (
              <Link
                key={index}
                className={`linkUnderlineHover ml-4 inline-block h-8 px-3 py-1 text-xl leading-none text-white visited:text-white lg:ml-10 ${pathname === attributes.href ? 'active' : ''}`}
                {...attributes}
              >
                {external && (
                  <Image
                    src={externalLinkSvg}
                    alt='>'
                    className='mr-2 inline-block'
                    width='14'
                  />
                )}

                {label}
              </Link>
            ))}
          </div>

          <button
            aria-label='Menu'
            className='mr-1 p-2 lg:hidden'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className='mb-1 h-1 w-7 rounded bg-white'></div>
            <div className='mb-1 h-1 w-7 rounded bg-white'></div>
            <div className='h-1 w-7 rounded bg-white'></div>
          </button>
        </div>

        <Link
          aria-label='Elasticvue on GitHub'
          className='github-corner hidden lg:inline-block'
          href='https://github.com/cars10/elasticvue'
          rel='noopener'
          target='_blank'
          title='Elasticvue on GitHub'
          tabIndex={-1}
          prefetch={false}
        >
          <OctoCat />
        </Link>
      </header>
    </>
  )
}
