"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-darker">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/media/raw/WhatsApp Image 2026-09-28 at 21.35.28 (2).jpeg"
        >
          <source src="/media/raw/WhatsApp Video 2026-09-28 at 21.35.27.mp4" type="video/mp4" />
        </video>
        
        {/* Intelligent overlays for readability and transition while keeping video clear */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="text-brand font-medium tracking-widest uppercase mb-4 text-sm md:text-base flex items-center space-x-4 drop-shadow-md">
              <span className="w-8 h-[1px] bg-brand inline-block" />
              <span>Bethel Infraconstructions</span>
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.9] tracking-tight mb-6 drop-shadow-2xl">
              Building with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Precision.
              </span>
              <br />
              Creating with <br />
              <span className="text-brand">Purpose.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mt-12 drop-shadow-lg"
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-darker font-medium text-sm rounded-sm hover:bg-gray-200 transition-colors uppercase tracking-wider text-center"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-black/20 backdrop-blur-sm text-white font-medium text-sm rounded-sm border border-white/30 hover:border-white hover:bg-white/10 transition-all uppercase tracking-wider text-center"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-brand" />
        </motion.div>
      </motion.div>
    </section>
  );
}
