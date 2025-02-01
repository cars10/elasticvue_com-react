import Hero from '@/components/pages/home/Hero'
import Intro from '@/components/pages/home/Intro'


export default function Home() {

  return (
    <>
      <div>
        <Intro />
        <Hero />

        <div className="z-10">
          <div className="max-w-[50%] mx-auto text-center mb-5">
            <a href="#download" className="hover:bg-white hover:text-primary rounded-xl pl-4 pr-2 py-2">Get elasticvue <span className="text-4xl ">&#8964;</span></a>
          </div>
        </div>
      </div>
    </>
  )
}
