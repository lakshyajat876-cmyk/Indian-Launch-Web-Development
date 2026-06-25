import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Eye, Database, Bell, Users, Globe, FileText } from 'lucide-react';
import PageNav from '../components/PageNav';
import { PrivacySEO } from '../lib/seoConfig';

const sections = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you contact us via WhatsApp, email, or our website, we may collect your name, email address, phone number, and any other information you voluntarily provide during our consultation process.'
      },
      {
        subtitle: 'Automatically Collected Information',
        text: 'When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website during your visit.'
      },
      {
        subtitle: 'Cookies and Tracking Technologies',
        text: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
      }
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: null,
        text: 'We use the information we collect for the following purposes:'
      },
      {
        subtitle: 'Service Delivery',
        text: 'To provide, maintain, and improve our web development services, process your inquiries, and deliver project updates and communications.'
      },
      {
        subtitle: 'Communication',
        text: 'To respond to your comments, questions, and requests, and to provide customer service and support.'
      },
      {
        subtitle: 'Analytics & Improvement',
        text: 'To monitor and analyze usage and trends to improve your experience with our website and services.'
      },
      {
        subtitle: 'Legal Compliance',
        text: 'To comply with applicable laws, regulations, and legal processes, and to protect our rights, privacy, safety, or property, and/or that of our users.'
      }
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '3. Information Sharing & Disclosure',
    content: [
      {
        subtitle: null,
        text: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:'
      },
      {
        subtitle: 'Service Providers',
        text: 'We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users, provided they agree to keep this information confidential.'
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities.'
      },
      {
        subtitle: 'Business Transfers',
        text: 'If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred as part of that transaction.'
      },
      {
        subtitle: 'Consent',
        text: 'We may disclose your personal information with your explicit consent.'
      }
    ]
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: '4. Data Security',
    content: [
      {
        subtitle: null,
        text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.'
      },
      {
        subtitle: 'Encryption',
        text: 'Our website uses SSL/TLS encryption to protect data transmitted between your browser and our servers.'
      },
      {
        subtitle: 'Access Controls',
        text: 'We limit access to personal information to authorized team members who need it to perform their job functions.'
      }
    ]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: '5. Data Retention',
    content: [
      {
        subtitle: null,
        text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining the retention period, we consider:'
      },
      {
        subtitle: null,
        text: '• The nature and sensitivity of the data\n• The potential risk of harm from unauthorized disclosure\n• Our legal obligations\n• The purposes for which we process the data\n• Whether we can achieve those purposes through other means'
      }
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '6. Your Rights',
    content: [
      {
        subtitle: null,
        text: 'Depending on your location, you may have the following rights regarding your personal information:'
      },
      {
        subtitle: 'Right to Access',
        text: 'You have the right to request a copy of the personal information we hold about you.'
      },
      {
        subtitle: 'Right to Rectification',
        text: 'You have the right to request correction of any inaccurate or incomplete personal information.'
      },
      {
        subtitle: 'Right to Erasure',
        text: 'You have the right to request deletion of your personal information, subject to certain legal exceptions.'
      },
      {
        subtitle: 'Right to Data Portability',
        text: 'You have the right to request transfer of your personal information in a structured, commonly used, machine-readable format.'
      },
      {
        subtitle: 'Right to Object',
        text: 'You have the right to object to our processing of your personal information in certain circumstances.'
      }
    ]
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: '7. Third-Party Links',
    content: [
      {
        subtitle: null,
        text: 'Our website may contain links to third-party websites or services that are not owned or controlled by Indian Launch Web Development. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policies of any third-party services you access.'
      }
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: '8. Children\'s Privacy',
    content: [
      {
        subtitle: null,
        text: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.'
      }
    ]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: '9. Changes to This Policy',
    content: [
      {
        subtitle: null,
        text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'
      }
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '10. Contact Us',
    content: [
      {
        subtitle: null,
        text: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:'
      },
      {
        subtitle: 'Email',
        text: 'hello@indianlaunch.dev'
      },
      {
        subtitle: 'WhatsApp',
        text: '+91 8441825076 (Lakshya, Founder)'
      },
      {
        subtitle: null,
        text: 'We will respond to your request within 30 days.'
      }
    ]
  }
];

export default function PrivacyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <PrivacySEO />
      <section className="relative py-32 bg-[#0C0704]" ref={ref}>
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#C8956C]/5 rounded-full blur-[200px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8956C]/10 border border-[#C8956C]/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#C8956C]" />
              <span className="text-[#C8956C] text-sm font-semibold">Legal Document</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFF8F0] tracking-tight">
              Privacy <span className="bg-gradient-to-r from-[#C8956C] to-[#D4A574] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="mt-4 text-[#A89080] text-base">
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mt-6 text-[#A89080] max-w-2xl mx-auto text-lg leading-relaxed">
              At Indian Launch Web Development, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>
          </motion.div>

          {/* Important Notice Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-[#C8956C]/10 to-[#C8956C]/5 border border-[#C8956C]/15"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C8956C]/15 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-[#C8956C]" />
              </div>
              <div>
                <h3 className="text-[#FFF8F0] font-bold text-base mb-1">Your Privacy Matters</h3>
                <p className="text-[#A89080] text-sm leading-relaxed">
                  By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="p-8 rounded-2xl bg-[#1A1108]/60 border border-[#C8956C]/8 hover:border-[#C8956C]/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C8956C]/10 text-[#C8956C] flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#FFF8F0]">{section.title}</h2>
                </div>

                <div className="space-y-4 ml-0 sm:ml-13">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="text-[#D4A574] font-semibold text-sm mb-1">{item.subtitle}</h3>
                      )}
                      <p className="text-[#A89080] text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-8 p-8 rounded-2xl bg-[#1A1108]/80 border border-[#C8956C]/10"
          >
            <h2 className="text-xl font-bold text-[#FFF8F0] mb-4">Limitation of Liability</h2>
            <p className="text-[#A89080] text-sm leading-relaxed">
              To the maximum extent permitted by applicable law, Indian Launch Web Development shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
            </p>
          </motion.div>

          {/* Contact for Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#C8956C]/10 to-[#C8956C]/5 border border-[#C8956C]/15 text-center"
          >
            <p className="text-[#FFF8F0] font-semibold text-base mb-2">Questions about our Privacy Policy?</p>
            <p className="text-[#A89080] text-sm">Contact us at <span className="text-[#C8956C] font-medium">hello@indianlaunch.dev</span> or WhatsApp at <span className="text-[#C8956C] font-medium">+91 8441825076</span></p>
          </motion.div>
        </div>
      </section>
      <PageNav />
    </>
  );
}
