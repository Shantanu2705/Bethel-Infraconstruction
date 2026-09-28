"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase mb-6 tracking-tight leading-[0.9]">
            About <br /> <span className="text-brand">Bethel.</span>
          </h1>
        </motion.div>

        {/* Cinematic Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[50vh] md:h-[70vh] rounded-sm overflow-hidden mb-24"
        >
          <Image
            src="/media/raw/WhatsApp Image 2026-09-28 at 21.35.12 (1).jpeg"
            alt="Engineering team on site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-32">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="font-display text-3xl font-bold text-white uppercase mb-6">
              Our Mission
            </h2>
            <div className="w-12 h-[2px] bg-brand mb-8" />
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">
              To engineer and construct enduring infrastructure and architectural works with absolute precision, unwavering quality, and a profound respect for structural integrity.
            </p>
          </div>
        </div>

        {/* Gallery / Storytelling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
              <Image
                src="/media/raw/WhatsApp Image 2026-09-28 at 21.35.11 (3).jpeg"
                alt="Site surveying"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-2xl font-bold text-white uppercase pt-4">Meticulous Planning</h3>
            <p className="text-gray-400">Every successful structure begins with accurate surveying and ground-up preparation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:mt-24"
          >
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
              <Image
                src="/media/raw/WhatsApp Image 2026-09-28 at 21.35.15.jpeg"
                alt="Concrete pour"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-2xl font-bold text-white uppercase pt-4">Unyielding Execution</h3>
            <p className="text-gray-400">Our engineering teams closely monitor heavy concrete pours and structural frameworks to guarantee safety and longevity.</p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center pt-24 border-t border-white/10">
          <h2 className="font-display text-4xl font-bold text-white uppercase mb-8">Ready to Build?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-white font-medium border-b border-brand pb-1 hover:text-brand transition-colors text-lg uppercase tracking-widest"
          >
            <span>Contact Us</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
