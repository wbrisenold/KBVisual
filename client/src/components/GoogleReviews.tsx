import { motion } from "framer-motion";
import { ExternalLink, MapPinned, MessageSquareText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEWS_URL } from "@/lib/booking";

const reviewActions = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Verified Profile",
    description: "Reviews open on the KB Visualz Google Maps listing."
  },
  {
    icon: <MessageSquareText className="w-5 h-5" />,
    title: "Newest Reviews",
    description: "Use Google Maps to read the latest client feedback."
  },
  {
    icon: <MapPinned className="w-5 h-5" />,
    title: "Orlando Area",
    description: "Review the live profile before scheduling a session."
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
              See What Clients Are Saying
            </h2>
            <p className="text-stone-300 leading-relaxed mb-8 max-w-xl">
              Verified reviews for Orlando Photographer: KB Visualz live on
              Google Maps. Use the direct link to see the newest reviews on the
              Google profile.
            </p>

            <div className="rounded-lg border border-yellow-500/25 bg-white/5 p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/15 flex items-center justify-center">
                  <MessageSquareText className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white leading-none">
                    Google Maps
                  </p>
                  <p className="text-sm text-stone-400">
                    Latest reviews open on the verified profile
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="gold-gradient text-stone-900 font-semibold w-full sm:w-auto">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                View Latest Google Reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5">
            {reviewActions.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="text-yellow-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
