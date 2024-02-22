'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  title: string
  image: { src: any; priority?: boolean }
  reverse?: boolean
  children: any
}

export default function Showcase({
  title,
  image: { src, priority },
  reverse,
  children
}: Props) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)
  const keyListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
  }

  useEffect(() => {
    if (open) window.addEventListener('keydown', keyListener)
    return () => window.removeEventListener('keydown', keyListener)
  }, [open])

  return (
    <>
      <section
        className={`${reverse ? 'bg-primary text-white' : 'bg-white'} lg:mb-none py-4 lg:py-28`}
      >
        <div className="mx-auto w-[92%] max-w-[1344px] lg:w-[70%]">
          <div
            className={`flex w-full flex-col gap-10 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <div className="w-full lg:w-1/2">
              <h2 className="my-8 text-3xl font-bold">{title}</h2>

              {children}
            </div>

            <div
              className="w-full cursor-pointer lg:w-1/2"
              onClickCapture={toggleOpen}
            >
              <Image
                src={src}
                alt={title}
                priority={priority}
                sizes="(min-width: 1344px) 40vw, 100vw"
                className="rounded shadow-main hover:shadow-main-ele"
              />
            </div>

            <div
              className={`${open ? 'flex' : 'hidden'} fixed bottom-0 left-0 right-0 top-0 h-full cursor-pointer items-center bg-black bg-opacity-75 p-4 lg:p-20`}
              onClickCapture={toggleOpen}
            >
              <Image
                src={src}
                alt={title}
                priority={priority}
                quality={100}
                className="mx-auto rounded shadow-main hover:shadow-main-ele"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
