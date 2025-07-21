import Arrow from '@/assets/icons/Arrow'
import styles from './SeccionAlianzas.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo-redix.svg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

const SeccionAlianzas = () => {
  const logoRef = useRef(null)
  const titleRef = useRef(null)
  const buttonRef = useRef(null)

  const animationAlianzas = (logo, title, button) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      [logo, title, button],
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power1',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#alianza',
          start: 'top 60%',
          end: 'bottom ',
        },
      }
    )
  }

  useEffect(() => {
    animationAlianzas(logoRef.current, titleRef.current, buttonRef.current)
  }, [])

  return (
    <div className={styles.container} id='alianza'>
      <div className={styles.container_logo} ref={logoRef}>
        <Image src={logo} alt='logo-redix' width={60} height={60} />
      </div>
      <h2 ref={titleRef}>
        Con Redix Consulting, unimos inteligencia tecnológica y visión
        estratégica para transformar tu organización.
      </h2>
      <Link href={'/alianzas-redix'} ref={buttonRef}>
        Enterate más de nuestra alianza
        <Arrow width='20px' height='20px' />
      </Link>
    </div>
  )
}

export default SeccionAlianzas
