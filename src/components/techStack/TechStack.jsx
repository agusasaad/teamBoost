'use client'
import gsap from 'gsap'
import { techStackData } from './dataTechStack'
import styles from './TechStack.module.css'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'

const TechStack = () => {
  const container = useRef(null)
  const card_container = useRef(null)
  const carrucel = useRef(null)
  const card = useRef([])
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const total =
      card_container.current.scrollWidth -
      card_container.current.offsetWidth +
      100

    // Calcula la altura combinada del contenedor visible y el desplazamiento
    const adjustedHeight = container.current.offsetHeight + total
    setContainerHeight(adjustedHeight + 200)

    gsap.to(carrucel.current, {
      x: -total,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        start: 'top-=250 top',
        end: () => '+=' + total,
        pinSpacing: true, // Mantiene un espacio suave al soltar el pin
        onLeave: () => {
          gsap.to(container.current, {
            duration: 1, // Duración de la animación de soltar
            ease: 'power1.out', // Transición más suave
          })
        },
      },
    })
  }, [])

  return (
    <section
      className={styles.container}
      style={{ height: `${containerHeight}px` }}
    >
      <div className={styles.total_content} ref={container}>
        <div className={styles.title}>
          <h2>Our Tech Stack</h2>
          <p>
            Our software development toolkit is constantly updated to ensure
            quality and excellence.
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
