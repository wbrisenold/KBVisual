import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Camera, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import { SCHEDULING_URL } from "@/lib/booking";
import GoogleReviews from "@/components/GoogleReviews";

const Home = () => {
  const portraitFocus = [
    {
      icon: <Camera className="w-7 h-7" />,
      title: "Signature Portraits",
      description: "A one-hour session with 15 professional edits for crisp, polished imagery."
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Legacy Portraits",
      description: "A two-hour session with 30 professional edits for a fuller personal gallery."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Studio Options",
      description: "Book a studio separately, then add your selected portrait package."
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
                Each session is planned around your style, location, and the
                feeling you want the final images to carry.
              </div>

              <div className="editorial-body text-stone-700 mt-6">
                Outdoor sessions are available across Orlando and Central Florida.
                Studio sessions are available by booking your preferred studio
                separately and adding the portrait package price.
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
                  SCHEDULE SESSION
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
        description="A few useful details before you schedule an individual portrait session."
      />
    </div>
  );
};

export default Home;
