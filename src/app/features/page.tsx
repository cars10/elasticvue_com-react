import Gallery from '@/components/pages/features/Gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elasticvue - Elasticsearch gui features',
  description:
    'Elasticvue features cluster management, document searching, a rest query interface and more.'
}

export default function Page() {
  return (
    <>
      <section className="lg:mb-none mb-4 py-4 lg:py-24">
        <div className="mx-auto w-[92%] max-w-[1344px] text-white lg:w-[70%]">
          <div className="text-center">
            <h1 className="mb-8 text-4xl">Elasticvue features</h1>
            <p>See elasticvue in action.</p>
          </div>
        </div>
      </section>

      <svg preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="hidden h-12 w-full lg:block">
        <polygon fillOpacity="0" points="0,0 100,0 0,100" />
        <polygon points="0,100 100,100 100,0" className="fill-white dark:fill-dark" />
      </svg>

      <Gallery />
    </>
  )
}
