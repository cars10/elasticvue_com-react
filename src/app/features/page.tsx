
import Image from 'next/image'
import Diagonal from '@/images/diagonal.svg'
import Gallery from '@/components/pages/features/Gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elasticvue - Elasticsearch gui features',
  description: 'Elasticvue features cluster management, document searching, a rest query interface and more.'
}

export default function Page() {
  return (
    <>
      <section className="py-4 lg:py-24 mb-4 lg:mb-none">
        <div className="lg:w-[70%] w-[92%] max-w-[1344px] mx-auto text-white">
          <div className="text-center">
            <h1 className="text-4xl mb-8">Elasticvue features</h1>
            <p>See elasticvue in action.</p>
          </div>

        </div>
      </section>

      <Image src={Diagonal} alt="" className="w-full hidden lg:block h-12" priority />

      <Gallery />
    </>
  )
}
