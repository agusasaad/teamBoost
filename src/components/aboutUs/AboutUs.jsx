'use client'
import { useEffect, useRef } from 'react'
import styles from './AboutUs.module.css'
import { AnimateAboutUs } from './animateAboutUs'
import caripela_1 from '@/assets/images/caripelas/caripela_1.svg'
import caripela_2 from '@/assets/images/caripelas/caripela_2.svg'
import caripela_3 from '@/assets/images/caripelas/caripela_3.svg'
import Image from 'next/image'

const AboutUs = () => {
  const arr = [
    { img: caripela_1, name: 'Agustin Asaad' },
    { img: caripela_2, name: 'Federico Asaad' },
    { img: caripela_3, name: 'Fernanda Romay' },
  ]
  const images = useRef([])

  useEffect(() => {
    AnimateAboutUs(images.current)
  }, [])

  return (
    <div className={styles.container} id='about'>
      <div className={styles.info_text}>
        <span className={styles.subtitle}>ABOUT US</span>
        <h2 className='title_about'>
          Transforming Ideas into Effective Solutions
        </h2>
        <p className='text_about'>
          With strong expertise in web software development, we optimize manual
          processes through automations that unlock team potential. Beyond
          technology, we’re here to provide comprehensive and effective
          solutions that create a tangible, lasting, and sustainable impact.
        </p>
      </div>
      <div className={styles.caripelas}>
        {arr.map((item, index) => (
          <div
            key={index}
            ref={(el) => (images.current[index] = el)}
            className={styles.cards}
          >
            <Image
              src={item.img}
              alt={item.name}
              width={700}
              height={700}
              style={{ width: '350px', height: 'auto' }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs
