import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Lightbox from "@/components/Lightbox";
import formalStudioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";
import proposalPortrait from "@assets/kbvisualz-current/kbv-03.jpg";
import coupleCloseup from "@assets/kbvisualz-current/kbv-06.jpg";
import outdoorEditorialPortrait from "@assets/kbvisualz-current/kbv-07.jpg";
import childPortrait from "@assets/kbvisualz-current/kbv-08.jpg";
import retroStudioPortrait from "@assets/kbvisualz-current/kbv-09.jpg";
import gardenEditorialPortrait from "@assets/kbvisualz-current/kbv-10.jpg";
import studioCoupleOne from "@assets/kbvisualz-current/kbv-11.jpg";
import studioCoupleTwo from "@assets/kbvisualz-current/kbv-12.jpg";
import studioCoupleThree from "@assets/kbvisualz-current/kbv-15.jpg";
import studioCoupleFour from "@assets/kbvisualz-current/kbv-23.jpg";
import outdoorCoupleSession from "@assets/kbvisualz-current/kbv-24.jpg";
import studioFashionPortrait from "@assets/kbvisualz-current/kbv-25.jpg";

const portraits = [
  { image: gardenEditorialPortrait, caption: "Whimsical garden elegance", alt: "Woman in a pink tulle dress in a lush garden", category: "Creative Portraits", width: 1600, height: 2400 },
  { image: formalStudioPortrait, caption: "Refined modern tailoring", alt: "Man in an olive green suit against a warm brown studio backdrop", category: "Studio Portraits", width: 1600, height: 2400 },
  { image: retroStudioPortrait, caption: "Bold retro style", alt: "Woman in a graphic tee and denim shorts in a retro chair studio set", category: "Studio Portraits", width: 1600, height: 2400 },
  { image: childPortrait, caption: "Pure childhood joy", alt: "Toddler in a striped sweater outdoors on a grassy lawn", category: "Family Portraits", width: 1733, height: 2600 },
  { image: outdoorEditorialPortrait, caption: "Serene afternoon breeze", alt: "Woman in an off-the-shoulder dress in a sunlit grassy field", category: "Creative Portraits", width: 1600, height: 2400 },
  { image: proposalPortrait, caption: "A lifetime of yes", alt: "Smiling woman in a white dress showing an engagement ring at an outdoor deck", category: "Couples Portraits", width: 1513, height: 2400 },
  { image: coupleCloseup, caption: "Quiet moments in golden light", alt: "Couple in sweaters embracing at golden hour in a park", category: "Couples Portraits", width: 2400, height: 1600 },
  { image: studioCoupleOne, caption: "Timeless formal elegance", alt: "Couple in formal black attire against a white studio backdrop", category: "Couples Portraits", width: 1600, height: 2400 },
  { image: studioCoupleTwo, caption: "Intimate connection", alt: "Couple in formal black attire against a white studio backdrop", category: "Couples Portraits", width: 1600, height: 2400 },
  { image: studioCoupleThree, caption: "Shared laughter and love", alt: "Couple in formal black attire laughing in a bright studio", category: "Couples Portraits", width: 1600, height: 2400 },
  { image: studioCoupleFour, caption: "Effortless casual style", alt: "Couple in white tank tops and jeans on a black leather sofa", category: "Couples Portraits", width: 1600, height: 2027 },
  { image: studioFashionPortrait, caption: "Classic editorial portraiture", alt: "Couple in formal black attire against a minimalist white studio backdrop", category: "Studio Portraits", width: 1600, height: 2400 },
  { image: outdoorCoupleSession, caption: "Stripped back and authentic", alt: "Couple in white tank tops and jeans on a black leather sofa", category: "Couples Portraits", width: 1600, height: 2093 },
];

