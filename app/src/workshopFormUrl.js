/** Встраивание Google Form (?embedded=true). Переопределение: VITE_WORKSHOP_FORM_EMBED_URL в .env */
const DEFAULT_WORKSHOP_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScbJlNI40CdngNqyy6X3ukDaFo83GUSoeYyj08Ne8B72W6IqQ/viewform?embedded=true';

export function getWorkshopFormEmbedUrl() {
  const fromEnv = import.meta.env.VITE_WORKSHOP_FORM_EMBED_URL;
  if (typeof fromEnv === 'string' && fromEnv.trim().length > 0) return fromEnv.trim();
  return DEFAULT_WORKSHOP_FORM_EMBED_URL;
}
