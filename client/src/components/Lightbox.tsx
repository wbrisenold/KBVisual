import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, index, onClose, onPrev, onNext }: LightboxProps) => {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 md:left-4 z-10 p-2 text-white/80 hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 md:right-4 z-10 p-2 text-white/80 hover:text-white"
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <img
        src={img.src}
        alt={img.alt}
        className="max-h-[90vh] max-w-[90vw] object-contain select-none"
        style={{ WebkitUserSelect: "none", WebkitTouchCallout: "none" }}
        onClick={(e) => e.stopPropagation()}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
