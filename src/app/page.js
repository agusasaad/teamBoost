'use client'
import Header from '@/components/header/Header'
import styles from './page.module.css'
import AboutUs from '@/components/aboutUs/AboutUs'
import TechStack from '@/components/techStack/TechStack'
import Faq from '@/components/faq/Faq'
import Modal from '@/components/modal/Modal'
import { useState } from 'react'
import Solutions from '@/components/solutions/Solutions'
import Contacto from '@/components/contacto/Contacto'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <main className={styles.main}>
      <div className={styles.container_home}>
        <video
          src='/video.webm'
          loop
          preload='auto'
          muted
          autoPlay
          playsInline
          aria-label='video de fondo'
        ></video>
        <Header openModal={openModal} />
      </div>
      <div className={styles.sections}>
        <TechStack />
        <AboutUs />
        <Faq />
      </div>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Contacto />
      </Modal>
    </main>
  )
}
