import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
    objectPosition: "object-center"
  },
  {
    image: formalStudioPortrait,
    title: "Formal Studio Portrait",
    category: "Men's Formal Portraits",
    objectPosition: "object-center"
  },
  {
    image: retroStudioPortrait,
    title: "Retro Studio Chair Portrait",
    category: "Creative Studio Portraits",
    objectPosition: "object-center"
  },
  {
    image: childPortrait,
    title: "Outdoor Child Portrait",
    category: "Family Portraits",
    objectPosition: "object-center"
  },
  {
    image: outdoorEditorialPortrait,
    title: "Outdoor Editorial Portrait",
    category: "Creative Portraits",
    objectPosition: "object-center"
  },
  {
    image: proposalPortrait,
    title: "Proposal Celebration Portrait",
    category: "Engagement Moments",
    objectPosition: "object-center"
  },
  {
    image: coupleCloseup,
    title: "Golden Hour Couples Close-Up",
    category: "Couples Portraits",
    objectPosition: "object-center"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen page-content" style={{ backgroundColor: "#fafafa" }}>
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

      <section className="section-padding">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-16"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              PORTRAIT PORTFOLIO
            </div>
            <h1 className="editorial-headline text-5xl md:text-7xl text-stone-900 mb-6">
              Portrait Stories
            </h1>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-700 max-w-4xl mx-auto">
              A focused collection of Orlando and Central Florida portraits
              made around expression, styling, and honest presence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-xs uppercase opacity-60 mb-8">
              SELECTED WORK
            </div>
            <h2 className="text-5xl lg:text-7xl font-light leading-[0.85] mb-8">
              Professional Portraits
            </h2>
            <div className="w-24 h-px bg-black opacity-30 mx-auto mb-8"></div>
            <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-80">
              Portraits built around expression, styling, and atmosphere, with
              polished editing for clients across Orlando and Central Florida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portraits.map((photo, index) => (
              <motion.div
                key={photo.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className={`w-full h-full object-cover ${photo.objectPosition} transition-transform duration-500 group-hover:scale-105`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-medium text-lg mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {photo.category}
                    </p>
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
            className="text-center mt-20"
          >
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed max-w-4xl mx-auto opacity-80 mb-8">
              "A great portrait reveals confidence, character, and authenticity."
            </blockquote>
            <div className="text-xs uppercase opacity-60">
              Portrait Photography by KB Visualz
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding hero-masthead">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 text-center"
          >
            <div className="editorial-body text-stone-700 max-w-2xl mx-auto mb-12">
              Ready for portraits that feel like you? Review the packages or
              start planning your session.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="gold-gradient text-stone-900 font-semibold px-10 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                  START PLANNING
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 px-10 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/pricing">
                  VIEW PRICING
                </Link>
              </Button>
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
