import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const animateFAQ = (container, subtitle, title, containerFAQ) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    [subtitle, title, containerFAQ],
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'bottom ',
      },
    }
  )
}
