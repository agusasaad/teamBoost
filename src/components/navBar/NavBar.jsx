"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import Hamburguer from "@/assets/icons/Hamburguer";
import Image from "next/image";
import logo from "@/assets/images/logo_3.svg";
import { AnimationNav } from "./AnimationNav";
import Link from "next/link";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const homeRef = useRef(null);
  const solutionsRef = useRef(null);
  const companyRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactUsRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    AnimationNav(
      containerRef.current,
      logoRef.current,
      homeRef.current,
      solutionsRef.current,
      companyRef.current,
      resourcesRef.current,
      contactUsRef.current,
      menuRef.current
    );
  });
  return (
    <header className={styles.containerNav} ref={containerRef}>
      <nav className={`${styles.nav} ${showMenu ? styles.show : ""}`}>
        <div className={styles.logo} ref={logoRef}>
          <Image src={logo} alt="Logo" width={200} height={200} />
        </div>
        <div className={styles.menu}>
          <ul>
            <Link passHref href={"/#home"}>
              <li ref={homeRef}>Home</li>
            </Link>
            <Link passHref href={"/#solutions"}>
              <li ref={solutionsRef}>Solutions</li>
            </Link>
            <Link passHref href={"/#tech-stack"}>
              <li ref={companyRef}>Tech Stack</li>
            </Link>
            <Link passHref href={"/#about"}>
              <li ref={resourcesRef}>About Us</li>
            </Link>
            <Link passHref href={"/#contact-us"}>
              <li ref={contactUsRef}>
                <button className={styles.button_contact}>Contact Us</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.hamburguer} ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <Hamburguer color="white" width="32px" height="32px" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
