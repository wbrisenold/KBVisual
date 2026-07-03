import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import { SCHEDULING_URL } from "@/lib/booking";
import graduationPortrait from "@assets/kbvisualz-current/kbv-04.jpg";
import portraitOne from "@assets/kbvisualz-current/kbv-02.jpg";
import portraitTwo from "@assets/kbvisualz-current/kbv-05.jpg";
import portraitThree from "@assets/kbvisualz-current/kbv-06.jpg";
import portraitFour from "@assets/kbvisualz-current/kbv-07.jpg";
import portraitFive from "@assets/kbvisualz-current/kbv-08.jpg";
import portraitSix from "@assets/kbvisualz-current/kbv-01.jpg";
import portraitSeven from "@assets/kbvisualz-current/kbv-10.jpg";
import portraitEight from "@assets/kbvisualz-current/kbv-11.jpg";

const portraits = [
  {
    image: portraitOne,
    title: "Formal Studio Portrait",
    category: "Men's Formal Portraits",
    objectPosition: "object-center"
  },
  {
    image: portraitTwo,
    title: "Childhood Outdoor Portrait",
    category: "Child Portraits",
    objectPosition: "object-center"
  },
  {
    image: portraitThree,
    title: "Styled Formal Portrait",
    category: "Formal Portraits",
    objectPosition: "object-center"
  },
  {
    image: portraitFour,
    title: "Lifestyle Writing Portrait",
    category: "Lifestyle Portraits",
    objectPosition: "object-center"
  },
  {
    image: portraitFive,
    title: "Proposal Celebration Portrait",
    category: "Engagement Moments",
    objectPosition: "object-center"
  },
  {
    image: portraitSix,
    title: "Outdoor Fashion Portrait",
    category: "Fashion Portraits",
    objectPosition: "object-center"
  },
  {
    image: graduationPortrait,
    title: "Graduation Portrait",
    category: "Senior Portraits",
    objectPosition: "object-center"
  },
  {
    image: portraitSeven,
    title: "Retro Studio Portrait",
    category: "Creative Portraits",
    objectPosition: "object-center"
  },
  {
    image: portraitEight,
    title: "Couples Park Portrait",
    category: "Couples Portraits",
    objectPosition: "object-center"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen page-content" style={{ backgroundColor: "#fafafa" }}>
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
              A focused collection of individual portrait work: graduation,
              prom, fashion, family, branding, and creative personal sessions.
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
            <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8">
              SELECTED WORK
            </div>
            <h2 className="text-5xl lg:text-7xl font-light leading-[0.85] tracking-[-0.02em] mb-8">
              Professional Portraits
            </h2>
            <div className="w-24 h-px bg-black opacity-30 mx-auto mb-8"></div>
            <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-80">
              Portraits built around expression, styling, and atmosphere, with a
              polished edit that keeps the focus on the person in frame.
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
            <div className="text-xs tracking-[0.3em] uppercase opacity-60">
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
              Ready for your own portrait session? Review the current packages
              or schedule directly through the booking page.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gold-gradient text-stone-900 font-semibold px-10 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                  SCHEDULE SESSION
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 px-10 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  VIEW PRICING
                </Button>
              </Link>
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
