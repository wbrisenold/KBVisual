import { motion } from "framer-motion";
import { ExternalLink, MapPinned, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEWS_URL } from "@/lib/booking";

const GoogleReviews = () => {
  return (
    <section className="bg-stone-950 py-14 text-white md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 rounded-lg border border-white/10 bg-white/[0.05] p-6 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="max-w-3xl">
            <div className="editorial-caption text-yellow-500 mb-4">
              CLIENT TRUST
            </div>
            <h2 className="editorial-title mb-4 text-3xl text-white md:text-4xl">
              Check current Google feedback before booking.
            </h2>
            <p className="text-stone-300 leading-relaxed">
              The most accurate client feedback lives on the public KB Visualz
              Google Maps listing, where you can see dates, ratings, and
              comments directly from clients.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-stone-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                <Star className="h-4 w-4 text-yellow-500" />
                Public ratings
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                <MapPinned className="h-4 w-4 text-yellow-500" />
                Google Maps listing
              </span>
            </div>
          </div>

          <Button asChild className="gold-gradient h-12 flex-shrink-0 text-stone-900 font-semibold w-full sm:w-auto">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Open Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
