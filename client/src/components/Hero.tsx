import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SCHEDULING_URL } from "@/lib/booking";
import heroImagePath from "@assets/kbvisualz-current/kbv-02.jpg";
import portraitOne from "@assets/kbvisualz-current/kbv-10.jpg";
import portraitTwo from "@assets/kbvisualz-current/kbv-01.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const motionFrames = [
    {
      image: portraitOne,
      label: "Outdoor Portraits",
      className: "left-[5%] top-[23%] hidden w-[16vw] min-w-[180px] md:block"
    },
    {
      image: portraitTwo,
      label: "Studio Presence",
      className: "right-[6%] top-[18%] hidden w-[20vw] min-w-[230px] lg:block"
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !heroRef.current) {
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let mounted = true;

    void import("gsap").then(({ default: gsap }) => {
      if (!mounted || !heroRef.current) {
        return;
      }

      ctx = gsap.context(() => {
        gsap.to(".hero-float-frame", {
          y: -14,
          rotate: 0.5,
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.9
        });
      }, heroRef);
    });

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImagePath}
          alt="Seated studio fashion portrait by KB Visualz"
          className="h-full w-full object-cover object-[63%_center]"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/52"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.32),rgba(0,0,0,0.94))]"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent"></div>
      </div>

      {motionFrames.map((frame, index) => (
        <motion.div
          key={frame.label}
          className={`hero-float-frame absolute z-10 overflow-hidden border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md ${frame.className}`}
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.35 + index * 0.12 },
            y: { duration: 0.8, delay: 0.35 + index * 0.12 }
          }}
        >
          <img src={frame.image} alt={`${frame.label} by KB Visualz`} className="aspect-[4/5] h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-[0.68rem] uppercase text-white/80">
            {frame.label}
          </div>
        </motion.div>
      ))}

      <div className="relative z-20 flex min-h-screen flex-col justify-end px-5 pb-12 pt-28 md:px-12 md:pb-16 lg:px-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-xs uppercase text-white/72"
          >
            Orlando / Central Florida / Portrait Work
          </motion.div>

          <motion.h1
            className="editorial-headline max-w-6xl text-[18vw] leading-[0.78] text-white md:text-[11vw] lg:text-[9.2rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Portraits with presence.
          </motion.h1>

          <motion.div
            initial={{ y: 28 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.95 }}
            className="mt-8 grid gap-6 border-t border-white/20 pt-6 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-2xl text-base leading-relaxed text-white/76 md:text-lg">
              Graduation, branding, family, and creative portraits shaped with
              direction, atmosphere, and a calm eye for the final frame.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button site-button--dark"
              >
                Plan a Session
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/portfolio" className="site-button site-button--outline-light">
                View Work
              </a>
            </div>
          </motion.div>

          <motion.a
            href="#selected-work"
            className="lookbook-next mt-8 w-full text-white/90 md:ml-auto md:max-w-sm"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
          >
            <span>
              <span className="lookbook-next__meta">Next / 01</span>
              Selected Work
            </span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
