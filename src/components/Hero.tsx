'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const features = [
  { text: 'Free 14-day trial', icon: 'time-line' },
  { text: 'No credit card required', icon: 'bank-card-line' },
  { text: 'Cancel anytime', icon: 'close-circle-line' }
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
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
            <span className="text-sm font-medium">Introducing SaaS Landing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8"
          >
            Build your next{' '}
            <span className="relative">
              <span className="relative z-10">SaaS product</span>
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-primary/20 -skew-x-6 -z-10" />
            </span>{' '}
            faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-12"
          >
            The ultimate landing page template for your SaaS product.
            Built with Next.js 14, Tailwind CSS, and Framer Motion.
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

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-slate-600"
              >
                <i className={`ri-${feature.icon} text-primary`} />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto"
        >
          <div className="relative">
            {/* Browser Window */}
            <div className="aspect-[4/3] max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-200/50 overflow-hidden p-8">
              <div className="absolute inset-0 bg-grid opacity-[0.02]" />
              
              {/* Preview Content */}
              <div className="relative h-full rounded-xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/50 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-slate-100" />
                  <div className="h-4 w-1/2 rounded bg-slate-100" />
                  <div className="h-32 rounded bg-slate-100" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-100/20 rounded-lg blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-blue-100/20 to-blue-900/20 rounded-lg blur-2xl" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-purple-100/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-blue-900/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
} 