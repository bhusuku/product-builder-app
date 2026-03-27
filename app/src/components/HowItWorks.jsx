import { motion } from 'framer-motion';

const steps = [
  {
    step: 'Step 1',
    title: 'Wire up signals',
    description:
      'Connect the channels where customer truth lives: tickets, analytics, sessions, and feedback—so builders see reality daily.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: 'Step 2',
    title: 'Detect opportunities',
    description:
      'Spot friction, drop-offs, and unmet needs directly in data. Prioritize what to fix or ship next without waiting for a roadmap committee.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: 'Step 3',
    title: 'Design & build',
    description:
      'Frame the problem, shape the UX, and implement the frontend—with your Technical Partner on APIs, security, and platform work.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    step: 'Step 4',
    title: 'Ship & tune',
    description:
      'Release behind flags, watch metrics, and iterate. The same person who saw the signal owns the outcome in production.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 px-6 bg-surface border-t-2 border-ink" id="model">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink uppercase tracking-tight">How it works</h2>
          <p className="mt-3 text-ink-secondary max-w-2xl mx-auto text-sm md:text-base">
            Four steps from live product data to shipped improvements—without handing work down a chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 border-2 border-primary flex items-center justify-center text-primary mb-4">
                {s.icon}
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-wide">{s.step}</p>
              <h3 className="mt-2 text-sm font-bold text-ink uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
