import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import FAQ from "@/components/FAQ";
import GoogleReviews from "@/components/GoogleReviews";
import { PEERSPACE_STUDIO_URL } from "@/lib/booking";
import SEOHead from "@/components/SEOHead";
import pricingPortrait from "@assets/kbvisualz-current/kbv-05.jpg";
import type { PortraitPackage, BookingStep, PolicyItem } from "@/types";

const portraitPackages: PortraitPackage[] = [
  {
    category: "PORTRAIT SESSION",
    title: "The Signature Session",
    price: "$250",
    duration: "1 hour",
    summary: "A focused session for one location, one clear idea, and a polished set of portraits.",
    deliverables: [
      "15 fully edited portraits",
      "One outdoor location",
      "Style and posing direction",
      "High-resolution downloads"
    ],
    bestFor: [
      "Graduation portraits",
      "Prom portraits",
      "Branding headshots",
      "One-outfit creative sets"
    ]
  },
  {
    category: "PORTRAIT SESSION",
    title: "The Legacy Session",
    price: "$400",
    duration: "2 hours",
    summary: "For more time, outfit changes, and a wider gallery without rushing.",
    deliverables: [
      "30 fully edited portraits",
      "More time for outfit changes",
      "One outdoor location",
      "High-resolution downloads"
    ],
    bestFor: [
      "Outfit changes",
      "Family portraits",
      "Couples portraits",
      "Creative variety"
    ],
    featured: true
  },
];

const sessionTypes: string[] = [
  "Graduation",
  "Prom",
  "Fashion",
  "Family",
  "Branding",
  "Creative portraits"
];

const reservationSteps: BookingStep[] = [
  {
    number: "01",
    title: "Choose a starting package",
    description: "Pick the session that best matches your time, variety, and setting. Your choice can be refined after you reach out."
  },
  {
    number: "02",
    title: "Request availability",
    description: "Share your preferred date, portrait type, and whether you are considering an outdoor location or studio."
  },
  {
    number: "03",
    title: "Review and reserve",
    description: "You receive availability, the full invoice schedule, and planning details. A 25% retainer reserves your confirmed date."
  }
];

const policyItems: PolicyItem[] = [
  { title: "Date Retainer", description: "A 25% retainer reserves your date and starts the planning." },
  { title: "Payment", description: "Your invoice shows each payment milestone before you reserve. The final balance is due when revisions are complete." },
  { title: "Retouching", description: "Two revision rounds are included. Additional revision requests are $20 each." },
  { title: "Turnaround", description: "Proofs arrive 3-5 business days after the session. Finals arrive 2-4 business days after you approve your selects." },
  { title: "Rescheduling", description: "If plans change, reach out as soon as possible so we can look for a new available date." },
  { title: "Image Use", description: "Delivered portraits are yours to use personally. KB Visualz may use selected images for portfolio and promotional work unless we agree otherwise in writing." },
  { title: "Photography Only", description: "Photo and video are booked separately. Video coverage should be handled by a dedicated videographer." },
  { title: "Arrival", description: "Showing up on time protects the light, studio booking, and creative pace." },
  { title: "Visual Direction", description: "Before you book, familiarize yourself with my portrait style, direction, and editing. Reserve a session only if the work feels aligned with your vision and you believe I am the right photographer to achieve it." }
];

