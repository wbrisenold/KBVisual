import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
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

      <section className="relative overflow-hidden pt-28 md:pt-32">
        <img
          src={gardenEditorialPortrait}
          alt="Garden editorial portrait by KB Visualz"
          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black"></div>
        <div className="editorial-grid relative min-h-[76vh] items-end pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-9"
          >
            <div className="editorial-caption mb-5 text-yellow-500">
              Portrait Portfolio
            </div>
            <h1 className="editorial-headline max-w-5xl text-6xl leading-none text-white md:text-8xl lg:text-9xl">
              Portrait Stories
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/76 md:text-lg">
              A focused collection of Orlando and Central Florida portraits
              made around expression, styling, and honest presence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="editorial-caption mb-4 text-yellow-500">
                Selected Work
              </div>
              <h2 className="editorial-title max-w-4xl text-5xl leading-none text-white md:text-7xl">
                Portraits shaped for confidence, connection, and style.
              </h2>
            </div>
            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-button site-button--outline-light"
            >
              Start Planning
            </a>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >
            <blockquote className="editorial-title text-4xl italic leading-tight text-white/90 md:text-6xl">
              "A great portrait reveals confidence, character, and authenticity."
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
              Ready for portraits that feel like you? Review the packages or
              start planning your session.
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
        description="Learn more about portrait style, planning, and gallery expectations."
      />
    </div>
  );
};

export default Portfolio;
