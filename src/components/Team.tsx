import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Code2, Server, Layers } from 'lucide-react';

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

const memberIcons: Record<string, React.ReactNode> = {
  Lakshya: <Crown className="w-5 h-5" />,
  Rohit: <Code2 className="w-5 h-5" />,
  Kunal: <Server className="w-5 h-5" />,
  Mayank: <Layers className="w-5 h-5" />,
};

const memberColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  Lakshya: { bg: 'bg-[#C8956C]/10', border: 'border-[#C8956C]/25', text: 'text-[#C8956C]', glow: 'shadow-[#C8956C]/10' },
  Rohit: { bg: 'bg-[#D4A574]/10', border: 'border-[#D4A574]/25', text: 'text-[#D4A574]', glow: 'shadow-[#D4A574]/10' },
  Kunal: { bg: 'bg-[#8B6F4E]/10', border: 'border-[#8B6F4E]/25', text: 'text-[#8B6F4E]', glow: 'shadow-[#8B6F4E]/10' },
  Mayank: { bg: 'bg-[#E8C9A8]/10', border: 'border-[#E8C9A8]/25', text: 'text-[#E8C9A8]', glow: 'shadow-[#E8C9A8]/10' },
};

export default function Team() {
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

  return (
    <section id="team" className="relative py-32 bg-[#0C0704]" ref={ref}>
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#C8956C]/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8956C] text-sm font-semibold tracking-[0.2em] uppercase">Our Team</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight">
            Meet the <span className="bg-gradient-to-r from-[#C8956C] to-[#D4A574] bg-clip-text text-transparent">People</span> Behind the Code
          </h2>
          <p className="mt-6 text-[#A89080] max-w-2xl mx-auto text-lg">
            A small, dedicated team that cares about your project as much as you do. Each of us brings a unique strength to deliver the best results.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-[#C8956C]/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => {
              const colors = memberColors[member.name] || memberColors.Lakshya;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`group relative p-8 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/8 hover:border-[#C8956C]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${colors.glow}`}
                >
                  {/* Founder badge */}
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
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-[#C8956C]/15 group-hover:border-[#C8956C]/30 transition-colors duration-300"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-9 h-9 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center border border-[#C8956C]/15`}>
                        {memberIcons[member.name] || <Code2 className="w-5 h-5" />}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#FFF8F0] font-bold text-xl mb-0.5">{member.name}</h3>
                      <p className={`${colors.text} text-sm font-semibold mb-2`}>{member.role}</p>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-medium mb-4`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-current opacity-60`} />
                        {member.specialty}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[#A89080] text-sm leading-relaxed mt-5">
                    {member.bio}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
