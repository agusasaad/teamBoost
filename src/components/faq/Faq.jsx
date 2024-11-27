"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Plus from "@/assets/icons/Plus";
import styles from "./Faq.module.css";
import { faqs } from "./faqData";
import { animateFAQ } from "./animateFaq";
import Link from "next/link";

const Faq = () => {
  const whatsappNumber = "5493518031826";
  const message = encodeURIComponent(
    "Hola, tengo algunas preguntas adicionales después de leer las preguntas frecuentes. ¿Podrían ayudarme con más detalles sobre sus servicios?"
  );

  const [openIndexes, setOpenIndexes] = useState([]); // Array para las FAQs abiertas
  const faqRefs = useRef([]); // Referencias para las respuestas
  const iconRefs = useRef([]); // Referencias para los íconos
  const container = useRef(null);
  const subtitle = useRef(null);
  const title = useRef(null);
  const containerFAQ = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    animateFAQ(
      container.current,
      subtitle.current,
      title.current,
      containerFAQ.current,
      contact.current
    );
  }, []);

  const handleToggle = (index) => {
    const isOpen = openIndexes.includes(index);

    if (isOpen) {
      // Cerrar FAQ con animación suave
      const element = faqRefs.current[index];
      gsap.to(element, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setOpenIndexes((prev) => prev.filter((i) => i !== index)); // Eliminar del array después del cierre
        },
      });
      gsap.to(iconRefs.current[index], {
        rotate: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Abrir FAQ con animación suave
      const element = faqRefs.current[index];
      setOpenIndexes((prev) => [...prev, index]); // Añadir al array antes de abrir
      gsap.fromTo(
        element,
        { height: 0 },
        { height: "auto", duration: 0.5, ease: "power2.inOut" }
      );
      gsap.to(iconRefs.current[index], {
        rotate: 45,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.titles}>
        <span className={styles.subtitle} ref={subtitle}>
          FAQ&apos;s
        </span>
        <h2 ref={title}>Tus preguntas respondidas</h2>
      </div>
      <div className={styles.faq} ref={containerFAQ}>
        {faqs.map((faq, index) => (
          <div
            className={`${styles.question}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className={styles.title_button}>
              <h3>{faq.question}</h3>
              <button>
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  style={{ display: "inline-block" }}
                >
                  <Plus />
                </div>
              </button>
            </div>
            <div
              className={styles.answer}
              ref={(el) => (faqRefs.current[index] = el)}
              style={{
                height: 0,
                overflow: "hidden",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.final} ref={contact}>
        <p>
          ¿Tienes más preguntas? {"  "}
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctanos
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Faq;
