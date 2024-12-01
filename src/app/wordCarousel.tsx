'use client'

import { useState, useEffect } from 'react'
import styles from './WordCarousel.module.css'

export function WordCarousel({ wordlist }: { wordlist: string[] }) {
  const [index, setIndex] = useState(0) 
  const [transitionClass, setTransitionClass] = useState(styles.in)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionClass(styles.out) 

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % wordlist.length)
        setTransitionClass(styles.in) 
      }, 500) 
    }, 3000) 

    return () => clearInterval(interval) 
  }, [wordlist.length])

  return (
    <div className={styles.carousel}>
      <span
        key={index} 
        className={`${styles.word} ${transitionClass}`}
      >
        {wordlist[index]}
      </span>
    </div>
  )
}
