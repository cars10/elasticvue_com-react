import Image from 'next/image'
import { useState } from 'react'

type Props = {
  links?: { href: string, text: string }[]
  title: string,
  image: string
}

export default function DropdownButton({ links, title, image }: Props) {
  const [open, setOpen] = useState(false)
  const toggle = () => (setOpen(!open))

  return (
    <>
      <div>
        <button
          onClick={toggle}
          className="mb-2 mt-3 mx-1 inline-block rounded bg-primary px-4 py-3 text-white shadow visited:text-white hover:bg-primary-light dark:bg-primary-intense"
          role="button"
          rel="noopener"
        >
          <Image
            src={image}
            alt="Logo"
            width="14"
            className="mb-1 mr-2 inline-block"
          />
          {title} <span className="text-sm">{open ? <>&#9650;</> : <>&#9660;</>}</span>
        </button>
        {open && (
          <div>
            hi
          </div>
        )}
      </div>
    </>
  )
}
