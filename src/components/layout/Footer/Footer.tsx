import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '@/images/github/github_logo.webp'


export default function Footer() {
  const currentYear = new Date().getFullYear().toString()

  return (
    <>
      <footer className="bg-white py-8 border-t-2 border-gray-200">
        <div className="lg:w-[70%] w-[95%] max-w-[1344px] mx-auto">
          <div className="flex flex-row flex-1 justify-between">
            <div className="px-2">
              <p className="mb-2">
                <Link prefetch={false} href="/imprint" rel="nofollow" className="text-primary underline visited:text-primary">Imprint</Link>
              </p>
              <p>
                <Link prefetch={false} href="/privacy" rel="nofollow" className="text-primary underline visited:text-primary">Privacy policy</Link>
              </p>
            </div>
            <div className="px-2">
              <div className="text-center">
                <p className="">&copy; {currentYear}</p>
                <p>Carsten K&ouml;nig</p>
              </div>
            </div>
            <div className="px-2">
              <div className="">
                <a href="https://github.com/cars10/elasticvue" rel="noopener" target="_blank">
                  <Image alt="Github" src={GithubLogo} width="100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}