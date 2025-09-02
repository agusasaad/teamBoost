'use client'
import React from 'react'
import styles from './pymes.module.css'
import UsersIcon from '@/assets/icons/UsersIcon'
import Link from 'next/link'

const PymesComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.subtitle}>
          <UsersIcon color='#5E5FF8' />
          Pymes
        </span>
        <h1>
          Ayudamos a pymes a crecer con tecnología aplicada a sus procesos
          reales
        </h1>

        <p>
          Te mostramos cómo aplicar la Inteligencia Artificial en ventas,
          operaciones y decisiones estratégicas. Desde chatbots para no perder
          clientes hasta dashboards predictivos para gestionar mejor tu muestra
          de datos con nuestras automatizaciones.
        </p>
      </div>

      <div className={styles.container_button}>
        <Link
          passHref
          href={'https://calendly.com/contacto-symbionet/reunion-gratuita'}
          target='_blank'
          title='Agendá tu consultoría gratuita de implementación tecnológica'
        >
          Agendá tu consultoría gratuita de implementación tecnológica
        </Link>
      </div>
    </div>
  )
}

export default PymesComponent