const filters = ["All", "Creative Portraits", "Studio Portraits", "Family Portraits", "Couples Portraits"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lbIndex, setLbIndex] = useState(-1);

  const filtered = activeFilter === "All" ? portraits : portraits.filter(p => p.category === activeFilter);
  const filteredImages = filtered.map((p) => ({ src: p.image.src, alt: p.alt }));
  const open = (i: number) => setLbIndex(i);
  const close = () => setLbIndex(-1);
  const prev = () => setLbIndex(lbIndex <= 0 ? filteredImages.length - 1 : lbIndex - 1);
  const next = () => setLbIndex(lbIndex >= filteredImages.length - 1 ? 0 : lbIndex + 1);

  return (
    <div className="min-h-screen page-content bg-neutral-950 text-white">
      <SEOHead
        title="KB Visualz — Portrait Photography Portfolio"
        description="Selected portrait photography by KB Visualz in Orlando and Central Florida — studio, family, creative, engagement, couples, and editorial work."
        keywords="Orlando portrait portfolio, portrait photography portfolio Orlando, Central Florida portraits, studio portraits Orlando, family portraits Orlando, engagement portraits Orlando"
        canonicalPath="/portfolio/"
        structuredData={{
          "@type": "CollectionPage",
          "@id": "https://kb-visualz.com/portfolio/#portrait-portfolio",
          "name": "Orlando Portrait Photography Portfolio",
          "url": "https://kb-visualz.com/portfolio/",
          "description": "Selected portrait photography by KB Visualz in Orlando and Central Florida.",
          "about": { "@id": "https://kb-visualz.com/#business" },
          "hasPart": portraits.map((photo) => ({
            "@type": "ImageObject", "name": photo.caption, "caption": photo.category
          }))
        }}
      />

      <section className="relative min-h-[80vh] overflow-hidden bg-neutral-950 text-white md:min-h-screen">
        <div className="absolute inset-0">
          <motion.picture
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <source type="image/webp" srcSet={gardenEditorialPortrait.srcset} />
            <img src={gardenEditorialPortrait.src} alt="" className="h-full w-full object-cover" />
          </motion.picture>
          <div className="absolute inset-0 bg-black/52" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent" />
        </div>

        <div className="relative flex min-h-[80vh] flex-col justify-end px-5 pb-12 pt-28 md:min-h-screen md:px-12 md:pb-16 lg:px-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 text-xs uppercase text-white/72"
            >
              Orlando / Central Florida / Portrait Work
            </motion.div>
            <motion.h1
              className="editorial-headline max-w-5xl text-[18vw] leading-[0.78] text-white md:text-[11vw] lg:text-[9.2rem]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              The Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5 }}
              className="mt-6 max-w-xl text-base text-white/70 md:text-lg"
            >
              Orlando and Central Florida portraits with styling, expression, and presence at the center.
            </motion.p>
            <a href="#portfolio-gallery" className="mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-sm font-semibold text-white hover:border-white">
              View Gallery <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio-gallery" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-12 mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs uppercase px-4 py-2 border transition-colors ${
                activeFilter === f
                  ? "border-[hsl(var(--color-gold-light))] text-[hsl(var(--color-gold-light))]"
                  : "border-stone-700 text-stone-400 hover:border-stone-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-7xl columns-2 gap-4 px-4 md:columns-3 md:gap-6 lg:px-12">
          {filtered.map((photo, index) => (
<motion.div
              key={photo.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-4 break-inside-avoid md:mb-6"
            >
              <div className="group relative block overflow-hidden" onContextMenu={(e) => e.preventDefault()}>
                <img
                  src={photo.image.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  loading={index < 3 ? "eager" : "lazy"}
                  style={{ aspectRatio: `${photo.width}/${photo.height}` }}
                />
                <div className="img-overlay" onClick={() => open(index)} />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-12 md:p-6 md:pt-16">
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm italic text-white md:text-base">{photo.caption}</span>
                    <span className="hidden text-[10px] uppercase tracking-widest text-white/55 sm:inline">{photo.category}</span>
                  </div>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl px-4 text-center"
        >
          <blockquote className="editorial-title text-4xl italic leading-tight text-white/90 md:text-6xl">
            "The best portraits feel polished without losing the person."
          </blockquote>
          <div className="mt-8 text-xs uppercase text-white/50">
            Portrait Photography by KB Visualz
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-28 text-stone-950 md:py-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="editorial-title text-5xl leading-tight md:text-7xl">
            If the work feels right, reach out.
          </h2>
          <p className="editorial-body mx-auto mt-6 max-w-2xl text-stone-700">
            When the portraits match the direction you want, we can shape the location, wardrobe, and mood together.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="/#contact" className="site-button site-button--dark w-full sm:w-auto">Inquire</a>
          </div>
        </div>
      </section>

      {lbIndex >= 0 && filteredImages.length > 0 && (
        <Lightbox
          images={filteredImages}
          index={lbIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
};

export default Portfolio;
