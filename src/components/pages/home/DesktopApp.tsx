import homeImg from '@/images/website-1-home.png'

import DesktopAppDownload from './DesktopApp/Download'
import HomeWrapper from './HomeWrapper'

export default function DesktopApp() {
  const description = 'The desktop app is the recommended and easiest way to use elasticvue. Download the installer for your operating system to get started.'
  const capabilities = [
    'auto update',
    'self-signed ssl support',
    'no cluster configuration required'
  ]

  return (
    <HomeWrapper title="Elasticvue desktop" image={homeImg} description={description} capabilities={capabilities}>
      <DesktopAppDownload />
    </HomeWrapper>
  )
}
