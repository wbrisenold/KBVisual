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
      answer: "I photograph portraits for graduation, prom, fashion, family, personal branding, couples, and creative personal sessions."
    },
    {
      question: "How far in advance should I book?",
      answer: "Book once your preferred date is clear. Earlier scheduling gives us more room to plan outfits, location, and timing."
    },
    {
      question: "Can I book an outdoor or studio session?",
      answer: "Yes. We can shoot outdoors in the Orlando area. For studio work, you reserve the studio separately and choose the portrait package that fits the session."
    }
  ],
  portfolio: [
    {
      question: "What makes the KB Visualz style different?",
      answer: "The work is directed and polished, but it still leaves room for real expression. I want the portrait to feel intentional without looking forced."
    },
    {
      question: "Can the session match my personality?",
      answer: "I keep a consistent visual style, but I adapt posing, location, and pacing to each client's personality and goals."
    }
  ],
  pricing: [
    {
      question: "What's included in your photography packages?",
      answer: "Signature includes 15 edited portraits. Legacy includes 30. Both include posing direction, planning guidance, and high-resolution final images."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes. We can agree on payment timing before your date is reserved."
    },
    {
      question: "Are there additional costs I should know about?",
      answer: "Studio rental is separate from the portrait package. Photo and video are not bundled, so video should be booked with a dedicated videographer."
    }
  ],
  testimonials: [
    {
      question: "Where can I read client reviews?",
      answer: "You can read client reviews on the KB Visualz Google profile."
    },
    {
      question: "Are the reviews current?",
      answer: "Yes. Google keeps the newest ratings and comments on the public profile."
    },
    {
      question: "Can I ask questions before booking?",
      answer: "Yes. Reach out if you want to talk through timing, location, styling, or the kind of portraits you need."
    }
  ]
};

const FAQ = ({ page, title, description }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqData[page] || [];

  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="editorial-caption text-yellow-700 mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="editorial-title text-4xl text-stone-950 md:text-5xl mb-6">
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
              className="overflow-hidden border border-stone-200 bg-stone-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${page}-${index}`}
              >
                <span id={`faq-question-${page}-${index}`} className="font-medium text-lg text-stone-950">{faq.question}</span>
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
                <div
                  id={`faq-answer-${page}-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${page}-${index}`}
                  className="px-6 pb-4 text-gray-700 leading-relaxed"
                >
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
