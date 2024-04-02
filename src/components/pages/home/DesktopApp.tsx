import Card from '@/components/Card'

import WindowsIcon from '@/images/icons/windows.svg'
import AppleIcon from '@/images/icons/apple.svg'
import LinuxIcon from '@/images/icons/linux.svg'

export default function DesktopApp() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="mx-none lg:mb-none mb-4 w-full lg:mx-4">
          <Card
            icon={WindowsIcon}
            title="Windows app"
            link={{
              href: 'https://update.elasticvue.com/download/windows/x86_64',
              text: 'Download msi'
            }}
            badge={true}
          >
            <p className="mb-1">
              Elasticvue is available on windows:
            </p>
          </Card>
        </div>

        <div className="mx-none lg:mb-none mb-4 w-full lg:mx-4">
          <Card
            icon={AppleIcon}
            title="MacOS app"
            links={[
              { href: 'https://update.elasticvue.com/download/darwin/x86_64', text: 'x86_64 dmg' }, 
              { href: 'https://update.elasticvue.com/download/darwin/aarch64', text: 'aarch64 dmg' }
            ]}
            badge={true}
          >
            <p className="mb-1">
              Elasticvue is available for macos:
            </p>
          </Card>
        </div>

        <div className="mx-none lg:mb-none mb-4 w-full lg:mx-4">
          <Card
            icon={LinuxIcon}
            title="Linux app"
            link={{
              href: 'https://update.elasticvue.com/download/linux/x86_64',
              text: 'Download AppImage'
            }}
            badge={true}
          >
            <p className="mb-1">
              Elasticvue is available for linux:
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
