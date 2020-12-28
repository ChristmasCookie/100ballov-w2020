(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,e,v){"use strict";v.r(e);var _=v(42),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"введение"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[t._v("#")]),t._v(" Введение")]),t._v(" "),v("p",[t._v("В данной статье находятся подсказки в по одному из многих способов, как можно решить задачу. Следовать ему не обязательно т.к. в программировании (и в верстке) нет одного правильного решения. Написать с первого раза код нереально, который был бы идеальным.")]),t._v(" "),v("p",[t._v("Для облегчения задачи в верстке, шаблон проект был создан в "),v("a",{attrs:{href:"https://www.figma.com/file/Cr5ltThZU1skT1uGNnxksv/training-100ballovgram-template?node-id=215%3A128",target:"_blank",rel:"noopener noreferrer"}},[t._v("figma"),v("OutboundLink")],1),t._v(". Если у вас есть аккаунт, то вы сможете просматривать информацию об объектах (цвета, шрифты, отступы, границы и пр.).")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("Для просмотра внешних отступов нажмите по объекту "),v("strong",[t._v("левой кнопкой мыши")]),t._v(" (ЛКМ), зажмите клавишу "),v("strong",[t._v("Alt")]),t._v(" и наведите на объект, расстояние до которого вы хотите узнать.")])]),t._v(" "),v("p",[t._v("Сами компоненты находятся на странице "),v("strong",[t._v("Components")]),t._v(" (вверху слева в "),v("a",{attrs:{href:"https://www.figma.com/file/Cr5ltThZU1skT1uGNnxksv/training-100ballovgram-template?node-id=215%3A128",target:"_blank",rel:"noopener noreferrer"}},[t._v("figma"),v("OutboundLink")],1),t._v(") или их можно найти ниже.")]),t._v(" "),v("iframe",{staticStyle:{border:"1px solid rgba(0, 0, 0, 0.1)"},attrs:{width:"100%",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCr5ltThZU1skT1uGNnxksv%2Ftraining-100ballovgram-template%3Fnode-id%3D215%253A128",allowfullscreen:""}}),t._v(" "),v("p",[t._v("Данные компоненты разделены на "),v("strong",[t._v("простые")]),t._v(" и "),v("strong",[t._v("продвинутые")]),t._v(".")]),t._v(" "),v("ul",[v("li",[v("em",[t._v("Простые")]),t._v(" занимаются только отображением, а нужные денамические данные (к примеру, имя кнопки) в них передаются через свойства ("),v("a",{attrs:{href:"https://ru.vuejs.org/v2/guide/components-props.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("props"),v("OutboundLink")],1),t._v(") или в как "),v("a",{attrs:{href:"https://ru.vuejs.org/v2/guide/components-slots.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot"),v("OutboundLink")],1),t._v(" ("),v("code",[t._v("<slot></slot>")]),t._v("). Такие компоненты могут называться с префикса "),v("strong",[t._v("V")]),t._v(" ("),v("strong",[t._v("Base")]),t._v(" или другое). Префикс добавляется для понимания, что это базовый компонент при его использовании.")]),t._v(" "),v("li",[v("em",[t._v("Продвинутые")]),t._v(" включают в себя бизнес логику, могут устанавливать свойства простым компонентам и получать, как и простые, некоторые данные через "),v("strong",[t._v("props")]),t._v(" или "),v("strong",[t._v("slot")]),t._v(".")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("Реализация данного проекта должна начаться с простых компонентов. После того, как они готовы, то можно перейти к продвинутым, а только затем к самой странице.")])]),t._v(" "),v("h2",{attrs:{id:"начало-разработки"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#начало-разработки"}},[t._v("#")]),t._v(" Начало разработки")]),t._v(" "),v("p",[t._v("Перейдите в "),v("a",{attrs:{href:"https://github.com/ChristmasCookie/100ballovgram",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),v("OutboundLink")],1),t._v(" репозиторий и скачайте архив -> разархивируйте -> откройте папку с проектом в своем редакторе (в VS Code: "),v("code",[t._v("File -> Open Folder")]),t._v(").\nРазработку новых компонентов можно вести в "),v("code",[t._v("serveDev.vue")]),t._v(" файле, а готовую разработку разместить в "),v("code",[t._v("App.vue")]),t._v(" (то, что должно быть на каждой странице) и "),v("code",[t._v("Direct.vue")]),t._v(" (в папке views).")]),t._v(" "),v("p",[t._v("После этого необходимо установить зависимости и запустить dev сервер с горячей перезагрузкой (при сохранении изменений в проекте "),v("code",[t._v("Ctrl+S")]),t._v("). Для этого:")]),t._v(" "),v("ul",[v("li",[t._v("откройте консоль (в VS Code "),v("code",[t._v("Ctrl+`")]),t._v("(Ctrl + тильда (клавиша "),v("code",[t._v("Ё")]),t._v(")) или "),v("code",[t._v("F1 -> Create New Integrated Terminal")]),t._v(").")]),t._v(" "),v("li",[t._v("введите "),v("code",[t._v("npm i")]),t._v(" (npm install). Этой командой установятся "),v("strong",[t._v("npm")]),t._v(" зависимости ("),v("code",[t._v("dependencies")]),t._v(" и "),v("code",[t._v("devDependencies")]),t._v(" из файла "),v("code",[t._v("package.json")]),t._v(").")]),t._v(" "),v("li",[t._v("введите команду "),v("code",[t._v("npm run dev")]),t._v(". Данная команда запустит "),v("code",[t._v("dev")]),t._v(" скрипт, который указан в "),v("code",[t._v("package.json -> scripts")]),t._v(" секции. После ее выполнения запустится dev сервер с горячей перезагрузкой.")])]),t._v(" "),v("p",[t._v("Начальный компонент "),v("code",[t._v("VContactListHeading")]),t._v(" уже содержится в этом проекте. Его можно испрользовать в качестве образца.")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("При импорте компонентов в конец пути добавляется "),v("code",[t._v("?inline")]),t._v(", если это "),v("strong",[t._v("SVG")]),t._v(". К примеру "),v("code",[t._v("@/assets/icons/edit.svg?inline")]),t._v(" Для других компонентов это добавлять не обязательно.")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("Необходимые изображения "),v("strong",[t._v("JPG")]),t._v(" лежат в "),v("code",[t._v("public -> images")]),t._v(" директории. Для их импорта можно использовать абсолютный путь от "),v("code",[t._v("public")]),t._v(" директории (от файла "),v("code",[t._v("index.html")]),t._v("). К примеру "),v("code",[t._v('<img src="/images/avatar1.jpg">')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);