import FaChartLine from '@/assets/icons/FaChartLine'
import FaHeartbeat from '@/assets/icons/FaHeartbeat'
import FaIndustry from '@/assets/icons/FaIndustry'
import Gears from '@/assets/icons/Gears'

export const techStackData = [
  {
    title: 'Supply Chain',
    description:
      'Colaboramos en la digitalización de procesos logísticos, desde la planificación hasta la ejecución en campo.',
    icon: <Gears color='white' />,
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Acompañamos a organizaciones del sector salud en su transformación digital, optimizando procesos clave y gestión de datos.',
    icon: <FaHeartbeat color='white' />,
  },
  {
    title: 'Finance',
    description:
      'Desarrollamos soluciones tecnológicas adaptadas a los desafíos del sector financiero, mejorando control y eficiencia.',
    icon: <FaChartLine color='white' />,
  },
  {
    title: 'Consumer Goods & Manufacturing',
    description:
      'Impulsamos la eficiencia operativa con tecnología a medida para cada etapa de la producción y distribución.',
    icon: <FaIndustry color='white' />,
  },
]
