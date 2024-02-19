'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = { title: string, image: { src: any, priority?: boolean }, reverse?: boolean, children: any }

export default function Showcase({ title, image: { src, priority }, reverse, children }: Props) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => (setOpen(!open))
  const keyListener = (e: KeyboardEvent) => {
    if (e.keyCode === 27) setOpen(false)
  }

  useEffect(() => {
    if (open) window.addEventListener('keydown', keyListener)
    return () => window.removeEventListener('keydown', keyListener)
  }, [open])

  return (
    <>
      <section className={`${reverse ? 'bg-primary text-white' : 'bg-white'} py-4 lg:py-28 lg:mb-none`}>
        <div className="lg:w-[70%] w-[92%] max-w-[1344px] mx-auto">
          <div className={`flex flex-col w-full gap-10 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold my-8">{title}</h2>

              {children}
            </div>

            <div className="w-full lg:w-1/2 cursor-pointer" onClickCapture={toggleOpen}>
              <Image
                src={src}
                alt={title}
                priority={priority}
                sizes='(min-width: 1344px) 40vw, 100vw'
                className="shadow-main hover:shadow-main-ele rounded" />
            </div>

            <div
              className={`${open ? 'flex' : 'hidden'} items-center fixed bg-black top-0 left-0 bottom-0 right-0 h-full p-4 lg:p-20 bg-opacity-75 cursor-pointer`}
              onClickCapture={toggleOpen}>
              <Image
                src={src}
                alt={title}
                priority={priority}
                quality={100}
                className="mx-auto shadow-main hover:shadow-main-ele rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
