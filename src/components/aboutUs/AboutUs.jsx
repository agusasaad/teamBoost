"use client";
import { useEffect, useRef } from "react";
import styles from "./AboutUs.module.css";
import { AnimateAboutUs } from "./animateAboutUs";
import caripela_1 from "@/assets/images/caripelas/caripela_1.webp";
import caripela_2 from "@/assets/images/caripelas/cariplea_2.webp";
import caripela_3 from "@/assets/images/caripelas/caripela_3.webp";
import caripela_4 from "@/assets/images/caripelas/caripela_4.webp";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const arr = [
    {
      img: caripela_2,
      name: "Agustín Asaad",
      link: "https://www.linkedin.com/in/agustin-asaad/",
    },
    {
      img: caripela_3,
      name: "Federico Asaad",
      link: "https://www.linkedin.com/in/federicoasaad/",
    },
    {
      img: caripela_1,
      name: "Fernanda Romay",
      link: "https://www.linkedin.com/in/fernanda-romay-511bb31a3/",
    },
    {
      img: caripela_4,
      name: "Manuel Carballido",
      link: "https://www.linkedin.com/in/mcarballido/",
    },
  ];
  const subtitle = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const caripelas = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    AnimateAboutUs(
      subtitle.current,
      title.current,
      text.current,
      caripelas.current
    );
  }, []);

  return (
    <div className={styles.container} id="about">
      <div className={styles.info_text}>
        <span className={styles.subtitle} ref={subtitle}>
          <span className={styles.circle}></span>Team{" "}
          <strong>SymbioNet.</strong>
        </span>
        <h2 ref={title}>Transformando ideas en soluciones efectivas</h2>
        <p ref={text}>
          Automatizamos procesos manuales para potenciar equipos, brindando
          soluciones efectivas y sostenibles en el desarrollo de software web.
        </p>
      </div>
      <div className={styles.caripelas} ref={caripelas}>
        {arr.map((item, index) => (
          <Link
            key={index}
            ref={(el) => (images.current[index] = el)}
            className={styles.cards}
            href={item.link}
            target="_blank"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={700}
              height={700}
              loading="lazy"
              quality={90}
            />
            <div className={styles.info_caripela}>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
