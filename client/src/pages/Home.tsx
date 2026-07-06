import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import { SCHEDULING_URL } from "@/lib/booking";
import GoogleReviews from "@/components/GoogleReviews";
import formalStudioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";
import retroStudioPortrait from "@assets/kbvisualz-current/kbv-09.jpg";
import gardenEditorialPortrait from "@assets/kbvisualz-current/kbv-10.jpg";

const Home = () => {
  const portraitShowcase = [
    {
      image: gardenEditorialPortrait,
      title: "Creative outdoor portraits",
      description: "Color, expression, and movement shaped around the person in front of the lens.",
      className: "md:col-span-7 md:row-span-2"
    },
    {
      image: formalStudioPortrait,
      title: "Polished studio presence",
      description: "Formal portrait direction with controlled light and a refined finish.",
      className: "md:col-span-5"
    },
    {
      image: retroStudioPortrait,
      title: "Personality-led sessions",
      description: "Styling and pacing that leave room for confidence, character, and ease.",
      className: "md:col-span-5"
    }
  ];

  const portraitFocus = [
    {
      icon: <Camera className="w-7 h-7" />,
      title: "Signature Portraits",
      description: "A one-hour session with 15 edited portraits and direction throughout the shoot."
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Legacy Portraits",
      description: "A two-hour session with 30 edited portraits for more outfits, locations, and variety."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Studio Options",
      description: "Choose a studio space, then pair it with the portrait package that fits your session."
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

      <section className="bg-stone-950 py-20 text-white md:py-28">
        <div className="editorial-grid items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="editorial-caption mb-5 text-yellow-500">
              THE PORTRAIT EXPERIENCE
            </div>
            <h2 className="editorial-title mb-7 text-4xl text-white md:text-6xl">
              A session that feels directed, not awkward.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-stone-300 md:text-lg">
              Most people do not walk into a portrait session knowing exactly
              what to do. That is the point of working with a photographer who
              guides the mood, the posing, the small adjustments, and the final
              edit.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                <Button className="gold-gradient h-12 w-full px-6 font-semibold text-stone-950 sm:w-auto">
                  Plan Your Session
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 w-full border-white/40 bg-transparent px-6 text-white hover:bg-white hover:text-stone-950 sm:w-auto">
                  View The Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="col-span-12 grid gap-4 md:grid-cols-12 lg:col-span-7">
            {portraitShowcase.map((photo, index) => (
              <motion.figure
                key={photo.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`scroll-lift group relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-white/5 ${photo.className}`}
              >
                <img
                  src={photo.image}
                  alt={`${photo.title} by KB Visualz`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {photo.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                    {photo.description}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 text-center md:text-left"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              PORTRAIT SESSIONS
            </div>
            <h2 className="editorial-title text-4xl md:text-5xl text-stone-900 mb-6">
              Individual Portraits
            </h2>
            <div className="section-break md:mx-0 mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8"
          >
            <div className="magazine-column">
              <div className="editorial-body text-stone-700 magazine-dropcap">
                KB Visualz creates Orlando portrait photography for graduation,
                prom, fashion, family, branding, and creative personal work.
                Each session is planned around how you want to look, feel, and
                remember this season.
              </div>

              <div className="editorial-body text-stone-700 mt-6">
                You will get help with timing, location, and posing so the
                session feels clear before you ever step in front of the camera.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/pricing">
                <Button className="gold-gradient text-stone-900 font-semibold w-full sm:w-auto">
                  VIEW PRICING
                </Button>
              </Link>
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 w-full sm:w-auto">
                  PLAN YOUR SESSION
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              CURRENT PACKAGES
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl text-stone-900">
              Portrait Session Options
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portraitFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <div className="text-yellow-600 mb-4">{item.icon}</div>
                <h3 className="editorial-title text-2xl text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      <FAQ
        page="home"
        title="Portrait Session Questions"
        description="A few useful details before we plan your portrait session."
      />
    </div>
  );
};

export default Home;
