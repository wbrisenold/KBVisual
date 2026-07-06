import { motion } from "framer-motion";
import { ExternalLink, MapPinned, MessageSquareText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEWS_URL } from "@/lib/booking";

const reviewDetails = [
  {
    icon: <Star className="h-5 w-5" />,
    text: "Star ratings with review dates"
  },
  {
    icon: <MessageSquareText className="h-5 w-5" />,
    text: "Client comments posted directly on Google"
  },
  {
    icon: <MapPinned className="h-5 w-5" />,
    text: "The KB Visualz business listing on Google Maps"
  }
];

const GoogleReviews = () => {
  return (
    <section className="section-padding bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start"
        >
          <div className="max-w-xl">
            <div className="editorial-caption text-yellow-500 mb-4">
              GOOGLE REVIEWS
            </div>
            <h2 className="editorial-title text-3xl md:text-5xl text-white mb-6">
              Read Reviews on Google Maps
            </h2>
            <p className="text-stone-300 leading-relaxed mb-8 max-w-xl">
              The button below opens the KB Visualz Google Maps listing, where
              you can read current public reviews before booking.
            </p>

            <div className="rounded-lg border border-yellow-500/25 bg-white/5 p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/15 flex items-center justify-center">
                  <MessageSquareText className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white leading-none">
                    Orlando Photographer: KB Visualz
                  </p>
                  <p className="text-sm text-stone-400">
                    Public review page on Google Maps
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="gold-gradient text-stone-900 font-semibold w-full sm:w-auto">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Open Google Reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-white/10 bg-white/[0.06] p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              What you'll see there
            </h3>
            <p className="text-stone-400 leading-relaxed mb-6">
              Google Maps shows the review dates, star ratings, and client
              comments in one place.
            </p>
            <div className="space-y-4">
              {reviewDetails.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="mt-0.5 text-yellow-500">
                    {item.icon}
                  </div>
                  <p className="text-sm leading-relaxed text-stone-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
