import { getWorkshopFormEmbedUrl } from '../workshopFormUrl';

export default function WorkshopPage({ onBack }) {
  const embedUrl = getWorkshopFormEmbedUrl();

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-surface-alt border-b-2 border-ink">
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-secondary hover:text-ink transition-colors cursor-pointer mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          На главную
        </button>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase leading-tight">
            Заявка на workshop
          </h1>
          <p className="mt-3 text-sm md:text-base text-ink-secondary max-w-xl leading-relaxed">
            Leave your contact details — we&apos;ll respond and align on the workshop goals and dates.
          </p>
        </div>

        {embedUrl ? (
          <div className="rounded-none border-2 border-ink bg-surface shadow-[8px_8px_0_0_#000] overflow-hidden">
            <iframe
              title="Заявка на workshop"
              src={embedUrl}
              className="w-full h-[min(780px,85vh)] border-0 block"
            />
          </div>
        ) : (
          <div className="border-2 border-ink bg-surface p-8 shadow-[8px_8px_0_0_#000]">
            <p className="text-sm text-ink-secondary leading-relaxed">
              Форма ещё не подключена. Запустите скрипт{' '}
              <code className="text-xs bg-surface-alt px-1.5 py-0.5 border border-border">
                scripts/google-apps-script/create-workshop-form.gs
              </code>{' '}
              в Google Apps Script, затем добавьте в файл{' '}
              <code className="text-xs bg-surface-alt px-1.5 py-0.5 border border-border">app/.env</code>{' '}
              переменную{' '}
              <code className="text-xs bg-surface-alt px-1.5 py-0.5 border border-border">
                VITE_WORKSHOP_FORM_EMBED_URL
              </code>{' '}
              со значением EMBED_URL из журнала выполнения.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
