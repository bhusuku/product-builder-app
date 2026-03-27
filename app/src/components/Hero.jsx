import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-surface pt-20 pb-16 px-6 md:pt-28 md:pb-24 overflow-hidden border-b-2 border-ink">
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary bg-surface border-2 border-ink shadow-[4px_4px_0_0_#000] mb-6">
              <span className="w-1.5 h-1.5 bg-primary" />
              Operating model for the AI era
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-ink leading-[1.08] uppercase"
          >
            Ship products at
            <br />
            startup speed,
            <br />
            <span className="text-primary">inside your company</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-base md:text-lg text-ink-secondary max-w-xl leading-relaxed"
          >
            One person. Full cycle. From customer signal to shipped feature in days, not months. The Product Builder Model replaces handoffs with ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#roles"
              className="inline-flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wide text-white bg-primary border-2 border-ink shadow-[6px_6px_0_0_#000] hover:bg-primary-dark transition-colors"
            >
              Explore the model
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wide text-ink bg-surface border-2 border-ink shadow-[6px_6px_0_0_#000] hover:bg-surface-alt transition-colors"
            >
              Request a workshop
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5"
        >
          {[
            {
              value: '~60%',
              label: 'Lower cost per shipped feature stream',
              accent: 'primary',
            },
            {
              value: '5–10×',
              label: 'Faster from insight to shipped product',
              accent: 'accent',
            },
            {
              value: 'Zero',
              label: 'No handoffs on your frontend features',
              accent: 'primary',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-start gap-2 p-5 border-2 border-ink bg-surface shadow-[6px_6px_0_0_#000] border-t-4 ${
                stat.accent === 'accent' ? 'border-t-accent' : 'border-t-primary'
              }`}
            >
              <span className="text-2xl font-bold text-primary tabular-nums whitespace-nowrap leading-none">
                {stat.value}
              </span>
              <span className="text-sm text-ink-secondary leading-snug">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
