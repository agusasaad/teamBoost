'use client'
import { useEffect, useRef } from 'react'
import styles from './AboutUs.module.css'
import { AnimateAboutUs } from './animateAboutUs'
import caripela_1 from '@/assets/images/caripelas/caripela_1.png'
import caripela_2 from '@/assets/images/caripelas/cariplea_2.png'
import caripela_3 from '@/assets/images/caripelas/caripela_3.png'
import Image from 'next/image'

const AboutUs = () => {
  const arr = [
    { img: caripela_2, name: 'Agustín Asaad' },
    { img: caripela_3, name: 'Federico Asaad' },
    { img: caripela_1, name: 'Fernanda Romay' },
  ]
  const subtitle = useRef(null)
  const title = useRef(null)
  const text = useRef(null)
  const caripelas = useRef(null)
  const images = useRef([])

  useEffect(() => {
    AnimateAboutUs(
      subtitle.current,
      title.current,
      text.current,
      images.current,
      caripelas.current
    )
  }, [])

  return (
    <div className={styles.container} id='about'>
      <div className={styles.info_text}>
        <span className={styles.subtitle} ref={subtitle}>
          <span className={styles.circle}></span>Team{' '}
          <strong>SymbioNet.</strong>
        </span>
        <h2 ref={title}>Transforming Ideas into Effective Solutions</h2>
        <p ref={text}>
          With expertise in web software development, we streamline manual
          processes with automations that empower teams, delivering effective
          solutions with lasting and sustainable impact.
        </p>
      </div>
      <div className={styles.caripelas} ref={caripelas}>
        {arr.map((item, index) => (
          <div
            key={index}
            ref={(el) => (images.current[index] = el)}
            className={styles.cards}
          >
            <Image src={item.img} alt={item.name} width={700} height={700} />
            <div className={styles.info_caripela}>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs
