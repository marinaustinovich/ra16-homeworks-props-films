[![Build status](https://ci.appveyor.com/api/projects/status/9fhtadw96dj7bxah/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ra16-homeworks-props-films/branch/main)

deployment: https://marinaustinovich.github.io/ra16-homeworks-props-films/

Рейтинг фильмов
===

Необходимо реализовать компонент, отображающий рейтинг фильма в виде звёзд:
![Список фильмов](./public/preview.png)


## Описание компонента

Для отображения рейтинга создайте компонент `Stars`, который принимает следующие атрибуты:
- `count` — рейтинг фильма, _число_, по умолчанию `0`.

Если рейтинг меньше `1` или больше `5`, или вообще не число, то компонент не должен иметь какого-либо представления в DOM.

Звёзды рейтинга должны быть представлены тегом `<ul>` с классом `card-body-stars`. Для отображения символа звезды внутри тега `<li>` используйте компонент `Star`.

## Пример использования

```jsx
// Внутри App
return (
  <Stars count={1} />,
);
```

Компонент должен дать следующий код:
```html
<ul class="card-body-stars u-clearfix">
  <li>
    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
      <path d="M0 0h18v18H0z" fill="none"/>
    </svg>
  </li>
</ul>
```

## Реализация

Необходимо реализовать компонет `Stars`. Не забудьте, что отдельная звезда должна быть представлена компонентом `Star`.

Важно: вам нужно реализовать только отображение звёздочек, карточку фильма не нужно.