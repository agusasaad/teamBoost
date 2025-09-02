"use client";
import React, { useState, useEffect } from "react";
import styles from "./pymes.module.css";
import UsersIcon from "@/assets/icons/UsersIcon";
import Link from "next/link";
import Modal from "../modal/Modal";
import FiTrendingUp from "@/assets/icons/FiTrendingUp";
import { FaBullseye, FaClock } from "react-icons/fa";
import { FiMessageSquare, FiMap, FiZap, FiCheckCircle } from "react-icons/fi";

const PymesComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScFbO3puoPLgKdHSimtLP3VbSOciPVNy7XI5CVy5dQWXB_OdQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>
            <UsersIcon color="#5E5FF8" />
            Especial PyMEs - Evento
          </span>
          <h1>
            Ayudamos a las pymes a crecer con tecnología aplicada + IA a sus
            procesos reales
          </h1>

          <p>
            Te mostramos cómo aplicar la Inteligencia Artificial en ventas,
            operaciones y decisiones estratégicas. Desde chatbots para no perder
            clientes hasta dashboards predictivos para gestionar mejor.
          </p>
        </div>

        <div className={styles.container_button}>
          <a
            href="https://calendly.com/contacto-symbionet/reunion-gratuita"
            target="_blank"
            title="Agendá tu consultoría gratuita de implementación tecnológica"
          >
            Agendá tu consultoría gratuita de implementación tecnológica
          </a>
        </div>

        <div className={styles.pymesContainer}>
          <h2 className={styles.title}>
            Impactos típicos de implementaciones simples (3–8 semanas)
          </h2>

          <div className={styles.pymesCards}>
            <div className={styles.card}>
              <span>
                <FaClock fontSize={22} />
              </span>

              <h3>30–50%</h3>
              <p>
                menos tiempo
                <br />
                operativo
              </p>
            </div>
            <div className={styles.card}>
              <span>
                <FiTrendingUp width="22px" height="22px" color="white" />
              </span>

              <h3>+15–25%</h3>
              <p>
                oportunidades
                <br />
                ganadas
              </p>
            </div>
            <div className={styles.card}>
              <span>
                <FaBullseye fontSize={22} color="white" />
              </span>

              <h3>100%</h3>
              <p>
                trazabilidad
                <br />
                de leads
              </p>
            </div>
          </div>

          <p className={styles.note}>
            *Resultados varían según el punto de partida y el alcance.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          <h1>¿Cómo funciona?</h1>

          <div className={styles.stepsCards}>
            <div className={styles.stepCard}>
              <span>1</span>
              <FiMessageSquare className={styles.icon} />
              <h3>Charla Inicial</h3>
              <p>Consultoría gratuita inicial te escuchamos.</p>
            </div>

            <div className={styles.stepCard}>
              <FiMap className={styles.icon} />
              <h3>
                <span>2</span> Mapa de procesos
              </h3>
              <p>Detectamos cuellos de botella, oportunidades y quick-wins.</p>
            </div>

            <div className={styles.stepCard}>
              <FiZap className={styles.icon} />
              <h3>
                <span>3</span> Propuesta ágil
              </h3>
              <p>
                Diseñamos integraciones y automatizaciones de bajo riesgo y alto
                impacto +IA.
              </p>
            </div>
            <div className={styles.stepCard}>
              <FiCheckCircle className={styles.icon} />
              <h3>
                <span>4</span> Implementación y mejora continua
              </h3>
              <p>
                Ejecutamos rápido, medimos resultados y ajustamos lo necesario.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalContent}>
          {/* Title & Description */}
          <div className={styles.textContainer}>
            <h2>🚀 Llevate guias de IA para tu PyME</h2>
            <p>
              Déjanos tu correo y recibí nuestro newsletter con tips prácticos
              de tecnología e Inteligencia Artificial aplicados a negocios.
            </p>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className={styles.modalForm}>
            <input
              type="email"
              name="entry.111111111"
              placeholder="Tu correo electrónico"
              className={styles.inputForm}
              required
            />

            {/* Suscribe Button */}
            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? "Enviando..." : "Suscribirme"}
            </button>

            {sent && (
              <p className={styles.successText}>✅ ¡Enviado con éxito!</p>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default PymesComponent;
