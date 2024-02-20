import Image from 'next/image'
import Diagonal from '@/images/diagonal.svg'
import Gallery from '@/components/pages/features/Gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elasticvue - Elasticsearch gui features',
  description:
    'Elasticvue features cluster management, document searching, a rest query interface and more.',
}

export default function Page() {
  return (
    <>
      <section className='lg:mb-none mb-4 py-4 lg:py-24'>
        <div className='mx-auto w-[92%] max-w-[1344px] text-white lg:w-[70%]'>
          <div className='text-center'>
            <h1 className='mb-8 text-4xl'>Elasticvue features</h1>
            <p>See elasticvue in action.</p>
          </div>
        </div>
      </section>

      <Image
        src={Diagonal}
        alt=''
        className='hidden h-12 w-full lg:block'
        priority
      />

      <Gallery />
    </>
  )
}
