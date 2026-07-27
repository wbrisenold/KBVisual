import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 64;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > NAV_HEIGHT);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location === "/";
  const isTransparent = isHome && !scrolled && !isOpen;
  const navBg = isTransparent ? "bg-black/40" : "bg-white/90 border-b border-stone-200";
  const textColor = isTransparent ? "text-white" : "text-stone-950";

  const navItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg} transition-colors duration-300`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/">
            <span className={`text-lg font-semibold tracking-tight ${textColor}`}>KB Visualz</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={`text-sm uppercase tracking-wide ${textColor} hover:opacity-70 transition-opacity`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white px-6 pt-4 pb-10 shadow-2xl" style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))" }}>
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-stone-300" />
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div className="border-b border-stone-100 py-4 text-lg font-medium text-stone-900" onClick={() => setIsOpen(false)}>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
