import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import { SCHEDULING_URL } from "@/lib/booking";
import GoogleReviews from "@/components/GoogleReviews";
import outdoorEditorialPortrait from "@assets/kbvisualz-current/kbv-07.jpg";
import gardenEditorialPortrait from "@assets/kbvisualz-current/kbv-10.jpg";

const Home = () => {
  const selectedWork = {
    image: gardenEditorialPortrait,
    title: "Garden editorial portrait"
  };

  const approachNotes = [
    "Directed posing without making the session feel stiff.",
    "Outdoor, studio, and location guidance around the look you want.",
    "A final edit that keeps the portrait polished without losing the person."
  ];

  return (
    <div className="min-h-screen page-content">
      <SEOHead
        title="Orlando Portrait Photographer for Graduation, Family & Branding"
        description="Book Orlando and Central Florida portrait photography with KB Visualz for graduation, prom, family, branding, fashion, studio, and creative personal sessions."
        keywords="Orlando portrait photographer, portrait photographer Orlando FL, Central Florida portrait photography, graduation portraits Orlando, prom portraits Orlando, family photographer Orlando, branding photographer Orlando, studio portraits Orlando"
        canonicalPath="/"
        structuredData={{
          "@type": "Service",
          "@id": "https://kbvisualz.com/#portrait-service",
          "name": "Orlando Portrait Photography Sessions",
          "serviceType": "Portrait photography",
          "provider": {
            "@id": "https://kbvisualz.com/#business"
          },
          "areaServed": [
            "Orlando",
            "Central Florida",
            "Winter Park",
            "Kissimmee",
            "Sanford",
            "Lake Mary",
            "Altamonte Springs"
          ],
          "description": "Portrait photography sessions for graduation, prom, family, branding, fashion, studio, couples, engagement, and creative portraits."
        }}
      />

      <Hero />

      <section id="selected-work" className="scroll-mt-20 bg-black py-20 text-white md:py-28">
        <div className="editorial-grid">
          <div className="col-span-12 mb-12 grid gap-8 md:grid-cols-12 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <div className="lookbook-page-marker mb-5 text-white/58">
                Portraits / 01
              </div>
              <h2 className="editorial-title max-w-3xl text-4xl leading-tight text-white md:text-6xl">
                A portrait should feel like a scene.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="md:col-span-4 md:col-start-9"
            >
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/58 md:text-base">
                Color, light, and direction shaped around you.
              </p>
            </motion.div>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="scroll-lift group relative col-span-12 min-h-[360px] overflow-hidden border border-white/10 bg-white/5 md:aspect-[2/1] md:min-h-[520px]"
          >
            <img
              src={selectedWork.image}
              alt={`${selectedWork.title} by KB Visualz`}
              className="h-full w-full object-cover object-[50%_28%] transition duration-1000 group-hover:scale-[1.025]"
              loading="lazy"
            />
          </motion.figure>

          <div className="col-span-12 mt-8 flex justify-end">
            <a href="#session" className="lookbook-next w-full max-w-sm text-white/90">
              <span>
                <span className="lookbook-next__meta">Next / 02</span>
                The Session
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="session" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="editorial-grid items-start">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="lookbook-page-marker mb-5 text-stone-500">
              Session / 02
            </div>
            <div className="editorial-caption text-yellow-700 mb-4">
              The Session
            </div>
            <h2 className="editorial-title text-5xl leading-tight text-stone-950 md:text-7xl">
              Calm direction. Strong portraits.
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
              Sessions are shaped around how you want to look, where the
              portrait should live, and the feeling you want to keep after the
              day is over.
            </p>

            <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
              {approachNotes.map((note, index) => (
                <motion.div
                  key={note}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[3rem_1fr] gap-4 py-5 text-stone-800"
                >
                  <span className="text-sm text-yellow-700">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-lg leading-relaxed">{note}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/pricing" className="site-button site-button--dark w-full sm:w-auto">
                View Pricing
              </a>
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button site-button--outline w-full sm:w-auto"
              >
                Plan Your Session
              </a>
            </div>

            <a href="#booking" className="lookbook-next mt-10 w-full max-w-sm text-stone-900">
              <span>
                <span className="lookbook-next__meta">Next / 03</span>
                Booking
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="booking" className="relative scroll-mt-20 overflow-hidden bg-black py-20 text-white md:py-28">
        <img
          src={outdoorEditorialPortrait}
          alt="Outdoor portrait by KB Visualz"
          className="absolute inset-0 h-full w-full object-cover opacity-12 blur-[1px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/86 to-black/95"></div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        <div className="editorial-grid relative">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
          >
            <div className="lookbook-page-marker mb-5 justify-center text-white/58">
              Booking / 03
            </div>
            <div className="editorial-caption mb-5 text-yellow-700">
              Booking
            </div>
            <h2 className="editorial-title mb-6 text-5xl leading-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)] md:text-7xl">
              Make the portrait feel like it belongs to you.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-lg">
              Choose the package that fits the pace of your session, then we
              shape the location, timing, outfits, and mood from there.
            </p>
            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-button site-button--light"
            >
              Start Planning
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-10 flex justify-center">
              <a href="/portfolio" className="lookbook-next w-full max-w-sm text-white/90">
                <span>
                  <span className="lookbook-next__meta">Next / Portfolio</span>
                  Open the Full Lookbook
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <GoogleReviews />

      <FAQ
        page="home"
        title="Portrait Session Questions"
        description="A few details to help you feel ready before we plan."
      />
    </div>
  );
};

export default Home;
