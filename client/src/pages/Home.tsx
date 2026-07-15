import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import formalStudioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";
import proposalPortrait from "@assets/kbvisualz-current/kbv-03.jpg";
import outdoorEditorialPortrait from "@assets/kbvisualz-current/kbv-07.jpg";
import childPortrait from "@assets/kbvisualz-current/kbv-08.jpg";
import retroStudioPortrait from "@assets/kbvisualz-current/kbv-09.jpg";
import gardenEditorialPortrait from "@assets/kbvisualz-current/kbv-10.jpg";

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
      href: "/#contact",
      action: "Request your date"
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
        title="KB Visualz — Orlando Portrait Photography"
        description="Orlando and Central Florida portrait photography by KB Visualz — graduation, family, branding, fashion, studio, and creative personal sessions."
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

      <section id="home-gallery" className="scroll-mt-20 bg-neutral-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:gap-6 lg:px-12">
          {[formalStudioPortrait, outdoorEditorialPortrait, retroStudioPortrait, proposalPortrait, gardenEditorialPortrait, childPortrait].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="group relative block overflow-hidden aspect-[3/4]">
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/portfolio" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold text-white/80 hover:text-white hover:border-white/60 transition-colors">
            View full portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

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
                From browse to book.
              </h2>
            </div>
            <p className="editorial-body text-stone-700 md:col-span-4 md:col-start-9">
              Every session starts with a shared plan. Follow the path that fits where you are.
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

      <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 py-28 text-white md:py-36">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-700 to-transparent"></div>
        <div className="editorial-grid relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 mb-12"
          >
            <div className="lookbook-page-marker mb-5 text-white/70">Ready when you are</div>
            <div className="editorial-caption mb-5 !text-yellow-700">Get in touch</div>
            <h2 className="editorial-title max-w-3xl text-5xl leading-tight !text-white md:text-7xl">Tell me what you want these portraits to remember.</h2>
          </motion.div>
          <div className="col-span-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-white/80 md:text-lg">Share your preferred date, portrait type, and any early ideas. You will receive availability and a clear path to reserve.</p>
              <div className="mt-8 space-y-3 text-sm text-white/50">
                <p className="flex items-center gap-3"><span className="h-px w-6 bg-yellow-700/60"></span>Response within 1–2 business days</p>
                <p className="flex items-center gap-3"><span className="h-px w-6 bg-yellow-700/60"></span>No commitment required to inquire</p>
                <p className="flex items-center gap-3"><span className="h-px w-6 bg-yellow-700/60"></span>Orlando and Central Florida sessions</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
