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
      <div className="px-4 py-10 mt-10 lg:py-60 lg:mt-30 gradient">
        <div className="lg:w-1/2 mx-auto pb-8">
          <h1 className="text-3xl mb-10 text-center lg:text-5xl lg:mb-20">Built for developers.</h1>
          <p className="text-justify mb-4 text-xl mx-auto lg:text-center text-neutral-300 lg:text-2xl lg:w-3/4">
            Elasticvue helps streamline your daily tasks. Effortlessly manage indices, inspect documents, and update data whenever needed.
          </p>

          <Carousel images={images} />
        </div>
      </div>
    </>
  )
}
