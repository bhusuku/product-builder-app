import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-24 px-6 bg-primary border-t-2 border-ink overflow-hidden" id="cta">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            #000 8px,
            #000 9px
          )`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase leading-tight">
          Ready to transform your
          <br />
          product organization?
        </h2>
        <p className="mt-4 text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
          We run workshops to help teams adopt the Product Builder Model — from pilot design to full-scale implementation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="mailto:hello@example.com?subject=Product%20Builder%20Workshop"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary text-xs font-bold uppercase tracking-wide border-2 border-ink shadow-[6px_6px_0_0_#000] hover:bg-white/95 transition-colors w-full sm:w-auto justify-center"
          >
            Request a workshop
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-xs font-bold uppercase tracking-wide border-2 border-white bg-transparent hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            Explore the model
          </a>
        </div>
      </motion.div>
    </section>
  );
}
