'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const features = [
  { text: 'Free 14-day trial', icon: 'time-line' },
  { text: 'No credit card required', icon: 'bank-card-line' },
  { text: 'Cancel anytime', icon: 'close-circle-line' },
  { text: '24/7 Support', icon: 'customer-service-2-line' }
];

const companies = [
  {
    name: 'TechCorp',
    icon: 'ri-cloud-fill',
    color: 'text-blue-500'
  },
  {
    name: 'StartupX',
    icon: 'ri-database-2-fill',
    color: 'text-indigo-500'
  },
  {
    name: 'InnovateLabs',
    icon: 'ri-terminal-box-fill',
    color: 'text-purple-500'
  },
  {
    name: 'FutureScale',
    icon: 'ri-server-fill',
    color: 'text-sky-500'
  },
  {
    name: 'MetaTech',
    icon: 'ri-code-s-slash-fill',
    color: 'text-cyan-500'
  }
];

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-800 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-800 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-slate-900/[0.3] via-slate-800/[0.1] to-slate-900/[0.3] opacity-30 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-light mb-6"
          >
            <i className="ri-rocket-line" />
            <span className="text-sm font-medium">Get Started Today</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to transform your business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 mb-12"
          >
            Join thousands of satisfied customers who have already taken their business to the next level.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://example.com/signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <span>Start your free trial</span>
                <i className="ri-arrow-right-line" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://example.com/demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                <i className="ri-play-circle-line text-xl" />
                <span>Watch demo</span>
              </Link>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <i className={`ri-${feature.icon} text-xl text-primary-light`} />
                </div>
                <span className="text-slate-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Companies Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-slate-400 mb-8"
          >
            Trusted by leading companies worldwide
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative w-20 h-20 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-full h-full rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-sm ${company.color} hover:scale-110 transition-transform duration-300`}>
                    <i className={`${company.icon} text-4xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 