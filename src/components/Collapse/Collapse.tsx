'use client'

import { useState } from 'react'
import style from './Collapse.module.css'

export default function Collapse({ name, title, children }: { name: string, title: string, children: any }) {
  const [checked, setChecked]= useState(false)

  const toggle = (e: KeyboardEvent) => {
    if (e.keyCode == 13) setChecked(!checked)
  }

  return (
    <>
      <div className="border-t border-[#ededed] rounded shadow-main hover:shadow-main-ele transition-shadow duration-200 ease-in">
        <input type="checkbox" aria-hidden="true" id={name} checked={checked} className={`${style.collapseToggleInput} hidden`} onChange={() => setChecked(!checked)} />
        <label htmlFor={name} tabIndex={0} onKeyDown={(e) => toggle(e as any)} className={`${style.collapseToggle} font-bold cursor-pointer block text-xl p-4`}>
          {title}
        </label>
        <div className={`${style.collapsibleContent} hidden`}>
          {children}
        </div>
      </div>
    </>
  )
}
