import SEO from '../components/SEO';

const baseJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Indian Launch Web Development",
  "alternateName": "Indian Launch",
  "url": "https://indianlaunch.dev",
  "logo": "https://indianlaunch.dev/favicon.svg",
  "image": "https://indianlaunch.dev/images/hero-main.jpg",
  "description": "AI-powered web development studio in India specializing in professional websites for startups and small businesses. Affordable, fast, and SEO-optimized web solutions.",
  "priceRange": "₹₹",
  "telephone": "+91-8441825076",
  "email": "hello@indianlaunch.dev",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "India",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.5937",
    "longitude": "78.9629"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": ["Web Development", "AI-Powered Website Design", "Landing Page Development", "Website Maintenance", "SEO Optimization"],
  "sameAs": [
    "https://twitter.com/indianlaunch",
    "https://linkedin.com/company/indianlaunch",
    "https://github.com/indianlaunch",
    "https://instagram.com/indianlaunch"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1",
    "bestRating": "5"
  }
};

export function HomeSEO() {
  return (
    <SEO
      title="Indian Launch Web Development | AI-Powered Websites for Startups & Small Businesses in India"
      description="Indian Launch is an AI-powered web development studio in India building professional, fast, and affordable websites for startups and small businesses. Get your dream website built with cutting-edge AI technology. Book a free consultation today!"
      keywords="web development India, AI-powered website development, startup website design India, small business website development, affordable web development India, professional website design, landing page development, website maintenance India, React development India, AI website builder, web development agency India, Indian Launch web development, website for startups, cheap website design India, best web development company India"
      canonical="https://indianlaunch.dev/"
      ogImage="https://indianlaunch.dev/images/hero-main.jpg"
      jsonLd={{
        ...baseJsonLd,
        "@id": "https://indianlaunch.dev/#business",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Powered Responsive Website Design",
                "description": "Professional, mobile-first websites built with AI acceleration for startups and small businesses in India."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Pages & MVP Development",
                "description": "High-converting landing pages and minimum viable products built fast with AI-powered tools."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Support & Maintenance",
              "description": "Ongoing post-launch support with AI-assisted monitoring, security updates, and performance optimization."
              }
            }
          ]
        }
      }}
    />
  );
}

export function ServicesSEO() {
  return (
    <SEO
      title="AI-Powered Web Development Services | Responsive Websites, Landing Pages & Support — Indian Launch"
      description="Explore Indian Launch's AI-powered web development services: responsive website design, high-converting landing pages & MVPs, and ongoing support & maintenance. Affordable, professional, and built fast for Indian startups and small businesses."
      keywords="web development services India, responsive website design, landing page development India, MVP development startup, website maintenance services, AI-powered web design, startup website services, small business web development, professional website design India, website redesign India, React website development, Next.js development India"
      canonical="https://indianlaunch.dev/services"
      ogImage="https://indianlaunch.dev/images/services-web.jpg"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Web Development Services",
        "description": "AI-powered web development services for startups and small businesses in India.",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Responsive Website Design",
            "url": "https://indianlaunch.dev/services#website-design",
            "description": "Beautiful, mobile-first websites built with AI acceleration for speed and reliability."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Landing Pages & MVPs",
            "url": "https://indianlaunch.dev/services#landing-pages",
            "description": "High-converting landing pages and MVPs built fast with AI-powered tools."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ongoing Support & Maintenance",
            "url": "https://indianlaunch.dev/services#support",
            "description": "Reliable post-launch support with AI-assisted monitoring and performance optimization."
          }
        ]
      }}
    />
  );
}

export function TeamSEO() {
  return (
    <SEO
      title="Meet Our Team | AI Web Developers & Designers — Indian Launch Web Development"
      description="Meet the team behind Indian Launch Web Development — Lakshya (Founder), Rohit (Frontend), Kunal (Backend), and Mayank (Full-Stack). Expert developers building AI-powered websites for startups and small businesses in India."
      keywords="web development team India, Indian web developers, startup web developers, AI web development team, frontend developer India, backend developer India, full-stack developer India, web development agency team, Indian Launch team"
      canonical="https://indianlaunch.dev/team"
      ogImage="https://indianlaunch.dev/images/team-group.jpg"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Indian Launch Web Development",
        "url": "https://indianlaunch.dev",
        "employee": [
          {
            "@type": "Person",
            "name": "Lakshya",
            "jobTitle": "Founder & Lead Strategist",
            "knowsAbout": "Project Strategy, Client Relations, AI-Powered Web Development"
          },
          {
            "@type": "Person",
            "name": "Rohit",
            "jobTitle": "Frontend Developer",
            "knowsAbout": "UI/UX Design, React Development, Responsive Web Design"
          },
          {
            "@type": "Person",
            "name": "Kunal",
            "jobTitle": "Backend Developer",
            "knowsAbout": "Server-Side Logic, Database Architecture, API Development"
          },
          {
            "@type": "Person",
            "name": "Mayank",
            "jobTitle": "Full-Stack Developer",
            "knowsAbout": "End-to-End Development, Deployment, Performance Optimization"
          }
        ]
      }}
    />
  );
}

