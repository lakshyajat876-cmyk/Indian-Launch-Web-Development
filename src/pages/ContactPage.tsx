import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Crown } from 'lucide-react';
import PageNav from '../components/PageNav';
import { ContactSEO } from '../lib/seoConfig';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  phone: string;
  is_founder: boolean;
  avatar_url: string;
}

export default function ContactPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    fetch('/api/team')
      .then(res => res.json())
      .then(data => setTeam(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'm interested in discussing an AI-driven website development for my business.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <ContactSEO />
      <section className="relative py-32 bg-[#0C0704]" ref={ref}>
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#25D366]/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#C8956C]/5 rounded-full blur-[200px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#C8956C] text-sm font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight">
              Book a <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">Consultation</span>
            </h2>
            <p className="mt-6 text-[#A89080] max-w-2xl mx-auto text-lg">
              Reach out to any of our team members directly on WhatsApp to discuss an AI-driven website for your business.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-72 rounded-2xl bg-[#C8956C]/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/8 hover:border-[#25D366]/25 transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  {member.is_founder && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white text-[10px] font-bold rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Founder
                    </div>
                  )}

                  <div className="relative inline-block mb-4">
                    <img
                      src={member.avatar_url}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#C8956C]/15 group-hover:border-[#25D366]/30 transition-colors duration-300 mx-auto"
                    />
                    {member.is_founder && (
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#C8956C] rounded-full flex items-center justify-center border-2 border-[#0C0704]">
                        <Crown className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#25D366] rounded-full border-2 border-[#0C0704]" />
                  </div>

                  <h3 className="text-[#FFF8F0] font-bold text-lg mb-0.5">{member.name}</h3>
                  <p className="text-[#A89080] text-sm mb-1">{member.role}</p>
                  <p className="text-[#25D366] text-xs font-medium mb-5">{member.specialty}</p>

                  <motion.button
                    onClick={() => openWhatsApp(member.phone, member.name)}
                    className="w-full py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#C8956C]/10 to-[#C8956C]/5 border border-[#C8956C]/15">
              <h4 className="text-[#FFF8F0] font-bold mb-2">Free Consultation</h4>
              <p className="text-[#A89080] text-sm leading-relaxed">
                Not sure what you need? Reach out and we'll help you figure out the best approach for your business — no commitment required.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/15">
              <h4 className="text-[#FFF8F0] font-bold mb-2">Quick Response</h4>
              <p className="text-[#A89080] text-sm leading-relaxed">
                We respond to all inquiries within a few hours. Whether you have a question or a ready-to-go project, we'd love to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <PageNav />
    </>
  );
}
