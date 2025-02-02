import { useEffect, useRef } from 'react'
import Flickity from 'flickity'
import 'flickity/dist/flickity.min.css'
import Image, { ImageProps } from 'next/image'

type CarouselProps = {
  images: ImageProps[]
}

export default function Carousel({ images }: CarouselProps) {
  const galleryRef = useRef(null)

  useEffect(() => {
    if (!galleryRef.current) return

    new Flickity(galleryRef.current, { wrapAround: true, lazyLoad: true })
  }, [galleryRef])

  return (
    <>
      <div ref={galleryRef}>
        {images.map((image, index) => (
          <Image key={index} {...image} className="my-20 mx-10 rounded-xl border-1 border-[#454545]" />
        ))}
      </div>
    </>
  )
}
