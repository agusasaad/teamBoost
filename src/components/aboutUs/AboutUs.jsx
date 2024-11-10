import Image from 'next/image'
import styles from './AboutUs.module.css'
import image_about from './../../assets/images/AboutUs.avif'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_about}>
        <Image
          src={image_about}
          alt='aboutUs'
          width={1000}
          height={1000}
          style={{
            width: '600px',
            height: '500px',
            objectFit: 'cover',
            objectPosition: 'left',
          }}
        />
      </div>

      <div className={styles.info_text}>
        <span className={styles.subtitle}>ABOUT US</span>
        <h2>Transforming Ideas into Effective Solutions</h2>
        <p>
          With strong expertise in web software development, we optimize manual
          processes through automations that unlock team potential. Beyond
          technology, we’re here to provide comprehensive and effective
          solutions that create a tangible, lasting, and sustainable impact.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
