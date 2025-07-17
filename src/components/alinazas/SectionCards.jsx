'use client'
import styles from './SectionCards.module.css'
import Arrow from '@/assets/icons/Arrow'

const SectionCards = ({ mainTitle, solutionsData = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{mainTitle}</h2>
      </div>
      <div className={styles.solutions}>
        {solutionsData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            // ref={(el) => (cards.current[index] = el)}
          >
            <span>{item.icon}</span>

            <div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionCards
