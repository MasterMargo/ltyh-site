// Серверная функция Vercel: отправляет заявку в Telegram.
// СЕКРЕТЫ берутся из переменных окружения Vercel (Settings → Environment Variables),
// в коде их нет — поэтому в публичном репозитории ничего не утекает.
//   TG_TOKEN — токен бота от @BotFather
//   TG_CHAT  — chat ID получателя (например 5601818394)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }

  const TOKEN = process.env.TG_TOKEN;
  const CHAT = process.env.TG_CHAT;
  if (!TOKEN || !CHAT) {
    res.status(500).json({ ok: false, error: 'missing_env' });
    return;
  }

  try {
    const d = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const text =
      '\u{1F514} Новая заявка с сайта ltyh.ru\n\n' +
      '\u{1F464} Имя: ' + (d.Name || '\u2014') + '\n' +
      '\u{1F4DE} Контакт: ' + (d.Contact || '\u2014') + '\n' +
      '\u2728 Направление: ' + (d.Interest || '\u2014') + '\n' +
      '\u{1F4AC} Запрос: ' + (d.Request || '\u2014');

    const r = await fetch('https://api.telegram.org/bot' + TOKEN + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT, text, disable_web_page_preview: true }),
    });
    const out = await r.json();
    res.status(out.ok ? 200 : 502).json({ ok: !!out.ok });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'send_failed' });
  }
}
