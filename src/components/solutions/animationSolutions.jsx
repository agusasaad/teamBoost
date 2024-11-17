import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const AnimationSolutions = (containerRef, titleRef, cards) => {
  gsap.registerPlugin(ScrollTrigger)
  const start = 'top 70%'
  const startMobile = 'top 60%'
  gsap.fromTo(
    [titleRef, cards],
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
        trigger: containerRef,
        start: window.innerWidth > 1024 ? start : startMobile,
        end: 'bottom ',
      },
    }
  )
}
