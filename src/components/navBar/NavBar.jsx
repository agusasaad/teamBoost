"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import Hamburguer from "@/assets/icons/Hamburguer";
import Image from "next/image";
import logo from "@/assets/images/logo_3.svg";
import { AnimationNav } from "./AnimationNav";
import Link from "next/link";

const NavBar = () => {
  const whatsappNumber = "5493518001877";
  const message = encodeURIComponent(
    "Hola, estoy interesado en los servicios de SymbioNet, como desarrollo web personalizado, consultoría IT y automatización de procesos. ¡Me gustaría recibir más información!"
  );

  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const homeRef = useRef(null);
  const solutionsRef = useRef(null);
  const companyRef = useRef(null);
  const resourcesRef = useRef(null);
  const alianzas = useRef(null);
  const contactUsRef = useRef(null);
  const pymesRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    AnimationNav(
      containerRef.current,
      logoRef.current,
      homeRef.current,
      solutionsRef.current,
      companyRef.current,
      resourcesRef.current,
      pymesRef.current,
      alianzas.current,
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
            <Link
              passHref
              href={"/#home"}
              onClick={() => setShowMenu(false)}
              title="Inicio"
            >
              <li ref={homeRef}>Inicio</li>
            </Link>
            <Link
              passHref
              href={"/#solutions"}
              onClick={() => setShowMenu(false)}
              title="Soluciones"
            >
              <li ref={solutionsRef}>Soluciones</li>
            </Link>
            <Link
              passHref
              href={"/#tech-stack"}
              onClick={() => setShowMenu(false)}
              title="Industrias"
            >
              <li ref={companyRef}>Industrias</li>
            </Link>
            <Link
              passHref
              href={"/#about"}
              onClick={() => setShowMenu(false)}
              title="Nosotros"
            >
              <li ref={resourcesRef}>Nosotros</li>
            </Link>
            <Link
              passHref
              href={"/pymes"}
              onClick={() => setShowMenu(false)}
              title="Pymes"
            >
              <li ref={pymesRef}>Pymes</li>
            </Link>

            <Link
              passHref
              href={"/#alianza"}
              onClick={() => setShowMenu(false)}
              title="Alianzas"
            >
              <li ref={alianzas}>Alianzas</li>
            </Link>

            <Link
              passHref
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu(false)}
              title="Contactanos"
            >
              <li ref={contactUsRef}>
                <button className={styles.button_contact}>Contáctanos</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.hamburguer} ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="hamburguer"
          >
            <Hamburguer
              showMenu={showMenu}
              color="white"
              width="32px"
              height="32px"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
