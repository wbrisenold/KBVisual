import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-stone-200 flex items-center px-4 md:px-6 text-stone-900">
        <a href="/">
          <BrandMark animated={false} className="transition-opacity hover:opacity-70" />
        </a>

        <div className="ml-auto hidden md:flex items-center gap-6">
          <a href="/portfolio" className="text-sm uppercase tracking-wide hover:opacity-70">Portfolio</a>
          <a href="/about" className="text-sm uppercase tracking-wide hover:opacity-70">About</a>
          <a href="/pricing" className="text-sm uppercase tracking-wide hover:opacity-70">Pricing</a>
          <a href="/#contact" className="text-sm uppercase tracking-wide hover:opacity-70">Contact</a>
        </div>

        <button
          className="ml-auto md:hidden p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close" : "Menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl px-5 pt-3 pb-8 shadow-xl" style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom, 0px))" }}>
            <div className="mx-auto mb-4 h-1 w-8 rounded-full bg-stone-300" />
            <a href="/portfolio" className="block py-3 text-base text-stone-900 border-b border-stone-100" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="/about" className="block py-3 text-base text-stone-900 border-b border-stone-100" onClick={() => setIsOpen(false)}>About</a>
            <a href="/pricing" className="block py-3 text-base text-stone-900 border-b border-stone-100" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="/#contact" className="block py-3 text-base text-stone-900" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
