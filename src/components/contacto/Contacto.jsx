import Link from 'next/link'
import styles from './Contacto.module.css'
import Whatsapp from '@/assets/icons/Whatsapp'
import Calendly from '@/assets/icons/Calendly'
import Gmail from '@/assets/icons/Gmail'

const Contacto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Contactanos</h2>
        <p>
          Selecciona uno de nuestros canales para ponerte en contacto con
          nosotros de manera rápida y sencilla.
        </p>
      </div>
      <div className={styles.container_button}>
        <Link
          href={'https://wa.me/5493518031826'}
          target='_blank'
          title='Programa tu Consulta de whatsapp'
        >
          <button>
            <i style={{ backgroundColor: '#449d5d25' }}>
              <Whatsapp width='34px' height='34px' color='#449d5d' />
            </i>
          </button>
        </Link>
        <Link
          passHref
          href={'https://calendly.com/fecotechsolutions/30min'}
          target='_blank'
          title='Programa tu Consulta calendly'
        >
          <button>
            <i style={{ backgroundColor: '#4873af2d' }}>
              <Calendly width='34px' height='34px' color='#006bff' />
            </i>
          </button>
        </Link>
        <Link
          href={'mailto:somos@symbionet.tech'}
          target='_blank'
          title='Programa tu Consulta por Gmail'
        >
          <button>
            <i style={{ backgroundColor: 'rgba(54, 54, 54, 0.178)' }}>
              <Gmail width='35px' height='35px' />
            </i>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Contacto
