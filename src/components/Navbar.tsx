import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const handleNav = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0C0704]/95 backdrop-blur-xl shadow-2xl shadow-[#3D2A1A]/30 border-b border-[#C8956C]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C8956C] to-[#A67850] rounded-xl flex items-center justify-center shadow-lg shadow-[#C8956C]/20 group-hover:shadow-[#C8956C]/40 transition-shadow">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4A574] rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#FFF8F0] font-bold text-lg leading-tight tracking-tight">Indian Launch</span>
              <span className="text-[#C8956C] text-[10px] font-semibold tracking-[0.2em] uppercase">Web Development</span>
            </div>
          </motion.button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNav(link.path)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  location.pathname === link.path
                    ? 'text-[#C8956C]'
                    : 'text-[#A89080] hover:text-[#FFF8F0]'
                }`}
                whileHover={{ y: -1 }}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#C8956C] to-[#D4A574] rounded-full transition-all duration-300 ${
                  location.pathname === link.path ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                }`} />
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNav('/contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#C8956C]/20 hover:shadow-[#C8956C]/35 transition-all"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#FFF8F0] hover:text-[#C8956C] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0C0704]/98 backdrop-blur-xl border-t border-[#C8956C]/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNav(link.path)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                    location.pathname === link.path
                      ? 'text-[#C8956C] bg-[#C8956C]/5'
                      : 'text-[#A89080] hover:text-[#FFF8F0] hover:bg-[#C8956C]/5'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNav('/contact')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white text-center font-semibold rounded-full"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
