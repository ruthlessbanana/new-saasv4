'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const integrations = [
  {
    name: 'Slack',
    description: 'Connect with your team and get notified about important updates',
    icon: 'slack-line',
    color: 'text-[#E01E5A]',
    bgColor: 'bg-[#E01E5A]/10',
    category: 'Communication',
    features: [
      'Real-time notifications',
      'Custom alerts',
      'Channel integration',
      'Direct messaging'
    ]
  },
  {
    name: 'Stripe',
    description: 'Process payments securely with industry-leading tools',
    icon: 'bank-card-line',
    color: 'text-[#635BFF]',
    bgColor: 'bg-[#635BFF]/10',
    category: 'Payments',
    features: [
      'Secure transactions',
      'Multiple currencies',
      'Payment analytics',
      'Subscription management'
    ]
  }
];

export default function Integrations() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
          >
            <i className="ri-plug-line" />
            <span className="text-sm font-medium">Powerful Integrations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Connect with your favorite tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Integrate with popular tools and services to streamline your workflow
            and boost productivity.
          </motion.p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Slack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${integrations[0].bgColor} rounded-xl flex items-center justify-center`}>
                  <i className={`ri-${integrations[0].icon} text-2xl ${integrations[0].color}`} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-1">
                    <i className={`ri-${integrations[0].icon} text-xs opacity-50`} />
                    {integrations[0].category}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {integrations[0].name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {integrations[0].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {integrations[0].features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <i className="ri-checkbox-circle-line text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Large Icon */}
              <div className="flex justify-center py-6">
                <i className={`ri-${integrations[0].icon} text-[150px] ${integrations[0].color} opacity-10 animate-pulse`} />
              </div>

              {/* Learn More Link */}
              <div className="absolute bottom-8 left-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  <span>Learn more</span>
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative h-full bg-primary rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <i className="ri-apps-2-line text-2xl text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white text-xs font-medium mb-1 backdrop-blur-sm">
                    <i className="ri-apps-2-line text-xs opacity-50" />
                    Integrations
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    View All
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 mb-6">
                Explore all available integrations and find the perfect tools for your workflow.
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white text-xs font-medium mb-8 backdrop-blur-sm">
                <span>50+ Integrations</span>
              </div>

              {/* Large Icon */}
              <div className="flex justify-center py-6">
                <i className="ri-apps-2-line text-[150px] text-white opacity-10 animate-pulse" />
              </div>

              {/* Learn More Link */}
              <div className="absolute bottom-8 left-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  <span>View catalog</span>
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 