"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { allImages } from "@/data/projects";

export default function GalleryPage() {
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
            Our <span className="text-brand">Gallery.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            A visual documentation of our construction process, structural framework, and finished architectural excellence.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {allImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-sm bg-darker">
                <Image
                  src={`/media/raw/${image}`}
                  alt={`Construction process - ${image}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium tracking-widest uppercase text-xs border border-white/50 px-4 py-2">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
