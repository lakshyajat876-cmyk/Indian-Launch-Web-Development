import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/team', label: 'Team' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export default function PageNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = pages.findIndex(p => p.path === location.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#0C0704] border-t border-[#C8956C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {prevPage ? (
            <motion.button
              onClick={() => handleNavigate(prevPage.path)}
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1A1108] border border-[#C8956C]/10 hover:border-[#C8956C]/25 transition-all duration-300"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5 text-[#C8956C] group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[#8B7A6A] text-xs block">Previous</span>
                <span className="text-[#FFF8F0] font-semibold text-sm">{prevPage.label}</span>
              </div>
            </motion.button>
          ) : (
            <div />
          )}

          {/* Page indicator dots */}
          <div className="hidden sm:flex items-center gap-2">
            {pages.map((page, i) => (
              <button
                key={page.path}
                onClick={() => handleNavigate(page.path)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-8 h-2 bg-[#C8956C]'
                    : 'w-2 h-2 bg-[#C8956C]/20 hover:bg-[#C8956C]/40'
                }`
                }
              />
            ))}
          </div>

          {nextPage ? (
            <motion.button
              onClick={() => handleNavigate(nextPage.path)}
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white transition-all duration-300 shadow-lg shadow-[#C8956C]/15 hover:shadow-[#C8956C]/30"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-right">
                <span className="text-white/70 text-xs block">Next</span>
                <span className="text-white font-semibold text-sm">{nextPage.label}</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
