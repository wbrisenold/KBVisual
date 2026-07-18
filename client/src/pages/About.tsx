import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import photographerPortrait from "@assets/profile-pic.jpg";
import studioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";

const About = () => {
  return (
    <div className="min-h-screen page-content bg-white">
      <SEOHead
        title="KB Visualz — About Ken Brisenold"
        description="Ken Brisenold is the photographer behind KB Visualz. Military veteran and UCF graduate creating portrait photography in Orlando and Central Florida."
        keywords="Ken Brisenold, KB Visualz, Orlando portrait photographer, Central Florida photographer, UCF photographer, Florida portrait photography"
        canonicalPath="/about/"
        structuredData={{
          "@type": "Person",
          "@id": "https://wbrisenold.github.io/KBVisual/about/#ken-brisenold",
          "name": "Ken Brisenold",
          "jobTitle": "Orlando Portrait Photographer",
          "worksFor": { "@id": "https://wbrisenold.github.io/KBVisual/#business" },
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
            <div className="lookbook-page-marker mb-5 text-stone-700">Profile / 08</div>
            <div className="editorial-caption editorial-caption--on-light mb-5">About KB Visualz</div>
            <h1 className="editorial-headline text-6xl leading-none text-stone-950 md:text-8xl lg:text-9xl">Ken Brisenold</h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-700 md:text-lg">
              I'm the photographer behind KB Visualz. I create Orlando and Central Florida portraits that feel directed, relaxed, and true to the person in front of the camera.
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
              <img src={photographerPortrait.src} alt="Ken Brisenold, photographer behind KB Visualz" className="aspect-[4/5] w-full object-cover object-top" />
              <figcaption className="mt-4 grid grid-cols-[auto_1fr] items-center gap-4 text-xs uppercase text-stone-800">
                <span>Artist Profile</span>
                <span className="h-px bg-stone-950/20"></span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      <div className="section-break"></div>

      {/* Merged Approach + Philosophy */}
      <section id="approach" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 py-28 text-white md:py-36">
        <img
          src={studioPortrait.src}
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
            <div className="lookbook-page-marker mb-8 justify-center text-white/80">Approach</div>
            <h2 className="editorial-title mb-8 text-center text-5xl leading-tight text-white md:text-7xl">
              Direction that still leaves room for you.
            </h2>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/90 md:text-lg">
              Born in Haiti and raised in Florida, I am a military veteran and UCF graduate who found photography in 2018. KB Visualz grew from that first pull toward portraits that feel intentional, calm, and alive.
            </p>
            <div className="mx-auto mt-8 max-w-2xl border-y border-white/20 py-6 text-center text-sm uppercase tracking-wide text-white/60">
              <span className="mx-4">Planning</span>
              <span className="mx-4">Posing</span>
              <span className="mx-4">Polished Edits</span>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-white/80 md:text-lg">
              I guide your posture, hands, movement, and expression while leaving room for you to feel natural. The goal is simple: make space for real expression, then finish the image with care.
            </p>
            <div className="mx-auto mt-12 max-w-2xl border-t border-white/20 pt-12">
              <div className="editorial-title text-center text-3xl italic leading-tight text-white/90 md:text-5xl">
                "Photography gave me a way to hold onto the moments people usually feel before they can explain them."
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-white/80 md:text-lg">
                The memento mori philosophy reminds me that time is limited and every season is worth remembering. My work is about preserving honest expression, personal milestones, and the details that make a portrait feel true.
              </p>
            </div>
            <div className="mt-12 text-center">
              <a href="/#contact" className="lookbook-next inline-flex max-w-sm text-white/90">
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

      {/* Simple CTA */}
      <section className="bg-stone-100 py-16 text-center">
        <div className="editorial-grid">
          <div className="col-span-12">
            <p className="text-sm text-stone-500">If this resonates, reach out — we can shape the session around how you want to be seen.</p>
            <a href="/#contact" className="site-button site-button--dark mt-6 inline-flex">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
