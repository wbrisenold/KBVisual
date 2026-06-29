import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLocation } from "wouter";
import { SCHEDULING_URL } from "@/lib/booking";
import heroImagePath from "@assets/lr-portrait-garden-seated.jpg";

const Hero = () => {
  const [, navigate] = useLocation();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImagePath}
          alt="Outdoor portrait session by KB Visualz"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.85] tracking-[-0.02em] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            KB VISUALZ
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.1em] uppercase mb-4 opacity-90">
              Ken Brisenold
            </h2>
            <p className="text-sm md:text-base tracking-[0.15em] uppercase opacity-70">
              Portrait Photography - Orlando, Florida
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-80">
              Individual portrait sessions for graduation, prom, fashion, family, branding, and personal storytelling.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={() => navigate("/portfolio")}
              className="px-8 py-4 bg-white text-black text-sm tracking-[0.15em] uppercase font-medium hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
            <motion.a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Session
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center space-x-8"
          >
            <motion.a
              href="https://www.instagram.com/kbvisualz_?igsh=N20ybjQyN3JoY2ox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center space-x-2">
                <Instagram size={20} />
                <span className="text-sm tracking-[0.15em] uppercase">Instagram</span>
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
