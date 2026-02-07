import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initSmoothScroll = () => {
  const content = document.querySelector("#smooth-content");
  let currentY = 0;
  let targetY = 0;
  const ease = 0.08; // lower = smoother

  const update = () => {
    targetY = window.scrollY;
    currentY += (targetY - currentY) * ease;

    gsap.set(content, {
      y: -currentY,
    });

    ScrollTrigger.update();
    requestAnimationFrame(update);
  };

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        window.scrollTo(0, value);
      }
      return window.scrollY;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  update();
};
