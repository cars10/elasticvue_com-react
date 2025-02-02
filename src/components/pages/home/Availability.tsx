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
    { label: 'Chrome', icon: ChromeIcon, href: 'https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa' },
    { label: 'Firefox', icon: FirefoxIcon, href: 'https://addons.mozilla.org/en-US/firefox/addon/elasticvue/' },
    { label: 'Edge', icon: EdgeIcon, href: 'https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo' },
    { label: 'Mac', icon: AppleIcon },
    { label: 'Windows', icon: WindowsIcon, href: 'https://update.elasticvue.com/download/windows/x86_64?file=elasticvue.msi' },
    { label: 'Linux', icon: LinuxIcon, href: 'https://update.elasticvue.com/download/linux/x86_64?file=elasticvue.AppImage' },
    { label: 'Docker', icon: DockerIcon, href: 'https://hub.docker.com/r/cars10/elasticvue' },
    { label: 'Self hosted', icon: GithubIcon, href: 'https://github.com/cars10/elasticvue' },
  ]

  return (
    <>
      <div className="w-1/2 mx-auto my-60">
        <h1 className="text-center text-5xl mb-20">Install it your way.</h1>
        <div className="flex justify-around mb-20">
          {versions.map((item) => (
            <Button key={item.label} href={item.href} icon={item.icon} label={item.label} iconSize={20} />
          ))}
        </div>

        <p className="w-3/4 mx-auto text-center text-2xl text-neutral-300">
          No matter if you prefer a browser extension, desktop app, docker container, or self-hosted version — elasticvue has you covered.
        </p>
      </div>
    </>
  )
}
