import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Rocket, HeadphonesIcon } from 'lucide-react';
import PageNav from '../components/PageNav';
import { ServicesSEO } from '../lib/seoConfig';

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-7 h-7" />,
  rocket: <Rocket className="w-7 h-7" />,
  headphones: <HeadphonesIcon className="w-7 h-7" />,
};

const serviceImages: Record<string, string> = {
  globe: '/images/services-web.jpg',
  rocket: '/images/services-landing.jpg',
  headphones: '/images/services-support.jpg',
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon_key: string;
  accent_color: string;
}

export default function ServicesPage() {
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
    <>
      <ServicesSEO />
      <section className="relative py-32 bg-[#1A1108]" ref={ref}>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C8956C 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#C8956C]/5 rounded-full blur-[200px]" />

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
            <div className="space-y-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-64 rounded-2xl bg-[#C8956C]/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-[#C8956C]/10 shadow-xl shadow-[#C8956C]/5">
                      <img
                        src={serviceImages[service.icon_key]}
                        alt={service.title}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0704]/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="group p-8 rounded-2xl bg-[#0C0704]/60 border border-[#C8956C]/8 hover:border-[#C8956C]/20 transition-all duration-500">
                      <div className={`w-14 h-14 rounded-xl ${getAccentBg(service.accent_color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {iconMap[service.icon_key] || <Globe className="w-7 h-7" />}
                      </div>
                      <h3 className="text-2xl font-bold text-[#FFF8F0] mb-4 group-hover:text-[#C8956C] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#A89080] leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <PageNav />
    </>
  );
}
