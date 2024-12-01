import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ButtonWrapper from './ButtonWrapper'

type Props = {
  links: { href: string, text: string }[]
  title: string,
  image: string,
  full?: boolean
  center?: boolean
}

export default function DropdownButton({ full, center, links, title, image }: Props) {
  const [open, setOpen] = useState(false)
  const toggle = () => (setOpen(!open))
  const dropdownRef = useRef<React.ReactElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !(dropdownRef.current as unknown as HTMLElement).contains(event.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  return (
    <ButtonWrapper full={full} wrapperRef={dropdownRef}>
      <>
        <button
          onClick={toggle}
          className={`rounded-t ${!open ? 'rounded-b' : ''} ${full ? 'w-full' : ''} ${center ? 'justify-center' : ''} bg-primary px-3 py-2 text-white shadow hover:bg-primary-light dark:bg-primary-intense h-10 flex items-center`}
          role="button"
          rel="noopener"
        >
          <Image
            src={image}
            alt="Logo"
            width="14"
            className="mb-1 mr-2 inline-block"
          />
          {title} <span className="text-sm ml-1">{open ? <>&#9650;</> : <>&#9660;</>}</span>
        </button>
        {open && (
          <div className="relative z-10">
            <div className="absolute top-0 rounded-b dark:bg-primary-intense bg-primary w-full flex flex-col" onClick={toggle}>
              {links.map(({ text, href }) => (
                <a href={href} key={href} className="px-4 py-3 border-t-[1px] border-primary hover:bg-primary-light text-white">{text}</a>
              ))}
            </div>
          </div>
        )}
      </>
    </ButtonWrapper>
  )
}
