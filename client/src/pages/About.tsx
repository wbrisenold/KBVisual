import { motion } from "framer-motion";
import { SCHEDULING_URL } from "@/lib/booking";
import SEOHead from "@/components/SEOHead";
import photographerPortrait from "@assets/profile-pic.jpg";
import studioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";
import outdoorPortrait from "@assets/kbvisualz-current/kbv-10.jpg";

const About = () => {
  return (
    <div className="min-h-screen page-content bg-white">
      <SEOHead
        title="About Ken Brisenold, Orlando Portrait Photographer"
        description="Meet Ken Brisenold of KB Visualz, an Orlando portrait photographer creating polished graduation, family, branding, fashion, and creative portraits across Central Florida."
        keywords="Ken Brisenold, KB Visualz, Orlando portrait photographer, Central Florida photographer, UCF photographer, Florida portrait photography"
        canonicalPath="/about/"
        structuredData={{
          "@type": "Person",
          "@id": "https://kbvisualz.com/about/#ken-brisenold",
          "name": "Ken Brisenold",
          "jobTitle": "Orlando Portrait Photographer",
          "worksFor": {
            "@id": "https://kbvisualz.com/#business"
          },
          "url": "https://kbvisualz.com/about/",
          "description": "Military veteran and UCF graduate behind KB Visualz, creating portrait photography in Orlando and Central Florida."
        }}
      />

      <section className="relative overflow-hidden bg-stone-950 pt-28 text-white md:pt-32">
        <img
          src={outdoorPortrait}
          alt="Outdoor portrait background by KB Visualz"
          className="absolute inset-0 h-full w-full object-cover opacity-25 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-stone-950"></div>
        <div className="editorial-grid relative min-h-[72vh] items-end pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-7"
          >
            <div className="editorial-caption mb-5 text-yellow-500">
              About the Photographer
            </div>
            <h1 className="editorial-headline text-6xl leading-none text-white md:text-8xl">
              Ken Brisenold
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/76 md:text-lg">
              I'm the photographer behind KB Visualz, creating portrait sessions
              in Orlando and Central Florida with a focus on presence,
              confidence, and clean visual storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 mt-10 md:col-span-4 md:col-start-9 md:mt-0"
          >
            <div className="border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <img
                src={photographerPortrait}
                alt="Ken Brisenold, photographer behind KB Visualz"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="editorial-grid items-start">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="editorial-caption text-yellow-600 mb-5">
              The Approach
            </div>
            <h2 className="editorial-title text-5xl leading-tight text-stone-950 md:text-7xl">
              Direction that still leaves room for you.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-7"
          >
            <p className="editorial-body text-stone-700">
              Born in Haiti and raised in Florida, I am a military veteran and
              UCF graduate who discovered photography in 2018. That discovery
              became KB Visualz, where I create Orlando portrait work with a
              focus on presence, confidence, and clean visual storytelling.
            </p>
            <p className="editorial-body mt-6 text-stone-700">
              My work focuses on preserving authentic expression and creating
              polished imagery that feels personal, intentional, and true to the
              person in front of the camera.
            </p>

            <div className="mt-9 grid gap-3 border-y border-stone-200 py-6 text-sm uppercase text-stone-500 sm:grid-cols-3">
              <span>Planning</span>
              <span>Posing</span>
              <span>Polished Edits</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
        <img
          src={studioPortrait}
          alt="Studio portrait by KB Visualz"
          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[1px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/62"></div>
        <div className="editorial-grid relative">
          <motion.div
            initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3"
          >
            <div className="editorial-title mb-10 text-center text-4xl italic leading-tight text-white md:text-6xl">
              "In 2018, I discovered my passion for photography, forever changing the course of my life."
            </div>

            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/76 md:text-lg">
              The memento mori philosophy reminds me that time is limited and
              every season is worth remembering. My work is about preserving
              honest expression, personal milestones, and the details that make
              a portrait feel true.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 text-center"
          >
            <h2 className="editorial-title mx-auto mb-6 max-w-4xl text-5xl leading-tight text-stone-950 md:text-7xl">
              Ready for portraits that feel personal and polished?
            </h2>
            <div className="editorial-body text-stone-700 max-w-2xl mx-auto mb-10">
              Let's plan a session around how you want to be seen, then create
              images with intention.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button site-button--dark w-full sm:w-auto"
              >
                Plan Your Session
              </a>
              <a
                href="/portfolio"
                className="site-button site-button--outline w-full sm:w-auto"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
