import { motion } from "framer-motion";
import { Link } from "wouter";
import colorfulPortrait from "@assets/7be576c7dbf9ebd057fafc484f18b908_1750189310522.jpg";
import outdoorPortrait from "@assets/22838f761dbfbbecf769c040e1d432c6_1750189310523.jpg";
import seniorPortrait from "@assets/5f0ebe97a3d0918bc6cb64098ab38169_1750189310524.jpg";
import naturalPortrait from "@assets/R6__9241_1750485539673.jpeg";

const portfolioPhotos = [
  {
    id: 'portrait_colorful',
    url: colorfulPortrait,
    title: 'Creative Portrait with Neon Lights',
    category: 'portrait'
  },
  {
    id: 'outdoor_portrait',
    url: outdoorPortrait,
    title: 'Natural Light Portrait Session',
    category: 'portrait'
  },
  {
    id: 'senior_portrait',
    url: seniorPortrait,
    title: 'Joyful Senior Portrait',
    category: 'portrait'
  },
  {
    id: 'natural_portrait',
    url: naturalPortrait,
    title: 'Garden Portrait Session',
    category: 'portrait'
  }
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Portfolio Highlights
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            A glimpse into my passion for capturing authentic moments and creative expressions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-100"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-white/80 text-sm capitalize">
                    {photo.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 font-medium tracking-wide"
          >
            VIEW FULL PORTFOLIO
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
