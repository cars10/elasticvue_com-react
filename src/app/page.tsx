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
      </div>
    </>
  )
}
