import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Crown, Mail, Clock, Shield, Zap, ArrowRight } from 'lucide-react';
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

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@indianlaunch.dev?subject=AI-Driven Website Development Inquiry';
  };

  return (
    <>
      <ContactSEO />
      <section className="relative py-32 bg-[#0C0704]" ref={ref}>
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#25D366]/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#C8956C]/5 rounded-full blur-[200px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
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
              Reach out to any of our team members directly on WhatsApp to discuss an AI-driven website for your business. We'd love to help you get started.
            </p>
          </motion.div>

          {/* Team Contact Cards — 2x2 grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-80 rounded-2xl bg-[#C8956C]/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/8 hover:border-[#25D366]/25 transition-all duration-500 hover:-translate-y-1"
                >
                  {member.is_founder && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-gradient-to-r from-[#C8956C] to-[#A67850] text-white text-[10px] font-bold rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Founder
                    </div>
                  )}

                  <div className="flex items-start gap-5">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.avatar_url}
                        alt={member.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-[#C8956C]/15 group-hover:border-[#25D366]/30 transition-colors duration-300"
                      />
                      {member.is_founder && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#C8956C] rounded-full flex items-center justify-center border-2 border-[#1A1108]">
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#1A1108]" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#FFF8F0] font-bold text-lg">{member.name}</h3>
                      <p className="text-[#A89080] text-sm">{member.role}</p>
                      <p className="text-[#25D366] text-xs font-medium mt-0.5">{member.specialty}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[#A89080] text-sm leading-relaxed mt-5">
                    {member.bio}
                  </p>

                  {/* WhatsApp Button */}
                  <motion.button
                    onClick={() => openWhatsApp(member.phone, member.name)}
                    className="mt-5 w-full py-3.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Other Ways to Reach Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF8F0]">
                Other Ways to <span className="bg-gradient-to-r from-[#C8956C] to-[#D4A574] bg-clip-text text-transparent">Reach Us</span>
              </h3>
              <p className="mt-3 text-[#A89080] max-w-lg mx-auto">
                Prefer email or want to know our working hours? Here's everything you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Email Card */}
              <motion.button
                onClick={handleEmailClick}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="group p-6 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/8 hover:border-[#C8956C]/25 transition-all duration-500 hover:-translate-y-1 text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8956C]/10 text-[#C8956C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-[#FFF8F0] font-bold text-base mb-1">Email Us</h4>
                <p className="text-[#C8956C] text-sm font-medium mb-2">hello@indianlaunch.dev</p>
                <p className="text-[#A89080] text-xs leading-relaxed">
                  Send us a detailed message about your project and we'll respond within 24 hours.
                </p>
              </motion.button>

              {/* Working Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="p-6 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 text-[#D4A574] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-[#FFF8F0] font-bold text-base mb-1">Working Hours</h4>
                <p className="text-[#D4A574] text-sm font-medium mb-2">Mon–Sat: 9AM–7PM IST</p>
                <p className="text-[#A89080] text-xs leading-relaxed">
                  We're available during Indian business hours. WhatsApp messages outside hours are answered first thing next day.
                </p>
              </motion.div>

              {/* Trust Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="p-6 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8C9A8]/10 text-[#E8C9A8] flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-[#FFF8F0] font-bold text-base mb-1">No Commitment</h4>
                <p className="text-[#E8C9A8] text-sm font-medium mb-2">Free consultation</p>
                <p className="text-[#A89080] text-xs leading-relaxed">
                  Just want to explore options? No pressure, no obligations. We're happy to help you figure out what you need.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF8F0]">
                How It <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">Works</span>
              </h3>
              <p className="mt-3 text-[#A89080] max-w-lg mx-auto">
                From first message to live website — here's how our process works.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: '01', title: 'Reach Out', desc: 'WhatsApp any team member or email us. Tell us about your business and what you need.' },
                { step: '02', title: 'Free Consultation', desc: 'We discuss your goals, timeline, and budget. No commitment, no pressure — just honest advice.' },
                { step: '03', title: 'We Build', desc: 'Our team uses AI-powered tools to build your website fast, with regular updates and feedback loops.' },
                { step: '04', title: 'Launch & Support', desc: 'Your site goes live! We provide ongoing support, maintenance, and optimizations to keep it running perfectly.' },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                  className="relative p-6 rounded-2xl bg-[#1A1108]/60 border border-[#C8956C]/8"
                >
                  <span className="text-[#C8956C]/20 text-5xl font-extrabold absolute top-4 right-4 leading-none">{item.step}</span>
                  <div className="relative">
                    <h4 className="text-[#FFF8F0] font-bold text-base mb-2">{item.title}</h4>
                    <p className="text-[#A89080] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-[#C8956C]/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-20"
          >
            <div className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#C8956C]/15 via-[#1A1108] to-[#25D366]/10 border border-[#C8956C]/15 overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8956C]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[100px]" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[#25D366] text-sm font-semibold">Fast Response Guaranteed</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#FFF8F0] mb-4">
                  Ready to Build Your Dream Website?
                </h3>
                <p className="text-[#A89080] text-lg max-w-2xl mx-auto mb-8">
                  Whether you're a startup looking for your first website or a small business ready to level up — we're here to make it happen. Affordable, fast, and AI-powered.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.button
                    onClick={() => openWhatsApp('918441825076', 'Lakshya')}
                    className="group px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-full shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Lakshya (Founder)
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    onClick={handleEmailClick}
                    className="px-8 py-4 bg-[#C8956C]/5 border border-[#C8956C]/15 text-[#FFF8F0] font-semibold rounded-full hover:bg-[#C8956C]/10 hover:border-[#C8956C]/25 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    Send an Email
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <PageNav />
    </>
  );
}
