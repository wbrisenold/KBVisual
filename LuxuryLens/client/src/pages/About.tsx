import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import professionalHeadshot from "@assets/R6__8950.jpeg";

const About = () => {
  const credentials = [
    { label: "Origin", value: "Born in Haiti, Raised in Florida" },
    { label: "Education", value: "University of Central Florida" },
    { label: "Service", value: "Military Veteran" },
    { label: "Philosophy", value: "Memento Mori - Seize Every Moment" }
  ];

  return (
    <div className="min-h-screen page-content" style={{ backgroundColor: '#fafafa' }}>
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
              SECTION 08 / ABOUT THE ARTIST
            </div>
            <h1 className="editorial-headline text-5xl md:text-7xl text-stone-900 mb-6">
              Ken Brisenold
            </h1>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-700 max-w-3xl mx-auto">
              A journey from Haiti to the heart of Florida luxury photography, guided by the philosophy 
              of Memento Mori - seizing every precious moment through the lens of artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Portrait Section */}
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
                src={professionalHeadshot}
                alt="Ken Brisenold - Professional Photographer"
                className="w-full h-auto object-cover"
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
                Born in Haiti, raised in Florida. Military veteran and UCF graduate who discovered 
                photography in 2018. Guided by "memento mori" - capturing life's precious moments 
                through luxury visual storytelling.
              </div>
              
              <div className="editorial-body text-stone-700 mt-6">
                My work focuses on preserving authentic emotions and creating timeless imagery 
                that tells your unique story with artistic excellence.
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
              "In 2018, I discovered my passion for photography and videography, forever changing the course of my life."
            </div>
            
            <div className="magazine-column">
              <div className="editorial-body text-stone-700">
                It was then that I adopted the "memento mori" philosophy - a reminder to seize every 
                fleeting moment, for life is ephemeral. Through my lens, I strive to capture the essence 
                of these moments, to freeze time and allow people to relive their cherished memories. 
                My work is more than just images and videos; it's a testament to the beauty of human 
                connection and the power of storytelling.
              </div>
              
              <div className="editorial-body text-stone-700 mt-6">
                Thank you for joining me on this journey of preserving memories and celebrating life's 
                most precious moments. I look forward to capturing your story and creating lasting 
                mementos that will be treasured for generations to come.
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
            <div className="editorial-body text-stone-300 max-w-2xl mx-auto mb-12">
              Ready to preserve your precious moments through the lens of luxury and artistry? 
              Let's collaborate to create timeless imagery that captures the essence of your story.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="gold-gradient text-stone-900 font-semibold px-10 py-4 w-full sm:w-auto">
                  START YOUR STORY
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 px-10 py-4 w-full sm:w-auto">
                  VIEW MY WORK
                </Button>
              </Link>
            </div>

            <div className="ornamental-break">❦</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
