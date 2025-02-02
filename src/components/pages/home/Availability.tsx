import ChromeIcon from '@/images/icons/chrome.svg'
import FirefoxIcon from '@/images/icons/firefox.svg'
import EdgeIcon from '@/images/icons/edge.svg'
import AppleIcon from '@/images/icons/apple.svg'
import WindowsIcon from '@/images/icons/windows.svg'
import LinuxIcon from '@/images/icons/linux.svg'
import DockerIcon from '@/images/icons/docker.svg'
import GithubIcon from '@/images/icons/github.svg'
import Button from '@/components/shared/Button/Button'

export default function Availability() {
  const versions = [
    [
      { label: 'Chrome', icon: ChromeIcon, href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa' },
      { label: 'Firefox', icon: FirefoxIcon, href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/' },
      { label: 'Edge', icon: EdgeIcon, href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo' },
    ],
    [
      { label: 'Mac', icon: AppleIcon },
      { label: 'Windows', icon: WindowsIcon, href: 'https://update.elasticvue.com/download/windows/x86_64?file=elasticvue.msi' },
      { label: 'Linux', icon: LinuxIcon, href: 'https://update.elasticvue.com/download/linux/x86_64?file=elasticvue.AppImage' },
    ],
    [
      { label: 'Docker', icon: DockerIcon, href: 'https://hub.docker.com/r/cars10/elasticvue' },
      { label: 'Self hosted', icon: GithubIcon, href: 'https://github.com/cars10/elasticvue' },
    ]
  ]

  return (
    <>
      <div className="px-4 py-10 lg:py-60 gradient">
        <div className="lg:w-1/2 mx-auto">
          <h1 className="text-3xl mb-10 text-center lg:text-5xl lg:mb-20">Install it your way.</h1>
          <div className="flex flex-wrap mb-8 lg:justify-around lg:mb-20">
            <div className="flex justify-between w-full mb-4">
              <div className="text-left w-1/3">
                <Button key={versions[0][0].label} href={versions[0][0].href} icon={versions[0][0].icon} label={versions[0][0].label} iconSize={20} />
              </div>
              <div className="text-center w-1/3">
                <Button key={versions[0][1].label} href={versions[0][1].href} icon={versions[0][1].icon} label={versions[0][1].label} iconSize={20} />
              </div>
              <div className="text-right w-1/3">
                <Button key={versions[0][2].label} href={versions[0][2].href} icon={versions[0][2].icon} label={versions[0][2].label} iconSize={20} />
              </div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="text-left w-1/3">
                <Button key={versions[1][0].label} href={versions[1][0].href} icon={versions[1][0].icon} label={versions[1][0].label} iconSize={20} />
              </div>
              <div className="text-center w-1/3">
                <Button key={versions[1][1].label} href={versions[1][1].href} icon={versions[1][1].icon} label={versions[1][1].label} iconSize={20} />
              </div>
              <div className="text-right w-1/3">
                <Button key={versions[1][2].label} href={versions[1][2].href} icon={versions[1][2].icon} label={versions[1][2].label} iconSize={20} />
              </div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="text-center w-1/2">
                <Button key={versions[2][0].label} href={versions[2][0].href} icon={versions[2][0].icon} label={versions[2][0].label} iconSize={20} />
              </div>
              <div className="text-center w-1/2">
                <Button key={versions[2][1].label} href={versions[2][1].href} icon={versions[2][1].icon} label={versions[2][1].label} iconSize={20} />
              </div>
            </div>
          </div>

          <p className="text-justify mb-4 text-xl mx-auto lg:text-center text-neutral-300 lg:text-2xl lg:w-3/4">
            No matter if you prefer a browser extension, desktop app, docker container, or self-hosted version — elasticvue has you covered.
          </p>
        </div>
      </div>
    </>
  )
}
