import { motion } from 'framer-motion';

const steps = [
  {
    id: 'signals',
    label: 'Real-time Signals',
    detail: 'Support tickets, NPS, session recordings, analytics',
    roles: ['product-builder'],
    color: '#0077cc',
  },
  {
    id: 'capture',
    label: 'Capture & Synthesize',
    detail: 'Product Builder analyzes and prioritizes signals',
    roles: ['product-builder'],
    color: '#0077cc',
  },
  {
    id: 'define',
    label: 'Define Problem + Solution',
    detail: 'Problem statement, success metrics, solution hypothesis',
    roles: ['product-builder'],
    color: '#0077cc',
  },
  {
    id: 'build',
    label: 'Design & Build Frontend',
    detail: 'AI-assisted development, design system components',
    roles: ['product-builder', 'technical-partner'],
    color: '#0077cc',
  },
  {
    id: 'api',
    label: 'API Design & Backend',
    detail: 'Collaborative API contracts, backend implementation',
    roles: ['technical-partner'],
    color: '#0062a8',
  },
  {
    id: 'quality',
    label: 'Automated Quality Check',
    detail: 'AI-powered code analysis: Green / Yellow / Red',
    roles: ['technical-partner', 'head-engineering'],
    color: '#6b2fa0',
  },
  {
    id: 'review',
    label: 'Review & Approve',
    detail: 'Technical Partner reviews, security sign-off',
    roles: ['technical-partner'],
    color: '#0062a8',
  },
  {
    id: 'deploy',
    label: 'Deploy → Feature Flag',
    detail: 'Staging deployment, gradual rollout',
    roles: ['product-builder', 'technical-partner'],
    color: '#d97706',
  },
  {
    id: 'iterate',
    label: 'Monitor & Iterate',
    detail: 'Post-launch metrics, A/B results, next cycle',
    roles: ['product-builder'],
    color: '#0077cc',
  },
];

function getRoleBadge(roleId) {
  const map = {
    'product-builder': { label: 'PB', bg: '#0077cc' },
    'technical-partner': { label: 'TP', bg: '#0062a8' },
    'head-product-building': { label: 'HPB', bg: '#d97706' },
    'head-engineering': { label: 'HE', bg: '#6b2fa0' },
    'executive': { label: 'Exec', bg: '#b45309' },
  };
  return map[roleId] || { label: '?', bg: '#737373' };
}

export default function OperatingModelDiagram({ highlightRole }) {
  return (
    <div className="relative">
      <div className="mb-8 flex flex-wrap gap-5">
        <div
          className={`flex-1 min-w-[220px] p-4 md:p-5 border-2 border-ink bg-surface transition-all shadow-[5px_5px_0_0_#000] border-t-4 ${
            highlightRole === 'head-product-building'
              ? 'border-t-accent bg-orange-50'
              : 'border-t-accent bg-surface-alt'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">🎯</span>
            <span className="text-xs font-bold uppercase tracking-wide text-ink">Head of Product Building</span>
          </div>
          <p className="text-xs text-ink-secondary leading-relaxed">Knowledge base, quality standards, coaching</p>
        </div>
        <div
          className={`flex-1 min-w-[220px] p-4 md:p-5 border-2 border-ink bg-surface transition-all shadow-[5px_5px_0_0_#000] border-t-4 ${
            highlightRole === 'head-engineering' ? 'border-t-violet-600 bg-violet-50' : 'border-t-violet-600 bg-surface-alt'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">🏗️</span>
            <span className="text-xs font-bold uppercase tracking-wide text-ink">Head of Engineering</span>
          </div>
          <p className="text-xs text-ink-secondary leading-relaxed">Architecture, CI/CD, security policies, guardrails</p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => {
          const isHighlighted = !highlightRole || step.roles.includes(highlightRole);
          const isLeadershipHighlighted =
            highlightRole === 'head-product-building' ||
            highlightRole === 'head-engineering' ||
            highlightRole === 'executive';

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`flex items-center gap-4 p-4 md:p-5 border-2 border-ink transition-all ${
                isHighlighted && !isLeadershipHighlighted
                  ? 'bg-surface shadow-[5px_5px_0_0_#000] border-t-4 border-t-primary'
                  : 'bg-surface-alt opacity-55 border-t-4 border-t-border'
              }`}
            >
              <div
                className={`w-9 h-9 border-2 border-ink flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-[3px_3px_0_0_#000] ${
                  isHighlighted && !isLeadershipHighlighted ? '' : 'opacity-60'
                }`}
                style={{ backgroundColor: step.color }}
              >
                {i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-ink text-xs uppercase tracking-wide">{step.label}</span>
                  {step.roles.map((r) => {
                    const badge = getRoleBadge(r);
                    return (
                      <span
                        key={r}
                        className="px-1.5 py-0.5 text-[10px] font-bold text-white border border-ink shadow-[2px_2px_0_0_#000]"
                        style={{ backgroundColor: badge.bg }}
                      >
                        {badge.label}
                      </span>
                    );
                  })}
                </div>
                <p className="text-xs text-ink-secondary mt-1 leading-relaxed">{step.detail}</p>
              </div>

              {i < steps.length - 1 && (
                <svg
                  className="w-4 h-4 text-ink-secondary flex-shrink-0 hidden md:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 p-5 md:p-6 border-2 border-ink bg-surface-mist shadow-[6px_6px_0_0_#000] border-t-4 border-t-primary">
        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">The 30-second boundary principle</p>
        <p className="text-sm text-ink-secondary leading-relaxed">
          The Product Builder owns everything the user sees and touches. The Technical Partner owns everything the system does behind the scenes. Where they meet (APIs, auth, data), they collaborate — but the Technical Partner has final authority on safety and architecture.
        </p>
      </div>
    </div>
  );
}
