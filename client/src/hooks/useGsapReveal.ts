import { useEffect, useRef } from "react";

export function useGsapReveal<T extends HTMLElement>(options?: { delay?: number; y?: number }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.from(el, {
            y: options?.y ?? 30,
            opacity: 0,
            duration: 0.7,
            delay: options?.delay ?? 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });
        });
      });
    });

    return () => ctx?.revert();
  }, []);

  return ref;
}
