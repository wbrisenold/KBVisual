import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImagePath from "@assets/kbvisualz-current/kbv-02.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <motion.img
          src={heroImagePath}
          alt="Seated studio fashion portrait by KB Visualz"
          className="h-full w-full object-cover object-[63%_center]"
          fetchpriority="high"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/52"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.32),rgba(0,0,0,0.94))]"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent"></div>
      </div>

      <div className="relative flex min-h-[100dvh] flex-col justify-end px-5 pb-12 pt-28 md:px-12 md:pb-16 lg:px-20">
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
              <a href="/portfolio" className="site-button site-button--dark">
                View Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/#contact" className="site-button site-button--outline-light">
                Inquire
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
