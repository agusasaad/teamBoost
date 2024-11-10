import { techStackData } from './dataTechStack'
import styles from './TechStack.module.css'

const TechStack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info_text}>
        <span className={styles.subtitle}>HOW WE DO IT</span>
        <h2>Our Tech Stack</h2>
        <p>
          Our software development toolkit is constantly updated to ensure
          quality and excellence.
        </p>
      </div>
      <div className={styles.card_container}>
        {techStackData.map((item, index) => (
          <div key={index} className={styles.card}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
