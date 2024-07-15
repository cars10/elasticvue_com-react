import Button from '@/components/shared/Button/Button'
import LinuxIcon from '@/images/icons/linux.svg'

export default function DownloadLinux() {
  return (
    <>
      <Button
        image={LinuxIcon}
        link={{
          href: 'https://update.elasticvue.com/download/linux/x86_64',
          text: 'Download for linux'
        }} />
    </>
  )
}
