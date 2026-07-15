import { motion } from "framer-motion";
import { Building2, Camera, ExternalLink, Sparkles, Star, VideoOff } from "lucide-react";
import FAQ from "@/components/FAQ";
import { PEERSPACE_STUDIO_URL, SCHEDULING_URL } from "@/lib/booking";
import SEOHead from "@/components/SEOHead";
import pricingPortrait from "@assets/kbvisualz-current/kbv-07.jpg";

const portraitPackages = [
  {
    category: "PORTRAIT SESSION",
    title: "The Signature Session",
    icon: <Camera className="w-6 h-6" />,
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
    icon: <Sparkles className="w-6 h-6" />,
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
  {
    category: "STUDIO OPTION",
    title: "Creative Studio Session",
    icon: <Building2 className="w-6 h-6" />,
    price: "Package + studio rental",
    duration: "Choose Signature or Legacy",
    summary: "For controlled light, backdrop options, and a polished indoor feel.",
    deliverables: [
      "Pair with Signature or Legacy",
      "Studio rental booked separately",
      "Controlled light and backdrop options",
      "Orlando studio rental guidance"
    ],
    bestFor: [
      "Clean backdrops",
      "Controlled lighting",
      "Editorial portraits",
      "Indoor weather backup"
    ],
    studioLink: true
  }
];

const sessionTypes = [
  "Graduation",
  "Prom",
  "Fashion",
  "Family",
  "Branding",
  "Creative portraits"
];

const reservationSteps = [
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

const policyItems = [
  {
    title: "Date Retainer",
    description:
      "A 25% retainer reserves your date and starts the planning."
  },
  {
    title: "Payment",
    description:
      "Your invoice shows each payment milestone before you reserve. The final balance is due when revisions are complete."
  },
  {
    title: "Retouching",
    description:
      "Two revision rounds are included. Additional revision requests are $20 each."
  },
  {
    title: "Turnaround",
    description:
      "Proofs arrive 3-5 business days after the session. Finals arrive 2-4 business days after you approve your selects."
  },
  {
    title: "Rescheduling",
    description:
      "If plans change, reach out as soon as possible so we can look for a new available date."
  },
  {
    title: "Image Use",
    description:
      "Delivered portraits are yours to use personally. KB Visualz may use selected images for portfolio and promotional work unless we agree otherwise in writing."
  },
  {
    title: "Photography Only",
    description:
      "Photo and video are booked separately. Video coverage should be handled by a dedicated videographer."
  },
  {
    title: "Arrival",
    description:
      "Showing up on time protects the light, studio booking, and creative pace."
  },
  {
    title: "Visual Direction",
    description:
      "Before you book, familiarize yourself with my portrait style, direction, and editing. Reserve a session only if the work feels aligned with your vision and you believe I am the right photographer to achieve it."
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen page-content bg-white">
      <SEOHead
        title="Orlando Portrait Photography Pricing"
        description="Review KB Visualz portrait photography pricing in Orlando, FL. Signature and Legacy sessions include edited photos, planning, posing direction, and optional studio booking guidance."
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

      <section className="relative overflow-hidden bg-stone-950 pt-28 text-white md:pt-32">
        <img
          src={pricingPortrait}
          alt="Outdoor editorial portrait by KB Visualz"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-stone-950"></div>
        <div className="editorial-grid relative min-h-[68vh] items-end pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-8"
          >
            <div className="max-w-3xl border border-white/15 bg-black/68 p-6 shadow-2xl backdrop-blur-sm md:p-10">
              <div className="editorial-caption mb-5 !text-yellow-700">Your investment</div>
              <h1 className="editorial-headline text-6xl leading-none !text-white md:text-8xl lg:text-9xl">Choose your session with confidence.</h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed !text-white md:text-lg">
                Compare time, image count, setting, and price before you request a date. You will know what is included and what happens after you choose.
              </p>
              <a href="#portrait-packages" className="site-button site-button--light mt-8">Compare Packages</a>
            </div>
            {/* Current package values are maintained manually; keep source notes out of the visible UI. */}
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 pb-12 text-white md:pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true }}
            className="grid gap-5 border-y border-yellow-700/35 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:py-7"
          >
            <div className="flex h-12 w-12 items-center justify-center border border-yellow-700/40 bg-black/35 text-yellow-700">
              <VideoOff className="h-6 w-6" />
            </div>
            <div>
              <div className="editorial-caption mb-2 !text-yellow-700">
                Photo-Only Packages
              </div>
              <h2 className="editorial-title mb-2 text-3xl text-white md:text-4xl">
                These packages are for photography only.
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed !text-white md:text-base">
                Your package covers still photography. If your project also needs video, plan for a separate videographer and budget.
              </p>
            </div>
            <div className="hidden text-right text-xs uppercase text-yellow-700/90 md:block">
              Photography Only
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portrait-packages" className="bg-stone-50 py-20 md:py-28">
        <div className="editorial-grid gap-y-12">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="lookbook-page-marker mb-5 text-stone-500">
              Choose your session / 01
            </div>
            <div className="editorial-caption mb-4 text-yellow-700">
              Compare Your Options
            </div>
            <h2 className="editorial-title text-5xl leading-tight text-stone-950 md:text-7xl">
              Choose the amount of time your idea needs.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-7"
          >
            <p className="editorial-body text-stone-700">
              Choose Signature for one focused idea. Choose Legacy for outfit changes or more variety. Add a studio when controlled light and an indoor setting serve your vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {sessionTypes.map((type) => (
                <span key={type} className="border border-stone-300 bg-white px-3 py-1 text-sm text-stone-700">
                  {type}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="col-span-12 space-y-7">
            {portraitPackages.map((service, index) => {
              const isFeatured = Boolean(service.featured);

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`overflow-hidden border ${
                    isFeatured
                      ? "border-stone-950 bg-stone-950 text-white shadow-2xl"
                      : "border-stone-200 bg-white text-stone-950"
                  }`}
                >
                  <div className="grid gap-8 p-6 md:p-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(13rem,0.5fr)] lg:items-start">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center border ${
                        isFeatured
                          ? "border-yellow-700/40 bg-white/10 text-yellow-700"
                          : "border-yellow-700/25 bg-yellow-700/10 text-yellow-700"
                      }`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="editorial-caption mb-3 text-yellow-700">
                          {String(index + 1).padStart(2, "0")} / {service.category}
                        </div>
                        <h3 className={`editorial-title mb-4 text-4xl leading-tight md:text-5xl ${isFeatured ? "text-white" : "text-stone-950"}`}>
                          {service.title}
                        </h3>
                        <p className={`max-w-2xl text-base leading-relaxed ${isFeatured ? "text-white/72" : "text-stone-600"}`}>
                          {service.summary}
                        </p>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      {isFeatured && (
                        <div className="mb-3 inline-flex border border-yellow-700/35 px-3 py-1 text-xs uppercase text-yellow-700">
                          Popular Choice
                        </div>
                      )}
                      <div className={`editorial-title ${service.studioLink ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"} text-yellow-700`}>
                        {service.price}
                      </div>
                      <div className={`mt-2 text-sm ${isFeatured ? "text-white/60" : "text-stone-600"}`}>
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className={`grid gap-8 border-t px-6 pb-6 pt-6 md:grid-cols-[1fr_0.9fr] md:px-9 md:pb-9 ${
                    isFeatured ? "border-white/12" : "border-stone-200"
                  }`}>
                    <div>
                      <div className="editorial-caption mb-4 text-yellow-700">
                        Included
                      </div>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className={`flex items-start gap-2 text-sm ${isFeatured ? "text-white/76" : "text-stone-700"}`}>
                            <Star className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-700" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`border-t pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0 ${
                      isFeatured ? "border-white/12" : "border-stone-200"
                    }`}>
                      <div className="editorial-caption mb-4 text-yellow-700">
                        Best For
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.bestFor.map((type) => (
                          <span
                            key={type}
                            className={`border px-3 py-1 text-sm ${
                              isFeatured
                                ? "border-white/18 text-white/76"
                                : "border-yellow-700/25 text-stone-700"
                            }`}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                      {service.studioLink && (
                        <a
                          href={PEERSPACE_STUDIO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-700 hover:text-yellow-700"
                        >
                          Browse Orlando studio rentals
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={`flex flex-col gap-4 border-t px-6 py-6 sm:flex-row md:px-9 ${
                    isFeatured ? "border-white/12" : "border-stone-200"
                  }`}>
                    <a
                      href={SCHEDULING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`site-button w-full sm:w-auto ${isFeatured ? "site-button--light" : "site-button--dark"}`}
                    >
                      Request This Session
                    </a>
                    <a
                      href="/portfolio"
                      className={`site-button w-full sm:w-auto ${isFeatured ? "site-button--outline-light" : "site-button--outline"}`}
                    >
                      See This Photography Style
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-stone-50 md:py-20">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
          >
            <h2 className="editorial-title text-4xl text-stone-900 mb-4 md:text-5xl">
              Want an indoor studio look?
            </h2>
            <p className="editorial-body text-stone-600">
              Choose Signature or Legacy first. Then select a studio with the backdrop, light, and space your idea needs. Studio rental is added separately.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-20 md:py-28">
        <div className="editorial-grid gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <div className="lookbook-page-marker mb-5 text-stone-600">After you choose / 02</div>
            <div className="editorial-caption mb-4 text-yellow-700">Reservation Workflow</div>
            <h2 className="editorial-title text-5xl text-stone-950 md:text-7xl">Your next action is simple.</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-stone-700">You do not need every detail solved before reaching out. Start with the package and date that feel closest.</p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="divide-y divide-stone-200 border-y border-stone-200">
              {reservationSteps.map((step) => (
                <article key={step.number} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="text-sm text-yellow-700">{step.number}</span>
                  <div>
                    <h3 className="editorial-title text-3xl text-stone-950">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-stone-700">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer" className="site-button site-button--dark mt-8">Request Availability</a>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 text-white md:py-24">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="editorial-caption text-yellow-700 mb-4">
              BEFORE YOU BOOK
            </div>
            <h2 className="editorial-title text-4xl md:text-5xl text-white mb-6">
              Know the details before the date.
            </h2>
            <p className="text-stone-300 leading-relaxed">
              Before we shoot, you will know how payment, delivery, revisions,
              rescheduling, and image use work.
            </p>
          </motion.div>

          <div className="col-span-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
            {policyItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-300">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        page="pricing"
        title="Portrait Pricing Questions"
        description="The details most clients ask about before choosing a package."
      />
    </div>
  );
};

export default Pricing;
