import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import { SCHEDULING_URL } from "@/lib/booking";
import GoogleReviews from "@/components/GoogleReviews";

const Home = () => {
  const bookingSteps = [
    {
      number: "01",
      title: "See if the work feels like you",
      description: "Browse real portraits and notice the light, color, expression, and direction you want for yourself.",
      href: "/portfolio",
      action: "Browse the portrait lookbook"
    },
    {
      number: "02",
      title: "Choose the pace you need",
      description: "Compare one-hour, two-hour, and studio options. Every package shows price, time, and final images up front.",
      href: "/pricing",
      action: "Compare session options"
    },
    {
      number: "03",
      title: "Reserve your date",
      description: "Send your preferred date and session idea. A 25% retainer secures the date after availability is confirmed.",
      href: SCHEDULING_URL,
      action: "Request your date",
      external: true
    },
    {
      number: "04",
      title: "Plan with guidance",
      description: "Before your session, we align on location, outfits, timing, mood, and anything you feel unsure about.",
      href: "/about",
      action: "Meet your photographer"
    }
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
          "@id": "https://wbrisenold.github.io/KBVisual/#portrait-service",
          "name": "Orlando Portrait Photography Sessions",
          "serviceType": "Portrait photography",
          "provider": {
            "@id": "https://wbrisenold.github.io/KBVisual/#business"
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

      <section id="process" className="scroll-mt-20 bg-[#f3efe7] py-20 md:py-28">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-12 grid gap-8 border-b border-stone-950/20 pb-12 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <div className="lookbook-page-marker mb-5 text-stone-600">
                Your booking path / 01–04
              </div>
              <div className="editorial-caption mb-4 text-yellow-700">
                How It Works
              </div>
              <h2 className="editorial-title max-w-4xl text-5xl leading-tight text-stone-950 md:text-7xl">
                From “I need photos” to a session you feel ready for.
              </h2>
            </div>
            <p className="editorial-body text-stone-700 md:col-span-4 md:col-start-9">
              You should know the style, investment, booking terms, and plan before your session day. Follow these steps in order or enter wherever you are ready.
            </p>
          </motion.div>

          <div className="col-span-12 grid border-stone-950/20 md:grid-cols-2">
            {bookingSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group border-b border-stone-950/20 py-10 md:min-h-[310px] md:p-10 md:[&:nth-child(odd)]:border-r"
              >
                <div className="mb-10 flex items-center justify-between border-b border-stone-950/15 pb-4 text-xs uppercase text-stone-600">
                  <span>Step {step.number}</span>
                  <span>{index === 3 ? "You are ready" : "Keep moving"}</span>
                </div>
                <h3 className="editorial-title max-w-xl text-4xl text-stone-950 md:text-5xl">{step.title}</h3>
                <p className="mt-5 max-w-xl leading-relaxed text-stone-700">{step.description}</p>
                <a
                  href={step.href}
                  target={step.external ? "_blank" : undefined}
                  rel={step.external ? "noopener noreferrer" : undefined}
                  className="mt-8 inline-flex items-center gap-3 border-b border-stone-950 pb-1 text-sm font-semibold text-stone-950"
                >
                  {step.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="session-day" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="editorial-grid items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="col-span-12 md:col-span-5"
          >
            <div className="lookbook-page-marker mb-5 text-stone-600">On session day</div>
            <div className="editorial-caption mb-4 text-yellow-700">What you can expect</div>
            <h2 className="editorial-title text-5xl text-stone-950 md:text-7xl">You will not be left wondering what to do.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-7"
          >
            <p className="editorial-body text-stone-700">I guide your posture, hands, movement, and expression while leaving room for you to feel natural. You see enough along the way to know we are building the right gallery.</p>
            <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
              {["Arrive with a shared visual plan", "Receive calm, specific posing direction", "Review proofs in 3–5 business days", "Choose favorites for final retouching"].map((item, index) => (
                <div key={item} className="grid grid-cols-[3rem_1fr] gap-4 py-5"><span className="text-sm text-yellow-700">{String(index + 1).padStart(2, "0")}</span><span className="text-lg text-stone-800">{item}</span></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="booking" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 bg-noise py-28 text-white md:py-36">
        <div className="editorial-grid relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 grid gap-8 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-8">
              <div className="lookbook-page-marker mb-5 text-white/70">Ready when you are</div>
              <div className="editorial-caption mb-5 !text-yellow-700">Reserve your session</div>
              <h2 className="editorial-title text-5xl leading-tight !text-white md:text-7xl">Tell me what you want these portraits to remember.</h2>
            </div>
            <div className="md:col-span-4">
              <p className="mb-6 leading-relaxed text-white/80">Share your preferred date, portrait type, and any early ideas. You will receive availability and a clear path to reserve.</p>
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer" className="site-button site-button--light w-full sm:w-auto">Request Your Date <ArrowRight className="h-4 w-4" /></a>
              <p className="mt-4 text-xs leading-relaxed text-white/60">Not ready to request a date? Review <a href="/pricing" className="underline text-white">pricing and package details</a> first.</p>
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
