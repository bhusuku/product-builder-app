/**
 * Создаёт Google Form с полями: Имя, Email, Веб-сайт компании.
 *
 * Как запустить:
 * 1. Откройте https://script.google.com → «Новый проект».
 * 2. Вставьте этот код, сохраните (Ctrl+S), выберите функцию createWorkshopRequestForm и нажмите «Выполнить».
 * 3. Разрешите доступ к Google Формам при запросе.
 * 4. В журнале выполнения (View → Logs / Журнал) появятся ссылки — скопируйте EMBED_URL.
 * 5. В корне приложения app/ создайте .env с:
 *    VITE_WORKSHOP_FORM_EMBED_URL=<вставьте EMBED_URL>
 * 6. В Vercel: Settings → Environment Variables → то же имя и значение, пересоберите деплой.
 *
 * Внешний вид формы (цвета, шрифт): в Google Forms → «Настроить тему» (иконка палитры).
 */
function createWorkshopRequestForm() {
  var form = FormApp.create('Product Builder — заявка на workshop');
  form.setDescription('Leave your contact details — we\'ll respond and align on the workshop goals and dates.');

  form.addTextItem().setTitle('Имя').setRequired(true);

  var email = form.addTextItem();
  email.setTitle('Email').setRequired(true);
  email.setValidation(FormApp.createTextValidation().requireTextIsEmail().build());

  form.addTextItem()
    .setTitle('Веб-сайт компании')
    .setHelpText('Например: https://company.com')
    .setRequired(false);

  var editUrl = form.getEditUrl();
  var published = form.getPublishedUrl();
  var embedUrl = published + (published.indexOf('?') >= 0 ? '&' : '?') + 'embedded=true';

  Logger.log('EDIT (настройка полей и темы): ' + editUrl);
  Logger.log('PUBLIC_LINK (открыть форму в новой вкладке): ' + published);
  Logger.log('EMBED_URL (вставьте в VITE_WORKSHOP_FORM_EMBED_URL): ' + embedUrl);
  Logger.log('FALLBACK_EMBED (если ссылка выше не подошла): https://docs.google.com/forms/d/' + form.getId() + '/viewform?embedded=true');
}
