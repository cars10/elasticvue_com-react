'use client'

import DropdownButton from '@/components/shared/Button/DropdownButton'
import AppleIcon from '@/images/icons/apple.svg'

export default function DownloadMac() {
  const links = [
    { href: 'https://update.elasticvue.com/download/darwin/aarch64?file=elasticvue_aarch64.dmg', text: 'Apple Silicon' },
    { href: 'https://update.elasticvue.com/download/darwin/x86_64?file=elasticvue_x64.dmg', text: 'Intel Mac' }
  ]

  return (
    <DropdownButton full center title="Mac" image={AppleIcon} links={links} />
  )
}
