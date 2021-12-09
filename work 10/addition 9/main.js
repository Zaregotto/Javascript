// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// const div = document.createElement('div')
// div.classList.add('element')
// div.id = 'idList'
// div.style.width = '100px'
// div.style.height = '100px'
//div.style.backgroundColor = 'black'
// document.body.appendChild(div)
//
// document.addEventListener('click', event => {
//     const element = event.target
//     console.log(`tagName: ${element.tagName}, classList: ${element.classList.value}, idList: ${element.id}, size: ${element.offsetHeight}*${element.offsetWidth}`)
// })


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// const div = document.createElement('div')
// div.classList.add('element')
// div.id = 'idList'
// div.style.width = '100px'
// div.style.height = '100px'
// div.style.backgroundColor = 'black'
// document.body.appendChild(div)
//
// document.addEventListener('click', event => {
//     const element = event.target
//     alert(`tagName: ${element.tagName}, classList: ${element.classList.value}, idList: ${element.id}, size: ${element.offsetHeight}*${element.offsetWidth}`)
// })



// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// const form = document.createElement('form')
// form.id = 'f1'
// const input1 = document.createElement('input')
// input1.setAttribute('type', 'checkbox')
// input1.setAttribute('name', 'status')
// const input2 = document.createElement('input')
// input2.setAttribute('type','number')
// input2.setAttribute('name', 'age')
// const input = document.createElement('input')
// input.setAttribute('type', 'text')
// input.setAttribute('name', 'city')
// const button = document.createElement('button')
// button.innerText = 'фільтр'
// document.body.appendChild(form)
// document.getElementById('f1').append(input1, input2, input, button)
// const containerId = "container"
// let f1 = document.forms.f1;
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let status = this.status.checked;
//     let age = this.age.value || 0;
//     let city = this.city.value || '';
//     const container = document.getElementById(containerId)
//     if (container) {
//         container.remove()
//     }
//     else {
//         const div = document.createElement('div')
//         div.id = containerId
//         document.body.appendChild(div)
//         if (status) {
//             const array = usersWithAddress.filter(user => status ? !user.status : true)
//                 .filter(user => age ? user.age >= age : true)
//                 .filter(user => city ? user.address.city.toLowerCase() === city.toLowerCase() : true)
//             array.forEach(user => {
//                 const li = document.createElement('li')
//                 li.innerHTML = `${user.status} - ${user.age} - ${user.address.city}`
//                 div.appendChild(li)
//             })
//         }
//     }
//     console.log({status, age,});
//     console.log(city)
// };



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне





// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let i = 1;
// const inner = document.getElementById('carousel')
// for(let li of inner.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }
//
// let width = 130;
// let count = 3;
//
// let list = inner.querySelector('ul');
// let listElems = inner.querySelectorAll('li');
//
// let position = 0;
//
// inner.querySelector('.prev').onclick = function() {
//     position += width * count;
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };
//
// inner.querySelector('.next').onclick = function() {
//     position -= width * count;
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };


// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// const ul = document.createElement('ul')
// ul.id = 'text'
// document.body.appendChild(ul)
// const li = document.createElement('li')
// li.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio dolore dolorem doloremque doloribus ea esse, et id illum magnam, natus nesciunt, nihil odio officiis praesentium quasi quod rerum totam?'
// document.getElementById('text').appendChild(li)
//
// let elLi = document.querySelectorAll('li');
// for (let i = 0; i < elLi.length; i++){
//     elLi[i].onmouseover = function(){
//         this.classList.toggle("stl");
//     }
// }




