import ChromeIcon from '@/images/icons/chrome.svg'
import EdgeIcon from '@/images/icons/edge.svg'
import FirefoxIcon from '@/images/icons/firefox.svg'
import HomeWrapper from './HomeWrapper'
import IndicesImage from '@/images/screenshots/website-4-indices.png'
import Button from '@/components/shared/Button/Button'

export default function BrowserExtensions() {
  const description = 'If you\'d rather not download elasticvue desktop, you can use the browser extension instead. It\'s available in your favorite browser\'s extension store.'
  const capabilities = [
    'auto update',
    'no cluster configuration required'
  ]

  return (
    <HomeWrapper title="Browser extension" description={description} capabilities={capabilities} image={IndicesImage} reverse>
      <Button
        image={ChromeIcon}
        link={{ href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa', text: 'Google Chrome' }}
        full
        center />
      <Button
        image={EdgeIcon}
        link={{ href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo', text: 'Microsoft Edge' }}
        full
        center />
      <Button
        image={FirefoxIcon}
        link={{ href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/', text: 'Mozilla Firefox' }}
        full
        center />
    </HomeWrapper>
  )
}
