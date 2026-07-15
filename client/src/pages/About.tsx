import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          "@id": "https://wbrisenold.github.io/KBVisual/about/#ken-brisenold",
          "name": "Ken Brisenold",
          "jobTitle": "Orlando Portrait Photographer",
          "worksFor": {
            "@id": "https://wbrisenold.github.io/KBVisual/#business"
          },
          "url": "https://wbrisenold.github.io/KBVisual/about/",
          "description": "Military veteran and UCF graduate behind KB Visualz, creating portrait photography in Orlando and Central Florida."
        }}
      />

      <section className="relative overflow-hidden bg-stone-100 pt-8 text-stone-950 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-px bg-stone-950/20"></div>
        <div className="editorial-grid relative items-start pb-14 md:min-h-[72vh] md:items-end md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-6"
          >
            <div className="lookbook-page-marker mb-5 text-stone-700">
              Profile / 08
            </div>
            <div className="editorial-caption editorial-caption--on-light mb-5">
              About KB Visualz
            </div>
            <h1 className="editorial-headline text-6xl leading-none text-stone-950 md:text-8xl lg:text-9xl">
              Ken Brisenold
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-700 md:text-lg">
              I'm the photographer behind KB Visualz. I create Orlando and
              Central Florida portraits that feel directed, relaxed, and true to
              the person in front of the camera.
            </p>
            <a href="#approach" className="lookbook-next mt-10 w-full max-w-sm text-stone-950">
              <span>
                <span className="lookbook-next__meta">How your session is guided</span>
                Read the Approach
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 mt-8 md:col-span-5 md:col-start-8 md:mt-0"
          >
            <figure className="border border-stone-950/12 bg-stone-200 p-3">
              <img
                src={photographerPortrait}
                alt="Ken Brisenold, photographer behind KB Visualz"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="mt-4 grid grid-cols-[auto_1fr] items-center gap-4 text-xs uppercase text-stone-800">
                <span>Artist Profile</span>
                <span className="h-px bg-stone-950/20"></span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 py-28 md:py-36">
        <div className="editorial-grid items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="lookbook-page-marker mb-5 text-stone-500">
              Approach / 01
            </div>
            <div className="editorial-caption text-yellow-700 mb-5">
              The Approach
            </div>
            <h2 className="editorial-title text-5xl leading-tight text-stone-950 md:text-7xl">
              Direction that still leaves room for you.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-7"
          >
            <p className="editorial-body text-stone-700">
              Born in Haiti and raised in Florida, I am a military veteran and
              UCF graduate who found photography in 2018. KB Visualz grew from
              that first pull toward portraits that feel intentional, calm, and
              alive.
            </p>
            <p className="editorial-body mt-6 text-stone-700">
              The goal is simple: make space for real expression, then finish
              the image with care.
            </p>

            <div className="mt-9 grid gap-3 border-y border-stone-200 py-6 text-sm uppercase text-stone-600 sm:grid-cols-3">
              <span>Planning</span>
              <span>Posing</span>
              <span>Polished Edits</span>
            </div>

            <a href="#philosophy" className="lookbook-next mt-10 w-full max-w-sm text-stone-950">
              <span>
                <span className="lookbook-next__meta">Why this work matters</span>
                Read the Philosophy
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="philosophy" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 bg-noise py-28 text-white md:py-36">
        <img
          src={studioPortrait}
          alt="Studio portrait by KB Visualz"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/62"></div>
        <div className="editorial-grid relative">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3"
          >
            <div className="lookbook-page-marker mb-8 justify-center text-white/80">
              Philosophy / 02
            </div>
            <div className="editorial-title mb-10 text-center text-4xl italic leading-tight text-white md:text-6xl">
              "Photography gave me a way to hold onto the moments people usually feel before they can explain them."
            </div>

            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/90 md:text-lg">
              The memento mori philosophy reminds me that time is limited and
              every season is worth remembering. My work is about preserving
              honest expression, personal milestones, and the details that make
              a portrait feel true.
            </p>

            <div className="mt-10 flex justify-center">
              <a href="#book-about" className="lookbook-next w-full max-w-sm text-white/90">
                <span>
                  <span className="lookbook-next__meta">Ready to make your portrait</span>
                  Request a Session
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="book-about" className="scroll-mt-20 bg-stone-100 py-28 md:py-36">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 text-center"
          >
            <div className="lookbook-page-marker mb-5 justify-center text-stone-500">
              Booking / 03
            </div>
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
