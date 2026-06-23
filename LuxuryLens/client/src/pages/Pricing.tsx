import { motion } from "framer-motion";
import { User, Heart, Calendar, Camera, Star, Video, Film, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import bridalShowcase from "@assets/R6__4214_1750481639634.jpeg";
import FAQ from "@/components/FAQ";

import TravelCalculator from "@/components/TravelCalculator";

const Pricing = () => {
  const editorialServices = [
    {
      category: "PORTRAIT SESSIONS",
      title: "Individual Portrait Sessions (Outdoor)",
      icon: <User className="w-6 h-6" />,
      description: "Professional outdoor portrait sessions including graduation, prom, fashion, family, branding, engagement, and specialty photography. Unlimited outfit changes within your time frame.",
      firstHour: 250,
      additionalHour: 150,
      duration: "1+ hours (2hr recommended for families/groups)",
      deliverables: [
        "15 edited photos included",
        "Additional photos: $15 each (non-Photoshop/FX)",
        "Professional retouching & artistic direction",
        "Private online gallery access",
        "High-resolution digital files",
        "Final photos delivered within 3-5 business days"
      ],
      includes: "25% deposit required • Location guidance • Posing direction • No half-hour sessions (full hour billing)",
      policies: "No deposit refunds • Cancellation requires rebooking with new deposit"
    },
    {
      category: "INDIVIDUAL PORTRAIT SESSIONS",
      title: "Studio Portrait Photography",
      icon: <Camera className="w-6 h-6" />,
      description: "Professional studio portrait sessions featuring controlled lighting and premium backdrop options. Perfect for headshots, personal branding, and artistic portraiture.",
      firstHour: 250,
      additionalHour: 150,
      duration: "1.5 hours total (1hr + FREE 0.5hr bonus)",
      deliverables: [
        "Professional studio lighting setup",
        "15 professionally edited photos included",
        "Multiple backdrop and lighting options",
        "High-resolution digital files",
        "Private online gallery access",
        "Final photos delivered within 3-5 business days",
        "Customer books their own chosen studio (average $85/hr)"
      ],
      includes: "Professional equipment & lighting • Posing direction • Additional photos: $15 each (non-Photoshop/FX)",
      policies: "25% deposit required • No half-hour sessions • Cancellation requires rebooking with new deposit"
    },
    {
      category: "ELOPEMENT PHOTOGRAPHY",
      title: "Intimate Elopement Coverage",
      icon: <Heart className="w-6 h-6" />,
      description: "Specialized elopement photography capturing your intimate celebration with artistic excellence and personal attention.",
      basePrice: 600,
      originalPrice: 800,
      duration: "3-4 hour coverage",
      deliverables: [
        "Pre-elopement consultation & planning",
        "Ceremony and couple portraits",
        "100+ professionally edited images",
        "Timeline coordination assistance",
        "Private online gallery",
        "High-resolution digital files",
        "Print release included"
      ],
      includes: "Travel within 25 miles, ceremony coverage, and intimate reception moments",
      featured: true,
      saleText: "Limited Time Offer"
    },
    {
      category: "EVENT PHOTOGRAPHY",
      title: "Corporate & Event Coverage",
      icon: <Calendar className="w-6 h-6" />,
      description: "Professional event documentation with editorial flair for corporate and special occasions.",
      firstHour: 350,
      additionalHour: 350,
      duration: "Hourly rate",
      deliverables: [
        "Event planning consultation",
        "Professional documentation",
        "Same-day preview selection",
        "Commercial usage license",
        "Brand guideline adherence",
        "Rush delivery available"
      ],
      includes: "Corporate branding integration and professional event management"
    }
  ];

  const elopementEnhancements = [
    { name: "Additional Hour Coverage", price: 200 },
    { name: "Engagement Session", price: 350 },
    { name: "Bridal Portraits", price: 300 },
    { name: "Destination Elopement", price: 500 },
    { name: "Rush Processing (48hrs)", price: 150 },
    { name: "Premium Album Design", price: 400 },
    { name: "Reception/Dinner Coverage", price: 200 },
    { name: "Getting Ready Coverage", price: 250 }
  ];

  const portraitEnhancements = [
    { name: "Additional Hour", price: 150 },
    { name: "Second Location", price: 100 },
    { name: "Additional Photos (each)", price: 15 },
    { name: "Studio Rental Coordination", price: 85 },
    { name: "Rush Processing (48hrs)", price: 100 },
    { name: "Premium Print Package", price: 250 },
    { name: "Extended Gallery Access", price: 75 }
  ];

  const videoServices = [
    {
      category: "ELOPEMENT VIDEOGRAPHY",
      title: "Intimate Celebration Films",
      icon: <Video className="w-6 h-6" />,
      description: "Specialized elopement and courthouse wedding videography capturing your intimate celebration through cinematic storytelling.",
      basePrice: 1200,
      duration: "3-4 hour coverage",
      deliverables: [
        "3-5 minute highlight reel",
        "Ceremony & intimate celebration footage", 
        "Professional audio recording",
        "Color grading & editing",
        "High-definition delivery",
        "Social media versions"
      ],
      includes: "Multiple camera angles, courthouse/small venue specialist, and professional audio"
    },
    {
      category: "INDIVIDUAL VIDEO SESSIONS", 
      title: "Personal & Portrait Videos",
      icon: <Film className="w-6 h-6" />,
      description: "Professional individual video sessions for personal branding, portraits, and creative projects.",
      basePrice: 400,
      additionalHour: 250,
      duration: "2 hours minimum",
      deliverables: [
        "1-3 minute final video",
        "Professional editing",
        "Color correction",
        "Branded graphics (optional)",
        "Fast turnaround"
      ],
      includes: "Concept development, location guidance, and post-production"
    },
    {
      category: "EVENT VIDEOGRAPHY",
      title: "Corporate & Special Events", 
      icon: <Play className="w-6 h-6" />,
      description: "Professional event documentation with cinematic quality for corporate and special occasions.",
      basePrice: 600,
      additionalHour: 300,
      duration: "3 hours minimum",
      deliverables: [
        "Highlight reel (3-5 minutes)",
        "Full ceremony/event footage",
        "Professional editing",
        "Professional audio recording",
        "Same-day highlights available",
        "Commercial usage rights"
      ],
      includes: "Multi-camera setup, wireless audio, and professional lighting"
    }
  ];

  const individualVideoEnhancements = [
    { name: "Additional 30-min session", price: 75 },
    { name: "Rush Delivery (24hrs)", price: 150 },
    { name: "Extended Edit (2+ versions)", price: 125 },
    { name: "Raw Footage Access ($150/hr)", price: 150 },
    { name: "Professional Voice-over", price: 200 },
    { name: "Location Change (same day)", price: 50 }
  ];

  const eventVideoEnhancements = [
    { name: "Drone Footage (per location)", price: 250 },
    { name: "Additional Camera Operator", price: 300 },
    { name: "Extended Edit (additional footage)", price: 200 },
    { name: "Rush Delivery (48hrs)", price: 250 },
    { name: "Raw Footage Access ($150/hr)", price: 150 }
  ];

  return (
    <div className="min-h-screen page-content bg-white">


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
              SECTION 14 / INVESTMENT GUIDE
            </div>
            <h1 className="editorial-headline text-5xl md:text-7xl text-stone-900 mb-6">
              Photography Services
            </h1>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-600 max-w-4xl mx-auto">
              Professional photography services designed for discerning clients who value artistic excellence 
              and sophisticated imagery. Each session is meticulously crafted to tell your unique story 
              through the lens of timeless elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="editorial-grid gap-12">
          {editorialServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`col-span-12 ${service.featured ? 'md:col-span-8 md:col-start-3' : 'md:col-span-10 md:col-start-2'} relative`}
            >
              {service.featured && (
                <div className="absolute -top-4 -right-4 bg-yellow-600 text-stone-900 px-4 py-2 editorial-caption rotate-3">
                  FEATURED
                </div>
              )}
              
              <div className={`relative overflow-hidden rounded-lg ${service.featured ? 'bg-stone-50 border-2 border-yellow-600' : 'bg-gray-50'} border border-gray-200`}>
                <div className="p-8 md:p-12">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-yellow-600">
                      {service.icon}
                    </div>
                    <div>
                      <div className="editorial-caption text-yellow-600 mb-1">
                        {service.category}
                      </div>
                      <h2 className="editorial-title text-2xl md:text-3xl text-stone-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="magazine-column mb-8">
                    <p className="editorial-body text-stone-600 mb-6">
                      {service.description}
                    </p>
                    <div className="editorial-quote text-yellow-600">
                      {service.category === "INDIVIDUAL VIDEO SESSIONS" ? 
                        `$${service.basePrice} (2hr min), $${service.additionalHour}/additional hour` : 
                        service.firstHour ? 
                        `$${service.firstHour} first hour, $${service.additionalHour}/additional hour` :
                        service.originalPrice ? (
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500 line-through text-lg">${service.originalPrice}</span>
                            <span className="text-2xl font-semibold">${service.basePrice}</span>
                            {service.saleText && (
                              <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-md">
                                {service.saleText}
                              </span>
                            )}
                          </div>
                        ) : `Starting at $${(service.basePrice || 0).toLocaleString()}`
                      }
                    </div>
                  </div>

                  {/* Service Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="editorial-caption text-yellow-600 mb-4">
                        WHAT'S INCLUDED
                      </div>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-stone-700">
                            <Star className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="magazine-sidebar">
                      <div className="editorial-caption text-yellow-600 mb-4">
                        SESSION DETAILS
                      </div>
                      <div className="space-y-3 text-sm text-stone-700">
                        <div>
                          <span className="text-yellow-600">Duration:</span> {service.duration}
                        </div>
                        <div className="editorial-body text-xs leading-relaxed">
                          {service.includes}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
                  >
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button className="gold-gradient text-stone-900 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                          COMMISSION THIS SERVICE
                        </Button>
                      </motion.div>
                    </Link>
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 shadow-lg hover:shadow-xl transition-all duration-300">
                          DISCUSS REQUIREMENTS
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>



      {/* Elopement Enhancement Services */}
      <section className="section-padding">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6"
          >
            <div className="magazine-sidebar">
              <div className="editorial-caption text-yellow-600 mb-6">
                ELOPEMENT ENHANCEMENT SERVICES
              </div>
              <div className="space-y-4">
                {elopementEnhancements.map((addon, index) => (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-3 border-b border-yellow-600/20"
                  >
                    <span className="text-stone-700">{addon.name}</span>
                    <span className="text-yellow-600 font-semibold">
                      +${addon.price.toLocaleString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6"
          >
            <div className="magazine-sidebar">
              <div className="editorial-caption text-yellow-600 mb-6">
                PORTRAIT ENHANCEMENT SERVICES
              </div>
              <div className="space-y-4">
                {portraitEnhancements.map((addon, index) => (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-3 border-b border-yellow-600/20"
                  >
                    <span className="text-stone-700">{addon.name}</span>
                    <span className="text-yellow-600 font-semibold">
                      +${addon.price.toLocaleString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-16"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              VIDEOGRAPHY SERVICES
            </div>
            <h2 className="editorial-headline text-4xl md:text-6xl text-stone-900 mb-6">
              Cinematic Storytelling
            </h2>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-600 max-w-3xl mx-auto">
              Professional videography services that capture your story through cinematic artistry and sophisticated visual narrative.
            </p>
          </motion.div>

          {/* Video Services Grid */}
          <div className="col-span-12 grid gap-12">
            {videoServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="magazine-article bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-yellow-600 bg-yellow-600/10 p-3 rounded-lg flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="editorial-caption text-yellow-600 mb-2">
                        {service.category}
                      </div>
                      <h3 className="editorial-title text-xl md:text-2xl text-stone-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="editorial-body text-stone-600 mb-4 text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-left md:text-right flex-shrink-0">
                    <div className="text-2xl md:text-3xl font-light text-yellow-600">
                      ${service.basePrice ? service.basePrice.toLocaleString() : '400'}
                    </div>
                    <div className="text-sm text-stone-600">
                      {service.duration}
                    </div>
                    {service.additionalHour && (
                      <div className="text-sm text-stone-600 mt-1">
                        +${service.additionalHour}/additional hr
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-yellow-600 font-semibold mb-3">Deliverables Include</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="text-stone-700 text-sm flex items-start">
                          <Star className="w-3 h-3 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold mb-3">Production Details</h4>
                    <p className="text-stone-700 text-sm">{service.includes}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Individual Video Enhancement Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="editorial-title text-2xl text-stone-900 mb-4">
                Individual Video Enhancement Services
              </h3>
              <p className="text-stone-600">
                Elevate your personal video sessions with these professional add-ons
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {individualVideoEnhancements.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-stone-700 text-sm mb-2 leading-relaxed">{addon.name}</div>
                  <div className="text-yellow-600 font-semibold">+${addon.price.toLocaleString()}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="editorial-title text-2xl text-stone-900 mb-4">
                Event Video Enhancement Services
              </h3>
              <p className="text-stone-600">
                Professional add-ons for elopement and corporate event videography
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {eventVideoEnhancements.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-stone-700 text-sm mb-2 leading-relaxed">{addon.name}</div>
                  <div className="text-yellow-600 font-semibold">+${addon.price.toLocaleString()}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Timeline Section */}
      <section className="section-padding bg-stone-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-12"
          >
            <h2 className="editorial-title text-3xl text-stone-900 mb-4">
              Your Photography Experience
            </h2>
            <p className="text-stone-600 text-lg">
              From booking to delivery - here's what to expect when working with KB Visualz
            </p>
          </motion.div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book & Deposit",
                description: "Contact us to discuss your vision. Secure your date with a 25% deposit (non-refundable)."
              },
              {
                step: "02", 
                title: "Pre-Session Planning",
                description: "We'll coordinate location, styling, and timeline. Studio bookings handled separately if needed."
              },
              {
                step: "03",
                title: "Your Photo Session",
                description: "Professional outdoor shoot with unlimited outfit changes. Full hour billing - no half sessions."
              },
              {
                step: "04",
                title: "Photo Selection & Delivery",
                description: "Review your gallery, select favorites. Final edited photos delivered within 3-5 business days."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Important Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 mt-12 bg-white p-8 rounded-lg border border-yellow-200"
          >
            <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">Important Policies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-stone-900 mb-2">Deposits & Payments</h4>
                  <ul className="text-stone-600 space-y-1 text-sm">
                    <li>• 25% deposit required (non-refundable)</li>
                    <li>• No deposit refunds • All sales final</li>
                    <li>• Full hour billing only • No half sessions</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-stone-900 mb-2">Cancellation Policy</h4>
                  <ul className="text-stone-600 space-y-1 text-sm">
                    <li>• Cancellations require rebooking with new deposit</li>
                    <li>• No refunds on deposits or payments</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        page="pricing" 
        title="Investment Questions" 
        description="Common questions about photography and videography services, pricing, and booking process."
      />

      {/* Travel Pricing & Calculator */}
      <section className="section-padding bg-gray-50">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-12"
          >
            <div className="editorial-caption text-yellow-600 mb-4">
              TRAVEL PRICING
            </div>
            <h2 className="editorial-headline text-4xl md:text-5xl text-stone-900 mb-6">
              Orlando & Beyond
            </h2>
            <div className="section-break mb-8"></div>
            <p className="editorial-body text-stone-600 max-w-2xl mx-auto">
              Travel fee of $1 per mile both ways applies to locations outside the greater Orlando area. 
              Use our calculator to estimate your travel costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 md:col-start-4"
          >
            <TravelCalculator />
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="section-padding">
        <div className="editorial-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-10 md:col-start-2 text-center"
          >
            <div className="pull-quote">
              "Investment in professional photography and videography is an investment in preserving your most precious moments with uncompromising artistic excellence."
            </div>
            
            <div className="magazine-column mt-12">
              <div className="editorial-body text-stone-600 magazine-dropcap">
                Every session is approached as a collaborative creative project, where technical mastery 
                meets artistic vision. The investment reflects not just the time spent capturing your moments, 
                but the years of experience, the artistic eye, and the commitment to delivering imagery that 
                transcends trends and stands the test of time.
              </div>
            </div>

            <div className="ornamental-break">❦</div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link href="/contact">
                <Button size="lg" className="gold-gradient text-stone-900 font-semibold px-10 py-4">
                  BEGIN YOUR STORY
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-stone-900 px-10 py-4">
                  VIEW OUR WORK
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;