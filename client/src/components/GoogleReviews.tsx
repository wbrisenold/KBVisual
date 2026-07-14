import { motion } from "framer-motion";
import { ExternalLink, MapPinned, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/booking";

const GoogleReviews = () => {
  return (
    <section className="bg-stone-950 py-16 text-white md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="max-w-3xl">
            <div className="editorial-caption text-yellow-700 mb-4">
              CLIENT TRUST
            </div>
            <h2 className="editorial-title mb-4 text-3xl text-white md:text-4xl">
              See what clients say on Google.
            </h2>
            <p className="text-stone-300 leading-relaxed">
              Reviews stay on the public Google profile, where the ratings and
              comments are easy to check before you book.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-stone-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                <Star className="h-4 w-4 text-yellow-700" />
                Client reviews
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                <MapPinned className="h-4 w-4 text-yellow-700" />
                Orlando clients
              </span>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="site-button site-button--light w-full flex-shrink-0 sm:w-auto"
          >
            Read Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
