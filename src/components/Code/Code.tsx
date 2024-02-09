import React from 'react'

export default function Code({ children }: { children: string }) {
  return (
    <>
      <pre className="text-left inline-block whitespace-pre-wrap break-keep bg-gray-900 text-white text-sm rounded-sm p-2 font-mono"><code>{children}</code></pre>
    </>
  )
}