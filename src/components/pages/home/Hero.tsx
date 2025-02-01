import Image from 'next/image'
import HeaderImage from '@/images/pages/home/header.webp'
import Card1Image from '@/images/pages/home/card1.webp'
import Card2Image from '@/images/pages/home/card2.webp'
import Card3Image from '@/images/pages/home/card3.webp'
import Card4Image from '@/images/pages/home/card4.webp'
import Card5Image from '@/images/pages/home/card5.webp'
import Card6Image from '@/images/pages/home/card6.webp'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBorder}>
          <div className={styles.heroGrid}>
            <div className={styles.heroGridHeader}>
              <Image src={HeaderImage} alt="header" priority className={styles.fadeHeroImg} style={{ animationDelay: 2.0 + 's' }} />
            </div>
            <div className={styles.heroGridCard1}>
              <Image src={Card1Image} alt="card1" priority className={styles.fadeHeroImg} style={{ animationDelay: 2.5 + 's' }} />
            </div>
            <div className={styles.heroGridCard2}>
              <Image src={Card2Image} alt="card2" priority className={styles.fadeHeroImg} style={{ animationDelay: 2.5 + 's' }} />
            </div>
            <div className={styles.heroGridCard3}>
              <Image src={Card3Image} alt="card3" priority className={styles.fadeHeroImg} style={{ animationDelay: 2.5 + 's' }} />
            </div>
            <div className={styles.heroGridCard4}>
              <Image src={Card4Image} alt="card4" priority className={styles.fadeHeroImg} style={{ animationDelay: 2.5 + 's' }} />
            </div>
            <div className={styles.heroGridCard5}>
              <Image src={Card5Image} alt="card5" priority className={styles.fadeHeroImg} style={{ animationDelay: 3.0 + 's' }} />
            </div>
            <div className={styles.heroGridCard6}>
              <Image src={Card6Image} alt="card6" priority className={styles.fadeHeroImg} style={{ animationDelay: 3.0 + 's' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
