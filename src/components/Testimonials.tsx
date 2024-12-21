'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const testimonials = [
  {
    content:
      "I've tried many SaaS platforms, but this one stands out. The automation features have saved us countless hours, and the analytics provide invaluable insights for our business.",
    author: {
      name: 'Alex Thompson',
      title: 'CEO at MetaTech',
      icon: 'ri-user-smile-line'
    }
  },
  {
    content:
      'The integration capabilities are impressive. We were able to connect all our existing tools seamlessly. The customer support team has been exceptional in helping us maximize the platform.',
    author: {
      name: 'Sarah Chen',
      title: 'CTO at InnovateLabs',
      image: '/testimonials/sarah.jpg'
    }
  },
  {
    content:
      'What impressed me most was how quickly we could deploy. The onboarding process was smooth, and our team was productive from day one. The ROI has been incredible.',
    author: {
      name: 'Michael Carter',
      title: 'Founder at StartupX',
      image: '/testimonials/michael.jpg'
    }
  }
];

export default function Testimonials() {
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
            <i className="ri-chat-smile-2-line" />
            <span className="text-sm font-medium">Customer Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Trusted by thousands of businesses worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            See what our customers have to say about their experience with our platform.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className="ri-double-quotes-l text-primary" />
                </div>

                {/* Content */}
                <div className="relative">
                  <p className="text-slate-600 mb-8">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-100">
                      {testimonial.author.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                          <i className={`${testimonial.author.icon} text-2xl text-slate-400`} />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.author.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="absolute bottom-8 right-8">
                  {testimonial.author.title.includes('MetaTech') ? (
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <i className="ri-code-s-slash-fill text-slate-400" />
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/companies/${testimonial.author.title.split(' at ')[1].toLowerCase()}.svg`}
                      alt={testimonial.author.title.split(' at ')[1]}
                      className="h-8 w-auto"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 