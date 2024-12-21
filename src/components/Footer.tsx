'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navigation = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Download', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Brand', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  resources: [
    { name: 'Community', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Settings', href: '#' }
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: 'twitter-x-line'
    },
    {
      name: 'GitHub',
      href: '#',
      icon: 'github-line'
    },
    {
      name: 'Discord',
      href: '#',
      icon: 'discord-line'
    }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-400">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      <div className="container relative">
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 md:col-span-1"
            >
              <h3 className="text-sm font-semibold text-white mb-6">Subscribe to our newsletter</h3>
              <p className="text-sm mb-6">
                Get the latest news and updates delivered straight to your inbox.
              </p>

              <form className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Social Links */}
              <div className="flex gap-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <i className={`ri-${item.icon} text-xl`} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <i className="ri-code-s-slash-line text-primary" />
              </div>
              <span className="text-white font-semibold">SaaS Landing</span>
            </div>

            <div className="text-sm">
              &copy; {new Date().getFullYear()} SaaS Landing. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 