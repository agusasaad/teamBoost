'use client'
import Arrow from '@/assets/icons/Arrow'
import styles from './Header.module.css'
import Solutions from '../solutions/Solutions'
import { useEffect, useRef } from 'react'
import { AnimateHeader } from './AnimateHeader'
import Link from 'next/link'
import Carrucel from '../carrucel/Carrucel'
const Header = ({ openModal }) => {
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
          <span className={styles.circle} />
          Soluciones Tecnológicas
        </span>
        <h1 ref={titleRef}>
          Reinventamos tu organización a través de tecnología
        </h1>
        <p ref={descriptionRef}>
          Diseñamos soluciones a medida para impulsar la eficiencia operativa y
          tus procesos a través de la IA
        </p>
        <div className={styles.button_contact} ref={buttonRef}>
          <Link
            passHref
            href={'https://calendly.com/fecotechsolutions/30min'}
            target='_blank'
            title='Programa tu Consulta'
          >
            <button>
              Programa tu Consulta
              <Arrow width='20px' height='20px' />
            </button>
          </Link>
        </div>
        <div className={styles.ranking} ref={rankingRef}>
          <div>
            <span className={'ranking_span'}>+ 4</span>
            <p> Diferentes industrias </p>
          </div>
          <div>
            <span className={'ranking_span'}>+ 20</span>
            <p>Proyectos completados</p>
          </div>
          <div>
            <span className={'ranking_span'}>+ 10</span>
            <p>Clientes en todo el mundo</p>
          </div>
        </div>
      </div>
      <Carrucel />
      <Solutions openModal={openModal} />
    </div>
  )
}

export default Header
