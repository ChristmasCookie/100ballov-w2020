# Простые компоненты

Данные компоненты занимаются только отображением, а нужные денамические данные (к примеру, имя кнопки) в них передаются через свойства ([props](https://ru.vuejs.org/v2/guide/components-props.html)) или в как [slot](https://ru.vuejs.org/v2/guide/components-slots.html) (```<slot></slot>```). Такие компоненты могут называться с префикса **V** (**Base** или другое). Префикс добавляется для понимания, что это базовый компонент при его использовании.

В [figma](https://www.figma.com/file/Cr5ltThZU1skT1uGNnxksv/training-100ballovgram-template?node-id=215%3A128) шаблоне они находятся слева.

## Button

Компонент с динамическим названием кнопки. Его следует передавать через **props** или **slot**. Слева и справа от текста следует добавить внутренний отступ в **8px**.

В помощь:
- [padding](https://developer.mozilla.org/ru/docs/Web/CSS/padding)
- [border-radius](https://developer.mozilla.org/ru/docs/Web/CSS/border-radius)
- [background-color](https://developer.mozilla.org/ru/docs/Web/CSS/background-color)

## Search Input

Для `input`, который находится между двумя иконками который должен занимать все оставшиеся свободной место. Чтобы использовать `placeholder` в качестве атрибута, необходимо перед названием атрибута добавить `:` или `v-bind:`, к примеру:
``` vue{2}
<input 
  type="text" 
  :placeholder="placeholder" 
>
```

::: tip
Если у элемента более 1 атрибута, то их можно перенести на следующие строки (1 строка = 1 атрибут). Это делается для улучшения читаемости кода.
:::

В помощь:
- [flex-grow](https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow)
- [border-radius](https://developer.mozilla.org/ru/docs/Web/CSS/border-radius)
- Для выравнивания
  - [flexbox](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox)
  - [align-items](https://developer.mozilla.org/ru/docs/Web/CSS/align-items)
  - [justify-content](https://developer.mozilla.org/ru/docs/Web/CSS/justify-content)
- По вью:
  - [v-bind](https://ru.vuejs.org/v2/guide/syntax.html#Атрибуты) 
  - [краткая форма v-bind](https://ru.vuejs.org/v2/guide/syntax.html#Сокращение-v-bind)

## Contact List Heading

*Имя заголовка* вместе с *down chevron* должны занимать все оставшиеся свободное время и находится в центре этого контейнера (контейнер = div). Если предыдущий шаг сделан, то *edit icon* будет прижат к правому краю. 

В помощь:
- [flex-grow](https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow)
- Для выравнивания
  - [flexbox](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox)
  - [align-items](https://developer.mozilla.org/ru/docs/Web/CSS/align-items)
  - [justify-content](https://developer.mozilla.org/ru/docs/Web/CSS/justify-content)

::: tip
Контейнер (container) и оболочка (wrapper) - это div элементы. Отличие может быть логическое: оболочка внутри себя содержит только один [элемент](http://apps.workflower.fi/vocabs/html/ru#element) или [текст](http://apps.workflower.fi/vocabs/html/ru#text), а контейнер содержит более одного.
К примеру:
``` html
<div class="item-list-container">
  <div class="item-list-wrapper">
    Hello World 1
  </div>
  <div class="item-list-wrapper">
    Hello World 2
  </div>
</div>
```
:::

## Contact Card

Данный компонент включает в себя `VAvatar`, поэтому он должен реализовываться после него.
`src`, `name` и `meta` являются динамическими, следовательно они могут быть получены через **props**

Общий контейнер всех элементов может быть в двух состояниях: обычный и активный. Для этого может использоваться свойство `Boolean` типа и в зависимости от его значение (`true` или `false`) будет добавляться дополнительный класс (в данном случае, если `true`)
``` vue{4}
<div 
  :class="[
    'chat-contact-card',
    active && 'chat-contact-card-active',
  ]"
>
<!--  -->
</div>
```
Данный class является массивом JS (висячая запятая - опционально).

В данном логическом И (`&&`) условии, если левый операнд (`active`) равен истине (`true`), то будет возвращен правый операнд (`'chat-contact-card-active'`), следовательно *class* будет равен  `class="chat-contact-card chat-contact-card-active"`, а если `active` - ложь, то `class="chat-contact-card"`

При этом свойства (**props**) должно быть:
``` vue
active: {
  type: Boolean,
  default: false,
}
```

В помощь:
- [vue классы и стили](https://ru.vuejs.org/v2/guide/class-and-style.html)
- [логические операторы](https://learn.javascript.ru/logical-operators)
- [массивы](https://learn.javascript.ru/array)

## Chat Contact Heading 

Данный компонент включает в себя `VAvatar`, поэтому он должен реализовываться после него.
`src`, `name` являются динамическими, следовательно они могут быть получены через **props**

Используйте **отступы между** (`space-between`) в свойстве `justify-content`, чтобы аватар с именем (должны быть в контейнере) прижались к левой стороне, а инфо иконка к правой.

В помощь:
- Для выравнивания
  - [flexbox](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox)
  - [align-items](https://developer.mozilla.org/ru/docs/Web/CSS/align-items)
  - [justify-content](https://developer.mozilla.org/ru/docs/Web/CSS/justify-content)

## Avatar

`src`, `height` и `width` являются динамическими, следовательно они могут быть получены через **props**.

Не забудьте добавить `border` к картинке. 

В помощь:
- [img](http://htmlbook.ru/html/img)
- [border](https://developer.mozilla.org/ru/docs/Web/CSS/border)
- [border-radius](https://developer.mozilla.org/ru/docs/Web/CSS/border-radius)

## In progress...

Остальные компоненты будут скоро добавлены.
