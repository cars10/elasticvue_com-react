import { userAgentOs, sortedOs, Os } from '@/helpers/os'
import DownloadWindows from './DownloadWindows'
import DownloadLinux from './DownloadLinux'
import DownloadMac from './DownloadMac'
import { headers } from 'next/headers';

export default async function DesktopAppDownload() {
  const ua = (await headers()).get('User-Agent')
  const os = userAgentOs(ua)
  const sorted = sortedOs(os)

  const buttons = {
    [Os.Windows]: <DownloadWindows key='windows' />,
    [Os.Linux]: <DownloadLinux key='linux' />,
    [Os.Mac]: <DownloadMac key='mac' />
  }

  const components = sorted.map(os => buttons[os])

  return (
    <>
      {components}
    </>
  )
}
