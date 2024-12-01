'use client'

import DropdownButton from '@/components/shared/Button/DropdownButton'
import AppleIcon from '@/images/icons/apple.svg'

export default function DownloadMac() {
  const links = [
    { href: 'https://update.elasticvue.com/download/darwin/aarch64', text: 'Download aarch64' },
    { href: 'https://update.elasticvue.com/download/darwin/x86_64', text: 'Download x86' }
  ]

  return (
    <DropdownButton full center title="Mac" image={AppleIcon} links={links} />
  )
}