export function AboutSEO() {
  return (
    <SEO
      title="About Indian Launch | AI-Powered Web Development Studio for Startups in India"
      description="Indian Launch is a new AI-powered web development studio based in India, dedicated to helping startups and small businesses get online with professional, affordable websites. Learn about our mission, values, and why AI makes us faster and cheaper."
      keywords="about Indian Launch, AI web development studio India, affordable web development startup, web development for small business India, AI-powered website agency, new web development company India, startup friendly web development"
      canonical="https://indianlaunch.dev/about"
      ogImage="https://indianlaunch.dev/images/about-ai.jpg"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Indian Launch Web Development",
        "description": "AI-powered web development studio helping startups and small businesses in India.",
        "url": "https://indianlaunch.dev/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Indian Launch Web Development",
          "description": "AI-powered web development studio based in India, focused on affordable, professional websites for startups and small businesses."
        }
      }}
    />
  );
}

export function ContactSEO() {
  return (
    <SEO
      title="Contact Indian Launch | Book a Free WhatsApp Consultation for AI Website Development"
      description="Book a free consultation with Indian Launch Web Development on WhatsApp. Talk directly to Lakshya, Rohit, Kunal, or Mayank about your AI-powered website project. Fast response, affordable rates, based in India."
      keywords="contact web developer India, WhatsApp consultation web development, book web development consultation, free website consultation India, hire web developer India, AI website development inquiry, startup website consultation, small business web developer contact"
      canonical="https://indianlaunch.dev/contact"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Indian Launch Web Development",
        "description": "Book a free WhatsApp consultation for AI-powered website development.",
        "url": "https://indianlaunch.dev/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Indian Launch Web Development",
          "telephone": "+91-8441825076",
          "email": "hello@indianlaunch.dev",
          "contactType": "sales",
          "availableLanguage": ["English", "Hindi"]
        }
      }}
    />
  );
}

export function FAQSEO() {
  return (
    <SEO
      title="FAQ | Frequently Asked Questions — Indian Launch AI-Powered Web Development"
      description="Find answers to common questions about Indian Launch's AI-powered web development services for startups and small businesses in India. Pricing, timelines, technologies, support, and more."
      keywords="web development FAQ India, AI website development questions, startup website FAQ, small business web development questions, how much does a website cost India, how long to build a website, website development FAQ, Indian Launch FAQ"
      canonical="https://indianlaunch.dev/faq"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI-powered web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-powered web development uses artificial intelligence tools alongside expert human developers to build websites faster, more efficiently, and at a lower cost than traditional methods."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a website cost for a startup in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pricing is significantly lower than traditional agencies because AI tools help us work faster. Contact us on WhatsApp for a free consultation and personalized quote."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A simple landing page can be ready in 3-5 days, a responsive business website typically takes 1-2 weeks, and a complex web application may take 3-4 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build websites for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Indian Launch specializes in web development for startups and small businesses across India. We use AI to deliver professional results at affordable prices."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website be mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. Every website we build is mobile-first and fully responsive — it looks and works perfectly on phones, tablets, laptops, and desktops."
            }
          }
        ]
      }}
    />
  );
}

export function PrivacySEO() {
  return (
    <SEO
      title="Privacy Policy | Indian Launch Web Development — Data Protection & Legal Information"
      description="Read the Privacy Policy of Indian Launch Web Development. Learn how we collect, use, protect, and store your personal information. Compliant with Indian data protection laws including DPDP Act 2023."
      keywords="privacy policy, data protection India, web development privacy policy, DPDP Act 2023, Indian data protection law, website privacy policy, personal data protection, information security policy, GDPR compliance India, data privacy web development"
      canonical="https://indianlaunch.dev/privacy"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Indian Launch Web Development",
        "description": "Privacy Policy and legal information for Indian Launch Web Development.",
        "url": "https://indianlaunch.dev/privacy",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Indian Launch Web Development",
          "url": "https://indianlaunch.dev"
        },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
      }}
    />
  );
}
