/** URL встраивания Google Form (?embedded=true). Задаётся в .env — см. scripts/google-apps-script/create-workshop-form.gs */
export function getWorkshopFormEmbedUrl() {
  const url = import.meta.env.VITE_WORKSHOP_FORM_EMBED_URL;
  return typeof url === 'string' && url.trim().length > 0 ? url.trim() : '';
}
