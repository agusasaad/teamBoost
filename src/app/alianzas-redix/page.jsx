'use client'
import { useRef } from 'react'
import styles from './page.module.css'
import SectionCards from '@/components/alinazas/SectionCards'
import FiTrendingUp from '@/assets/icons/FiTrendingUp'
import MdOutlineRoute from '@/assets/icons/MdOutlineRoute'
import BsDiagram3 from '@/assets/icons/BsDiagram3'
import AiOutlineRobot from '@/assets/icons/AiOutlineRobot'
import ChangeCircle from '@/assets/icons/ChangeCircle'
import UsersIcon from '@/assets/icons/UsersIcon'
import Image from 'next/image'

import logo_symbio from '@/assets/images/icon.svg'
import logo_redix from '@/assets/images/logo-redix.svg'
import Manos from '@/assets/icons/Manos'
import ArrowCard from '@/assets/icons/ArrowCard'
import Link from 'next/link'

const AlianzasRoutes = () => {
  const aplicacionesIndustrialesData = [
    {
      name: 'Diagnóstico estratégico personalizado',
      text: 'Detectamos oportunidades de mejora en procesos clave, cultura organizacional y capacidades tecnológicas.',
      icon: <BsDiagram3 width='24px' height='24px' color='white' />,
    },

    {
      name: 'Desarrollo de soluciones tecnológicas a medida',
      text: 'Symbionet convierte esos hallazgos en sistemas ágiles, automatizados e impulsados por IA con las últimas y mejores tecnologías.',
      icon: <ChangeCircle width='24px' height='24px' color='white' />,
    },

    {
      name: 'Transformación integral, medible y con un equipo capacitado',
      text: 'El resultado: eficiencia, trazabilidad y escalabilidad a largo plazo y un equipo acompañando toda la trazabilidad de la transformación digital de tu negocio.',
      icon: <FiTrendingUp width='24px' height='24px' color='white' />,
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.subtitle}>
          <UsersIcon color='#10b981' />
          Alianza Estratégica
        </span>
        <h1>Una sinergia pensada para generar impacto real</h1>
        <p>
          Nos unimos con <strong>Redix Consulting</strong>, una firma experta en
          innovación estratégica y excelencia operativa, para ofrecer soluciones
          tecnológicas IA que nacen desde un diagnóstico profundo del negocio.
        </p>
      </div>

      <div className={styles.logos_con_alianza}>
        <div className={styles.card}>
          <div className={styles.container_img}>
            <Image src={logo_symbio} width={40} height={40} alt='logo' />
          </div>
          <h3>SymbioNet</h3>
          <span>Soluciones IA</span>
        </div>
        <div className={styles.alinaza}>
          <div className={styles.line}></div>
          <i>
            <Manos width='30px' height='30px' color='white' />
          </i>
          <div className={styles.line}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
            <Image src={logo_redix} width={40} height={40} alt='logo' />
          </div>

          <h3>Redix Consulting</h3>
          <span>Estrategia & Excelencia</span>
        </div>
      </div>

      <div className={styles.text}>
        <h2>
          Esta alianza te acompaña a tomar decisiones de inversión tecnológica
          con confianza, previsión y foco en el impacto.
        </h2>
        <p>Juntos, creamos una propuesta de valor única:</p>
      </div>

      <div className={styles.container_cards}>
        <SectionCards solutionsData={aplicacionesIndustrialesData} />
      </div>

      <div className={styles.procesos}>
        <h2>Proceso Integral</h2>

        <div className={styles.container_card}>
          <div className={styles.proceso}>
            <span>1</span>
            <h3>Detección del Problema</h3>
            <p>Diagnóstico profundo del negocio</p>
          </div>
          <i>
            <ArrowCard />
          </i>
          <div className={styles.proceso}>
            <span>2</span>
            <h3>Desarrollo de Solución</h3>
            <p>Tecnología IA personalizada</p>
          </div>
          <i>
            <ArrowCard />
          </i>
          <div className={styles.proceso}>
            <span>3</span>
            <h3>Solución Operativa</h3>
            <p>Implementación y seguimiento</p>
          </div>
        </div>
      </div>

      <div className={styles.container_button}>
        <Link
          passHref
          href={'https://calendly.com/fecotechsolutions/30min'}
          target='_blank'
          title='¿Querés saber cómo podemos ayudarte?'
        >
          ¿Querés saber cómo podemos ayudarte?
        </Link>
      </div>
    </div>
  )
}

export default AlianzasRoutes
