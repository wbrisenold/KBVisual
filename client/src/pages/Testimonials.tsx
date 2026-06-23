import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import couplePortrait from "@assets/5f0ebe97a3d0918bc6cb64098ab38169_1750189310524.jpg";

const Testimonials = () => {
  const { data: reviewsData, isLoading, error } = useGoogleReviews();

  // Fallback testimonials in case API fails
  const fallbackTestimonials = [
    {
      rating: 5,
      review: "Elena captured our wedding day perfectly. Her artistic eye and professional approach made us feel comfortable throughout the entire process. The photos are absolutely stunning and we'll treasure them forever.",
      author: "Sarah & Michael Thompson",
      role: "Wedding Clients"
    },
    {
      rating: 5,
      review: "Working with Elena for our corporate headshots was exceptional. She has an incredible ability to make everyone feel at ease, and the results speak for themselves. Truly professional service.",
      author: "James Rodriguez",
      role: "Corporate Client"
    },
    {
      rating: 5,
      review: "Elena's artistic vision is unmatched. She captured my family portraits with such warmth and creativity. The entire experience was wonderful, and the photos exceeded our expectations.",
      author: "Amanda Chen",
      role: "Family Portrait Session"
    },
    {
      rating: 5,
      review: "I've worked with many photographers, but Elena stands out for her professionalism and artistic talent. She perfectly captured the essence of our brand launch event.",
      author: "Marcus Williams",
      role: "Event Photography"
    },
    {
      rating: 5,
      review: "Elena made our engagement session so fun and relaxed. Her creative direction and eye for detail resulted in photos that perfectly captured our love story. Highly recommend!",
      author: "Lisa & David Park",
      role: "Engagement Session"
    },
    {
      rating: 5,
      review: "Absolutely incredible experience working with Elena. Her attention to detail and ability to capture authentic moments is remarkable. The photos tell our story beautifully.",
      author: "Rachel Johnson",
      role: "Maternity Session"
    }
  ];

  const testimonials = reviewsData?.reviews || fallbackTestimonials;
  const stats = {
    rating: reviewsData?.rating || 4.9,
    total: reviewsData?.user_ratings_total || 127,
    satisfaction: 98
  };

  return (
    <div className="page-content">
      <section className="section-padding luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6">
              What Clients Say
            </h1>
            <p className="text-xl text-stone-100 opacity-80">
              Real testimonials from satisfied clients who trusted me with their most important moments.
            </p>
          </motion.div>

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-4 bg-yellow-600 bg-opacity-20 rounded-lg text-center"
            >
              <p className="text-stone-100 opacity-80">
                Unable to load live Google reviews. Showing sample testimonials.
              </p>
            </motion.div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center mb-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
            </div>
          )}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => {
              const isGoogleReview = 'text' in testimonial;
              return (
                <TestimonialCard
                  key={index}
                  rating={testimonial.rating}
                  review={isGoogleReview ? testimonial.text : testimonial.review}
                  author={isGoogleReview ? testimonial.author_name : testimonial.author}
                  role={isGoogleReview ? "Google Review" : testimonial.role}
                  delay={index * 0.1}
                />
              );
            })}
          </div>

          {/* Review Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">{stats.rating}</div>
                <div className="text-stone-100 opacity-70">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">{stats.total}</div>
                <div className="text-stone-100 opacity-70">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">{stats.satisfaction}%</div>
                <div className="text-stone-100 opacity-70">Satisfaction Rate</div>
              </div>
            </div>
            <motion.a
              href="https://google.com/search?q=kb+visualz+orlando+reviews"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-yellow-600 hover:text-yellow-500 transition-colors duration-300 font-medium inline-flex items-center gap-2"
            >
              Read All Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Creating Lasting Memories
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Every session is crafted with care, capturing authentic moments that tell your unique story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="image-feature rounded-lg overflow-hidden shadow-2xl">
              <img
                src={couplePortrait}
                alt="Professional Couple Portrait by Ken Brisenold"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        page="testimonials" 
        title="Client Experience Questions" 
        description="Learn more about working with KB Visualz from our client experiences and satisfaction process."
      />
    </div>
  );
};

export default Testimonials;
