"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "@/assets/images/logo_3.svg";
import Link from "next/link";
import Facebook from "@/assets/icons/Facebook";
import Linkedin from "@/assets/icons/Linkedin";
import Instagram from "@/assets/icons/Instagram";
import Phone from "@/assets/icons/Phone";
import Email from "@/assets/icons/Email";
import Location from "@/assets/icons/Location";
import Arrow from "@/assets/icons/Arrow";
import { useEffect, useRef } from "react";
import { AnimateFooter } from "./animateFooter";

const Footer = () => {
  const containerBannerRef = useRef(null);
  const titleRef = useRef(null);
  const descripotionRef = useRef(null);
  const buttonRef = useRef(null);
  const containerFooterRef = useRef(null);
  const logoRef = useRef(null);
  const navigationRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialMediaRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const text_twoRef = useRef(null);

  useEffect(() => {
    AnimateFooter(
      containerBannerRef.current,
      titleRef.current,
      descripotionRef.current,
      buttonRef.current,
      containerFooterRef.current,
      logoRef.current,
      navigationRef.current,
      contactInfoRef.current,
      socialMediaRef.current,
      lineRef.current,
      textRef.current,
      text_twoRef.current
    );
  }, []);

  return (
    <footer className={styles.container_footer}>
      <div className={styles.container}>
        <div className={styles.info_text} ref={containerBannerRef}>
          <h2 ref={titleRef}>
            Potencia tu negocio con soluciones innovadoras.
          </h2>
          <p ref={descripotionRef}>
            Impulsa tu negocio con soluciones innovadoras y fortalece las
            relaciones con tus clientes.
          </p>
          <div className={styles.button_contact} ref={buttonRef}>
            <Link
              passHref
              href={"https://calendly.com/fecotechsolutions/30min"}
              target="_blank"
            >
              <button>
                Programa tu consulta gratuita.
                <Arrow width="20px" height="20px" />
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.footer_cotainer} ref={containerFooterRef}>
          <div className={styles.all_content}>
            <div className={styles.navigation_container}>
              <div className={styles.logo} ref={logoRef}>
                <Image
                  src={logo}
                  alt="Logo"
                  width={160}
                  height={100}
                  style={{ width: "160px", height: "auto" }}
                />
                <p>Transforma tu negocio con SymbioNet.</p>
              </div>
              <div className={styles.list_page} ref={navigationRef}>
                <h5>Navegación</h5>
                <ul>
                  <Link href={"/#home"}>
                    <li>Inicio</li>
                  </Link>
                  <Link href={"/#solutions"}>
                    <li>Soluciones</li>
                  </Link>
                  <Link href={"/#tech-stack"}>
                    <li>Stack Tecnológico</li>
                  </Link>
                  <Link href={"/#contact-us"}>
                    <li>Nosotros</li>
                  </Link>
                </ul>
              </div>
              <div className={styles.list_contact} ref={contactInfoRef}>
                <h5>Contacto</h5>
                <ul>
                  <Link href={"/"}>
                    <li>
                      <Phone width="18px" height="18px" /> +54 9 3518031826
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li>
                      <Email width="18px" height="18px" /> somos@symbionet.tech
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li>
                      <Location width="18px" height="18px" /> Argentina
                    </li>
                  </Link>
                </ul>
              </div>
              <div className={styles.list_social} ref={socialMediaRef}>
                <h5>Síguenos</h5>
                <ul>
                  <Link href={"/"}>
                    <li>
                      <Facebook width="18px" height="18px" />
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li>
                      <Linkedin width="18px" height="18px" />
                    </li>
                  </Link>
                  <Link href={"/"}>
                    <li>
                      <Instagram width="18px" height="18px" />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className={styles.line} ref={lineRef}></div>
            <div className={styles.copyright}>
              <p ref={textRef}>
                © {new Date().getFullYear()}
                SymbioNet. Todos los derechos reservados.
              </p>
              <p ref={text_twoRef}>
              Diseñado por <strong>SymbioNet.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
