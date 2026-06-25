import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const planIcons: Record<string, React.ReactNode> = {
  starter: <Zap className="w-6 h-6" />,
  professional: <Crown className="w-6 h-6" />,
  enterprise: <Rocket className="w-6 h-6" />,
};

interface PricingPlan {
  id: number;
  name: string;
  plan_key: string;
  price: string;
  period: string;
  description: string;
  features: string;
  is_popular: boolean;
  cta_text: string;
}

export default function Pricing() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    fetch('/api/pricing')
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-32 bg-[#0A1628]" ref={ref}>
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[200px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#F97316] text-sm font-semibold tracking-[0.2em] uppercase">Pricing</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent <span className="bg-gradient-to-r from-[#F97316] to-[#FB923C] bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your business. No hidden fees, no surprises — just great value.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-96 rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative p-8 rounded-2xl border transition-all duration-500 flex flex-col ${
                  plan.is_popular
                    ? 'bg-gradient-to-b from-[#0D1B2E] to-[#0A1628] border-[#F97316]/40 shadow-2xl shadow-orange-500/10 scale-[1.02] lg:scale-105'
                    : 'bg-[#0D1B2E]/60 border-white/5 hover:border-white/10'
                }`}
              >
                {plan.is_popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-xs font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.is_popular ? 'bg-[#F97316]/10 text-[#F97316]' : 'bg-white/5 text-gray-400'
                  }`}>
                    {planIcons[plan.plan_key] || <Zap className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                    <p className="text-gray-400 text-xs">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">{plan.period}</span>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {plan.features.split(',').map((feature) => (
                      <li key={feature.trim()} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.is_popular ? 'bg-[#F97316]/10 text-[#F97316]' : 'bg-white/5 text-gray-400'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => handleScroll('#contact')}
                  className={`w-full py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                    plan.is_popular
                      ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta_text}
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
