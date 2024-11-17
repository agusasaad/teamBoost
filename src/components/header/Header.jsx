'use client'
import Arrow from '@/assets/icons/Arrow'
import styles from './Header.module.css'
import Solutions from '../solutions/Solutions'
import { useEffect, useRef } from 'react'
import { AnimateHeader } from './AnimateHeader'
const Header = () => {
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const rankingRef = useRef(null)

  useEffect(() => {
    AnimateHeader(
      subtitleRef.current,
      titleRef.current,
      descriptionRef.current,
      buttonRef.current,
      rankingRef.current
    )
  }, [])
  return (
    <div className={styles.container} id='home'>
      <div className={styles.titles}>
        <span className={styles.subtitle} ref={subtitleRef}>
          TECHNOLOGICAL SOLUTIONS
        </span>
        <h1 ref={titleRef}>We Guide and Develop Your Digital Transformation</h1>
        <p ref={descriptionRef}>
          All the essentials for your business technology, conveniently
          available in one place.
        </p>
        <div className={styles.button_contact} ref={buttonRef}>
          <button>
            Schedule Your Appointment
            <Arrow width='20px' height='20px' />
          </button>
        </div>
        <div className={styles.ranking} ref={rankingRef}>
          <div>
            <span className={'ranking_span'}>+ 10</span>
            <p>Diferent industries</p>
          </div>
          <div>
            <span className={'ranking_span'}>+ 100</span>
            <p>Completed projects</p>
          </div>
          <div>
            <span className={'ranking_span'}>+ 30</span>
            <p>Clients around the world</p>
          </div>
        </div>
      </div>
      <Solutions />
    </div>
  )
}

export default Header
