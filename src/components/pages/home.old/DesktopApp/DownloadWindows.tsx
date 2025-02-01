import Button from '@/components/shared/Button/Button'
import WindowsIcon from '@/images/icons/windows.svg'

export default function DownloadWindows() {
  return (
    <Button
      image={WindowsIcon}
      link={{ href: 'https://update.elasticvue.com/download/windows/x86_64?file=elasticvue.msi', text: 'Windows' }}
      full
      center />
  )
}
