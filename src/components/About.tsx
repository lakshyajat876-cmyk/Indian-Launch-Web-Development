import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Lightbulb, Rocket, Shield, Handshake } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Purpose-Built',
    description: 'Every website we build serves a clear business goal — no fluff, no unnecessary complexity, just what works.',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Client-First',
    description: 'Your success matters to us. We listen carefully, communicate openly, and treat every project like our own.',
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Fresh Perspective',
    description: 'As a new studio, we bring hunger, creativity, and the latest techniques to every project we take on.',
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: 'Launch-Ready',
    description: "We focus on getting your website live quickly and correctly — because your business can't wait.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Honest & Transparent',
    description: 'No hidden costs, no overpromising. We set clear expectations and deliver on what we commit to.',
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: 'Growth Partner',
    description: "We're not just building websites — we want to be the team you trust as your business grows.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 bg-[#1A1108]" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#C8956C]/5 rounded-full blur-[200px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C8956C] text-sm font-semibold tracking-[0.2em] uppercase">About Us</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight leading-tight">
              AI-Powered Studio,
              <br />
              <span className="bg-gradient-to-r from-[#C8956C] to-[#D4A574] bg-clip-text text-transparent">Big Ambitions</span>
            </h2>
            <p className="mt-6 text-[#A89080] text-lg leading-relaxed">
              Indian Launch Web Development is a new AI-powered web development studio based in India. We use artificial intelligence alongside expert human craftsmanship to deliver professional, high-quality websites at a fraction of the traditional cost and time.
            </p>
            <p className="mt-4 text-[#A89080] leading-relaxed">
              By combining AI tools with our team's expertise, we build websites faster and more efficiently — passing those savings on to you. Every project gets our full attention and dedication. We believe great web development shouldn't be reserved for big budgets — every business deserves a website they're proud of.
            </p>
            <div className="mt-8 flex gap-4">
              <motion.button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white font-semibold rounded-full shadow-lg shadow-[#C8956C]/20"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Work With Us
              </motion.button>
              <motion.button
                onClick={() => {
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-[#C8956C]/5 border border-[#C8956C]/15 text-[#FFF8F0] font-semibold rounded-full hover:bg-[#C8956C]/10"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-[#0C0704]/80 border border-[#C8956C]/10">
              <h3 className="text-[#FFF8F0] font-bold text-xl mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { title: 'Affordable Pricing', desc: 'Quality web development designed for startup and small business budgets.' },
                  { title: 'Personal Attention', desc: 'We work with a limited number of clients so your project gets the focus it deserves.' },
                  { title: 'AI-Powered Efficiency', desc: 'We use AI tools alongside modern frameworks to build faster, smarter, and more affordably than traditional agencies.' },
                  { title: 'Direct Communication', desc: 'No account managers or runarounds — you work directly with the people building your site.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C8956C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#C8956C] rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-[#FFF8F0] font-semibold text-sm">{item.title}</h4>
                      <p className="text-[#A89080] text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              className="group p-8 rounded-2xl bg-[#0C0704]/60 border border-[#C8956C]/8 hover:border-[#C8956C]/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C8956C]/10 text-[#C8956C] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-[#FFF8F0] font-bold text-lg mb-3">{value.title}</h3>
              <p className="text-[#A89080] text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
