import nodesImage from '@/images/screenshots/website-2-nodes.png'

import DesktopAppDownload from './DesktopApp/Download'
import HomeWrapper from './HomeWrapper'

export default function DesktopApp() {
  const description = 'Elasticvue desktop is the recommended and easiest way to use elasticvue. Download the build for your operating system to get started.'
  const capabilities = [
    'auto update',
    'self-signed ssl support',
    'no cluster configuration required'
  ]

  return (
    <HomeWrapper title="Elasticvue desktop" image={nodesImage} description={description} capabilities={capabilities}>
      <DesktopAppDownload />
    </HomeWrapper>
  )
}
