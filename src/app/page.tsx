import Availability from '@/components/pages/home/Availability'
import ForDevelopers from '@/components/pages/home/ForDevelopers'
import Hero from '@/components/pages/home/Hero'
import Intro from '@/components/pages/home/Intro'


export default function Home() {

  return (
    <>
      <div>
        <Intro />
        <Hero />
        <ForDevelopers />
        <Availability />

        <div className="px-4 py-10 lg:py-60 gradient">
          <div className="lg:w-1/2 mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl mb-12">No need to be an elasticsearch expert.</h1>
            <p className="text-justify mb-4 text-xl mx-auto lg:text-center text-neutral-300 lg:text-2xl lg:w-3/4">
              Elasticvue makes elasticsearch simple. Whether you're a beginner or an experienced developer, it helps you find solutions with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
