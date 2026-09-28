"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData.find(p => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-screen w-full">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-darker/50 to-darker/20" />
        
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 md:px-12 pb-24 z-10">
          <Link href="/projects" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs mb-8">
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand text-sm uppercase tracking-widest mb-4 font-medium">
              {project.category} &nbsp;|&nbsp; {project.status}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.9] tracking-tight">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl font-bold text-white uppercase mb-8">Project Overview</h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              {project.description}
            </p>
            
            <div className="space-y-12">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[400px] md:h-[700px] w-full rounded-sm overflow-hidden bg-darker"
                >
                  <Image src={img} alt={`${project.title} detail ${i + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 border border-white/10 rounded-sm bg-darker">
              <h3 className="font-display text-xl font-bold text-white uppercase mb-6">Key Features</h3>
              <ul className="space-y-4 mb-12">
                {project.features.map(feature => (
                  <li key={feature} className="flex items-start space-x-3 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Interested?</p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-4 bg-white text-darker font-medium text-sm rounded-sm hover:bg-gray-200 transition-colors uppercase tracking-wider"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
