import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import MainImage from '../images/main.webp'
import Collapse from '@/components/Collapse/Collapse'

const DesktopApp = dynamic(
  () => import('@/components/pages/Home/DesktopApp')
)
const BrowserExtensions = dynamic(
  () => import('@/components/pages/Home/BrowserExtensions')
)
const WebDockerManual = dynamic(
  () => import('@/components/pages/Home/WebDockerManual')
)

const comparison = [
  { name: 'Elasticvue desktop', autoUpdate: '✓', untrustedSsl: '✓', noConfigRequired: 'No' },
  { name: 'Browser extension', autoUpdate: '✓', untrustedSsl: 'Depends on browsers acceptance', noConfigRequired: 'No' },
  { name: 'Web app', autoUpdate: '✓', untrustedSsl: 'Depends on browsers acceptance', noConfigRequired: 'CORS setup needed' },
  { name: 'Docker image', autoUpdate: 'X', untrustedSsl: 'Depends on browsers acceptance', noConfigRequired: 'CORS setup needed' },
  { name: 'Self-hosted', autoUpdate: 'X', untrustedSsl: 'Depends on browsers acceptance', noConfigRequired: 'CORS setup needed' },
]

export default function Home() {
  return (
    <>
      <section className="lg:mb-none mb-4 py-4 lg:py-32">
        <div className="mx-auto w-[92%] max-w-[1640px] text-white lg:w-[80%]">
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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" style={{marginBottom: '-1px'}}>
        <path className="fill-white dark:fill-dark" fillOpacity="1" d="M0,100L60,106.7C120,113,240,127,360,140C480,153,600,167,720,150C840,133,960,87,1080,73.3C1200,60,1320,80,1380,90L1440,100L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"></path>
      </svg>

      <section className="bg-white py-8 lg:py-32 dark:bg-dark dark:text-white">
        <div className="mx-auto w-[95%] max-w-[1640px] lg:w-[80%]">
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
              className="text-primary underline visited:text-primary dark:text-white dark:visited:text-white"
            >
              usage
            </Link>{' '}
            for details on how to configure your cluster to use elasticvue.
          </p>
        </div>
      </section>

      <section className="bg-white pb-8 lg:pb-32 dark:bg-dark dark:text-white">
        <div className="mx-auto w-[95%] max-w-[1344px] lg:w-[70%]">
          <Collapse name="compare" title="Unsure? Compare variants">
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="px-5 pb-2 pt-5 border-r-2 border-r-dark"></th>
                  <th className="px-5 pb-2 pt-5 whitespace-nowrap">Auto update</th>
                  <th className="px-5 pb-2 pt-5 whitespace-nowrap">Accepts self-signed SSL</th>
                  <th className="px-5 pb-2 pt-5 whitespace-nowrap">Cluster configuration required</th>
                </tr>
                <tr className="border-b-2 border-b-dark italic text-sm">
                  <td className="border-r-2 border-r-dark"></td>
                  <td className="px-5 pt-2 pb-5">
                    Some versions of elasticvue will automatically update themselves.
                  </td>
                  <td className="px-5 pt-2 pb-5">
                    You can always connect to SSL protected clusters. <br />If you use a self-signed certificate you have to make sure that your browser accepts it.
                  </td>
                  <td className="px-5 pt-2 pb-5">
                    For some variants you have to configure your cluster to enable CORS.
                  </td>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ name, autoUpdate, untrustedSsl, noConfigRequired }) => (
                  <tr key={name} className="hover:bg-dark">
                    <th className="p-5 border-r-2 border-r-dark">{name}</th>
                    <td className="p-5">{autoUpdate}</td>
                    <td className="p-5">{untrustedSsl}</td>
                    <td className="p-5">{noConfigRequired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Collapse>
        </div>
      </section>
    </>
  )
}
