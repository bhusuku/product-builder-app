import { motion } from 'framer-motion';

export default function Header({ onLogoClick, showBack, onBack }) {
  return (
    <header className="sticky top-0 z-30 bg-surface border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          {showBack ? (
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-secondary hover:text-ink transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          ) : null}
          <button type="button" onClick={onLogoClick} className="flex items-center gap-2 cursor-pointer text-left">
            <div className="w-8 h-8 border-2 border-ink bg-primary flex items-center justify-center shadow-[3px_3px_0_0_#000]">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-ink text-xs uppercase tracking-wide">Product Builder</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wide text-ink-secondary">
          <a href="#model" className="hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#roles" className="hover:text-primary transition-colors">
            Roles
          </a>
          <a href="#impact" className="hover:text-primary transition-colors">
            Impact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wide text-white bg-primary border-2 border-ink shadow-[4px_4px_0_0_#000] hover:bg-primary-dark transition-colors"
          >
            Workshop
          </a>
        </div>
      </div>
    </header>
  );
}
