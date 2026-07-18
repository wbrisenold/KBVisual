import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleMouse = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full opacity-70 hidden md:block"
      style={{ backgroundColor: "hsl(var(--color-gold))", transition: "transform 0.15s ease-out" }}
      aria-hidden="true"
    />
  );
};

export default CursorFollower;
