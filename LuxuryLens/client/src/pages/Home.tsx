import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Camera, Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import bridalPortrait1 from "@assets/R6__4468_1750190398879.jpg";
import bridalPortrait2 from "@assets/R6__4224_1750190398881.jpg";

const Home = () => {
  const featuredWork = [
    {
      title: "Intimate Luxury",
      category: "ELOPEMENT EDITORIAL",
      description: "A timeless celebration captured through the lens of editorial sophistication at The Ritz-Carlton.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Excellence",
      category: "BUSINESS PORTRAIT",
      description: "Executive portraits that command attention and convey professional authority.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Personal Narrative",
      category: "LIFESTYLE PORTRAIT",
      description: "Individual storytelling through carefully curated portrait sessions.",
      image: "https://images.unsplash.com/photo-1594736797933-d0db7ee65a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Artistic Excellence",
      description: "Recognized for artistic vision and technical mastery in elopement and lifestyle photography."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Discerning Clientele",
      description: "Trusted by luxury brands, celebrities, and couples who demand nothing less than perfection."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Artistic Innovation",
      description: "Pioneering photography techniques that capture emotion and elegance in every frame."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Global Reach",
      description: "Available for destination elopements and professional shoots across the United States and internationally."
    }
  ];

  return (
    <div className="min-h-screen page-content">
      <SEOHead 
        title="Professional Photography & Videography Services | Orlando, FL"
        description="KB Visualz specializes in elopement photography, portrait sessions, and cinematic videography in Orlando, Florida. Book your professional photography session with Ken Brisenold today."
        keywords="Orlando elopement photographer, Florida portrait photography, elopement photography services, videography Orlando, Ken Brisenold photographer, professional headshots Florida"
      />
      
      {/* Editorial Sale Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-stone-900 text-stone-100 py-6 px-4 relative overflow-hidden border-b border-yellow-600/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto editorial-grid">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="editorial-caption text-yellow-600 mb-2 tracking-widest">
              EXCLUSIVE OFFER / LIMITED AVAILABILITY
            </div>
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="text-center">
                <div className="editorial-title text-2xl md:text-3xl text-stone-100 mb-1">
                  Intimate Elopement Coverage
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-stone-400 line-through editorial-body text-lg">$800</span>
                  <span className="text-yellow-600 font-light text-3xl md:text-4xl tracking-tight">$600</span>
                </div>
              </div>
            </div>
            <div className="editorial-caption text-stone-400 mb-4">
              3-4 hour coverage • 100+ edited images • Premium service
            </div>
            <Link href="/pricing">
              <Button 
                className="bg-yellow-600 text-stone-900 hover:bg-yellow-700 editorial-caption tracking-wider px-8 py-3 transition-all duration-300 font-medium"
              >
                VIEW COMPLETE PRICING
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      
      <Hero />
      
      {/* About Section - Editorial Style */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 text-center md:text-left"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              SECTION 08 / ABOUT THE ARTIST
            </div>
            <h2 className="editorial-title text-4xl md:text-5xl text-stone-900 mb-6">
              Ken Brisenold
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
                Born in Haiti, raised in Florida. Military veteran and UCF graduate who discovered 
                photography in 2018. Guided by "memento mori" - capturing life's precious moments 
                through visual storytelling with artistic excellence.
              </div>
              
              <div className="editorial-body text-stone-700 mt-6">
                My work focuses on preserving authentic emotions and creating timeless imagery 
                that tells your unique story with artistic excellence. Each session is approached 
                as a collaborative creative project.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/about">
                <Button className="gold-gradient text-stone-900 font-semibold w-full sm:w-auto">
                  READ FULL STORY
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 w-full sm:w-auto">
                  VIEW PORTFOLIO
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>






      {/* FAQ Section */}
      <FAQ 
        page="home" 
        title="Common Questions" 
        description="Everything you need to know about working with KB Visualz for your photography needs."
      />
    </div>
  );
};

export default Home;