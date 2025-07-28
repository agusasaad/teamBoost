import styles from './Clientes.module.css'
import image_cliente from '@/assets/images/Santi Luque b health.webp'
import image_cliente_2 from '@/assets/images/ecolink.jpg'
import Image from 'next/image'

const Clientes = () => {
  const clientes = [
    {
      id: 1,
      name: 'Optimización de procesos con B.Health',
      cargo: 'FOUNDER',
      name_cliente: 'Santiago Luque',
      sector: 'Salud digital',
      review:
        'Trabajar en conjunto nos permitió desarrollar una solución más sólida, escalable y alineada a nuestras necesidades. Confiamos plenamente en que siempre aportarán valor para seguir mejorando nuestro producto.',
      imagen: image_cliente,
    },
    {
      id: 2,
      name: 'Transformación tecnológica con Ecolink',
      cargo: 'FOUNDER',
      name_cliente: 'Federico Gauna',
      sector: 'Salud digital',
      review:
        'Valoro mucho cada conversación con el equipo, ya que juntos logramos encontrar la mejor solución tecnológica para nuestra logística, que es compleja. Son nuestros consultores de tecnología de confianza.',
      imagen: image_cliente_2,
    },
  ]
  return (
    <div className={styles.container}>
      <h2>Nuestros clientes</h2>

      <div className={styles.container_cards}>
        {clientes.map((cliente, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.header}>
              <Image
                src={cliente.imagen}
                alt={'foto-cliente'}
                width={50}
                height={50}
              />
              <div className={styles.text}>
                <h3>{cliente.name}</h3>
                <span>{cliente.name_cliente}</span>
                <strong>
                  {cliente.cargo} · <span>{cliente.sector}</span>
                </strong>
              </div>
            </div>
            <div className={styles.body}>
              <p>{cliente.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clientes
