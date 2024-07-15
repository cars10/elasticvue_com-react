'use client'

import Button from '@/components/shared/Button/Button'
import DropdownButton from '@/components/shared/Button/DropdownButton'

import AppleIcon from '@/images/icons/apple.svg'


export default function DownloadMac() {
  return (
    <>
      <DropdownButton title="Foobar" image={AppleIcon} />
      <Button
        image={AppleIcon}
        link={{
          href: 'https://update.elasticvue.com/download/darwin/x86_64',
          text: 'Download for mac x86'
        }} />

      <Button
        image={AppleIcon}
        link={{
          href: 'https://update.elasticvue.com/download/darwin/aarch64',
          text: 'Download for mac aarch64'
        }} />
    </>
  )
}
