"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase mb-6 tracking-tight">
              Get in <span className="text-brand">Touch.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you have a specific project in mind or want to explore our capabilities, our engineering and planning team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Headquarters</h4>
                <p className="text-gray-400">Bethel Infraconstructions</p>
                <p className="text-gray-400">Address coming soon</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Contact</h4>
                <p className="text-gray-400">contact@bethelinfraconstructions.com</p>
                <p className="text-gray-400">+91 (XX) XXXX-XXXX</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Business Hours</h4>
                <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-darker p-8 md:p-12 rounded-sm border border-white/5"
          >
            <h3 className="font-display text-2xl font-bold text-white uppercase mb-8">Request a Quote</h3>
            
            {submitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mb-6 text-brand">
                  <Send size={24} />
                </div>
                <h4 className="font-display text-xl font-bold text-white uppercase mb-2">Message Received</h4>
                <p className="text-gray-400">Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" id="name" required className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-brand transition-colors rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400">Phone</label>
                    <input type="tel" id="phone" required className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-brand transition-colors rounded-sm" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" id="email" required className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-brand transition-colors rounded-sm" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-xs uppercase tracking-widest text-gray-400">Project Type</label>
                  <select id="project" className="w-full bg-dark border border-white/10 p-4 text-gray-300 focus:outline-none focus:border-brand transition-colors rounded-sm appearance-none">
                    <option value="">Select a category</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Complex</option>
                    <option value="infrastructure">Civil Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400">Project Details</label>
                  <textarea id="message" rows={4} required className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-brand transition-colors rounded-sm resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand text-white font-medium text-sm rounded-sm hover:bg-brand-dark transition-colors uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit Request"}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
