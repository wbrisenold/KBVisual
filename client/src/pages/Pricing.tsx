import { motion } from "framer-motion";
import { Building2, Camera, ExternalLink, Sparkles, Star, VideoOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import { PEERSPACE_STUDIO_URL, SCHEDULING_URL } from "@/lib/booking";
import SEOHead from "@/components/SEOHead";

const portraitPackages = [
  {
    category: "PORTRAIT SESSION",
    title: "The Signature Session",
    icon: <Camera className="w-6 h-6" />,
    price: "$250",
    duration: "1 hour",
    summary: "A focused portrait session for a clean, polished set of images.",
    deliverables: [
      "15 professional edits",
      "Outdoor portrait session",
      "Style and posing direction",
      "High-resolution edited images"
    ]
  },
  {
    category: "PORTRAIT SESSION",
    title: "The Legacy Session",
    icon: <Sparkles className="w-6 h-6" />,
    price: "$400",
    duration: "2 hours",
    summary: "A longer session for more looks, more variety, and a deeper portrait gallery.",
    deliverables: [
      "30 professional edits",
      "More time for outfit changes",
      "Outdoor portrait session",
      "High-resolution edited images"
    ],
    featured: true
  },
  {
    category: "STUDIO OPTION",
    title: "Creative Studio Session",
    icon: <Building2 className="w-6 h-6" />,
    price: "Package + studio rental",
    duration: "Choose Signature or Legacy",
    summary: "Reserve your preferred studio, then add the portrait package price.",
    deliverables: [
      "Client books the studio separately",
      "Portrait package price is added to the studio rental fee",
      "Ideal for controlled lighting and backdrop options",
      "Use Peerspace to find Orlando studio rentals"
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
    title: "Reserving Your Date",
    description:
      "A 25% retainer reserves your session date and begins planning for your shoot."
  },
  {
    title: "Payment Timing",
    description:
      "The next payment is due after the session, with the final balance due once revisions are complete."
  },
  {
    title: "Revisions",
    description:
      "Two complimentary revisions are included. Additional revisions are available for $20 each."
  },
  {
    title: "Delivery Timeline",
    description:
      "Proofs are delivered within 3-5 business days after the session. Final photos are delivered within 2-4 business days after approval."
  },
  {
    title: "Rescheduling",
    description:
      "If plans change, reach out as soon as possible so we can look for a new available date."
  },
  {
    title: "Usage Rights",
    description:
      "Delivered portraits are yours to use personally. KB Visualz may use selected images for portfolio and promotional work unless we agree otherwise in writing."
  },
  {
    title: "Photo and Video Bookings",
    description:
      "KB Visualz packages are photography-only. If you need video coverage, please book a separate videographer."
  },
  {
    title: "Before Your Session",
    description:
      "Please arrive on time and share important details in advance so the session can be planned around your vision."
  },
  {
    title: "Make Sure It Feels Like You",
    description:
      "Review the portfolio before booking so you feel confident that the KB Visualz style matches what you want."
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

      <section className="pt-14 pb-6 md:pt-16 md:pb-8">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              PORTRAIT PRICING
            </div>
            <h1 className="editorial-headline text-5xl md:text-7xl text-stone-900 mb-5">
              Portrait Sessions
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              Portrait photography pricing for Orlando and Central Florida
              sessions, including outdoor portraits and optional studio rental
              planning.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-yellow-600/50"></div>
            {/* Current package values are maintained manually; keep source notes out of the visible UI. */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 mt-8"
          >
            <div className="rounded-lg border-2 border-yellow-600 bg-yellow-600/10 p-5 md:p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-stone-950 text-yellow-500">
                  <VideoOff className="h-6 w-6" />
                </div>
                <div>
                  <div className="editorial-caption mb-2 text-yellow-700">
                    PHOTO-ONLY PACKAGES
                  </div>
                  <h2 className="editorial-title mb-2 text-2xl text-stone-950 md:text-3xl">
                    Photo and video are booked separately.
                  </h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-stone-700 md:text-base">
                    KB Visualz does not offer photo and video bundle packages.
                    These prices cover photography sessions only; video
                    coverage must be booked with a separate videographer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="editorial-grid gap-8 md:gap-10">
          {portraitPackages.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true }}
              className={`col-span-12 ${service.featured ? "md:col-span-8 md:col-start-3" : "md:col-span-10 md:col-start-2"} relative`}
            >
              {service.featured && (
                <div className="absolute -top-4 -right-4 bg-yellow-600 text-stone-900 px-4 py-2 editorial-caption rotate-3">
                  POPULAR
                </div>
              )}

              <div className={`rounded-lg border ${service.featured ? "border-yellow-600 bg-stone-50" : "border-gray-200 bg-gray-50"} overflow-hidden`}>
                <div className="p-7 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-7">
                    <div className="flex items-start gap-4">
                      <div className="text-yellow-600 bg-yellow-600/10 p-3 rounded-lg flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <div className="editorial-caption text-yellow-600 mb-2">
                          {service.category}
                        </div>
                        <h2 className="editorial-title text-3xl text-stone-900 mb-3">
                          {service.title}
                        </h2>
                        <p className="editorial-body text-stone-600 max-w-2xl">
                          {service.summary}
                        </p>
                      </div>
                    </div>

                    <div className="md:text-right flex-shrink-0">
                      <div className="text-3xl md:text-4xl font-light text-yellow-600">
                        {service.price}
                      </div>
                      <div className="text-sm text-stone-600 mt-1">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <div className="editorial-caption text-yellow-600 mb-4">
                        INCLUDED
                      </div>
                      <ul className="space-y-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-stone-700">
                            <Star className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="magazine-sidebar">
                      <div className="editorial-caption text-yellow-600 mb-4">
                        BEST FOR
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sessionTypes.map((type) => (
                          <span key={type} className="rounded-full border border-yellow-600/30 px-3 py-1 text-sm text-stone-700">
                            {type}
                          </span>
                        ))}
                      </div>
                      {service.studioLink && (
                        <a
                          href={PEERSPACE_STUDIO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-yellow-600 hover:text-yellow-700"
                        >
                          Browse Orlando studio rentals
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row gap-4">
                    <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="gold-gradient text-stone-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto">
                        PLAN THIS SESSION
                      </Button>
                    </a>
                    <Link href="/portfolio">
                      <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                        VIEW PORTRAITS
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-14 bg-stone-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
          >
            <h2 className="editorial-title text-3xl text-stone-900 mb-4">
              Studio Pricing Note
            </h2>
            <p className="editorial-body text-stone-600">
              For studio work, reserve the studio separately through a rental
              platform or studio of your choice. The selected portrait package
              price is added to the studio rental fee.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-white md:py-20">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="editorial-caption text-yellow-500 mb-4">
              BOOKING NOTES
            </div>
            <h2 className="editorial-title text-4xl md:text-5xl text-white mb-6">
              A few details before we lock it in.
            </h2>
            <p className="text-stone-300 leading-relaxed">
              These notes keep the session clear, prepared, and fair for both
              sides without making the booking process feel complicated.
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
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
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
        description="Details about session length, edits, and studio rental pricing."
      />
    </div>
  );
};

export default Pricing;
