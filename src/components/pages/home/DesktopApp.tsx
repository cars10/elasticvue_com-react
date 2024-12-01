import Desktop from '@/images/desktop.png'
import DesktopAppDownload from './DesktopApp/Download'
import HomeWrapper from './HomeWrapper'

// 1600px x 1000px

export default function DesktopApp() {
  const description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

  return (
    <HomeWrapper title="Elasticvue desktop" description={description} image={Desktop}>
      <DesktopAppDownload />
    </HomeWrapper>
  )
}
