import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  page: string;
  title?: string;
  description?: string;
}

const faqData: Record<string, FAQItem[]> = {
  home: [
    {
      question: "What photography services do you offer?",
      answer: "I specialize in individual portrait sessions, including graduation, prom, fashion, family, personal branding, and creative portraits."
    },
    {
      question: "How far in advance should I book?",
      answer: "Book as soon as your preferred date is clear. Earlier scheduling gives us more room to plan outfits, location, and timing."
    },
    {
      question: "Can I book an outdoor or studio session?",
      answer: "Yes. Outdoor sessions are available in the Orlando area, and studio sessions can be booked by reserving a studio separately and adding the portrait package price."
    }
  ],
  portfolio: [
    {
      question: "How do you develop your artistic style?",
      answer: "My style is influenced by 'memento mori' - the reminder that time is limited. That perspective shapes how I photograph expression, connection, and personal milestones."
    },
    {
      question: "Do you offer different photography styles?",
      answer: "I keep a consistent visual style, but I adapt posing, location, and pacing to each client's personality and goals."
    }
  ],
  pricing: [
    {
      question: "What's included in your photography packages?",
      answer: "The Signature Session includes 15 professional edits. The Legacy Session includes 30 professional edits. Studio sessions use the same package prices plus the separate studio rental fee."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes. We can talk through payment timing when we plan the session."
    },
    {
      question: "Are there additional costs I should know about?",
      answer: "Studio rental is separate from the portrait package price. Photo and video are not bundled together; video coverage must be booked separately with another provider."
    }
  ],
  testimonials: [
    {
      question: "Where can I read public client feedback?",
      answer: "Use the Google Reviews section or the Google Maps link to read the latest public feedback directly on the KB Visualz profile."
    },
    {
      question: "Why do you link to Google instead of copying reviews here?",
      answer: "Google Maps keeps review dates, ratings, and comments current, so the public profile is the best place to verify recent feedback."
    },
    {
      question: "Can I ask questions before booking?",
      answer: "Yes. If you want to talk through timing, location, styling, or the kind of portraits you need, reach out before scheduling."
    }
  ]
};

const FAQ = ({ page, title, description }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqData[page] || [];

  if (faqs.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            {title || "Common Questions"}
          </h2>
          {description && (
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
