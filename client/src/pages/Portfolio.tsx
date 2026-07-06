import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import FAQ from "@/components/FAQ";
import { SCHEDULING_URL } from "@/lib/booking";
import SEOHead from "@/components/SEOHead";
import formalStudioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";
import proposalPortrait from "@assets/kbvisualz-current/kbv-03.jpg";
import coupleCloseup from "@assets/kbvisualz-current/kbv-06.jpg";
import outdoorEditorialPortrait from "@assets/kbvisualz-current/kbv-07.jpg";
import childPortrait from "@assets/kbvisualz-current/kbv-08.jpg";
import retroStudioPortrait from "@assets/kbvisualz-current/kbv-09.jpg";
import gardenEditorialPortrait from "@assets/kbvisualz-current/kbv-10.jpg";

const portraits = [
  {
    image: gardenEditorialPortrait,
    title: "Garden Editorial Portrait",
    category: "Creative Portraits",
    objectPosition: "object-center",
    width: 1600,
    height: 2400
  },
  {
    image: formalStudioPortrait,
    title: "Formal Studio Portrait",
    category: "Men's Formal Portraits",
    objectPosition: "object-center",
    width: 1600,
    height: 2400
  },
  {
    image: retroStudioPortrait,
    title: "Retro Studio Chair Portrait",
    category: "Creative Studio Portraits",
    objectPosition: "object-center",
    width: 1600,
    height: 2400
  },
  {
    image: childPortrait,
    title: "Outdoor Child Portrait",
    category: "Family Portraits",
    objectPosition: "object-center",
    width: 1733,
    height: 2600
  },
  {
    image: outdoorEditorialPortrait,
    title: "Outdoor Editorial Portrait",
    category: "Creative Portraits",
    objectPosition: "object-center",
    width: 1600,
    height: 2400
  },
  {
    image: proposalPortrait,
    title: "Proposal Celebration Portrait",
    category: "Engagement Moments",
    objectPosition: "object-center",
    width: 1513,
    height: 2400
  },
  {
    image: coupleCloseup,
    title: "Golden Hour Couples Close-Up",
    category: "Couples Portraits",
    objectPosition: "object-center",
    width: 2400,
    height: 1600
  }
];

