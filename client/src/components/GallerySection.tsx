import { motion } from "framer-motion";
import { Link } from "wouter";
import formalStudioPortrait from "@assets/kbvisualz-current/kbv-01.jpg";
import proposalPortrait from "@assets/kbvisualz-current/kbv-03.jpg";
import outdoorEditorialPortrait from "@assets/kbvisualz-current/kbv-07.jpg";
import childPortrait from "@assets/kbvisualz-current/kbv-08.jpg";

const portfolioPhotos = [
  {
    id: 'formal_studio_portrait',
    url: formalStudioPortrait,
    title: 'Formal Studio Portrait',
    category: 'portrait'
  },
  {
    id: 'child_portrait',
    url: childPortrait,
    title: 'Outdoor Child Portrait',
    category: 'family'
  },
  {
    id: 'proposal_portrait',
    url: proposalPortrait,
    title: 'Proposal Celebration Portrait',
    category: 'engagement'
  },
  {
    id: 'outdoor_editorial_portrait',
    url: outdoorEditorialPortrait,
    title: 'Outdoor Editorial Portrait',
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
            A quick look at recent portrait, family, and engagement work.
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
