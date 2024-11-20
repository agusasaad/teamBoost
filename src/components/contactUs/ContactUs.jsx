'use client'
import Plus from '@/assets/icons/Plus'
import styles from './ContactUs.module.css'
import { faqs } from './faq'
import { useState } from 'react'

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    // Si el índice ya está abierto, lo cerramos; de lo contrario, lo abrimos
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.container}>
      <div className={styles.titles}>
        <span className={styles.subtitle}>FAQ&apos;s</span>
        <h2>Your Questions Answered</h2>
      </div>
      <div className={styles.faq}>
        {faqs.map((faq, index) => (
          <div
            className={`${styles.question} ${
              openIndex === index ? styles.show : ''
            }`}
            key={index}
          >
            <div className={styles.title_button}>
              <h3>{faq.question}</h3>
              <button onClick={() => handleToggle(index)}>
                <Plus />
              </button>
            </div>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactUs
