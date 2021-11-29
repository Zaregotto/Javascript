// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// curentUser = {
//     "id":1,
//     "name":"Leanne Graham",
//     "username":"Bret",
//     "email":"Sincere@april.biz",
//     "address":{
//     "street":"Kulas Light",
//         "suite":"Apt. 556",
//         "city":"Gwenborough",
//         "zipcode":"92998-3874",
//         "geo":{
//         "lat":"-37.3159",
//             "lng":"81.1496"
//     }
// },
//     "phone":"1-770-736-8031 x56442",
//     "website":"hildegard.org",
//     "company":{
//     "name":"Romaguera-Crona",
//         "catchPhrase":"Multi-layered client-server neural-net",
//         "bs":"harness real-time e-markets"
// }
// }
// class User {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng,  geo, adrees, phone, website, companyName, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {street, suite, city, zipcode, geo: {lat, lng}};
//         this.phone = phone;
//         this.website = website;
//         this.company = {companyName, catchPhrase, bs};
//  }
// }
// const user = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas light','apt. 556','Gwenborough',92998-3874,-37.3159,81.1496,0,0,'1-770-736-8031 x56442','hildegard.org',0,'Multi-layered client-server neural-net',"harness real-time e-markets")
// console.log(user)


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru


// class A {
//     constructor(titleOfTag,action,accesskey,action_1,download,action_2,coords,action_3) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.accesskey = {accesskey, action_1};
//         this.alt = {download,action_2};
//         this.coords = {coords, action_3}
//     }
// }
// const a = new A ('назва тегу -A','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
//     'Атрибут accesskey', 'Активация ссылки с помощью комбинации клавиш.','Атрибут download', 'Предлагает скачать указанный по ссылке файл.','Атрибут Coords','Устанавливает координаты активной области.')
// console.log(a)


// class Div {
//     constructor(titleOfTag,action,align,action_1,title,action_2) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.align = {align, action_1}
//         this.title = {title, action_2}
//
//     }
// }
// const div = new Div('назва тегу Div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей,',
//     'атрибут Align', 'Задает выравнивание содержимого тега <div>.','атрибут title','Добавляет всплывающую подсказку к содержимому.'
//     )
// console.log(div)


// І так далі не хочу тратити час щоб всі теги записувати (надіюсь зрозумієте) ;D


