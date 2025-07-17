'use client'
import { useRef } from 'react'
import styles from './page.module.css'
import SectionCards from '@/components/alinazas/SectionCards'
import FiTrendingUp from '@/assets/icons/FiTrendingUp'
import MdOutlineRoute from '@/assets/icons/MdOutlineRoute'
import BsDiagram3 from '@/assets/icons/BsDiagram3'
import AiOutlineRobot from '@/assets/icons/AiOutlineRobot'
import ChangeCircle from '@/assets/icons/ChangeCircle'
import Factory from '@/assets/icons/Factory'
import GiHealthNormal from '@/assets/icons/GiHealthNormal'
import ConveyorBelt from '@/assets/icons/ConveyorBelt'

const AlianzasRoutes = () => {
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  const beneficiosClaveData = [
    {
      name: 'Diagnóstico de madurez digital',
      text: 'Diagnostica la madurez digital real de tu empresa.',
      icon: <FiTrendingUp width='24px' height='24px' color='white' />,
    },

    {
      name: 'Hoja de ruta estratégica',
      text: 'Diseñar una hoja de ruta tecnológica y estratégica clara.',
      icon: <MdOutlineRoute width='24px' height='24px' color='white' />,
    },

    {
      name: 'Automatización inteligente',
      text: 'Automatice procesos clave y conecte sistemas de forma inteligente.',
      icon: <BsDiagram3 width='24px' height='24px' color='white' />,
    },

    {
      name: 'Soluciones centradas en IA',
      text: 'Implementar soluciones tecnológicas centradas en IA, eficiencia y resultados.',
      icon: <AiOutlineRobot width='24px' height='24px' color='white' />,
    },
    {
      name: 'Gestión del cambio',
      text: 'Apoye a su equipo durante el cambio, garantizando la adopción y la sostenibilidad.',
      icon: <ChangeCircle width='24px' height='24px' color='white' />,
    },
  ]

  const aplicacionesIndustrialesData = [
    {
      name: 'Manufactura y bienes de consumo',
      text: 'Transformar la producción y las experiencias del consumidor',
      icon: <Factory width='24px' height='24px' color='white' />,
    },

    {
      name: 'Salud y ciencias de la vida',
      text: 'Innovar en la atención al paciente y las capacidades de investigación',
      icon: <GiHealthNormal width='24px' height='24px' color='white' />,
    },

    {
      name: 'Logística y venta minorista',
      text: 'Optimizar las cadenas de suministro y los recorridos de los clientes',
      icon: <ConveyorBelt width='24px' height='24px' color='white' />,
    },
  ]

  return (
    <div className={styles.container_home}>
      <div className={styles.background}></div>
      <div className={styles.container} id='home'>
        <div className={styles.titles}>
          <span className={styles.subtitle} ref={subtitleRef}>
            <span className={styles.circle} />
            SymbioNet & Redix
          </span>
          <h1 ref={titleRef}>
            Una Alianza que combina estrategia, innovación y tecnología
          </h1>
          <p ref={descriptionRef}>
            Con REDIX combinamos estrategia y tecnología para transformar las
            organizaciones. Una colaboración diseñada para impulsar el impacto,
            la eficiencia y el crecimiento sostenible.
          </p>
        </div>

        <div className={styles.alianza_container}>
          <SectionCards
            mainTitle={'Beneficios clave'}
            solutionsData={beneficiosClaveData}
          />

          {/* <SectionCards
            mainTitle={'Aplicaciones industriales'}
            solutionsData={aplicacionesIndustrialesData}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default AlianzasRoutes
