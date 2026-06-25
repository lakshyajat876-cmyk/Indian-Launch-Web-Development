import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Rocket, HeadphonesIcon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-7 h-7" />,
  rocket: <Rocket className="w-7 h-7" />,
  headphones: <HeadphonesIcon className="w-7 h-7" />,
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon_key: string;
  accent_color: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const getAccentBg = (color: string) => {
    const bgs: Record<string, string> = {
      orange: 'bg-[#C8956C]/10 text-[#C8956C]',
      blue: 'bg-[#D4A574]/10 text-[#D4A574]',
      cyan: 'bg-[#E8C9A8]/10 text-[#E8C9A8]',
    };
    return bgs[color] || bgs.orange;
  };

  return (
    <section id="services" className="relative py-32 bg-[#1A1108]" ref={ref}>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #C8956C 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8956C] text-sm font-semibold tracking-[0.2em] uppercase">What We Do</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight">
            AI-Powered Web Development for{' '}
            <span className="bg-gradient-to-r from-[#C8956C] to-[#D4A574] bg-clip-text text-transparent">Startups</span>
          </h2>
          <p className="mt-6 text-[#A89080] max-w-2xl mx-auto text-lg">
            We leverage AI to build professional, high-performance websites faster and smarter — tailored for startups and small businesses so you get premium quality at affordable prices.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-72 rounded-2xl bg-[#C8956C]/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-[#0C0704]/80 border border-[#C8956C]/8 hover:border-[#C8956C]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8956C]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl ${getAccentBg(service.accent_color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[service.icon_key] || <Globe className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#FFF8F0] mb-3 group-hover:text-[#C8956C] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#A89080] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#C8956C] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
