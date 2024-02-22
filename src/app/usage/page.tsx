import Image from 'next/image'
import Diagonal from '@/images/diagonal.svg'
import Collapse from '@/components/Collapse/Collapse'
import Code from '@/components/Code/Code'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elasticvue - Elasticsearch gui usage',
  description:
    'Use elasticvue as desktop app, browser extension, docker container or self hosted.'
}

export default function Page() {
  return (
    <>
      <section className="lg:mb-none mb-4 py-4 lg:py-24">
        <div className="mx-auto w-[92%] max-w-[1344px] text-white lg:w-[70%]">
          <div className="text-center">
            <h1 className="mb-8 text-4xl">Elasticvue usage</h1>
            <p>
              Before using elasticvue you might have to enable CORS in your
              elasticsearch cluster.
            </p>
          </div>
        </div>
      </section>

      <Image src={Diagonal} alt="" className="hidden h-12 w-full lg:block" />

      <section className="lg:mb-none bg-white py-4 lg:py-32">
        <div className="mx-auto mb-20 w-[92%] max-w-[1344px] lg:w-[70%]">
          <h2 className="mb-4 text-3xl font-bold">Cluster configuration</h2>

          <div className="mb-8 text-justify leading-normal lg:text-left">
            You have to enable CORS if you use elasticvue via docker or the web
            app, otherwise the browser will reject all requests. <br />
            Edit your config file (usually{' '}
            <span className="py-05 rounded bg-gray-200 px-2 font-mono text-sm">
              elasticsearch.yml
            </span>
            ) and enable CORS based on how you run elasticvue:
          </div>

          <div className="mb-8">
            <Collapse name="web_app" title="Web app">
              <p className="mb-2">
                You have to enable CORS if you use elasticvue via{' '}
                <a
                  href="https://app.elasticvue.com"
                  rel="noopener"
                  target="_blank"
                  className="text-primary underline"
                >
                  app.elasticvue.com
                </a>
                .
              </p>
              <p className="mb-4">
                Add the following to your elasticsearch configuration:
              </p>
              <Code>
                <p>http.cors.enabled: true</p>
                <p>http.cors.allow-origin: /https:\/\/app.elasticvue.com/</p>
                <br />
                <p className="text-lime-400">
                  # and if your cluster is password protected you also have to
                  add:
                </p>
                http.cors.allow-headers:
                X-Requested-With,Content-Type,Content-Length,Authorization
              </Code>
            </Collapse>
          </div>

          <div className="mb-8">
            <Collapse name="docker" title="Docker">
              <p className="mb-2">
                You have to enable CORS if you use elasticvue via{' '}
                <a
                  href="https://hub.docker.com/r/cars10/elasticvue"
                  rel="noopener"
                  target="_blank"
                  className="text-primary underline"
                >
                  docker
                </a>
                .
              </p>
              <p className="mb-4">
                Add the following to your elasticsearch configuration:
              </p>
              <Code>
                <p>http.cors.enabled: true</p>
                <p>http.cors.allow-origin: &quot;http://localhost:8080&quot;</p>
                <br />
                <p className="text-lime-400">
                  # and if your cluster is password protected you also have to
                  add:
                </p>
                http.cors.allow-headers:
                X-Requested-With,Content-Type,Content-Length,Authorization
              </Code>
            </Collapse>
          </div>

          <div className="mb-8">
            <Collapse name="manually" title="Building manually">
              <p className="mb-2">
                You have to enable CORS if you manually built elasticvue. In
                this case you probably know what to do, simply add the origin of
                the host where elasticvue is running to your elasticsearch
                config.
              </p>
              <p className="mb-4">
                For example if it is running on{' '}
                <span className="py-05 rounded bg-gray-200 px-2 font-mono text-sm">
                  http://localhost:8080
                </span>
              </p>
              <Code>
                <p>http.cors.enabled: true</p>
                <p>http.cors.allow-origin: &quot;http://localhost:8080&quot;</p>
                <br />
                <p className="text-lime-400">
                  # and if your cluster is password protected you also have to
                  add:
                </p>
                http.cors.allow-headers:
                X-Requested-With,Content-Type,Content-Length,Authorization
              </Code>
            </Collapse>
          </div>

          <div>
            <p>
              Restart your cluster when you are done and you should be able to
              connect.
            </p>
          </div>
        </div>

        <div className="mx-auto mb-20 w-[92%] max-w-[1344px] lg:w-[70%]">
          <h2 className="mb-4 text-3xl font-bold">
            Running elasticsearch in docker
          </h2>

          <div className="mb-8 text-justify leading-normal lg:text-left">
            If your elasticsearch cluster is running inside docker then you
            probably do not use the
            <span className="py-05 rounded bg-gray-200 px-2 font-mono text-sm">
              elasticsearch.yml
            </span>{' '}
            config file.
            <br />
            In this case you can configure your cluster by passing the settings
            via environment variables, for example:
          </div>

          <Code>{`docker run -e "http.cors.enabled=true" \\
           -e "http.cors.allow-origin=http://localhost:8080" \\
           -e "discovery.type=single-node" \\
           -p 9200:9200 \\
           -p 9300:9300 \\
           docker.elastic.co/elasticsearch/elasticsearch:7.8.0`}</Code>
        </div>

        <div className="mx-auto w-[92%] max-w-[1344px] lg:w-[70%]">
          <h2 className="mb-4 text-3xl font-bold">Need help?</h2>

          <div className="leading-normal">
            Please{' '}
            <a
              href="https://github.com/cars10/elasticvue/issues/new/choose"
              className="text-primary underline"
              target="_blank"
              rel="noopener"
            >
              open an issue
            </a>{' '}
            on github if you need help connecting to your cluster.
          </div>
        </div>
      </section>
    </>
  )
}
