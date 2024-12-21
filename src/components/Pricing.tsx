'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for startups and small businesses',
    price: 29,
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Basic integrations'
    ],
    cta: {
      text: 'Start with Starter',
      href: 'https://example.com/signup/starter'
    }
  },
  {
    name: 'Pro',
    description: 'Best for growing companies',
    price: 99,
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Advanced integrations',
      'Custom workflows',
      'Team training'
    ],
    popular: true,
    cta: {
      text: 'Start with Pro',
      href: 'https://example.com/signup/pro'
    }
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with specific needs',
    price: null,
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'API access',
      'Custom integrations',
      'Custom workflows',
      'Team training',
      'Custom contracts',
      'SLA agreement'
    ],
    cta: {
      text: 'Contact Sales',
      href: 'https://example.com/contact'
    }
  }
];

export default function Pricing() {
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
            <i className="ri-price-tag-3-line" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Choose the perfect plan for your business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Start with our free trial and upgrade anytime. All plans come with a 14-day money-back guarantee.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className={`relative h-full flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300 ${plan.popular ? 'ring-primary/50' : ''}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-sm font-medium shadow-sm">
                      <i className="ri-star-line" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== null ? (
                      <>
                        <span className="text-4xl font-bold text-slate-900">
                          ${plan.price}
                        </span>
                        <span className="text-slate-600">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-slate-900">
                        Custom
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-600">
                        <i className="ri-checkbox-circle-line text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <Link
                    href={plan.cta.href}
                    className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    <span>{plan.cta.text}</span>
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span>Have questions? Check out our FAQ</span>
            <i className="ri-arrow-right-line" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 