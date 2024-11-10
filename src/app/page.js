import Header from '@/components/header/Header'
import styles from './page.module.css'
import AboutUs from '@/components/aboutUs/AboutUs'
import TechStack from '@/components/techStack/TechStack'
import ContactUs from '@/components/contactUs/ContactUs'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      {/* <main className={styles.main}>
        <AboutUs />
        <TechStack />
        <ContactUs />
      </main> */}
    </div>
  )
}
