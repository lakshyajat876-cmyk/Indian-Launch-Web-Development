import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Cpu } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0C0704]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8956C]/8 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B6F4E]/8 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8956C]/4 rounded-full blur-[200px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(200,149,108,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,149,108,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 right-20 hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C8956C]/15 to-[#C8956C]/5 border border-[#C8956C]/15 backdrop-blur-sm flex items-center justify-center">
          <Globe className="w-8 h-8 text-[#C8956C]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A574]/15 to-[#D4A574]/5 border border-[#D4A574]/15 backdrop-blur-sm flex items-center justify-center">
          <Cpu className="w-6 h-6 text-[#D4A574]" />
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8956C]/10 border border-[#C8956C]/20 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#C8956C]" />
            <span className="text-[#C8956C] text-sm font-semibold tracking-wide">AI-Powered Web Development for Startups & Small Businesses</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-[#FFF8F0] leading-[1.05] tracking-tight"
          >
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-[#C8956C] via-[#D4A574] to-[#E8C9A8] bg-clip-text text-transparent">
              Web Development
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-[#A89080] max-w-2xl leading-relaxed"
          >
            We build professional, high-performance websites powered by AI — helping startups and small businesses launch faster, look stunning, and grow smarter. Cutting-edge technology at affordable prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => handleScroll('#contact')}
              className="group px-8 py-4 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white font-semibold rounded-full shadow-xl shadow-[#C8956C]/20 hover:shadow-[#C8956C]/35 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => handleScroll('#services')}
              className="px-8 py-4 bg-[#C8956C]/5 border border-[#C8956C]/15 text-[#FFF8F0] font-semibold rounded-full hover:bg-[#C8956C]/10 hover:border-[#C8956C]/25 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Services
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#8B7A6A]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#6B9E78] rounded-full animate-pulse" />
              <span>Accepting New Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C8956C] rounded-full animate-pulse" />
              <span>AI-Powered Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse" />
              <span>Affordable Rates</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#C8956C]/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C8956C] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
