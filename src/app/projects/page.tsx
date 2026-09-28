"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase mb-6 tracking-tight">
            Our <span className="text-brand">Projects.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore our portfolio of premium construction, structural engineering, and infrastructure developments.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-3/5 group cursor-pointer block relative">
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm bg-darker">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Link>
              </div>
              
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <p className="text-brand text-sm uppercase tracking-widest mb-4 font-medium flex items-center space-x-4">
                  <span className="w-6 h-[1px] bg-brand inline-block" />
                  <span>{project.category}</span>
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6 leading-tight hover:text-brand transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  {project.features.map(feature => (
                    <span key={feature} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-wider text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center space-x-4 text-white uppercase tracking-widest text-sm font-medium hover:text-brand transition-colors"
                >
                  <span className="border-b border-white hover:border-brand pb-1 transition-colors">View Details</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
