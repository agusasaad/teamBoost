import Arrow from '@/assets/icons/Arrow'
import styles from './Header.module.css'
import { solutionsData } from './solutionsData'
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.titles}>
        <span className={styles.subtitle}>TECHNOLOGICAL SOLUTIONS</span>
        <h1>We Guide and Develop Your Digital Transformation</h1>
        <p>
          All the essentials for your business technology, conveniently
          available in one place.
        </p>
        <div className={styles.button_contact}>
          <button>
            Schedule Your Appointment
            <Arrow width='20px' height='20px' />
          </button>
        </div>
      </div>
      <div className={styles.solutions}>
        {solutionsData.map((item, index) => (
          <div key={index} className={styles.card}>
            <span>{item.icon}</span>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <div>
              <button>
                Learn More <Arrow width='20px' height='20px' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
