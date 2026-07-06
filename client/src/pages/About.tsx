import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SCHEDULING_URL } from "@/lib/booking";
import SEOHead from "@/components/SEOHead";
import photographerPortrait from "@assets/profile-pic.jpg";

const About = () => {
  return (
    <div className="min-h-screen page-content" style={{ backgroundColor: '#fafafa' }}>
      <SEOHead
        title="About Ken Brisenold, Orlando Portrait Photographer"
        description="Meet Ken Brisenold of KB Visualz, an Orlando portrait photographer creating polished graduation, family, branding, fashion, and creative portraits across Central Florida."
        keywords="Ken Brisenold, KB Visualz, Orlando portrait photographer, Central Florida photographer, UCF photographer, Florida portrait photography"
        canonicalPath="/about/"
        structuredData={{
          "@type": "Person",
          "@id": "https://kbvisualz.com/about/#ken-brisenold",
          "name": "Ken Brisenold",
          "jobTitle": "Orlando Portrait Photographer",
          "worksFor": {
            "@id": "https://kbvisualz.com/#business"
          },
          "url": "https://kbvisualz.com/about/",
          "description": "Military veteran and UCF graduate behind KB Visualz, creating portrait photography in Orlando and Central Florida."
        }}
      />

      {/* Magazine Header */}
      <section className="section-padding">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-16"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              ABOUT THE PHOTOGRAPHER
            </div>
            <h1 className="editorial-headline text-5xl md:text-7xl text-stone-900 mb-6">
              Ken Brisenold
            </h1>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-700 max-w-3xl mx-auto">
              I'm the photographer behind KB Visualz, creating portrait sessions
              in Orlando and Central Florida with a focus on presence,
              confidence, and clean visual storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photographer portrait section */}
      <section className="section-padding hero-masthead">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6"
          >
            <div className="image-feature rounded-lg overflow-hidden">
              <img
                src={photographerPortrait}
                alt="Ken Brisenold, photographer behind KB Visualz"
                className="w-full aspect-[3/4] object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 flex items-center"
          >
            <div className="magazine-column">
              <div className="editorial-body text-stone-700 magazine-dropcap">
                Born in Haiti and raised in Florida, I am a military veteran and
                UCF graduate who discovered photography in 2018. That discovery
                became KB Visualz, where I create Orlando portrait work with a
                focus on presence, confidence, and clean visual storytelling.
              </div>
              
              <div className="editorial-body text-stone-700 mt-6">
                My work focuses on preserving authentic expression and creating
                polished imagery that feels personal, intentional, and true to
                the person in front of the camera.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
          >
            <div className="pull-quote mb-12">
              "In 2018, I discovered my passion for photography, forever changing the course of my life."
            </div>
            
            <div className="magazine-column">
              <div className="editorial-body text-stone-700">
                That same year, I connected with the "memento mori" philosophy -
                a reminder that time is limited and every season is worth
                remembering. My work is about preserving honest expression,
                personal milestones, and the details that make a portrait feel
                true to the person in front of the camera.
              </div>
              
              <div className="editorial-body text-stone-700 mt-6">
                Whether the session is for graduation, family, branding, or a
                creative idea you want to bring to life, my goal is to make the
                experience feel intentional from planning through final delivery.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-12"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              MEMENTO MORI
            </div>
            <h2 className="editorial-title text-3xl md:text-4xl text-stone-900 mb-6">
              Remember Life is Fleeting
            </h2>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-700 max-w-3xl mx-auto">
              Every moment is precious. Every memory deserves to be preserved with intention and artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding hero-masthead">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 text-center"
          >
            <div className="editorial-body text-stone-700 max-w-2xl mx-auto mb-12">
              Ready for portraits that feel personal, polished, and true to you?
              Let's plan a session and create images with intention.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="gold-gradient text-stone-900 font-semibold px-10 py-4 w-full sm:w-auto">
                <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                  PLAN YOUR SESSION
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 px-10 py-4 w-full sm:w-auto">
                <Link href="/portfolio">
                  VIEW MY WORK
                </Link>
              </Button>
            </div>

            <div className="section-break mb-0"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
