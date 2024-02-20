import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '@/images/github/github_logo.webp'

export default function Footer() {
  const currentYear = new Date().getFullYear().toString()

  return (
    <>
      <footer className='border-t-2 border-gray-200 bg-white py-8'>
        <div className='mx-auto w-[95%] max-w-[1344px] lg:w-[70%]'>
          <div className='flex flex-1 flex-row justify-between'>
            <div className='px-2'>
              <p className='mb-2'>
                <Link
                  prefetch={false}
                  href='/imprint'
                  rel='nofollow'
                  className='text-primary underline visited:text-primary'
                >
                  Imprint
                </Link>
              </p>
              <p>
                <Link
                  prefetch={false}
                  href='/privacy'
                  rel='nofollow'
                  className='text-primary underline visited:text-primary'
                >
                  Privacy policy
                </Link>
              </p>
            </div>
            <div className='px-2'>
              <div className='text-center'>
                <p className=''>&copy; {currentYear}</p>
                <p>Carsten K&ouml;nig</p>
              </div>
            </div>
            <div className='px-2'>
              <div className=''>
                <a
                  href='https://github.com/cars10/elasticvue'
                  rel='noopener'
                  target='_blank'
                >
                  <Image alt='Github' src={GithubLogo} width='100' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
