import BackEnd from '@/assets/icons/BackEnd'
import BarChart from '@/assets/icons/BarChart'
import Code from '@/assets/icons/Code'
import Gears from '@/assets/icons/Gears'
import UxUi from '@/assets/icons/UxUi'
import background_one from '@/assets/images/blue-panes-made-from-glass-blue-colored-light-2.png'
import background_two from '@/assets/images/close-up-of-glossy-shape-with-strong-purple-hue.jpg'
import background_three from '@/assets/images/OvtpaqjRFnLA5N6ElYKmvrPMw.jpg'

export const solutionsData = [
  {
    name: 'IT Consulting and Advisory',
    text: 'Expert guidance to optimize your IT infrastructure and strategy, ensuring alignment with your business goals.',
    icon: <UxUi width='24px' height='24px' color='white' />,
    background: background_two.src,
  },

  {
    name: 'Web Development',
    text: 'Custom web development solutions to build responsive, high-performance websites that engage and convert your audience.',
    icon: <BackEnd width='24px' height='24px' color='white' />,
    background: background_one.src,
  },

  {
    name: 'Process Automation',
    text: 'Streamline your operations with automation solutions that reduce manual work and increase efficiency.',
    icon: <Gears width='24px' height='24px' color='white' />,
    background: background_three.src,
  },
]
