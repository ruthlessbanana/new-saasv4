'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const metrics = [
  {
    label: 'Revenue Growth',
    value: '$2.4M',
    trend: '+28%',
    chart: 'revenue',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    icon: 'money-dollar-circle-line'
  },
  {
    label: 'Active Users',
    value: '18.6K',
    trend: '+15%',
    chart: 'users',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    icon: 'user-line'
  },
  {
    label: 'Conversion Rate',
    value: '4.3%',
    trend: '+23%',
    chart: 'conversion',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    icon: 'line-chart-line'
  }
];

const insights = [
  {
    title: 'User Engagement',
    description: 'Average session duration increased by 45%',
    icon: 'timer-line',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
  {
    title: 'Revenue Streams',
    description: 'New subscription plans driving 32% growth',
    icon: 'funds-line',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10'
  },
  {
    title: 'Market Expansion',
    description: 'Successfully launched in 12 new markets',
    icon: 'global-line',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  }
];

export default function Analytics() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-slate-900/[0.03] via-slate-900/[0.01] to-slate-900/[0.03] blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="max-w-xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
          >
            <i className="ri-bar-chart-box-line" />
            <span className="text-sm font-medium">Analytics & Insights</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Make data-driven decisions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Get real-time insights into your business performance. Monitor key metrics, 
            track growth, and identify opportunities for optimization.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center`}>
                    <i className={`ri-${metric.icon} text-xl ${metric.color}`} />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                    <i className="ri-arrow-up-line" />
                    {metric.trend}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="text-sm text-slate-600 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-4">
                    {metric.value}
                  </div>
                </div>

                {/* Chart Area */}
                <div className="h-24 bg-slate-50 rounded-lg overflow-hidden">
                  {metric.chart === 'revenue' && (
                    <div className="w-full h-full flex items-end justify-between px-2 pb-2">
                      {[40, 25, 35, 30, 45, 35, 55, 50, 45, 60, 55, 65].map((height, i) => (
                        <div
                          key={i}
                          className="w-[6%] bg-emerald-500/20 hover:bg-emerald-500/30 rounded-t transition-all duration-300"
                          style={{ height: `${height}%` }}
                        >
                          <div
                            className="w-full bg-emerald-500"
                            style={{ height: '2px', marginTop: '-1px' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {metric.chart === 'users' && (
                    <div className="w-full h-full flex items-end justify-between px-2 pb-2">
                      <div className="w-full h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path
                            d="M0 100 C20 80, 40 90, 60 70 S80 60, 100 50 L100 100 Z"
                            className="fill-blue-500/20"
                          />
                          <path
                            d="M0 100 C20 80, 40 90, 60 70 S80 60, 100 50"
                            className="stroke-blue-500 fill-none"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                  {metric.chart === 'conversion' && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 relative">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            className="stroke-current text-purple-500/20"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            className="stroke-current text-purple-500"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${4.3 * 36} ${100 * 36}`}
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-white opacity-50 transform rotate-12 translate-x-16 -translate-y-16 rounded-full group-hover:translate-x-20 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200/50">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Performance Overview
                </h3>
                <p className="text-slate-600">
                  Last 30 days metrics and trends
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                  <i className="ri-download-line" />
                </button>
                <button className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                  <i className="ri-filter-line" />
                </button>
              </div>
            </div>

            {/* Chart Area */}
            <div className="aspect-[21/9] bg-slate-50 rounded-xl mb-8 overflow-hidden">
              <div className="w-full h-full p-6">
                <div className="w-full h-full relative">
                  {/* Value Labels */}
                  <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-sm text-slate-400 py-6">
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">100K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">75K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">50K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">25K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">0</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                  </div>

                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-x-0 pl-20 pr-8 py-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="border-l border-slate-200 h-full" />
                    ))}
                  </div>
                  <div className="absolute inset-0 grid grid-rows-4 gap-y-0 pl-20 pr-8 py-6">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="border-t border-slate-200 w-full" />
                    ))}
                  </div>

                  {/* Chart Content */}
                  <div className="absolute inset-0 pl-20 pr-8 py-6">
                    {/* Revenue Line */}
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
                      <defs>
                        <linearGradient id="revenue-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 900 C250 850, 500 750, 750 600 S900 400, 1000 300"
                        className="stroke-blue-600"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 900 C250 850, 500 750, 750 600 S900 400, 1000 300 L1000 1000 L0 1000 Z"
                        fill="url(#revenue-gradient)"
                      />
                    </svg>
                  </div>

                  {/* Time Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-slate-400 pl-20 pr-8">
                    {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label) => (
                      <div key={label} className="text-center">
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="absolute top-0 right-8 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-xs text-slate-600">Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                    <div className={`w-10 h-10 ${insight.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`ri-${insight.icon} text-lg ${insight.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {insight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-indigo-100/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-100/20 to-blue-900/20 rounded-full blur-2xl" />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://example.com/analytics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <span>View detailed analytics</span>
            <i className="ri-arrow-right-line" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 