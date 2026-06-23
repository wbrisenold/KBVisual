import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  firstHourPrice: number;
  additionalHourPrice: number;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PricingCard = ({
  title,
  icon,
  description,
  firstHourPrice,
  additionalHourPrice,
  features,
  isPopular = false,
  delay = 0
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`rounded-lg p-8 border relative ${
        isPopular
          ? "bg-yellow-600 bg-opacity-10 border-2 border-yellow-600 transform scale-105"
          : "border-yellow-600 border-opacity-20 hover:border-opacity-40 transition-all duration-300"
      }`}
      style={{
        backgroundColor: isPopular ? undefined : "hsla(var(--luxury-brown), 0.3)"
      }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-600 text-stone-900 px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="text-3xl text-yellow-600 mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-stone-100 mb-2">{title}</h3>
        <p className="text-stone-100 opacity-70">{description}</p>
      </div>

      <div className="text-center mb-8">
        <span className="text-4xl font-bold text-yellow-600">${firstHourPrice}</span>
        <span className="text-stone-100 opacity-70 block">First Hour</span>
        <span className="text-2xl font-semibold text-stone-100 mt-2 block">
          ${additionalHourPrice}
        </span>
        <span className="text-stone-100 opacity-70 block">Each Additional Hour</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-stone-100 opacity-80 flex items-center">
            <Check className="text-yellow-600 mr-3 w-5 h-5" />
            {feature}
          </li>
        ))}
      </ul>

      <Link href="/booking">
        <button
          className={`block w-full text-center py-3 rounded-sm font-medium transition-all duration-300 ${
            isPopular
              ? "gold-gradient hover:opacity-90 text-stone-100"
              : "border-2 border-yellow-600 hover:bg-yellow-600 hover:text-stone-900 text-yellow-600"
          }`}
        >
          Book Session
        </button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
