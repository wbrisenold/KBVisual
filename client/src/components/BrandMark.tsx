type BrandMarkProps = {
  className?: string;
  inverted?: boolean;
  animated?: boolean;
};

const BrandMark = ({ className = "", inverted = false, animated = true }: BrandMarkProps) => {
  const tone = inverted ? "text-white" : "text-stone-950";
  const animationClass = animated ? "brand-lockup--animated" : "";

  return (
    <div className={`brand-lockup ${animationClass} ${tone} ${className}`}>
      <span className="brand-monogram" aria-hidden="true">
        <span className="brand-monogram__k">K</span>
        <span className="brand-monogram__b">B</span>
      </span>
      <span className="brand-wordmark">
        <span>KB Visualz</span>
        <span>Ken Brisenold</span>
      </span>
    </div>
  );
};

export default BrandMark;
