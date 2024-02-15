import Card from '@/components/Card'

import ChromeIcon from '@/images/icons/chrome.svg'
import EdgeIcon from '@/images/icons/edge.svg'
import FirefoxIcon from '@/images/icons/firefox.svg'

export default function BrowserExtensions() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
          <Card
            icon={ChromeIcon}
            title="Chrome extension"
            link={{ href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa', text: 'Chrome webstore' }}
            rating={{ amount: 55, stars: 5 }}
          >
            <p className="mb-1">
              Elasticvue is available in the chrome web store:
            </p>
          </Card>
        </div>

        <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
          <Card
            icon={EdgeIcon}
            title="Edge extension"
            link={{ href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo', text: 'Microsoft webstore' }}
            rating={{ amount: 29, stars: 4.5 }}
          >
            <p className="mb-1">
              Elasticvue is available in the microsoft store:
            </p>
          </Card>
        </div>

        <div className="w-full mx-none lg:mx-4 mb-4 lg:mb-none">
          <Card
            icon={FirefoxIcon}
            title="Firefox addon"
            link={{ href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/', text: 'Firefox addon' }}
            rating={{ amount: 19, stars: 5 }}
          >
            <p className="mb-1">
              Elasticvue is available in the chrome web store:
            </p>
          </Card>
        </div>
      </div>

    </>
  )
}
