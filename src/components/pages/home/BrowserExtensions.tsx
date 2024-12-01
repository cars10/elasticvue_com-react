import ChromeIcon from '@/images/icons/chrome.svg'
import EdgeIcon from '@/images/icons/edge.svg'
import FirefoxIcon from '@/images/icons/firefox.svg'
import HomeWrapper from './HomeWrapper'
import Desktop from '@/images/desktop.png'
import Button from '@/components/shared/Button/Button'

export default function BrowserExtensions() {
  const description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."

  return (
    <HomeWrapper title="Elasticvue browser extension" description={description} image={Desktop} reverse>
      <Button
        image={ChromeIcon}
        link={{ href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa', text: 'Chrome webstore' }}
        center />
      <Button
        image={EdgeIcon}
        link={{ href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo', text: 'Edge webstore' }}
        center />
      <Button
        image={FirefoxIcon}
        link={{ href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/', text: 'Firefox addon' }}
        center />
    </HomeWrapper>
  )
}
