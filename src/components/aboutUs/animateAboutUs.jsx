import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const AnimateAboutUs = (subtitle, title, text, images, caripelas) => {
  gsap.registerPlugin(ScrollTrigger)

  // Animación para el título
  const titleLetters = title.textContent.split('')
  title.textContent = ''
  titleLetters.forEach((letter) => {
    const span = document.createElement('span')
    span.textContent = letter === ' ' ? '\u00A0' : letter
    span.style.display = 'inline-block'
    title.appendChild(span)
  })

  const titleSpans = title.querySelectorAll('span')

  // Animación para el párrafo
  const paragraphLetters = text.textContent.split('')
  text.textContent = ''
  paragraphLetters.forEach((letter) => {
    const span = document.createElement('span')
    span.textContent = letter === ' ' ? '\u00A0' : letter
    span.style.display = 'inline-block'
    text.appendChild(span)
  })

  const paragraphSpans = text.querySelectorAll('span')

  gsap.fromTo(
    [subtitle, title, text, images],
    { opacity: 0, y: 200 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        end: 'bottom',
        // markers: true,
      },
    }
  )

  // Crear un timeline para ambas animaciones
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
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
}
