import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const AnimateFooter = (
  containerBannerRef,
  titleRef,
  descripotionRef,
  buttonRef,
  containerFooterRef,
  logoRef,
  navigationRef,
  contactInfoRef,
  socialMediaRef,
  lineRef,
  textRef,
  text_twoRef
) => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerFooterRef,
      start: 'top 70%',
      end: 'bottom',
    },
  })
  gsap.fromTo(
    [titleRef, descripotionRef, buttonRef],
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
      scrollTrigger: {
        trigger: containerBannerRef,
        start: 'top 70%',
        end: 'bottom ',
      },
    }
  )

  tl.fromTo(
    [logoRef, navigationRef, contactInfoRef, socialMediaRef],
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1',
      stagger: 0.2,
    }
  )
    .add(
      gsap.fromTo(
        lineRef,
        {
          width: 0,
        },
        {
          width: '100%',
          duration: 0.8,
          ease: 'power1',
        }
      ),
      '<'
    )
    .add(
      gsap.fromTo(
        [textRef, text_twoRef],
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power1',
          stagger: 0.1,
        }
      ),
      '<'
    )
}
