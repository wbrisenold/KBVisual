import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    width: 1600,
    height: 2400
  },
  {
    image: formalStudioPortrait,
    title: "Formal Studio Portrait",
    category: "Men's Formal Portraits",
    width: 1600,
    height: 2400
  },
  {
    image: retroStudioPortrait,
    title: "Retro Studio Chair Portrait",
    category: "Creative Studio Portraits",
    width: 1600,
    height: 2400
  },
  {
    image: childPortrait,
    title: "Outdoor Child Portrait",
    category: "Family Portraits",
    width: 1733,
    height: 2600
  },
  {
    image: outdoorEditorialPortrait,
    title: "Outdoor Editorial Portrait",
    category: "Creative Portraits",
    width: 1600,
    height: 2400
  },
  {
    image: proposalPortrait,
    title: "Proposal Celebration Portrait",
    category: "Engagement Moments",
    width: 1513,
    height: 2400
  },
  {
    image: coupleCloseup,
    title: "Golden Hour Couples Close-Up",
    category: "Couples Portraits",
    width: 2400,
    height: 1600
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen page-content bg-neutral-950 text-white">
      <SEOHead
        title="KB Visualz — Portrait Photography Portfolio"
        description="Selected portrait photography by KB Visualz in Orlando and Central Florida — studio, family, creative, engagement, couples, and editorial work."
        keywords="Orlando portrait portfolio, portrait photography portfolio Orlando, Central Florida portraits, studio portraits Orlando, family portraits Orlando, engagement portraits Orlando"
        canonicalPath="/portfolio/"
        structuredData={{
          "@type": "CollectionPage",
          "@id": "https://wbrisenold.github.io/KBVisual/portfolio/#portrait-portfolio",
          "name": "Orlando Portrait Photography Portfolio",
          "url": "https://wbrisenold.github.io/KBVisual/portfolio/",
          "description": "Selected portrait photography by KB Visualz in Orlando and Central Florida.",
          "about": {
            "@id": "https://wbrisenold.github.io/KBVisual/#business"
          },
          "hasPart": portraits.map((photo) => ({
            "@type": "ImageObject",
            "name": photo.title,
            "caption": photo.category
          }))
        }}
      />

      <section className="relative min-h-[80vh] overflow-hidden bg-neutral-950 text-white md:min-h-screen">
        <div className="absolute inset-0">
          <motion.img
            src={gardenEditorialPortrait}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
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
              Orlando and Central Florida portraits with styling, expression,
              and presence at the center.
            </motion.p>
            <a
              href="#portfolio-gallery"
              className="mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-sm font-semibold text-white hover:border-white"
            >
              View Gallery
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio-gallery" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:gap-6 lg:px-12">
          {portraits.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="group relative block overflow-hidden aspect-[3/4]">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-100 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-6">
                  <h2 className="text-sm font-medium text-white md:text-base">{photo.title}</h2>
                  <span className="text-[10px] uppercase text-white/60 md:text-xs">{photo.category}</span>
                </div>
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
            When the portraits match the direction you want, we can shape the
            location, wardrobe, and mood together.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="/#contact" className="site-button site-button--dark w-full sm:w-auto">
              Inquire
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Portfolio;
