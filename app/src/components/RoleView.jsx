import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roles } from '../data/roles';
import BoundaryTable from './BoundaryTable';
import OperatingModelDiagram from './OperatingModelDiagram';

const tabs = [
  { id: 'your-role', label: 'Your Role' },
  { id: 'the-model', label: 'The Model' },
  { id: 'your-day', label: 'Your Day' },
  { id: 'boundaries', label: 'Boundaries' },
  { id: 'getting-started', label: 'Getting Started' },
];

export default function RoleView({ roleId, onBack }) {
  const [activeTab, setActiveTab] = useState('your-role');
  const role = roles.find((r) => r.id === roleId);

  if (!role) return null;

  return (
    <section className="min-h-screen bg-surface-mist">
      <div className="border-b-2 border-ink bg-surface shadow-[0_4px_0_0_#000]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 py-4 border-b-2 border-border">
            <div className="w-10 h-10 border-2 border-ink bg-surface shadow-[4px_4px_0_0_#000] flex items-center justify-center text-base">
              {role.icon}
            </div>
            <div>
              <h2 className="font-bold text-ink text-xs uppercase tracking-wide leading-tight">{role.title}</h2>
              <p className="text-xs text-ink-secondary mt-0.5">{role.subtitle}</p>
            </div>
          </div>
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3.5 text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-colors cursor-pointer border-b-4 ${
                  activeTab === tab.id
                    ? 'text-primary border-primary'
                    : 'text-ink-muted border-transparent hover:text-ink-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'your-role' && <YourRoleTab role={role} />}
            {activeTab === 'the-model' && <TheModelTab role={role} />}
            {activeTab === 'your-day' && <YourDayTab role={role} />}
            {activeTab === 'boundaries' && <BoundariesTab role={role} />}
            {activeTab === 'getting-started' && <GettingStartedTab role={role} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function YourRoleTab({ role }) {
  const { yourRole } = role;
  return (
    <div className="max-w-3xl">
      <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight uppercase leading-snug">
        {yourRole.headline}
      </h3>
      <p className="mt-4 text-ink-secondary leading-relaxed text-base md:text-lg">
        {yourRole.description}
      </p>

      <div className="mt-10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
          What&apos;s different from today
        </h4>
        <div className="space-y-4">
          {yourRole.whatsDifferent.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className={`flex items-start gap-4 p-4 bg-surface border-2 border-ink shadow-[5px_5px_0_0_#000] border-t-4 ${
                i % 2 === 0 ? 'border-t-primary' : 'border-t-accent'
              }`}
            >
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-sm text-ink-secondary leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 md:p-8 bg-primary-light border-2 border-ink shadow-[6px_6px_0_0_#000] border-t-4 border-t-primary">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Why it matters</p>
        <p className="text-ink font-bold text-base md:text-lg leading-snug">{yourRole.whyItMatters}</p>
      </div>
    </div>
  );
}

function TheModelTab({ role }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight uppercase mb-2">The operating model</h3>
      <p className="text-sm md:text-base text-ink-secondary mb-8 max-w-2xl">
        See how work flows through the system. Your role is highlighted.
      </p>
      <OperatingModelDiagram highlightRole={role.id} />
    </div>
  );
}

function YourDayTab({ role }) {
  const { yourDay } = role;
  return (
    <div className="max-w-3xl">
      <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight uppercase mb-8">A day in your life</h3>

      <div className="space-y-10">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Daily activities</h4>
          <div className="space-y-3">
            {yourDay.daily.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 border-2 border-ink bg-surface shadow-[4px_4px_0_0_#000] border-t-4 ${
                  i % 2 === 0 ? 'border-t-primary' : 'border-t-accent'
                }`}
              >
                <span className="w-8 h-8 border-2 border-ink bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#000]">
                  {i + 1}
                </span>
                <span className="text-sm text-ink-secondary leading-relaxed pt-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {yourDay.weekly && yourDay.weekly.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Weekly activities</h4>
            <div className="space-y-3">
              {yourDay.weekly.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 border-2 border-ink bg-surface shadow-[4px_4px_0_0_#000] border-t-4 ${
                    i % 2 === 0 ? 'border-t-accent' : 'border-t-primary'
                  }`}
                >
                  <div className="w-8 h-8 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-ink-secondary leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Your toolkit</h4>
          <div className="flex flex-wrap gap-2">
            {yourDay.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-2 text-xs font-bold uppercase tracking-wide border-2 border-ink bg-surface text-ink-secondary shadow-[3px_3px_0_0_#000]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BoundariesTab({ role }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight uppercase mb-2">Boundaries & ownership</h3>
      <p className="text-sm md:text-base text-ink-secondary mb-8 max-w-2xl">
        Clear ownership prevents confusion. Here&apos;s what you own, what you don&apos;t, and where you collaborate.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-5 md:p-6 border-2 border-ink bg-emerald-50 shadow-[6px_6px_0_0_#000] border-t-4 border-t-emerald-600">
          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-900 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            You own
          </h4>
          <ul className="space-y-2">
            {role.boundaries.owns.map((item, i) => (
              <li key={i} className="text-sm text-ink-secondary leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 md:p-6 border-2 border-ink bg-red-50 shadow-[6px_6px_0_0_#000] border-t-4 border-t-red-600">
          <h4 className="text-xs font-bold uppercase tracking-widest text-red-900 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            You don&apos;t own
          </h4>
          <ul className="space-y-2">
            {role.boundaries.doesNot.map((item, i) => (
              <li key={i} className="text-sm text-ink-secondary leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 md:p-6 border-2 border-ink bg-amber-50 shadow-[6px_6px_0_0_#000] border-t-4 border-t-amber-600">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-900 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            You collaborate
          </h4>
          <ul className="space-y-2">
            {role.boundaries.collaborates.map((item, i) => (
              <li key={i} className="text-sm text-ink-secondary leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-ink pt-10">
        <h4 className="text-sm font-bold text-ink uppercase tracking-wide mb-2">Full boundary matrix</h4>
        <p className="text-sm text-ink-secondary mb-6">Who does what across the entire operating model.</p>
        <BoundaryTable highlightRole={role.id} />
      </div>
    </div>
  );
}

function GettingStartedTab({ role }) {
  return (
    <div className="max-w-3xl">
      <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight uppercase mb-2">Getting started</h3>
      <p className="text-sm md:text-base text-ink-secondary mb-8">
        Your first steps to adopt this role. Follow them in order.
      </p>

      <div className="space-y-4">
        {role.gettingStarted.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className={`flex items-start gap-4 p-4 md:p-5 border-2 border-ink bg-surface shadow-[5px_5px_0_0_#000] border-t-4 transition-shadow hover:shadow-[6px_6px_0_0_#000] ${
              i % 2 === 0 ? 'border-t-primary' : 'border-t-accent'
            }`}
          >
            <span className="w-9 h-9 border-2 border-ink bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-[3px_3px_0_0_#000]">
              {i + 1}
            </span>
            <span className="text-sm text-ink-secondary leading-relaxed pt-1.5">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
