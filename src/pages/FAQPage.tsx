import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import PageNav from '../components/PageNav';
import { FAQSEO } from '../lib/seoConfig';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  sort_order: number;
}

function FAQItem({ faq, index, isOpen, onToggle }: { faq: FAQ; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 text-left ${
          isOpen
          ? 'bg-[#1A1108] border-[#C8956C]/20 shadow-lg shadow-[#C8956C]/5'
          : 'bg-[#0C0704]/60 border-[#C8956C]/8 hover:border-[#C8956C]/15 hover:bg-[#1A1108]/40'
        }`}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
          isOpen
            ? 'bg-[#C8956C]/15 text-[#C8956C] rotate-0'
            : 'bg-[#C8956C]/8 text-[#C8956C]/60 group-hover:bg-[#C8956C]/10 group-hover:text-[#C8956C]'
        }`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold transition-colors duration-300 ${
            isOpen ? 'text-[#C8956C] text-lg' : 'text-[#FFF8F0] text-base group-hover:text-[#C8956C]'
          }`}>
            {faq.question}
          </h3>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 ml-14">
              <p className="text-[#A89080] leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <FAQSEO />
      <section className="relative py-32 bg-[#0C0704]" ref={ref}>
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#C8956C]/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#8B6F4E]/5 rounded-full blur-[180px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8956C]/10 border border-[#C8956C]/15 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[#C8956C]" />
              <span className="text-[#C8956C] text-sm font-semibold tracking-wide">Got Questions?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#C8956C] to-[#D4A574] bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="mt-6 text-[#A89080] max-w-2xl mx-auto text-lg">
              Everything you need to know about our AI-powered web development services. Can't find what you're looking for? Chat with us on WhatsApp.
            </p>
          </motion.div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-20 rounded-2xl bg-[#C8956C]/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          )}

          {/* CTA after FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-[#C8956C]/10 to-[#C8956C]/5 border border-[#C8956C]/15"
          >
            <h3 className="text-[#FFF8F0] font-bold text-xl mb-2">Still have questions?</h3>
            <p className="text-[#A89080] mb-6">Reach out to our team directly on WhatsApp. We typically respond within a few hours.</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://wa.me/918441825076?text=Hello%20Lakshya%2C%20I%20have%20a%20question%20about%20your%20web%20development%20services.', '_blank');
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
      <PageNav />
    </>
  );
}
