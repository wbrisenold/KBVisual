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
    : "bg-white/70 backdrop-blur-xl border-b border-white/20 text-stone-950";
  const navText = isTransparent ? "text-white" : "text-stone-950";

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Portfolio", href: "/portfolio", section: "02" },
    { name: "About", href: "/about", section: "08" },
    { name: "Pricing", href: "/pricing", section: "14" },
    { name: "Contact", href: "/#contact", section: "--" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${navPosition} top-0 z-50 w-full transition-all duration-500 ${navSurface}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5 lg:px-12">
          {/* Logo */}
          <Link href="/" aria-label="KB Visualz home">
            <div className="cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <BrandMark inverted={isTransparent} className="transition-opacity hover:opacity-70" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <div className="group cursor-pointer relative transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                    <div className={`text-sm uppercase transition-opacity group-hover:opacity-70 ${navText}`}>
                      {item.name}
                    </div>
                    {location === item.href && (
                      <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5" style={{ backgroundColor: "hsl(var(--color-gold))" }} />
                    )}
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 transition-transform duration-200 hover:scale-110 active:scale-90 ${navText}`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay — Bottom Sheet */}
      <motion.div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white rounded-t-2xl shadow-2xl ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="flex flex-col px-6 pt-4 pb-8 max-h-[70vh] overflow-y-auto">
          <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-stone-300" />
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} tabIndex={isOpen ? 0 : -1}>
              <div className="py-4 border-b border-stone-100 text-lg font-medium text-stone-900" onClick={() => setIsOpen(false)}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
