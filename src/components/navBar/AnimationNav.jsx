import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const AnimationNav = (
  containerRef,
  logoRef,
  homeRef,
  solutionsRef,
  companyRef,
  resourcesRef,
  contactUsRef,
  menuRef
) => {
  if (window.innerWidth < 1024) return
  gsap.fromTo(
    [
      logoRef,
      homeRef,
      solutionsRef,
      companyRef,
      resourcesRef,
      contactUsRef,
      menuRef,
    ],
    {
      opacity: 0,
      x: 200,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.1,
    }
  )

  if (window.innerWidth < 1024) return
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    containerRef,
    {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    {
      background:
        'linear-gradient( 0deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.6895133053221288) 50%,rgba(0, 0, 0, 0.8995973389355743) 72%,rgba(0, 0, 0, 1) 95%)',
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#home',
        start: 'top+=50 top',
        end: 'bottom',
        scrub: true,
      },
    }
  )
}
