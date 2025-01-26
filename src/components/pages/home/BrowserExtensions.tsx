import ChromeIcon from '@/images/icons/chrome.svg'
import EdgeIcon from '@/images/icons/edge.svg'
import FirefoxIcon from '@/images/icons/firefox.svg'
import HomeWrapper from './HomeWrapper'
import Desktop from '@/images/desktop.png'
import Button from '@/components/shared/Button/Button'

export default function BrowserExtensions() {
  const description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  const capabilities = [
    'auto update',
    'no cluster configuration required'
  ]

  return (
    <HomeWrapper title="Elasticvue browser extension" description={description} capabilities={capabilities} image={Desktop} reverse>
      <Button
        image={ChromeIcon}
        link={{ href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa', text: 'Google Chrome' }}
        center />
      <Button
        image={EdgeIcon}
        link={{ href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo', text: 'Microsoft Edge' }}
        center />
      <Button
        image={FirefoxIcon}
        link={{ href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/', text: 'Mozilla Firefox' }}
        center />
    </HomeWrapper>
  )
}
