'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/images/logo/white_104.webp'
import externalLinkSvg from '@/images/icons/external.svg'
import OctoCat from '@/components/Octocat/Octocat'

const links = [
  { label: 'home', attributes: { href: '/' } },
  { label: 'usage', attributes: { href: '/usage' } },
  { label: 'features', attributes: { href: '/features' } },
  { label: 'code', attributes: { href: 'https://github.com/cars10/elasticvue', rel: 'noopened', target: '_blank', prefetch: false }, external: true }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <>
      <header className="h-24 text-white py-3">
        <div className="w-[70%] h-full mx-auto flex flex-1 flex-row justify-between">
          <div className="h-100 flex flex-1 items-center">
            <Link href="/" className="mr-3">
              <Image alt="Elasticvue logo" width={52} src={Logo} priority />
            </Link>
            <Link href="/" style={{ fontSize: '36px' }} className="text-white visited:text-white">
              <span className="linkUnderlineHover">elasticvue</span>
            </Link>
          </div>

          <div className="flex py-3">
            {links.map(({ label, attributes, external }, index) => (
              <Link
                key={index}
                className={`ml-10 px-3 py-1 inline-block h-8 text-xl text-white visited:text-white leading-none linkUnderlineHover ${pathname === attributes.href ? 'active' : ''}`}
                {...attributes}
              >
                {external && <Image src={externalLinkSvg} alt=">" className="inline-block mr-2" width="14" />}

                {label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          aria-label="Elasticvue on GitHub"
          className="github-corner"
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
