import Image from 'next/image'
import styles from './Footer.module.css'
import logo from '@/assets/images/hkNOUpX9NKkfNMGFjYql6SpzfQ.svg'
import Link from 'next/link'
import BarChart from '@/assets/icons/BarChart'
import Facebook from '@/assets/icons/Facebook'
import Linkedin from '@/assets/icons/Linkedin'
import Instagram from '@/assets/icons/Instagram'
import Phone from '@/assets/icons/Phone'
import Email from '@/assets/icons/Email'
import Location from '@/assets/icons/Location'
import Arrow from '@/assets/icons/Arrow'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info_text}>
        <h2>Empower your business with innovative solutions</h2>
        <p>
          Boost your business with innovative solutions and strengthen customer
          relationships.
        </p>
        <div className={styles.button_contact}>
          <button>
            Schedule Your Appointment
            <Arrow width='20px' height='20px' />
          </button>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footer_cotainer}>
        <div className={styles.all_content}>
          <div className={styles.navigation_container}>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt='Logo'
                width={100}
                height={100}
                style={{ width: '100px', height: 'auto' }}
              />
              <p>Transform your business with SymbioNet.</p>
            </div>
            <div className={styles.list_page}>
              <h5>Navigation</h5>
              <ul>
                <Link href={'/'}>
                  <li>Home</li>
                </Link>
                <Link href={'/'}>
                  <li>Solutions</li>
                </Link>
                <Link href={'/'}>
                  <li>Company</li>
                </Link>
                <Link href={'/'}>
                  <li>Resources</li>
                </Link>
              </ul>
            </div>
            <div className={styles.list_contact}>
              <h5>Contact</h5>
              <ul>
                <Link href={'/'}>
                  <li>
                    <Phone width='18px' height='18px' /> +1 (123) 456-7890
                  </li>
                </Link>
                <Link href={'/'}>
                  <li>
                    <Email width='18px' height='18px' /> symbionet@gmail.com
                  </li>
                </Link>
                <Link href={'/'}>
                  <li>
                    <Location width='18px' height='18px' /> Cordoba, Argentina
                  </li>
                </Link>
              </ul>
            </div>
            <div className={styles.list_social}>
              <h5>Follow us</h5>
              <ul>
                <Link href={'/'}>
                  <li>
                    <Facebook width='18px' height='18px' />
                  </li>
                </Link>
                <Link href={'/'}>
                  <li>
                    <Linkedin width='18px' height='18px' />
                  </li>
                </Link>
                <Link href={'/'}>
                  <li>
                    <Instagram width='18px' height='18px' />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.copyright}>
            <p>© 2023 SymbioNet. All rights reserved</p>
            <p>
              Desing by <strong>SymbioNet</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
