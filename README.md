# Архитектура

```
> public // статика
> src
	> app
		> (routes)                           // роутер
			> @pageName                      // папка страницы
		       > page.tsx                    // страница
			   > layout.tsx                  // разметка
		> components                         // компоненты страниц
			> @pageName                      // название страницы
				> @pageComponents.tsx        // компонент
			    > @pageComponent.module.css  // стили компонента
		> shared                             // глобальные компоненты
			> styles                         // глобальные стили
		       > _variables.css              // переменные
			   > _globals.scss               // глобальные стили
			> components                     // компоненты
			> icons                          // иконки
		> page.tsx                           // Главная страница
		> layout.tsx                         // Родительская разметка
.gitignore                                   // игнорирование файлов для гита
package.json                                 // зависимости
package-lock.json                            // lock зависимости
tsconfig.json                                // конфигурация компилятора
next.config.ts                               // конфигурация next проекта

```

# Зависимости:

- [Node.js 18.18](https://nodejs.org/) or later.
- macOS, Windows (including WSL), and Linux are supported.

## Технологии:

- nextjs: v15
- classnames: v2.5
- sass: v1
- typescript: v5

# Запуск

Запуск проекта:

```bash
npm run dev
```

Билд проекта:

```bash
npm run build
```

Старт билда:

```bash
npm run start
```
