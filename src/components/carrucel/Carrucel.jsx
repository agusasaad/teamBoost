import styles from './Carrucel.module.css'
import logo_one from '@/assets/images/carrucel/Group 2.png'
import logo_two from '@/assets/images/carrucel/Group 3.png'
import logo_three from '@/assets/images/carrucel/Group 5.png'
import logo_four from '@/assets/images/carrucel/Group.png'
import logo_five from '@/assets/images/carrucel/Group 9.svg'
import Image from 'next/image'

const icons = [logo_one, logo_two, logo_three, logo_four, logo_five]

const Carrucel = () => {
  return (
    <div className={styles.container}>
      <h4>Confian en nosotros</h4>
      <div className={styles.slider}>
        <div className={styles.move}>
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              width={200}
              height={100}
              alt='image-logo'
            />
          ))}
          {icons.map((icon, idx) => (
            <Image
              key={idx}
              src={icon}
              width={200}
              height={100}
              alt='image-logo'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carrucel
