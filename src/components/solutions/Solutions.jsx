'use client'
import { solutionsData } from './solutionsData'
import styles from './Solutions.module.css'
import Arrow from '@/assets/icons/Arrow'
import { useEffect, useRef } from 'react'
import { AnimationSolutions } from './animationSolutions'

const Solutions = ({ openModal }) => {
  const containerRef = useRef(null)
  const title = useRef(null)
  const cards = useRef([])

  useEffect(() => {
    AnimationSolutions(containerRef.current, title.current, cards.current)
  }, [])
  return (
    <div className={styles.container} ref={containerRef} id='solutions'>
      <div className={styles.title} ref={title}>
        <h2>Nuestras Soluciones</h2>
      </div>
      <div className={styles.solutions}>
        {solutionsData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            ref={(el) => (cards.current[index] = el)}
          >
            <span>{item.icon}</span>

            <div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>

            <div>
              <button
                type='button'
                title='Mas Informacion'
                onClick={() => openModal()}
              >
                Para saber mas <Arrow width='20px' height='20px' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Solutions
