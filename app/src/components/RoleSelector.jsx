import { motion } from 'framer-motion';
import { roles } from '../data/roles';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const accentForIndex = (i) => (i % 2 === 0 ? 'primary' : 'accent');

export default function RoleSelector({ onSelect }) {
  return (
    <section className="py-20 md:py-24 px-6 bg-surface-alt border-t-2 border-ink" id="roles">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Choose your role</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
            Explore from your perspective
          </h2>
          <p className="mt-3 text-sm md:text-base text-ink-secondary max-w-lg mx-auto">
            Select your role to see how this model works for you — your responsibilities, daily activities, and how to get started.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {roles.map((role, i) => {
            const accent = accentForIndex(i);
            return (
              <motion.button
                key={role.id}
                variants={item}
                onClick={() => onSelect(role.id)}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.99 }}
                className={`group relative bg-surface border-2 border-ink shadow-[6px_6px_0_0_#000] p-6 md:p-8 text-left cursor-pointer transition-shadow hover:shadow-[8px_8px_0_0_#000] border-t-4 ${
                  accent === 'accent' ? 'border-t-accent' : 'border-t-primary'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 border-2 border-primary flex items-center justify-center text-lg flex-shrink-0 bg-surface">
                    {role.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-ink text-xs uppercase tracking-wide">{role.title}</h3>
                    <p className="text-xs text-ink-muted mt-1">{role.subtitle}</p>
                    <p className="text-sm text-ink-secondary mt-3 leading-relaxed">{role.shortDesc}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center text-xs font-bold uppercase tracking-wide text-primary">
                  <span>Explore role</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
