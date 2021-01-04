(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(e,t,v){"use strict";v.r(t);var r=v(42),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"введение"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[e._v("#")]),e._v(" Введение")]),e._v(" "),v("p",[e._v("В данной статье находятся подсказки в по одному из многих способов, как можно решить задачу. Следовать ему не обязательно т.к. в программировании (и в верстке) нет одного правильного решения. Написать с первого раза код нереально, который был бы идеальным.")]),e._v(" "),v("p",[e._v("Для облегчения задачи в верстке, шаблон проект был создан в "),v("a",{attrs:{href:"https://www.figma.com/file/Cr5ltThZU1skT1uGNnxksv/training-100ballovgram-template?node-id=215%3A128",target:"_blank",rel:"noopener noreferrer"}},[e._v("figma"),v("OutboundLink")],1),e._v(". Если у вас есть аккаунт, то вы сможете просматривать информацию об объектах (цвета, шрифты, отступы, границы и пр.).")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("Для просмотра внешних отступов нажмите по объекту "),v("strong",[e._v("левой кнопкой мыши")]),e._v(" (ЛКМ), зажмите клавишу "),v("strong",[e._v("Alt")]),e._v(" и наведите на объект, расстояние до которого вы хотите узнать.")])]),e._v(" "),v("p",[e._v("Сами компоненты находятся на странице "),v("strong",[e._v("Components")]),e._v(" (вверху слева в "),v("a",{attrs:{href:"https://www.figma.com/file/Cr5ltThZU1skT1uGNnxksv/training-100ballovgram-template?node-id=215%3A128",target:"_blank",rel:"noopener noreferrer"}},[e._v("figma"),v("OutboundLink")],1),e._v(") или их можно найти ниже.")]),e._v(" "),v("iframe",{staticStyle:{border:"1px solid rgba(0, 0, 0, 0.1)"},attrs:{width:"100%",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCr5ltThZU1skT1uGNnxksv%2Ftraining-100ballovgram-template%3Fnode-id%3D215%253A128",allowfullscreen:""}}),e._v(" "),v("p",[e._v("Данные компоненты разделены на "),v("strong",[e._v("простые")]),e._v(" и "),v("strong",[e._v("продвинутые")]),e._v(".")]),e._v(" "),v("ul",[v("li",[v("em",[e._v("Простые")]),e._v(" занимаются только отображением, а нужные денамические данные (к примеру, имя кнопки) в них передаются через свойства ("),v("a",{attrs:{href:"https://ru.vuejs.org/v2/guide/components-props.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("props"),v("OutboundLink")],1),e._v(") или в как "),v("a",{attrs:{href:"https://ru.vuejs.org/v2/guide/components-slots.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("slot"),v("OutboundLink")],1),e._v(" ("),v("code",[e._v("<slot></slot>")]),e._v("). Такие компоненты могут называться с префикса "),v("strong",[e._v("V")]),e._v(" ("),v("strong",[e._v("Base")]),e._v(" или другое). Префикс добавляется для понимания, что это базовый компонент при его использовании.")]),e._v(" "),v("li",[v("em",[e._v("Продвинутые")]),e._v(" включают в себя бизнес логику, могут передавать свойства ("),v("strong",[e._v("props")]),e._v(") и контент ("),v("strong",[e._v("slot")]),e._v(") простым компонентам (и получать их).")])]),e._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),v("p",[e._v("Реализация данного проекта должна начаться с простых компонентов. После того, как они готовы, то можно перейти к продвинутым, а только затем к самой странице.")])]),e._v(" "),v("h2",{attrs:{id:"начало-разработки"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#начало-разработки"}},[e._v("#")]),e._v(" Начало разработки")]),e._v(" "),v("p",[e._v("Перейдите в "),v("a",{attrs:{href:"https://github.com/ChristmasCookie/100ballovgram",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),v("OutboundLink")],1),e._v(" репозиторий и скачайте архив -> разархивируйте -> откройте папку с проектом в своем редакторе (в VS Code: "),v("code",[e._v("File -> Open Folder")]),e._v(").\nРазработку новых компонентов можно вести в "),v("code",[e._v("serveDev.vue")]),e._v(" файле, а готовую разработку разместить в "),v("code",[e._v("App.vue")]),e._v(" (то, что должно быть на каждой странице) и "),v("code",[e._v("Direct.vue")]),e._v(" (в папке views).")]),e._v(" "),v("p",[e._v("После этого необходимо установить зависимости и запустить dev сервер с горячей перезагрузкой (при сохранении изменений в проекте "),v("code",[e._v("Ctrl+S")]),e._v("). Для этого:")]),e._v(" "),v("ul",[v("li",[e._v("откройте консоль (в VS Code "),v("code",[e._v("Ctrl+`")]),e._v("(Ctrl + тильда (клавиша "),v("code",[e._v("Ё")]),e._v(")) или "),v("code",[e._v("F1 -> Create New Integrated Terminal")]),e._v(").")]),e._v(" "),v("li",[e._v("введите "),v("code",[e._v("npm i")]),e._v(" (npm install). Этой командой установятся "),v("strong",[e._v("npm")]),e._v(" зависимости ("),v("code",[e._v("dependencies")]),e._v(" и "),v("code",[e._v("devDependencies")]),e._v(" из файла "),v("code",[e._v("package.json")]),e._v(").")]),e._v(" "),v("li",[e._v("введите команду "),v("code",[e._v("npm run dev")]),e._v(". Данная команда запустит "),v("code",[e._v("dev")]),e._v(" скрипт, который указан в "),v("code",[e._v("package.json -> scripts")]),e._v(" секции. После ее выполнения запустится dev сервер с горячей перезагрузкой.")])]),e._v(" "),v("p",[e._v("Начальный компонент "),v("code",[e._v("VContactListHeading")]),e._v(" уже содержится в этом проекте. Его можно испрользовать в качестве образца.")]),e._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),v("p",[e._v("При импорте компонентов в конец пути добавляется "),v("code",[e._v("?inline")]),e._v(", если это "),v("strong",[e._v("SVG")]),e._v(". К примеру "),v("code",[e._v("@/assets/icons/edit.svg?inline")]),e._v(" Для других компонентов "),v("code",[e._v("?inline")]),e._v(" добавлять не обязательно.")])]),e._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),v("p",[e._v("Необходимые изображения "),v("strong",[e._v("JPG")]),e._v(" лежат в "),v("code",[e._v("public -> images")]),e._v(" директории. Для их импорта можно использовать абсолютный путь от "),v("code",[e._v("public")]),e._v(" директории (от файла "),v("code",[e._v("index.html")]),e._v("). К примеру "),v("code",[e._v('<img src="/images/avatar1.jpg">')])])]),e._v(" "),v("h2",{attrs:{id:"direct-view"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#direct-view"}},[e._v("#")]),e._v(" Direct View")]),e._v(" "),v("p",[e._v("На данной странице вам необходимо вам необходимо будет установить родителю, "),v("code",[e._v("Chat Contact")]),e._v(" и "),v("code",[e._v("Chat")]),e._v(" компонентов, свойство "),v("code",[e._v("flex-wrap")]),e._v(" для добавления возможности переноса блоков.")]),e._v(" "),v("p",[e._v("В помощь:")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("flexbox"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap",target:"_blank",rel:"noopener noreferrer"}},[e._v("flex-wrap"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);