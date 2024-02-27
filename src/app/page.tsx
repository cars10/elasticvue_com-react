import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import MainImage from '../images/main.webp'
import Diagonal from '@/images/diagonal.svg'

const DesktopApp = dynamic(
  () => import('@/components/pages/home/DesktopApp')
)
const BrowserExtensions = dynamic(
  () => import('@/components/pages/home/BrowserExtensions')
)
const WebDockerManual = dynamic(
  () => import('@/components/pages/home/WebDockerManual')
)

export default function Home() {
  return (
    <>
      <section className="lg:mb-none mb-4 py-4 lg:py-32">
        <div className="mx-auto w-[92%] max-w-[1344px] text-white lg:w-[70%]">
          <div className="flex flex-1 flex-col lg:flex-row">
            <div className="lg:mb-none mb-8 w-full lg:w-1/2">
              <h1 className="mb-8 border-l-[3px] px-2 py-2 text-lg leading-tight lg:mb-16 lg:mt-4 lg:border-l-4 lg:px-5 lg:py-3 lg:text-3xl">
                <strong>Elasticvue</strong> is a free and open-source
                elasticsearch gui
              </h1>

              <h2 className="mb-4 text-2xl font-bold">Features</h2>
              <ul className="list-disc pl-5">
                <li className="my-2">Cluster overview</li>
                <li className="my-2">Index management</li>
                <li className="my-2">Search interface</li>
                <li className="my-2">REST Query interface</li>
                <li className="my-2">Snapshot management</li>
                <li className="my-2">
                  ...{' '}
                  <Link href="/features" className="text-white underline">
                    and more
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                alt="Screenshot"
                className="rounded shadow-md"
                src={MainImage}
                priority
                sizes="(min-width: 1344px) 40vw, 100vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      <Image src={Diagonal} alt="" className="hidden h-12 w-full lg:block" />

      <section className="bg-white py-8 lg:py-32">
        <div className="mx-auto w-[95%] max-w-[1344px] lg:w-[70%]">
          <h2 className="mb-6 text-center text-xl lg:text-3xl lg:mb-16">
            Get elasticvue desktop ...
          </h2>

          <DesktopApp />

          <h2 className="my-6 text-center text-xl lg:text-3xl lg:my-16">
            ... or the elasticvue browser extension
          </h2>

          <BrowserExtensions />

          <div className="my-8 lg:text-xl lg:my-16 text-center">
            <p>
              If you don&apos;t use the desktop app or a browser extension then you have to
              configure CORS to grant the browser access to your cluster.
              <br />
              Elasticvue will guide you on how to configure your cluster when
              you use it for the first time.
            </p>
          </div>

          <WebDockerManual />

          <p className="text-center">
            Checkout{' '}
            <Link
              href="/usage"
              className="text-primary underline visited:text-primary"
            >
              usage
            </Link>{' '}
            for details on how to configure your cluster to use elasticvue.
          </p>
        </div>
      </section>
    </>
  )
}
