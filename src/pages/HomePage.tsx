import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageNav from '../components/PageNav';
import { HomeSEO } from '../lib/seoConfig';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HomeSEO />
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0C0704]">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8956C]/8 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B6F4E]/8 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8956C]/4 rounded-full blur-[200px]" />
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8956C]/10 border border-[#C8956C]/20 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#C8956C]" />
                <span className="text-[#C8956C] text-sm font-semibold tracking-wide">AI-Powered Web Development</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#FFF8F0] leading-[1.05] tracking-tight"
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
                className="mt-8 text-lg text-[#A89080] max-w-xl leading-relaxed"
              >
                We build professional, high-performance websites powered by AI — helping startups and small businesses launch faster, look stunning, and grow smarter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={() => navigate('/contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white font-semibold rounded-full shadow-xl shadow-[#C8956C]/20 hover:shadow-[#C8956C]/35 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-[#C8956C]/5 border border-[#C8956C]/15 text-[#FFF8F0] font-semibold rounded-full hover:bg-[#C8956C]/10 hover:border-[#C8956C]/25 transition-all"
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
                className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#8B7A6A]"
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

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#C8956C]/15 shadow-2xl shadow-[#C8956C]/10">
                <img
                  src="/images/hero-main.jpg"
                  alt="AI-powered web development"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0704] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#0C0704]/80 backdrop-blur-lg rounded-xl border border-[#C8956C]/15">
                    <Cpu className="w-5 h-5 text-[#C8956C]" />
                    <div>
                      <p className="text-[#FFF8F0] text-sm font-semibold">AI-Enhanced Development</p>
                      <p className="text-[#A89080] text-xs">Faster delivery, smarter results</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#C8956C]/10 rounded-full blur-[60px]" />
            </motion.div>
          </div>
        </div>
      </section>
      <PageNav />
    </>
  );
}
