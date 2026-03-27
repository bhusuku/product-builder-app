import { boundaryData } from '../data/roles';

function CellBadge({ value, type }) {
  if (!value) return <span className="text-ink-muted">—</span>;

  const styles = {
    pb: 'bg-primary-light text-ink',
    tp: 'bg-surface-mist text-ink',
    shared: 'bg-orange-50 text-ink',
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-[11px] font-bold uppercase tracking-wide border-2 border-ink shadow-[2px_2px_0_0_#000] ${styles[type]}`}
    >
      {value}
    </span>
  );
}

export default function BoundaryTable({ highlightRole }) {
  const highlightCol =
    highlightRole === 'product-builder'
      ? 'pb'
      : highlightRole === 'technical-partner'
        ? 'tp'
        : null;

  return (
    <div className="overflow-x-auto border-2 border-ink bg-surface shadow-[6px_6px_0_0_#000]">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-surface-alt border-b-2 border-ink">
            <th className="text-left px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-ink">Activity</th>
            <th
              className={`text-center px-4 py-3.5 text-xs font-bold uppercase tracking-wide border-l-2 border-ink transition-colors ${
                highlightCol === 'pb' ? 'text-primary bg-primary-light' : 'text-ink'
              }`}
            >
              Product Builder
            </th>
            <th
              className={`text-center px-4 py-3.5 text-xs font-bold uppercase tracking-wide border-l-2 border-ink transition-colors ${
                highlightCol === 'tp' ? 'text-primary bg-surface-mist' : 'text-ink'
              }`}
            >
              Technical Partner
            </th>
            <th className="text-center px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-ink border-l-2 border-ink">
              Shared
            </th>
          </tr>
        </thead>
        <tbody>
          {boundaryData.map((row, i) => (
            <tr
              key={i}
              className="border-b-2 border-border last:border-b-0 hover:bg-surface-alt/80 transition-colors"
            >
              <td className="px-4 py-3 text-ink-secondary font-medium">{row.activity}</td>
              <td className={`px-4 py-3 text-center border-l-2 border-border ${highlightCol === 'pb' ? 'bg-primary-light/40' : ''}`}>
                <CellBadge value={row.pb} type="pb" />
              </td>
              <td className={`px-4 py-3 text-center border-l-2 border-border ${highlightCol === 'tp' ? 'bg-surface-mist/80' : ''}`}>
                <CellBadge value={row.tp} type="tp" />
              </td>
              <td className="px-4 py-3 text-center border-l-2 border-border">
                <CellBadge value={row.shared} type="shared" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
