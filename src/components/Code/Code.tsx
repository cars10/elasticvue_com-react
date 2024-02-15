import type React from 'react'

export default function Code({ children }: { children: any }) {
  return (
    <>
      <code className="text-left inline-block whitespace-pre bg-neutral-800 text-white text-sm rounded-sm p-2 font-mono w-full overflow-x-auto">{children}</code>
    </>
  )
}
