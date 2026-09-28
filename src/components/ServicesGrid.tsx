"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, HardHat, Pickaxe, PaintBucket } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      id: "building-construction",
      title: "Building Construction",
      description: "From luxury residential to multi-story commercial complexes, we deliver end-to-end building construction with uncompromising quality.",
      icon: <Building2 size={32} strokeWidth={1.5} />,
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.20 (2).jpeg"
    },
    {
      id: "structural-works",
      title: "Structural Works",
      description: "Expertise in high-density rebar framing, deep excavations, and heavy concrete pours ensuring structural integrity.",
      icon: <Pickaxe size={32} strokeWidth={1.5} />,
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.15 (1).jpeg"
    },
    {
      id: "civil-infrastructure",
      title: "Civil Infrastructure",
      description: "Executing robust groundwork, foundation frameworks, and large-scale site development.",
      icon: <HardHat size={32} strokeWidth={1.5} />,
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.12 (1).jpeg"
    },
    {
      id: "finishing-works",
      title: "Premium Finishing",
      description: "Delivering architectural excellence with premium facades, precision masonry, and superior aesthetic detailing.",
      icon: <PaintBucket size={32} strokeWidth={1.5} />,
      image: "/media/raw/WhatsApp Image 2026-09-28 at 21.35.19 (2).jpeg"
    }
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-medium tracking-widest uppercase mb-4 text-sm flex items-center space-x-4">
              <span className="w-8 h-[1px] bg-brand inline-block" />
              <span>Expertise</span>
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Our Services.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer bg-darker"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent group-hover:from-black/80 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-brand mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase mb-4 transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-2 transition-all duration-500 delay-100 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
