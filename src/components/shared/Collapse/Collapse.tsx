'use client'

import { useState } from 'react'
import style from './Collapse.module.css'

export default function Collapse({
  name,
  title,
  children
}: {
  name: string
  title: string
  children: any
}) {
  const [checked, setChecked] = useState(false)

  const toggle = (e: KeyboardEvent) => {
    if (e.key === 'Enter') setChecked(!checked)
  }

  return (
    <>
      <div className="rounded border-t border-[#ededed] shadow-main transition-shadow duration-200 ease-in hover:shadow-main-ele dark:border-none dark:bg-secondary">
        <input
          type="checkbox"
          aria-hidden="true"
          id={name}
          checked={checked}
          className={`${style.collapseToggleInput} hidden`}
          onChange={() => setChecked(!checked)}
        />
        <label
          htmlFor={name}
          tabIndex={0}
          onKeyDown={(e) => toggle(e as any)}
          className={`${style.collapseToggle} block cursor-pointer p-4 text-xl font-bold`}
        >
          {title}
        </label>
        <div className={`${style.collapsibleContent} hidden`}>{children}</div>
      </div>
    </>
  )
}
