'use client'

import Carousel from '@/components/shared/Carousel/Carousel'
import IndicesImage from '@/images/pages/home/indices.webp'
import SearchImage from '@/images/pages/home/search.webp'
import DocumentImage from '@/images/pages/home/document.webp'

export default function ForDevelopers() {
  const images = [
    { src: IndicesImage, alt: 'Indices' },
    { src: SearchImage, alt: 'Search' },
    { src: DocumentImage, alt: 'Document' }
  ]
  return (
    <>
      <div className="w-1/2 mx-auto my-60">
        <h1 className="text-center text-5xl mb-20">Built for developers.</h1>
        <p className="w-3/4 mx-auto text-center text-2xl text-neutral-300">
          Elasticvue helps streamline your daily tasks. Effortlessly manage indices, inspect documents, and update data whenever needed.
        </p>

        <Carousel images={images} />
      </div>
    </>
  )
}
