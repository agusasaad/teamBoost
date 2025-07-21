'use client'
import gsap from 'gsap'
import { techStackData } from './dataTechStack'
import styles from './TechStack.module.css'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'

const TechStack = () => {
  const container = useRef(null)
  const subtitle = useRef(null)
  const title = useRef(null)
  const card_container = useRef(null)
  const carrucel = useRef(null)
  const card = useRef([])

  const [isMobile, setIsMobile] = useState(false)

  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const total =
      card_container.current.scrollWidth -
      card_container.current.offsetWidth +
      100

    // Calcula la altura combinada del contenedor visible y el desplazamiento
    const adjustedHeight = container.current.offsetHeight + total
    setContainerHeight(adjustedHeight)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Comprobar el tamaño inicial y agregar un listener
    handleResize()
    window.addEventListener('resize', handleResize)

    gsap.fromTo(
      [title.current, card_container.current],
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power1',
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          end: 'bottom',
        },
      }
    )
    if (window.innerWidth < 768) return
    gsap.to(carrucel.current, {
      x: -total,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => '+=' + total,
        pinSpacing: true,
        onLeave: () => {
          gsap.to(container.current, {
            duration: 1,
            ease: 'power1.out',
          })
        },
      },
    })

    // Limpieza del listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      className={styles.container}
      style={{
        height: isMobile ? 'auto' : `${containerHeight}px`,
      }}
      id='tech-stack'
    >
      <div className={styles.total_content} ref={container}>
        <div className={styles.title} ref={title}>
          <h2>Industrias</h2>
          <p>
            Transformamos sectores estratégicos con tecnología e IA aplicada a
            procesos reales
          </p>
        </div>
        <div className={styles.card_container} ref={card_container}>
          <div className={styles.carrucel} ref={carrucel}>
            {techStackData.map((item, index) => (
              <div
                key={index}
                className={styles.card}
                ref={(el) => (card.current[index] = el)}
              >
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
