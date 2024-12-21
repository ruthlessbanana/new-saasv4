'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const features = [
  {
    name: 'Smart Automation',
    description: 'Automate repetitive tasks with AI-powered workflows',
    icon: 'robot-line',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    category: 'AI & Automation',
    details: [
      'Custom workflow builder',
      'AI task suggestions',
      'Automated reporting',
      'Smart notifications'
    ]
  },
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights with powerful analytics tools',
    icon: 'line-chart-line',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    category: 'Data & Insights',
    details: [
      'Live dashboards',
      'Custom reports',
      'Data visualization',
      'Trend analysis'
    ]
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with your team',
    icon: 'team-line',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    category: 'Collaboration',
    details: [
      'Real-time editing',
      'Version control',
      'Team chat',
      'File sharing'
    ]
  }
];

const highlights = [
  { value: '10x', label: 'Faster Development', trend: '+120% YoY' },
  { value: '85%', label: 'Time Saved', trend: '+45% YoY' },
  { value: '99%', label: 'Customer Satisfaction', trend: '+12% YoY' }
];

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6">
              <i className="ri-rocket-line" />
              <span className="text-sm font-medium">Powerful Features</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Everything you need to scale your business
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              Our platform provides all the tools you need to manage your business efficiently. 
              From automation to analytics, we've got you covered.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    {item.label}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    <i className="ri-arrow-up-line" />
                    {item.trend}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-200/50 overflow-hidden p-8">
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
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
                {/* Icon */}
                <div className={`relative w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`ri-${feature.icon} text-2xl ${feature.color}`} />
                  <div className={`absolute inset-0 ${feature.bgColor} blur-xl opacity-20`} />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
                    <i className={`ri-${feature.icon} text-xs opacity-50`} />
                    {feature.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <i className="ri-checkbox-circle-line text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-white opacity-50 transform rotate-12 translate-x-16 -translate-y-16 rounded-full group-hover:translate-x-20 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://example.com/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <span>Explore all features</span>
            <i className="ri-arrow-right-line" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 