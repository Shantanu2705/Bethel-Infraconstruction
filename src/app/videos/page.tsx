"use client";

import { motion } from "framer-motion";
import { allVideos } from "@/data/projects";

export default function VideosPage() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase mb-6 tracking-tight">
            Video <span className="text-brand">Showcase.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Cinematic walk-throughs documenting our site progress, structural frameworks, and completed project excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {allVideos.map((video, index) => (
            <motion.div
              key={video}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-darker rounded-sm border border-white/5">
                <video
                  src={`/media/raw/${video}`}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
