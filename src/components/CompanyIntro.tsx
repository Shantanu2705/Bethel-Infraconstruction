"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section className="py-24 md:py-32 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-8">
              Engineering <br />
              <span className="text-brand">Excellence.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-lg">
              <p>
                Bethel Infraconstructions is a premier construction and infrastructure firm dedicated to delivering world-class structural solutions. With a commitment to precision and uncompromising quality, we transform architectural visions into enduring realities.
              </p>
              <p>
                From deep excavations and heavy foundation frameworks to luxurious residential elevations and commercial complexes, our experienced engineering teams ensure every phase of construction is executed with meticulous attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <p className="font-display text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years of Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-white mb-2">35+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-sm overflow-hidden"
          >
            <Image
              src="/media/raw/WhatsApp Image 2026-09-28 at 21.35.21 (1).jpeg"
              alt="Engineering team reviewing plans on site"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-white/10 rounded-sm pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
