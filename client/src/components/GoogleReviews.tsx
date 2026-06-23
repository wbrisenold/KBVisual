import { motion } from "framer-motion";
import { Star } from "lucide-react";

const staticReviews = [
  {
    author_name: "Recent Client",
    rating: 5,
    text: "Professional, creative, and easy to work with from start to finish.",
    relative_time_description: "Client review",
  },
  {
    author_name: "Portrait Client",
    rating: 5,
    text: "The final images felt polished, natural, and exactly aligned with the vision.",
    relative_time_description: "Client review",
  },
  {
    author_name: "Event Client",
    rating: 5,
    text: "Captured the important moments beautifully and delivered a clean, professional gallery.",
    relative_time_description: "Client review",
  },
];

const GoogleReviews = () => {
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-600 fill-current" : "text-stone-600"}`}
      />
    ));

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {staticReviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-stone-900 rounded-lg p-6 border border-yellow-600/20"
        >
          <div className="flex items-center mb-4">
            <div className="flex">{renderStars(review.rating)}</div>
          </div>
          <p className="text-stone-300 mb-4 text-sm leading-relaxed italic">
            "{review.text}"
          </p>
          <div className="text-stone-400 text-xs">
            <div className="font-semibold">{review.author_name}</div>
            <div>{review.relative_time_description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GoogleReviews;
