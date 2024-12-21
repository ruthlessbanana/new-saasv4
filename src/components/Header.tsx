'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Company', href: '#company' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container relative flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <i className="ri-code-s-slash-line text-xl text-primary" />
          </div>
          <span className={`font-semibold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            SaaS Landing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://example.com/login"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
            }`}
          >
            Log in
          </Link>
          <Link
            href="https://example.com/signup"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            <span>Get Started</span>
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white backdrop-blur-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <i className="ri-menu-line text-2xl" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Panel */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white md:hidden"
              >
                <div className="flex items-center justify-between h-20 px-6">
                  <span className="font-semibold text-slate-900">Menu</span>
                  <button
                    type="button"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <i className="ri-close-line text-2xl" />
                  </button>
                </div>

                <div className="px-6 py-4">
                  <div className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4">
                    <Link
                      href="https://example.com/login"
                      className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="https://example.com/signup"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-base font-medium hover:bg-primary-dark transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Get Started</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 