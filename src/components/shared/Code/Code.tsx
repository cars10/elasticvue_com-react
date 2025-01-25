import type React from 'react'

export default function Code({ children }: { children: any }) {
  return (
    <>
      <code className="inline-block w-full overflow-x-auto whitespace-pre rounded-xs bg-neutral-800 p-2 text-left font-mono text-sm text-white">
        {children}
      </code>
    </>
  )
}
