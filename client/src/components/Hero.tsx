import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { SCHEDULING_URL } from "@/lib/booking";
import heroImagePath from "@assets/kbvisualz-current/kbv-02.jpg";
import portraitOne from "@assets/kbvisualz-current/kbv-10.jpg";
import portraitTwo from "@assets/kbvisualz-current/kbv-01.jpg";
import portraitThree from "@assets/kbvisualz-current/kbv-09.jpg";

const Hero = () => {
  const motionFrames = [
    {
      image: portraitOne,
      label: "Outdoor Portraits",
      className: "left-[6%] top-[20%] hidden w-[18vw] min-w-[190px] md:block"
    },
    {
      image: portraitTwo,
      label: "Studio Presence",
      className: "right-[7%] top-[17%] hidden w-[22vw] min-w-[240px] lg:block"
    },
    {
      image: portraitThree,
      label: "Editorial Color",
      className: "right-[16%] bottom-[10%] hidden w-[15vw] min-w-[170px] md:block"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImagePath}
          alt="Seated studio fashion portrait by KB Visualz"
          className="h-full w-full object-cover object-[63%_center]"
          initial={{ scale: 1.08, filter: "blur(8px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.92))]"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent"></div>
      </div>

      {motionFrames.map((frame, index) => (
        <motion.div
          key={frame.label}
          className={`absolute z-10 overflow-hidden border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md ${frame.className}`}
          initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: [0, -10, 0], filter: "blur(0px)" }}
          transition={{
            opacity: { duration: 1.2, delay: 0.55 + index * 0.18 },
            filter: { duration: 1.2, delay: 0.55 + index * 0.18 },
            y: { duration: 8 + index, repeat: Infinity, ease: "easeInOut", delay: 1 + index * 0.35 }
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
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-xs uppercase text-white/72"
          >
            Orlando / Central Florida / Portrait Work
          </motion.div>

          <motion.h1
            className="editorial-headline max-w-6xl text-[18vw] leading-[0.78] text-white md:text-[11vw] lg:text-[9.2rem]"
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Portraits with presence.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
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
                className="site-button site-button--light"
              >
                Plan a Session
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/portfolio" className="site-button site-button--outline-light">
                View Work
              </a>
              <a
                href="https://www.instagram.com/kbvisualz_?igsh=N20ybjQyN3JoY2ox"
                target="_blank"
                rel="noopener noreferrer"
                className="site-button site-button--outline-light"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 right-5 z-20 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase text-white/70 backdrop-blur-md md:block"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.9 }}
      >
        <motion.span
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          Scroll
        </motion.span>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-white/10 bg-black/20 py-3 backdrop-blur-md">
        <motion.div
          className="flex w-max gap-8 text-xs uppercase text-white/55"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, group) => (
            <div key={group} className="flex gap-8">
              <span>Graduation Portraits</span>
              <span>Branding Sessions</span>
              <span>Creative Editorials</span>
              <span>Family Portraits</span>
              <span>Studio Work</span>
              <span>Central Florida</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