const Portfolio = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const openGallery = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById("portfolio-gallery");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "/portfolio/#portfolio-gallery");
  };

  useEffect(() => {
    if (!galleryRef.current) {
      return;
    }

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a",
      bgOpacity: 0.94,
      showHideAnimationType: "zoom",
      wheelToZoom: true,
      imageClickAction: "zoom-or-close",
      tapAction: "toggle-controls",
      pswpModule: () => import("photoswipe")
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen page-content bg-black text-white">
      <SEOHead
        title="Orlando Portrait Photography Portfolio"
        description="View KB Visualz portrait photography in Orlando and Central Florida, including studio, family, creative, engagement, couples, and editorial portrait work."
        keywords="Orlando portrait portfolio, portrait photography portfolio Orlando, Central Florida portraits, studio portraits Orlando, family portraits Orlando, engagement portraits Orlando"
        canonicalPath="/portfolio/"
        structuredData={{
          "@type": "CollectionPage",
          "@id": "https://kbvisualz.com/portfolio/#portrait-portfolio",
          "name": "Orlando Portrait Photography Portfolio",
          "url": "https://kbvisualz.com/portfolio/",
          "description": "Selected portrait photography by KB Visualz in Orlando and Central Florida.",
          "about": {
            "@id": "https://kbvisualz.com/#business"
          },
          "hasPart": portraits.map((photo) => ({
            "@type": "ImageObject",
            "name": photo.title,
            "caption": photo.category
          }))
        }}
      />

      <section className="relative overflow-hidden bg-stone-100 pt-8 text-stone-950 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-px bg-stone-950/20"></div>
        <div className="editorial-grid relative items-start pb-14 md:min-h-[72vh] md:items-end md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-6"
          >
            <div className="lookbook-page-marker mb-5 text-stone-700">
              Portraits / 01
            </div>
            <div className="editorial-caption editorial-caption--on-light mb-5">
              Portfolio
            </div>
            <h1 className="editorial-headline max-w-5xl text-6xl leading-none text-stone-950 md:text-8xl lg:text-9xl">
              The Portrait Lookbook
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-700 md:text-lg">
              A focused collection of Orlando and Central Florida portraits
              made around expression, styling, and honest presence.
            </p>
            <a href="#portfolio-gallery" onClick={openGallery} className="lookbook-next mt-10 w-full max-w-sm text-stone-950">
              <span>
                <span className="lookbook-next__meta">Next / 01</span>
                View the Portraits
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-first col-span-12 mb-8 grid grid-cols-3 gap-2 md:order-none md:col-span-5 md:col-start-8 md:mb-0 md:mt-0 md:gap-3"
          >
            {[gardenEditorialPortrait, formalStudioPortrait, childPortrait].map((image, index) => (
              <figure
                key={image}
                className={`relative overflow-hidden border border-stone-950/12 bg-stone-200 ${
                  index === 1 ? "mt-10" : index === 2 ? "mt-5" : ""
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="aspect-[3/4] h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>
            ))}
            <div className="col-span-3 mt-4 grid grid-cols-[auto_1fr] items-center gap-4 text-xs uppercase text-stone-700">
              <span>Orlando Portraits</span>
              <span className="h-px bg-stone-950/20"></span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio-gallery" className="scroll-mt-20 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(14rem,20rem)_1fr] lg:items-start">
            <motion.aside
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="lookbook-page-marker mb-5 text-white/70">
                Portrait Range
              </div>
              <div className="editorial-caption mb-4 text-yellow-500">
                Full Gallery
              </div>
              <h2 className="lookbook-index-title max-w-xl text-white">
                Range, mood, and a polished final feel.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Editorial color, controlled studio light, family warmth, and
                honest connection, all with the same KB Visualz finish.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-px border-y border-white/12 py-4 text-xs uppercase text-white/72">
                {["Editorial", "Studio", "Family", "Couples"].map((label, index) => (
                  <div key={label} className="grid grid-cols-[1.75rem_1fr] gap-2 py-2">
                    <span className="text-white/60">{String(index + 1).padStart(2, "0")}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </motion.aside>

            <div ref={galleryRef} className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
              {portraits.map((photo, index) => (
                <motion.a
                  key={photo.title}
                  href={photo.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${photo.title} in full-screen gallery`}
                  data-pswp-width={photo.width}
                  data-pswp-height={photo.height}
                  data-pswp-caption={`${photo.title} - ${photo.category}`}
                  initial={{ opacity: 0, y: 56, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.95, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden border border-white/10 bg-white/5 ${
                    index === 0
                      ? "md:col-span-7 md:row-span-2 min-h-[620px]"
                      : index === 1 || index === 2
                        ? "md:col-span-5 min-h-[300px]"
                        : "md:col-span-4 min-h-[420px]"
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className={`w-full h-full object-cover ${photo.objectPosition} transition duration-1000 group-hover:scale-105 group-hover:blur-[1px]`}
                    loading="lazy"
                  />
                  <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/35 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
                      <h3 className="editorial-title text-2xl text-white md:text-3xl">
                        {photo.title}
                      </h3>
                      <p className="max-w-[10rem] text-right text-xs uppercase leading-relaxed text-white/60">
                        {photo.category}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >
            <blockquote className="editorial-title text-4xl italic leading-tight text-white/90 md:text-6xl">
              "The best portraits feel polished without losing the person."
            </blockquote>
            <div className="mt-8 text-xs uppercase text-white/50">
              Portrait Photography by KB Visualz
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 text-stone-950 md:py-28">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 text-center"
          >
            <h2 className="editorial-title mx-auto mb-6 max-w-4xl text-5xl leading-tight md:text-7xl">
              Bring your session into focus.
            </h2>
            <div className="editorial-body text-stone-700 max-w-2xl mx-auto mb-10">
              If the work feels aligned, choose the session pace and start
              shaping the location, wardrobe, and mood.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button site-button--dark w-full sm:w-auto"
              >
                Start Planning
              </a>
              <a href="/pricing" className="site-button site-button--outline w-full sm:w-auto">
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        page="portfolio"
        title="Portrait Portfolio Questions"
        description="How the portraits are planned, directed, and delivered."
      />
    </div>
  );
};

export default Portfolio;
