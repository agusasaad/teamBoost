import gsap from 'gsap'

export const AnimateHeader = (
  subtitleRef,
  titleRef,
  descriptionRef,
  buttonRef,
  rankingRef
) => {
  gsap.fromTo(
    [subtitleRef, titleRef, descriptionRef, buttonRef, rankingRef],
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power1.out',
      stagger: 0.1,
    }
  )

  const elements = document.getElementsByClassName('ranking_span')

  Array.from(elements).forEach((item) => {
    const textContent = item.textContent.trim()
    const targetValue = parseInt(textContent.replace('+', '')) || 0

    gsap.to(
      { value: 0 },
      {
        value: targetValue,
        duration: 1.5,
        delay: 0.3,
        ease: 'power1.out',
        onUpdate: function () {
          item.textContent = `+ ${Math.floor(this.targets()[0].value)}`
        },
      }
    )
  })
}
