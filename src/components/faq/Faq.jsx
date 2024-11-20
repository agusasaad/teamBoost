'use client'
import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Plus from '@/assets/icons/Plus'
import styles from './Faq.module.css'
import { faqs } from './faqData'
import { animateFAQ } from './animateFaq'
import Link from 'next/link'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const faqRefs = useRef([]) // Referencias para las respuestas
  const iconRefs = useRef([]) // Referencias para los íconos
  const container = useRef(null)
  const subtitle = useRef(null)
  const title = useRef(null)
  const containerFAQ = useRef(null)
  const contact = useRef(null)

  useEffect(() => {
    animateFAQ(
      container.current,
      subtitle.current,
      title.current,
      containerFAQ.current,
      contact.current
    )
  }, [])

  const handleToggle = (index) => {
    const isOpen = openIndex === index

    if (isOpen) {
      // Cerrar FAQ
      const element = faqRefs.current[index]
      gsap.to(element, {
        height: 0,
        duration: 0.5,
        onComplete: () => setOpenIndex(null), // Cambia el estado al terminar la animación
      })
      // Rotar el ícono de regreso
      gsap.to(iconRefs.current[index], {
        rotate: 0,
        duration: 0.5,
      })
    } else {
      // Abrir FAQ
      const element = faqRefs.current[index]
      setOpenIndex(index) // Cambia el estado para abrir
      gsap.fromTo(element, { height: 0 }, { height: 'auto', duration: 0.5 })
      // Rotar el ícono 45 grados
      gsap.to(iconRefs.current[index], {
        rotate: 45,
        duration: 0.5,
      })

      // Resetear el ícono de cualquier otro abierto
      if (openIndex !== null) {
        gsap.to(iconRefs.current[openIndex], {
          rotate: 0,
          duration: 0.5,
        })
      }
    }
  }

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.titles}>
        <span className={styles.subtitle} ref={subtitle}>
          FAQ&apos;s
        </span>
        <h2 ref={title}>Your Questions Answered</h2>
      </div>
      <div className={styles.faq} ref={containerFAQ}>
        {faqs.map((faq, index) => (
          <div className={`${styles.question}`} key={index}>
            <div className={styles.title_button}>
              <h3>{faq.question}</h3>
              <button onClick={() => handleToggle(index)}>
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  style={{ display: 'inline-block' }}
                >
                  <Plus />
                </div>
              </button>
            </div>
            <div
              className={styles.answer}
              ref={(el) => (faqRefs.current[index] = el)}
              style={{
                height: openIndex === index ? 'auto' : 0,
                overflow: 'hidden',
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.final} ref={contact}>
        <p>
          Have more questions? <Link href='/contact'>contact us</Link>
        </p>
      </div>
    </section>
  )
}

export default Faq
