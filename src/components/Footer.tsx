import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darker pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              Let's Build Something <br /> <span className="text-brand">Exceptional.</span>
            </h2>
            <p className="text-gray-400 max-w-md mb-8">
              Building with precision. Creating with purpose. Bethel Infraconstructions is a premium construction company delivering structural excellence across infrastructure, commercial, and residential projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-white font-medium border-b border-brand pb-1 hover:text-brand transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/videos" className="text-gray-400 hover:text-white transition-colors">Videos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Bethel Infraconstructions</li>
              <li>Address Info Coming Soon</li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bethel Infraconstructions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-bold text-white/[0.02] uppercase pointer-events-none whitespace-nowrap">
        Bethel Infra
      </div>
    </footer>
  );
}
