import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const AnimateAboutUs = (title, subtitle, caripelas) => {
  gsap.registerPlugin(ScrollTrigger);

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
        ease: "power1",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "bottom",
        },
      }
    );
  }

  if (title) {
    if (!title.querySelector("span")) {
      const letters = title.textContent.split("");
      title.innerHTML = "";

      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";

        if (index === 3) {
          span.style.marginRight = "20px";
        }

        title.appendChild(span);
      });
    }
  }

  const spans = title.querySelectorAll("span");

  spans.forEach((span, index) => {
    gsap.fromTo(
      span,
      {
        y: 10,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.inOut",
        delay: index * 0.05,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "bottom",
        },
      }
    );
  });
};
