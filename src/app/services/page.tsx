"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const detailedServices = [
    {
      id: "building-construction",
      title: "Building Construction",
      description: "We execute complex building constructions, from multi-level commercial properties to premium luxury residences. Our meticulous approach ensures every project meets exact architectural specifications while adhering to strict safety and quality standards.",
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.20 (2).jpeg"
    },
    {
      id: "structural-framework",
      title: "Structural Frameworks",
      description: "The core of any enduring building is its framework. We specialize in high-density rebar structuring, extensive slab casting, and robust concrete pouring using superior materials and precise engineering methodologies.",
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.15 (1).jpeg"
    },
    {
      id: "groundwork",
      title: "Groundwork & Excavation",
      description: "Our infrastructural capabilities begin at the foundation. We handle comprehensive site surveying, deep trench excavations, and heavy earthmoving required to prepare sites for massive structural loads.",
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.11 (1).jpeg"
    },
    {
      id: "masonry-finishing",
      title: "Masonry & Finishing",
      description: "Beyond the skeleton of the building, we deliver flawless masonry, premium facade cladding, and refined finishing work. Every surface and detail is perfected to present an impressive final result.",
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.19 (1).jpeg"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase mb-6 tracking-tight">
            Our <span className="text-brand">Services.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Comprehensive construction solutions backed by technical expertise, heavy machinery, and an unyielding commitment to excellence.
          </p>
        </motion.div>

        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden bg-darker ${index % 2 !== 0 ? "lg:order-last" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-brand font-display text-6xl md:text-8xl font-bold opacity-20 mb-4 block leading-none">
                  0{index + 1}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-white font-medium hover:text-brand transition-colors group uppercase tracking-widest text-sm"
                >
                  <span className="border-b border-white hover:border-brand pb-1 transition-colors">Request Service</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
