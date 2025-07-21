'use client'
import Image from 'next/image'
import styles from './Footer.module.css'
import logo from '@/assets/images/logo_3.svg'
import Link from 'next/link'
import Facebook from '@/assets/icons/Facebook'
import Linkedin from '@/assets/icons/Linkedin'
import Instagram from '@/assets/icons/Instagram'
import Phone from '@/assets/icons/Phone'
import Email from '@/assets/icons/Email'
import Location from '@/assets/icons/Location'
import Arrow from '@/assets/icons/Arrow'
import { useEffect, useRef } from 'react'
import { AnimateFooter } from './animateFooter'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const containerBannerRef = useRef(null)
  const titleRef = useRef(null)
  const descripotionRef = useRef(null)
  const buttonRef = useRef(null)
  const containerFooterRef = useRef(null)
  const logoRef = useRef(null)
  const navigationRef = useRef(null)
  const contactInfoRef = useRef(null)
  const socialMediaRef = useRef(null)
  const lineRef = useRef(null)
  const textRef = useRef(null)
  const text_twoRef = useRef(null)

  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/alianzas-redix') {
      AnimateFooter(
        containerBannerRef.current,
        titleRef.current,
        descripotionRef.current,
        buttonRef.current,
        containerFooterRef.current,
        logoRef.current,
        navigationRef.current,
        contactInfoRef.current,
        socialMediaRef.current,
        lineRef.current,
        textRef.current,
        text_twoRef.current
      )
    }
  }, [pathname])

  useEffect(() => {}, [pathname])

  return (
    <footer className={styles.container_footer}>
      <div className={styles.container}>
        <div className={styles.info_text} ref={containerBannerRef}>
          <h2 ref={titleRef}>
            {pathname === '/alianzas-redix'
              ? '¿Está listo para transformar su organización?'
              : 'Transformando ideas en soluciones efectivas'}
          </h2>
          <p ref={descripotionRef}>
            {pathname === '/alianzas-redix'
              ? 'Descubra cómo nuestra alianza estratégica puede impulsar la innovación y el crecimiento en su industria.'
              : 'Automatizamos procesos manuales para potenciar equipos, brindando soluciones efectivas y sostenibles en el desarrollo de software web.'}
          </p>
          <div className={styles.button_contact} ref={buttonRef}>
            <Link
              passHref
              href={'https://calendly.com/fecotechsolutions/30min'}
              target='_blank'
              title='Programa tu consulta gratuita'
            >
              <button>
                Programa tu consulta gratuita
                <Arrow width='20px' height='20px' />
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.footer_cotainer} ref={containerFooterRef}>
          <div className={styles.all_content}>
            <div className={styles.navigation_container}>
              <div className={styles.logo} ref={logoRef}>
                <Image
                  src={logo}
                  alt='Logo'
                  width={160}
                  height={100}
                  style={{ width: '160px', height: 'auto' }}
                />
                <p>Transforma tu negocio con SymbioNet</p>
              </div>
              <div className={styles.list_page} ref={navigationRef}>
                <h3>Navegación</h3>
                <ul>
                  <Link href={'/#home'} title='Inicio'>
                    <li>Inicio</li>
                  </Link>
                  <Link href={'/#solutions'} title='Soluciones'>
                    <li>Soluciones</li>
                  </Link>
                  <Link href={'/#tech-stack'} title='Stack'>
                    <li>Stack Tecnológico</li>
                  </Link>
                  <Link href={'/#contact-us'} title='Nosotros'>
                    <li>Nosotros</li>
                  </Link>
                  <Link href={'/#alianza'} title='Alianzas'>
                    <li>Alianzas</li>
                  </Link>
                </ul>
              </div>
              <div className={styles.list_contact} ref={contactInfoRef}>
                <h3>Contacto</h3>
                <ul>
                  <Link
                    href={'https://wa.me/5493518001877'}
                    title='+54 9 351 800 1877'
                    target='_blank'
                  >
                    <li>
                      <Phone width='18px' height='18px' /> +54 9 351 800 1877
                    </li>
                  </Link>
                  <Link
                    href={'mailto:contacto@symbionet.tech'}
                    title='contacto@symbionet.tech'
                  >
                    <li>
                      <Email width='18px' height='18px' />{' '}
                      contacto@symbionet.tech
                    </li>
                  </Link>
                  <Link
                    href={
                      'https://www.google.com/maps/place/C%C3%B3rdoba,+Argentina'
                    }
                    title='Cordoba, Argentina'
                    target='_blank'
                  >
                    <li>
                      <Location width='18px' height='18px' /> Cordoba,
                      Argentina.
                    </li>
                  </Link>
                </ul>
              </div>
              <div className={styles.list_social} ref={socialMediaRef}>
                <h3>Seguinos</h3>
                <ul>
                  <Link
                    href={
                      'https://www.linkedin.com/company/symbionetsolutions/'
                    }
                    title='Linkedin'
                    target='_blank'
                  >
                    <li>
                      <Linkedin width='18px' height='18px' />
                    </li>
                  </Link>
                  {/* <Link href={'/'} title='Instagram'>
                    <li>
                      <Instagram width='18px' height='18px' />
                    </li>
                  </Link> */}
                </ul>
              </div>
            </div>
            <div className={styles.line} ref={lineRef}></div>
            <div className={styles.copyright}>
              <p ref={textRef}>
                © {new Date().getFullYear()} SymbioNet. Todos los derechos
                reservados.
              </p>
              <p ref={text_twoRef}>
                Diseñado por <strong>SymbioNet.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
