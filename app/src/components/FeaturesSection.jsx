import { motion } from 'framer-motion';

const features = [
  {
    title: 'Continuous signal capture',
    description:
      'Pull context from support, analytics, and product data so decisions start from what customers actually do—not only what gets escalated.',
    accent: 'primary',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Full-cycle ownership',
    description:
      'One person carries insight, problem framing, UX, and frontend implementation—so nothing gets lost between handoffs.',
    accent: 'accent',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: 'Zero handoff walls',
    description:
      'Replace the PM → design → frontend queue with a single builder loop. Fewer meetings, clearer accountability, faster shipping.',
    accent: 'primary',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'AI-assisted velocity',
    description:
      'Use modern AI coding workflows to move from prototype to production UI without splitting work across three roles.',
    accent: 'accent',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    title: 'Clear role boundaries',
    description:
      'Product Builders own the customer-facing slice; Technical Partners own backend, security, and platform—documented so teams don’t collide.',
    accent: 'primary',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Ship, measure, iterate',
    description:
      'Feature flags, experiments, and fast feedback loops let you validate in production and adjust without another planning cycle.',
    accent: 'accent',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

const topBorder = {
  primary: 'border-t-primary',
  accent: 'border-t-accent',
};

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-surface-mist" id="impact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink uppercase tracking-tight">
            What the model unlocks
          </h2>
          <p className="mt-3 text-ink-secondary max-w-xl mx-auto text-sm md:text-base">
            Operating principles teams use when one person owns the path from signal to shipped product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`
                bg-surface border-2 border-ink shadow-[6px_6px_0_0_#000] p-8 text-left
                border-t-4 ${topBorder[f.accent]}
              `}
            >
              <div className="w-11 h-11 border-2 border-primary flex items-center justify-center text-primary mb-5">
                {f.icon}
              </div>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wide leading-snug">{f.title}</h3>
              <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{f.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
