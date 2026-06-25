import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Crown } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  phone: string;
  is_founder: boolean;
  avatar_url: string;
}

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-80 rounded-2xl bg-[#1A1108] border border-[#C8956C]/15 shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-base">Book a Consultation</h3>
                  <p className="text-white/80 text-xs mt-0.5">Chat with our team on WhatsApp</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* Team list */}
            <div className="p-3">
              {loading ? (
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 rounded-xl bg-[#C8956C]/5 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {team.map((member, index) => (
                    <motion.button
                      key={member.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.06 }}
                      onClick={() => openWhatsApp(member.phone, member.name)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#C8956C]/[0.03] border border-[#C8956C]/8 hover:bg-[#25D366]/10 hover:border-[#25D366]/20 transition-all duration-300 group"
                    >
                      <div className="relative">
                        <img
                          src={member.avatar_url}
                          alt={member.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#C8956C]/15 group-hover:border-[#25D366]/30 transition-colors"
                        />
                        {member.is_founder && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#C8956C] rounded-full flex items-center justify-center border-2 border-[#1A1108]">
                            <Crown className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                        {/* Online dot */}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#1A1108]" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#FFF8F0] font-semibold text-sm">{member.name}</span>
                          {member.is_founder && (
                            <span className="px-1.5 py-0.5 bg-[#C8956C]/15 text-[#C8956C] text-[9px] font-bold rounded-md uppercase tracking-wider">Founder</span>
                          )}
                        </div>
                        <span className="text-[#A89080] text-xs">{member.role}</span>
                        <span className="text-[#8B7A6A] text-[10px] block">{member.specialty}</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              <p className="text-[#8B7A6A] text-[10px] text-center mt-3 px-2">
                Tap any member to start a WhatsApp chat. We typically respond within a few hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 flex items-center justify-center transition-shadow"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? { y: [0, -6, 0] } : {}}
        transition={!isOpen ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.15 }}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 text-white" />
            {/* Ping ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </>
        )}
      </motion.button>
    </div>
  );
}
