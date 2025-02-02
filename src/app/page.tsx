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

        <div className="py-60 gradient">
          <div className="w-1/2 mx-auto text-center">
            <h1 className="text-5xl mb-12">No need to be an elasticsearch expert.</h1>
            <p className="w-3/4 mx-auto text-2xl text-neutral-300">
              Elasticvue makes elasticsearch simple. Whether you're a beginner or an experienced developer, it helps you find solutions with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
