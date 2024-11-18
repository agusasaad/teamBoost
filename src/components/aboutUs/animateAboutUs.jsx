import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const AnimateAboutUs = (images) => {
  gsap.registerPlugin(ScrollTrigger)

  // Animación para el título
  const titleElement = document.querySelector('.title_about')
  const titleLetters = titleElement.textContent.split('')
  titleElement.textContent = ''
  titleLetters.forEach((letter) => {
    const span = document.createElement('span')
    span.textContent = letter === ' ' ? '\u00A0' : letter
    span.style.display = 'inline-block'
    titleElement.appendChild(span)
  })

  const titleSpans = titleElement.querySelectorAll('span')

  // Animación para el párrafo
  const paragraphElement = document.querySelector('.text_about')
  const paragraphLetters = paragraphElement.textContent.split('')
  paragraphElement.textContent = ''
  paragraphLetters.forEach((letter) => {
    const span = document.createElement('span')
    span.textContent = letter === ' ' ? '\u00A0' : letter
    span.style.display = 'inline-block'
    paragraphElement.appendChild(span)
  })

  const paragraphSpans = paragraphElement.querySelectorAll('span')

  // Crear un timeline para ambas animaciones
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top 100%',
      end: 'center+=400 bottom',
      scrub: 2,
    },
  })

  // Agregar animación del título al timeline
  timeline.fromTo(
    titleSpans,
    { color: '#ffffff', opacity: 0.1 },
    {
      opacity: 1,
      color: '#FFFFFF',
      stagger: 1,
      ease: 'none',
    }
  )

  // Agregar animación del párrafo al timeline
  timeline.fromTo(
    paragraphSpans,
    { color: '#ffffff', opacity: 0.1 },
    {
      opacity: 1,
      color: 'rgb(209, 209, 209)',
      stagger: 0.1, // Diferente velocidad para el párrafo
      ease: 'none',
    }
  )

  gsap.fromTo(
    images,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#about',
        start: 'top+=200 50%',
        end: 'bottom',
        // markers: true,
      },
    }
  )
}
