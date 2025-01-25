import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import Collapse from '@/components/shared/Collapse/Collapse'
import pageImg from '../images/scrn2.png'

import { WordCarousel } from './wordCarousel'

const DesktopApp = dynamic(() => import('@/components/pages/home/DesktopApp'))
const BrowserExtensions = dynamic(() => import('@/components/pages/home/BrowserExtensions'))
const WebDockerManual = dynamic(() => import('@/components/pages/home/WebDockerManual'))

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
      <div className="text-white h-dvh flex flex-col justify-between" style={{ background: 'linear-gradient(0deg,#161e36,#25315a 50%,#34477f)' }}>
        <div className="max-w-[50%] mx-auto text-center flex flex-col justify-between">
          <div className="pt-40 mb-16">
            <h1 className="text-6xl font-bold my-8">elasticvue</h1>
            <h2 className="justify-center flex my-16">the <WordCarousel wordlist={['fastest', 'efficient', 'opensource', 'powerful', 'smartest', 'free', 'secure', 'prettiest']} /> gui for elasticsearch and opensearch</h2>
          </div>
        </div>

        <div className="z-10">
          <div className="max-w-[50%] mx-auto text-center mb-5">
            <a href="#download" className="hover:bg-white hover:text-primary rounded-xl pl-4 pr-2 py-2">Download <span className="text-4xl ">&#8964;</span></a>
          </div>

          <Image
            src={pageImg}
            alt="main"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, (max-width: 1920px) 75vw, 100vw"
            className="w-1/2 mx-auto"
          />
        </div>

        <div style={{ position: 'absolute', top: '15%', left: '5%', transform: 'rotate(-8deg)', fontSize: '2.4em', opacity: '.04', userSelect: 'none', lineHeight: '1.3' }}>
          <pre>
            <code>
              {
                JSON.stringify({
                  'name': 'es-8-node-1',
                  'cluster_name': 'es-8',
                  'version': {
                    'number': '8.14.3',
                    'build_flavor': 'default',
                    'build_type': 'docker',
                    'build_hash': 'd55f984299e0e88dee72ebd8255f7ff130859ad0',
                    'build_date': '2024-07-07T22:04:49.882652950Z',
                    'build_snapshot': false,
                    'lucene_version': '9.10.0',
                    'minimum_wire_compatibility_version': '7.17.0',
                    'minimum_index_compatibility_version': '7.0.0'
                  },
                  'cluster_uuid': 'VEorXXBaRjO_O56q8VnvxQ',
                  'tagline': 'You Know, for Search'
                }, null, '\t')
              }
            </code>
          </pre>
        </div>
      </div>

      {/* 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" style={{ marginBottom: '-1px' }}>
        <path className="fill-white dark:fill-dark" fillOpacity="1" d="M0,100L60,106.7C120,113,240,127,360,140C480,153,600,167,720,150C840,133,960,87,1080,73.3C1200,60,1320,80,1380,90L1440,100L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"></path>
      </svg> */}

      <section className="bg-white py-8 lg:py-32 dark:bg-[#13161f] dark:text-white shadow-lg" id="download">
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
        <div className="mx-auto w-[95%] max-w-[1200px] lg:w-[70%]">
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
