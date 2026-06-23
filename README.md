# Слушай своё сердце — ltyh.ru

Лендинг Маргариты Медонецкой в стиле «Коды Света».
Статический сайт: один `index.html` + папка `assets/`. Сборка не требуется.

## Деплой на Vercel
1. Залейте эти файлы в репозиторий https://github.com/MasterMargo
2. На vercel.com → **Add New → Project** → импортируйте репозиторий.
3. Framework Preset: **Other**. Build Command: пусто. Output Directory: `./` (корень).
4. Deploy → сайт открывается на `*.vercel.app`.
5. **Settings → Domains** → добавьте `ltyh.ru` и пропишите DNS по подсказке Vercel.

## Drag-and-drop (без Git)
Перетащите содержимое этой папки на https://vercel.com/new или https://app.netlify.com/drop

## Структура
```
index.html        — страница
assets/            — изображения, логотип, сертификат, фото
```
