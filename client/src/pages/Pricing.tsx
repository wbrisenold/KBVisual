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

const policyItems = [
  {
    title: "Date Retainer",
    description:
      "A 25% retainer reserves your date and starts the planning."
  },
  {
    title: "Payment",
    description:
      "The next payment is due after we shoot. The remaining balance is due when revisions are complete."
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
      "Book with this finish in mind: directed portraits, natural expression, and a clean edit."
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
          "@id": "https://kbvisualz.com/pricing/#portrait-packages",
          "name": "KB Visualz Orlando Portrait Photography Packages",
          "url": "https://kbvisualz.com/pricing/",
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
          className="absolute inset-0 h-full w-full object-cover opacity-28 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/68 to-stone-950"></div>
        <div className="editorial-grid relative min-h-[68vh] items-end pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 44, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-8"
          >
            <div className="editorial-caption mb-5 text-yellow-500">
              Portrait Pricing
            </div>
            <h1 className="editorial-headline text-6xl leading-none text-white md:text-8xl lg:text-9xl">
              Portrait Sessions
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/76 md:text-lg">
              Portrait sessions for Orlando and Central Florida clients who
              want clear direction, clean edits, and no guessing on price.
            </p>
            {/* Current package values are maintained manually; keep source notes out of the visible UI. */}
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 pb-12 text-white md:pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-5 border-y border-yellow-500/35 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:py-7"
          >
            <div className="flex h-12 w-12 items-center justify-center border border-yellow-500/40 bg-black/35 text-yellow-500">
              <VideoOff className="h-6 w-6" />
            </div>
            <div>
              <div className="editorial-caption mb-2 text-yellow-500">
                Photo-Only Packages
              </div>
              <h2 className="editorial-title mb-2 text-3xl text-white md:text-4xl">
                These packages are for photography only.
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-white/72 md:text-base">
                I photograph the session. If you need video, book a dedicated
                videographer separately; photo and video are not bundled under
                one KB Visualz package.
              </p>
            </div>
            <div className="hidden text-right text-xs uppercase text-yellow-500/80 md:block">
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
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="lookbook-page-marker mb-5 text-stone-500">
              Rates / 01
            </div>
            <div className="editorial-caption mb-4 text-yellow-700">
              Session Menu
            </div>
            <h2 className="editorial-title text-5xl leading-tight text-stone-950 md:text-7xl">
              Choose by pace, not pressure.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-7"
          >
            <p className="editorial-body text-stone-700">
              Choose Signature for a focused portrait set, Legacy when you want
              more time and variety, or Studio when the look needs controlled
              indoor light.
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
                  initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                          ? "border-yellow-500/40 bg-white/10 text-yellow-500"
                          : "border-yellow-700/25 bg-yellow-700/10 text-yellow-700"
                      }`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className={`editorial-caption mb-3 ${isFeatured ? "text-yellow-500" : "text-yellow-700"}`}>
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
                        <div className="mb-3 inline-flex border border-yellow-500/35 px-3 py-1 text-xs uppercase text-yellow-500">
                          Popular Choice
                        </div>
                      )}
                      <div className={`editorial-title ${service.studioLink ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"} ${isFeatured ? "text-yellow-400" : "text-yellow-700"}`}>
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
                      <div className={`editorial-caption mb-4 ${isFeatured ? "text-yellow-500" : "text-yellow-700"}`}>
                        Included
                      </div>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className={`flex items-start gap-2 text-sm ${isFeatured ? "text-white/76" : "text-stone-700"}`}>
                            <Star className={`mt-1 h-4 w-4 flex-shrink-0 ${isFeatured ? "text-yellow-500" : "text-yellow-700"}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`border-t pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0 ${
                      isFeatured ? "border-white/12" : "border-stone-200"
                    }`}>
                      <div className={`editorial-caption mb-4 ${isFeatured ? "text-yellow-500" : "text-yellow-700"}`}>
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
                          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                            isFeatured ? "text-yellow-500 hover:text-yellow-400" : "text-yellow-700 hover:text-yellow-800"
                          }`}
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
                      Plan This Session
                    </a>
                    <a
                      href="/portfolio"
                      className={`site-button w-full sm:w-auto ${isFeatured ? "site-button--outline-light" : "site-button--outline"}`}
                    >
                      View Portraits
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
          >
            <h2 className="editorial-title text-4xl text-stone-900 mb-4 md:text-5xl">
              Want the studio look?
            </h2>
            <p className="editorial-body text-stone-600">
              Book the studio you like, then choose Signature or Legacy for the
              portrait session. Studio rental is separate from the photography
              package.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 text-white md:py-24">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="editorial-caption text-yellow-500 mb-4">
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
