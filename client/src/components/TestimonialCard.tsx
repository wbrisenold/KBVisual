import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  review: string;
  author: string;
  role: string;
  delay?: number;
}

const TestimonialCard = ({ rating, review, author, role, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      style={{ backgroundColor: "hsla(var(--luxury-brown), 0.5)" }}
      className="rounded-lg p-8 shadow-xl"
    >
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-600 text-lg">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? "fill-current" : ""}`}
            />
          ))}
        </div>
        <span className="ml-2 text-stone-100 opacity-70 text-sm">Client Feedback</span>
      </div>
      <blockquote className="text-stone-100 opacity-90 italic mb-6 leading-relaxed">
        {review}
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-stone-900 font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-stone-100 font-medium">{author}</p>
          <p className="text-stone-100 opacity-70 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
