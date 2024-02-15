import Card from '@/components/Card'

import DockerIcon from '@/images/icons/docker.svg'
import GithubIcon from '@/images/icons/github.svg'
import Code from '@/components/Code/Code'

export default function WebDockerManual() {
  return (
    <>
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
              <Code>{`docker run -p 8080:8080 --name elasticvue 
           -d cars10/elasticvue`}</Code>
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
    </>
  )
}
