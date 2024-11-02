'use client'
import { useState } from 'react'
import styles from './NavBar.module.css'
import Hamburguer from '@/assets/icons/Hamburguer'
import Image from 'next/image'
import logo from '@/assets/images/hkNOUpX9NKkfNMGFjYql6SpzfQ.svg'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className={styles.containerNav}>
      <div className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt='Logo'
            width={100}
            height={100}
            style={{ width: '100px', height: 'auto' }}
          />
        </div>
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>Solutions</li>
            <li>Company</li>
            <li>Resources</li>
            <li>
              <button className={styles.button_contact}>Contact Us</button>
            </li>
          </ul>
        </div>
        <div className={styles.hamburguer}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <Hamburguer color='white' width='32px' height='32px' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
