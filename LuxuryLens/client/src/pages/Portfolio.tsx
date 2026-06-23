import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GallerySection from "@/components/GallerySection";
import FAQ from "@/components/FAQ";
import bridalPhoto1 from "@assets/R6__4468_1750481639634.jpeg";
import bridalPhoto2 from "@assets/R6__4467_1750481639634.jpeg";
import bridalPhoto3 from "@assets/R6__4224_1750481639634.jpeg";
import bridalPhoto4 from "@assets/R6__4217_1750481639634.jpeg";
import featuredImage from "@assets/e8c5ce91bc10b0ef74b7e7904907cef0_1750188692723.jpg";
import eventPhoto1 from "@assets/IMG_5638_1750481880761.jpeg";
import eventPhoto2 from "@assets/R6__2160_1750481880761.jpeg";
import portraitPhoto1 from "@assets/_6__0021_1750483233957.jpeg";
import portraitPhoto2 from "@assets/_6__0025_1750483233958.jpeg";
import portraitPhoto3 from "@assets/_6__0036_1750483233958.jpeg";

const Portfolio = () => {
  const [galleryLoaded, setGalleryLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const lightoomShareId = "0e2148abff7c44a0893d09b635f29a29";
  const youtubePlaylistId = "PLkRi4nlxZj3w0_rFLxIdUr8ysi5pprjfW";

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
              SECTION 02 / COMPLETE PORTFOLIO
            </div>
            <h1 className="editorial-headline text-5xl md:text-7xl text-stone-900 mb-6">
              Visual Stories
            </h1>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-700 max-w-4xl mx-auto">
              A curated collection of professional photography and videography showcasing intimate elopements, 
              creative portraits, and visual storytelling that captures life's most precious moments 
              through the lens of artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[16/9] lg:aspect-[21/9]">
              <img
                src={featuredImage}
                alt="Featured Photography Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-xs tracking-[0.3em] uppercase opacity-80 mb-2">
                  FEATURED WORK
                </div>
                <h3 className="text-2xl lg:text-3xl font-light">
                  Intimate Elopement Photography
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Bridal Feature */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Feature Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8">
              SECTION 02 / ELOPEMENT COLLECTIONS
            </div>
            <h2 className="text-5xl lg:text-7xl font-light leading-[0.85] tracking-[-0.02em] mb-8">
              Intimate Celebrations
            </h2>
            <div className="w-24 h-px bg-black opacity-30 mx-auto mb-8"></div>
            <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-80">
              Each elopement portrait captures the intimate beauty and profound emotion of your private celebration. 
              Specialized in documenting authentic moments with artistic precision and luxury refinement.
            </p>
          </motion.div>

          {/* Portfolio Grid - Same as Portfolio Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={bridalPhoto1}
                alt="Elegant Bridal Portrait Series"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Garden Elegance
                  </h3>
                  <p className="text-white/80 text-sm">
                    Featured Series
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={bridalPhoto2}
                alt="Bridal Portrait Detail"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Bridal Portrait Detail
                  </h3>
                  <p className="text-white/80 text-sm">
                    Portrait Series
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={bridalPhoto3}
                alt="Intimate Elopement Photography"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Elopement Elegance
                  </h3>
                  <p className="text-white/80 text-sm">
                    Intimate Celebration Series
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={bridalPhoto4}
                alt="Fine Art Bridal Portraits"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Artistic Vision
                  </h3>
                  <p className="text-white/80 text-sm">
                    Portrait Series
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Editorial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed max-w-4xl mx-auto opacity-80 mb-8">
              "Every bride deserves to see herself as the masterpiece she truly is — 
              radiant, timeless, and absolutely beautiful."
            </blockquote>
            <div className="text-xs tracking-[0.3em] uppercase opacity-60">
              — Ken Brisenold, Bridal Photography Philosophy
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Photography Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Feature Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8">
              SECTION 03 / EVENT PHOTOGRAPHY
            </div>
            <h2 className="text-5xl lg:text-7xl font-light leading-[0.85] tracking-[-0.02em] mb-8">
              Celebration Moments
            </h2>
            <div className="w-24 h-px bg-black opacity-30 mx-auto mb-8"></div>
            <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-80">
              Professional event photography capturing the energy, emotion, and special moments 
              of your celebrations with authentic storytelling and artistic precision.
            </p>
          </motion.div>

          {/* Event Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={eventPhoto1}
                alt="Event Photography"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Celebration Moments
                  </h3>
                  <p className="text-white/80 text-sm">
                    Event Photography
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={eventPhoto2}
                alt="Professional Event Photography"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Authentic Emotions
                  </h3>
                  <p className="text-white/80 text-sm">
                    Special Occasion Series
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Editorial Quote for Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed max-w-4xl mx-auto opacity-80 mb-8">
              "Every celebration tells a story — capturing the laughter, the tears, 
              and the unforgettable moments that make each event unique."
            </blockquote>
            <div className="text-xs tracking-[0.3em] uppercase opacity-60">
              — Professional Event Photography by KB Visualz
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portrait Photography Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Feature Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-8">
              SECTION 04 / PORTRAIT PHOTOGRAPHY
            </div>
            <h2 className="text-5xl lg:text-7xl font-light leading-[0.85] tracking-[-0.02em] mb-8">
              Professional Portraits
            </h2>
            <div className="w-24 h-px bg-black opacity-30 mx-auto mb-8"></div>
            <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-80">
              Creating striking professional headshots and personal portraits that capture 
              individual personality and style with sophisticated lighting and composition.
            </p>
          </motion.div>

          {/* Portrait Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={portraitPhoto1}
                alt="Professional Portrait Photography"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Professional Headshots
                  </h3>
                  <p className="text-white/80 text-sm">
                    Business Portrait Series
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={portraitPhoto2}
                alt="Creative Portrait Photography"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Personal Branding
                  </h3>
                  <p className="text-white/80 text-sm">
                    Executive Portrait Series
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={portraitPhoto3}
                alt="Studio Portrait Photography"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    Creative Portraits
                  </h3>
                  <p className="text-white/80 text-sm">
                    Artistic Portrait Series
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Editorial Quote for Portraits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <blockquote className="text-xl lg:text-2xl font-light italic leading-relaxed max-w-4xl mx-auto opacity-80 mb-8">
              "A great portrait reveals not just how someone looks, 
              but who they truly are — capturing confidence, character, and authenticity."
            </blockquote>
            <div className="text-xs tracking-[0.3em] uppercase opacity-60">
              — Professional Portrait Photography by KB Visualz
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section className="section-padding bg-gray-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2"
          >
            <div className="text-center mb-12">
              <div className="editorial-caption text-yellow-600 mb-4">
                VIDEO PORTFOLIO
              </div>
              <h2 className="editorial-title text-3xl md:text-4xl text-stone-900 mb-6">
                Cinematic Storytelling
              </h2>
              <div className="section-break mb-8"></div>
              <p className="editorial-body text-stone-700 max-w-2xl mx-auto">
                Experience our videography work through this curated collection of wedding films, 
                corporate videos, and creative projects that showcase our cinematic approach to visual storytelling.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl border border-yellow-600/20 mb-8">
              <div className="aspect-video bg-white relative">
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
                      <p className="editorial-caption text-stone-700">Loading Video Portfolio</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylistId}`}
                  title="KB Visualz - Video Portfolio Playlist"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                  onLoad={() => setVideoLoaded(true)}
                />
              </div>
            </div>

            <div className="text-center">
              <div className="editorial-body text-stone-600 mb-6">
                Watch the complete video collection on YouTube for the full cinematic experience
              </div>
              <a 
                href={`https://youtube.com/playlist?list=${youtubePlaylistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-stone-900 font-semibold text-sm rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                VIEW ON YOUTUBE
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <GallerySection />

      {/* Photography Philosophy */}
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
              "Photography is not just about capturing moments; it's about preserving emotions, telling stories, and creating timeless art."
            </div>
            
            <div className="magazine-column">
              <div className="editorial-body text-stone-700">
                Every image in this portfolio represents a unique story, a special moment, and a commitment to 
                excellence in visual storytelling. Our approach combines technical mastery with artistic vision 
                to create photographs that transcend mere documentation.
              </div>
              
              <div className="editorial-body text-stone-700 mt-6">
                From intimate wedding ceremonies to grand celebrations, each photograph is crafted with 
                meticulous attention to detail, ensuring that every frame captures the essence of the moment 
                and the emotions of those within it.
              </div>
            </div>
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
              Ready to create your own visual story? Let's discuss how we can bring your vision to life 
              through our signature style of luxury photography and videography.
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="gold-gradient text-stone-900 font-semibold px-10 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                    COMMISSION YOUR STORY
                  </Button>
                </motion.div>
              </Link>
              <Link href="/pricing">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 px-10 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                    VIEW INVESTMENT GUIDE
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <div className="ornamental-break">❦</div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        page="portfolio" 
        title="Portfolio Questions" 
        description="Learn more about my artistic approach, style, and portfolio development process."
      />
    </div>
  );
};

export default Portfolio;