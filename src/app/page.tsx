import Button from '@/components/shared/Button/Button'
import HomeImage from '@/images/home.png'
import Image from 'next/image'

export default function Home() {
  const titles = [
    'The elasticsearch GUI that you\'ve been waiting for.',
    'The elasticsearch GUI that you deserve.',
    'The smartest way to work with elasticsearch.',
    'The best way to manage your cluster.'
  ]
  const title = titles[Math.floor(Math.random() * titles.length)]

  const wordlist = ['fastest', 'efficient', 'opensource', 'powerful', 'smartest', 'free', 'secure', 'prettiest']

  return (
    <>
      <div className="text-white h-dvh flex flex-col justify-between">
        <div className="w-[50%] mx-auto flex flex-col justify-between">
          <div className="pt-40 mb-16 w-4/5">
            <h1 className="text-6xl font-bold mb-12 font-bold">
              <span className="fade" style={{ animationDelay: 0.1 + 's' }}>Elasticvue.</span>
            </h1>
            <h1 className="text-5xl my-8 leading-18">
              {title.split(' ').map((word, i) => (
                <span key={i} className="fade" style={{ animationDelay: (i * 0.1) + 0.75 + 's' }}>{word}&nbsp;</span>
              ))}
            </h1>

            <Button className="bg-white text-black inline-flex rounded-xl hover:bg-gray-300" link={{ text: "Get started", href: "/" }} />
          </div>
        </div>

        <div className="imageWrapper">
          <div></div>
          <div className="imageBorder">
            <Image
              src={HomeImage}
              alt="Home"
              priority
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="z-10">
          <div className="max-w-[50%] mx-auto text-center mb-5">
            <a href="#download" className="hover:bg-white hover:text-primary rounded-xl pl-4 pr-2 py-2">Get elasticvue <span className="text-4xl ">&#8964;</span></a>
          </div>
        </div>
      </div>
    </>
  )
}
