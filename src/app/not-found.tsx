import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-darker flex flex-col items-center justify-center relative overflow-hidden text-center px-6 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-darker/90 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/media/raw/WhatsApp Video 2026-09-28 at 21.35.25 (1).mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-2xl">
        <h1 className="font-display text-8xl md:text-[150px] font-bold text-white mb-4 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          404
        </h1>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase mb-8">
          Page Not <span className="text-brand">Found</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto">
          The page you are looking for has been moved, removed, renamed, or might never have existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-brand text-white font-medium text-sm rounded-sm hover:bg-brand-dark transition-colors uppercase tracking-wider"
          >
            Return Home
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 bg-transparent text-white font-medium text-sm rounded-sm border border-white/30 hover:border-white hover:bg-white/5 transition-colors uppercase tracking-wider"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
