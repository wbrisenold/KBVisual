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
      answer: "I specialize in elopement photography, portrait sessions, and videography services. Each session is tailored to capture your unique story with artistic excellence."
    },
    {
      question: "How far in advance should I book?",
      answer: "I recommend booking at least 3-6 months in advance, especially for elopements and special events. This ensures availability and allows proper planning for your session."
    },
    {
      question: "Do you travel for photography sessions?",
      answer: "Yes, I'm based in Orlando, FL but available for destination sessions throughout Florida and beyond. Travel fees may apply for locations outside the Orlando metro area."
    }
  ],
  portfolio: [
    {
      question: "Can I see full galleries from recent sessions?",
      answer: "Yes, I can share complete galleries from recent work during our consultation. This gives you a comprehensive view of my style and approach to storytelling."
    },
    {
      question: "How do you develop your artistic style?",
      answer: "My style is influenced by my philosophy of 'memento mori' - remembering life's fleeting nature. This drives me to capture authentic emotions and timeless moments with artistic precision."
    },
    {
      question: "Do you offer different photography styles?",
      answer: "While I maintain a consistent artistic vision, I adapt my approach to each client's personality and preferences, ensuring your photos reflect your unique story."
    }
  ],
  pricing: [
    {
      question: "What's included in your photography packages?",
      answer: "Each package includes professional editing, high-resolution digital gallery, and personal consultation. Specific inclusions vary by package - contact me for detailed information."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, I offer flexible payment options to make professional photography accessible. We can discuss a payment schedule that works for your budget during consultation."
    },
    {
      question: "Are there additional costs I should know about?",
      answer: "Package prices are transparent with no hidden fees. Additional costs may include travel beyond Orlando metro area, extended coverage hours, or special add-on services."
    }
  ],
  testimonials: [
    {
      question: "How do you ensure client satisfaction?",
      answer: "I work closely with each client from initial consultation through final delivery, ensuring your vision is captured. My goal is creating images you'll treasure for generations."
    },
    {
      question: "What do past clients say about working with you?",
      answer: "Clients appreciate my professionalism, artistic eye, and ability to capture authentic emotions. Many mention feeling comfortable and natural during sessions."
    },
    {
      question: "Do you provide references from past clients?",
      answer: "Yes, I'm happy to connect you with past clients who can share their experience. Client testimonials and reviews are available upon request."
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