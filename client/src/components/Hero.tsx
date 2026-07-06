import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { useLocation } from "wouter";
import { SCHEDULING_URL } from "@/lib/booking";
import heroImagePath from "@assets/kbvisualz-current/kbv-02.jpg";

const Hero = () => {
  const [, navigate] = useLocation();
  const trustCues = [
    "Guided posing",
    "Outdoor + studio options",
    "15-30 polished edits"
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950">
      {/* Large Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImagePath}
          alt="Seated studio fashion portrait by KB Visualz"
          className="h-full w-full object-cover object-[63%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-24 text-white md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <motion.div
            className="mb-5 text-xs font-medium uppercase text-yellow-400 md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            KB Visualz | Ken Brisenold
          </motion.div>
          <motion.h1 
            className="mb-7 font-serif text-5xl font-semibold leading-[0.9] md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Orlando portraits with presence.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-7"
          >
            <p className="max-w-2xl text-lg font-light leading-relaxed text-white/85 md:text-xl">
              Guided portrait sessions for graduation, branding, family, and
              creative work across Central Florida. You get help with posing,
              timing, and location so the session feels calm before it looks
              polished.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-10 grid max-w-2xl grid-cols-1 gap-3 border-y border-white/20 py-5 text-sm text-white/80 sm:grid-cols-3"
          >
            {trustCues.map((cue) => (
              <div key={cue} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                <span>{cue}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-sm font-semibold uppercase text-black transition-all hover:bg-yellow-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Portrait Session
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.button
              onClick={() => navigate("/portfolio")}
              className="border border-white/70 px-7 py-4 text-sm font-semibold uppercase text-white transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See The Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex"
          >
            <motion.a
              href="https://www.instagram.com/kbvisualz_?igsh=N20ybjQyN3JoY2ox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-opacity hover:text-white"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center space-x-2">
                <Instagram size={20} />
                <span className="text-sm uppercase">Instagram</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
