import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const scrollY = useScrollPosition();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Portfolio", href: "/portfolio", section: "02" },
    { name: "About", href: "/about", section: "08" },
    { name: "Pricing", href: "/pricing", section: "14" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 100 ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-base md:text-lg font-medium tracking-wider text-black group-hover:opacity-70 transition-opacity">
                KB VISUALZ
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={item.href}>
                  <div className="group cursor-pointer relative">
                    <div className="text-sm tracking-wider text-black group-hover:opacity-70 transition-opacity uppercase">
                      {item.name}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Year */}
          <div className="hidden md:block text-sm tracking-wider text-black opacity-60">
            2026
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:opacity-70 transition-opacity relative p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? "0%" : "100%" 
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden bg-white"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex-1">
            <motion.div 
              className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Navigation
            </motion.div>
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: isOpen ? index * 0.1 : 0,
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>
                    <div className="py-4 border-b border-black/10 cursor-pointer group">
                      <div className="text-2xl font-light tracking-wider text-black group-hover:opacity-70 transition-opacity uppercase">
                        {item.name}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pb-8">
            <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4">
              About the Artist
            </div>
            <div className="text-sm font-light leading-relaxed opacity-80 mb-4">
              Born in Haiti and raised in Florida, Ken is a military veteran and UCF graduate who discovered photography in 2018.
              His work is guided by "memento mori" and shaped around intention, confidence, and polish.
            </div>
            <div className="text-xs tracking-[0.2em] uppercase opacity-60">
              Orlando, FL | Portrait Sessions
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
