import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const scrollY = useScrollPosition();
  const isHome = location === "/";
  const isTransparent = isHome && scrollY < 120 && !isOpen;
  const navPosition = isHome ? "fixed" : "sticky";
  const navSurface = isTransparent
    ? "bg-gradient-to-b from-black/55 via-black/20 to-transparent text-white"
    : "bg-white text-stone-950 shadow-sm";
  const navText = isTransparent ? "text-white" : "text-black";

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
        initial={{ y: -12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${navPosition} top-0 z-50 w-full transition-all duration-500 ${navSurface}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5 lg:px-12">
          {/* Logo */}
          <Link href="/" aria-label="KB Visualz home">
            <motion.div 
              className="cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <BrandMark inverted={isTransparent} className="transition-opacity group-hover:opacity-70" />
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
                    <div className={`text-sm uppercase transition-opacity group-hover:opacity-70 ${navText}`}>
                      {item.name}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Year */}
          <div className={`hidden text-sm md:block ${isTransparent ? "text-white/80" : "text-stone-700"}`}>
            2026
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 transition-opacity hover:opacity-70 ${navText}`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        aria-hidden={!isOpen}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? "0%" : "100%" 
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden bg-white ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex-1">
            <motion.div 
              className="text-xs uppercase opacity-60 mb-8"
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
                  tabIndex={-1}
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
                  <Link href={item.href} tabIndex={isOpen ? 0 : -1}>
                    <div className="py-4 border-b border-black/10 cursor-pointer group">
                      <div className="text-2xl font-light text-black group-hover:opacity-70 transition-opacity uppercase">
                        {item.name}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pb-8">
            <div className="text-xs uppercase opacity-60 mb-4">
              About the Artist
            </div>
            <div className="text-sm font-light leading-relaxed opacity-80 mb-4">
              Born in Haiti and raised in Florida, Ken is a military veteran and UCF graduate who discovered photography in 2018.
              His work is guided by "memento mori" and shaped around intention, confidence, and polish.
            </div>
            <div className="text-xs uppercase opacity-60">
              Orlando, FL | Portrait Sessions
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