const Pricing = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="min-h-screen page-content">
      <SEOHead
        title="KB Visualz — Session Pricing"
        description="KB Visualz portrait photography pricing in Orlando, FL. Signature and Legacy sessions include edited photos, planning, posing direction, and optional studio booking."
        keywords="Orlando portrait photography pricing, Orlando photographer prices, portrait session pricing Orlando, graduation photos Orlando pricing, branding portraits Orlando pricing"
        canonicalPath="/pricing/"
        structuredData={{
          "@type": "OfferCatalog",
          "@id": "https://wbrisenold.github.io/KBVisual/pricing/#portrait-packages",
          "name": "KB Visualz Orlando Portrait Photography Packages",
          "url": "https://wbrisenold.github.io/KBVisual/pricing/",
          "itemListElement": portraitPackages.map((service) => ({
            "@type": "Offer",
            "name": service.title,
            "description": service.summary,
            "price": service.price === "$250" ? "250" : service.price === "$400" ? "400" : undefined,
            "priceCurrency": service.price.startsWith("$") ? "USD" : undefined,
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "serviceType": "Portrait photography"
            }
          }))
        }}
      />

      {/* HERO — Magazine cover scene */}
      <section ref={heroRef} className="relative flex min-h-screen items-end overflow-hidden bg-stone-950 pt-36 pb-16 md:pb-24">
        <motion.img
          style={{ y: bgY, scale: bgScale }}
          src={pricingPortrait.src}
          alt="Outdoor editorial portrait by KB Visualz"
          className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
        <div className="editorial-grid relative">
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-8"
          >
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="editorial-caption !text-yellow-700"
            >
              Sessions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40, rotateX: 6 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-headline mt-6 text-7xl leading-none !text-white md:text-8xl lg:text-9xl"
            >
              Choose your session.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed !text-white/80 md:text-lg"
            >
              Time, image count, setting, and price — everything is listed so you can decide what fits.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#portrait-packages" className="site-button site-button--light mt-8">View Packages</a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-yellow-700/60" />
          </motion.div>
        </motion.div>
      </section>

      <div className="section-break"></div>

      {/* PACKAGES — Editorial spread */}
      <section id="portrait-packages" className="bg-white py-16 md:py-24">
        <div className="editorial-grid gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="lookbook-page-marker mb-5 text-stone-500">Your options / 01</div>
            <div className="editorial-caption mb-4 text-yellow-700">The Collection</div>
            <h2 className="editorial-title text-5xl leading-tight text-stone-950 md:text-6xl">Every session starts with a choice.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-7 md:pt-14"
          >
            <p className="editorial-body text-stone-600">
              Choose Signature for one focused idea. Choose Legacy for outfit changes or more variety.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {sessionTypes.map((type) => (
                <span key={type} className="border border-stone-300 px-3 py-1 text-sm text-stone-600">
                  {type}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="col-span-12 grid gap-6 md:grid-cols-2">
            {portraitPackages.map((service, index) => {
              const isFeatured = Boolean(service.featured);

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className={`flex h-full flex-col overflow-hidden border bg-white will-change-transform ${
                    isFeatured
                      ? "border-yellow-700/40"
                      : "border-stone-200"
                  }`}
                >
                  {isFeatured && <div className="h-1 bg-yellow-700" />}

                  <div className="flex flex-col gap-6 p-7 md:p-8">
                    <span className="editorial-caption text-yellow-700">{String(index + 1).padStart(2, "0")} / {service.category}</span>

                    <h3 className={`editorial-title text-3xl leading-tight md:text-4xl ${isFeatured ? "text-stone-950" : "text-stone-950"}`}>
                      {service.title}
                    </h3>

                    <div className="flex items-baseline gap-3 border-t border-stone-200 pt-5">
                      <span className="editorial-title text-4xl md:text-5xl text-yellow-700">
                        {service.price}
                      </span>
                      <span className="text-sm text-stone-500">{service.duration}</span>
                    </div>

                    <p className="text-sm leading-relaxed text-stone-600">{service.summary}</p>

                    <div className="border-t border-stone-200 pt-5">
                      <div className="editorial-caption mb-4 text-yellow-700">Included</div>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="text-sm text-stone-700">{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-stone-200 pt-5">
                      <div className="editorial-caption mb-3 text-yellow-700">Best For</div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.bestFor.map((type) => (
                          <span key={type} className="border border-stone-300 px-2.5 py-1 text-xs text-stone-600">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDIO — Editorial pull quote */}
      <section className="bg-[#f3efe7] py-20 md:py-28">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2"
          >
            <div className="border-l-4 border-yellow-700 pl-6 md:pl-8">
              <div className="editorial-caption mb-3 text-yellow-700">Studio Sessions</div>
              <h3 className="editorial-title text-2xl leading-tight text-stone-900 md:text-3xl">Add a studio for controlled light and backdrop options.</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
                Choose Signature or Legacy first, then add a studio rental that matches your aesthetic. Studio reservation is handled separately.
              </p>
              <a
                href={PEERSPACE_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-700 hover:text-yellow-800"
              >
                Browse Orlando studio rentals
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STEPS — Editorial numbered list */}
      <section className="bg-white py-24 md:py-32">
        <div className="editorial-grid gap-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4"
          >
            <div className="lookbook-page-marker mb-5 text-stone-500">After you choose / 02</div>
            <div className="editorial-caption mb-4 text-yellow-700">How to reserve</div>
            <h2 className="editorial-title text-5xl text-stone-950 md:text-6xl">Pick a package, pick a date.</h2>
          </motion.div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="divide-y divide-stone-200">
              {reservationSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 py-7 md:py-8"
                >
                  <span className="flex-shrink-0 text-4xl font-light text-yellow-700 md:text-5xl">{step.number}</span>
                  <div className="pt-1.5">
                    <h3 className="editorial-title text-2xl text-stone-950 md:text-3xl">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-stone-600">{step.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a href="/#contact" className="site-button site-button--dark">Inquire</a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-break"></div>

      {/* POLICIES — Editorial text grid on dark */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="editorial-caption mb-4 text-yellow-700">Details</div>
            <h2 className="editorial-title text-4xl text-white md:text-5xl">What to know before your session.</h2>
            <p className="mt-6 leading-relaxed text-stone-400">
              Before we shoot, you will know how payment, delivery, revisions, rescheduling, and image use work.
            </p>
          </motion.div>

          <div className="col-span-12 mt-12 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:mt-0">
            {policyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h3 className="mb-1.5 text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-stone-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <FAQ page="pricing" title="Portrait Pricing Questions" description="The details most clients ask about before choosing a package." />
    </div>
  );
};

export default Pricing;
