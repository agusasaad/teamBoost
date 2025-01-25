import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const AnimateAboutUs = (subtitle, title, text, caripelas) => {
  gsap.registerPlugin(ScrollTrigger)

  if (window.innerWidth < 650) {
    return gsap.fromTo(
      [subtitle, caripelas],
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power1',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
          end: 'bottom',
        },
      }
    )
  }

  if (title) {
    // Verifica si ya contiene spans
    if (!title.querySelector('span')) {
      const words = title.textContent.split(' ')
      title.innerHTML = ''

      words.forEach((word) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.display = 'inline-block'
        span.style.marginRight = window.innerWidth < 1024 ? '10px' : '15px'
        title.appendChild(span)
      })
    }
  }

  const spans = title.querySelectorAll('span')

  gsap.fromTo(
    spans,
    {
      y: 5,
      opacity: 0,
      filter: 'blur(10px)',
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      stagger: 0.1,
      ease: 'power1',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom',
      },
    }
  )

  gsap.fromTo(
    [text, caripelas],
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.1,
      delay: 0.8,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom',
      },
    }
  )
}
