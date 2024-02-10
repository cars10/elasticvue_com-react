import Image from 'next/image'
import Link from 'next/link'

import MainImage from '../images/images/main.webp'
import Diagonal from '@/images/diagonal.svg'

import Card from '@/components/Card'

import ChromeIcon from '@/images/icons/chrome.svg'
import EdgeIcon from '@/images/icons/edge.svg'
import FirefoxIcon from '@/images/icons/firefox.svg'
import DockerIcon from '@/images/icons/docker.svg'
import GithubIcon from '@/images/icons/github.svg'
import Code from '@/components/Code/Code'

export default function Home() {
  return (
    <>
      <section className="py-4 lg:py-32 mb-4 lg:mb-none">
        <div className="lg:w-[70%] w-[92%] max-w-[1344px] mx-auto text-white">
          <div className="flex flex-1 flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-none">
              <h1 className="border-l-[3px] lg:border-l-4 px-2 lg:px-5 py-2 lg:py-3 mb-6 lg:mb-16 lg:mt-8 text-lg lg:text-3xl leading-tight">
                <strong>Elasticvue</strong> is a free and open-source
                elasticsearch gui for the browser.
              </h1>

              <h2 className="mb-4 text-2xl font-bold">Features</h2>
              <ul className="list-disc pl-5">
                <li className="my-2">Cluster overview</li>
                <li className="my-2">Index management</li>
                <li className="my-2">Search interface</li>
                <li className="my-2">REST Query interface</li>
                <li className="my-2">Snapshot management</li>
                <li className="my-2">
                  ...
                  <Link href="/features" className="text-white underline">
                    {' '}
                    and more
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <Image alt="Screenshot" className="rounded shadow-md" src={MainImage} priority />
            </div>
          </div>
        </div>
      </section>

      <Image src={Diagonal} alt="" className="w-full hidden lg:block h-12" />

      <section className="bg-white py-8 lg:py-32">
        <div className="lg:w-[70%] w-[95%] max-w-[1344px] mx-auto">
          <h2 className="text-3xl text-center mb-6 lg:mb-16 font-bold">Get elasticvue</h2>

          <div className="w-full lg:w-1/2 mx-auto">
            <Card title="Desktop app" link={{ href: 'https://github.com/cars10/elasticvue/releases', text: 'Elasticvue desktop' }} badge>
              <p className="mb-1">
                Elasticvue desktop is available for linux, mac and windows. <br />Download the latest release:
              </p>
            </Card>
          </div>

          <div className="text-center my-8 lg:my-16">
            <h4 className="text-xl">Browser extensions</h4>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
              <Card
                icon={ChromeIcon}
                title="Chrome extension"
                link={{ href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa', text: 'Chrome webstore' }}
                rating={{ amount: 55, stars: 5 }}
              >
                <p className="mb-1">
                  Elasticvue is available in the chrome web store:
                </p>
              </Card>
            </div>

            <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
              <Card
                icon={EdgeIcon}
                title="Edge extension"
                link={{ href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo', text: 'Microsoft webstore' }}
                rating={{ amount: 29, stars: 4.5 }}
              >
                <p className="mb-1">
                  Elasticvue is available in the microsoft store:
                </p>
              </Card>
            </div>

            <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
              <Card
                icon={FirefoxIcon}
                title="Firefox addon"
                link={{ href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/', text: 'Firefox addon' }}
                rating={{ amount: 19, stars: 5 }}
              >
                <p className="mb-1">
                  Elasticvue is available in the chrome web store:
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center my-8 lg:my-16">
            <p>
              If you don&apos;t use a browser extension then you have to configure CORS to grant the browser access to your
              cluster.
              <br />Elasticvue will guide you on how to configure your cluster when you use it for the first time.
            </p>
          </div>

          <div className="mb-8 lg:mb-16 flex flex-col lg:flex-row">
            <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
              <Card title="Web app" link={{ href: 'https://app.elasticvue.com', text: 'app.elasticvue.com' }}>
                <p className="mb-1">
                  You can use the hosted version of elasticvue to avoid installing anything.
                </p>
              </Card>
            </div>

            <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
              <Card icon={DockerIcon} title="Docker image" downloads="350k+">
                <p className="mb-3">
                  Download and run <a href="https://hub.docker.com/r/cars10/elasticvue" rel="noopener" target="_blank" className="text-primary underline visited:text-primary">the image</a>
                </p>
                <div className="overflow-x-auto inline-block mb-3">
                  <Code>docker run -p 8080:8080 --name elasticvue -d cars10/elasticvue</Code>
                </div>
                <p>
                  Then open <a href="http://localhost:8080" rel="noopener" target="_blank" className="text-primary underline visited:text-primary">http://localhost:8080</a>
                </p>
              </Card>
            </div>

            <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
              <Card title="Building manually" icon={GithubIcon}>
                <p className="mb-1">
                  Check the <a href="https://github.com/cars10/elasticvue" rel="noopener" target="_blank" className="text-primary underline visited:text-primary">readme</a> for instructions on how to manually build elasticvue.
                </p>
              </Card>
            </div>
          </div>

          <p className="text-center">
            Checkout <Link href="/usage" className="text-primary underline visited:text-primary">usage</Link> for details on how to configure your cluster to use elasticvue.
          </p>
        </div>
      </section>
    </>
  )
}
