"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 bg-darker relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-5">
        <h2 className="text-[20vw] font-display font-bold text-white whitespace-nowrap uppercase leading-none">
          Our Work Our Work
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand font-medium tracking-widest uppercase mb-4 text-sm flex items-center space-x-4">
              <span className="w-8 h-[1px] bg-brand inline-block" />
              <span>Selected Works</span>
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Featured <br /> Projects.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-white border-b border-brand pb-1 hover:text-brand transition-colors group"
            >
              <span className="uppercase tracking-wider text-sm font-medium">View All Projects</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-24" : ""}`}
            >
              <Link href={`/projects/${project.id}`} className="block relative">
                <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden bg-gray-900 rounded-sm">
                  <motion.div style={{ y: index % 2 === 0 ? y : 0 }} className="w-full h-[120%] -mt-[10%]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <p className="text-brand text-xs uppercase tracking-widest mb-2 font-medium">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white uppercase group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
