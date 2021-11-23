
// Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const areaRectangle = (a, b) => {
//     return a * b;
// }
// console.log(AreaRectangle(50,50))
// document.write('площа прямокутника:' + AreaRectangle(50, 50))



// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const AreaAngle = (r) => {
//
//     let radius = r ** 2;
//     let s = 3.14 * radius;
//     return s;
// }
// console.log(AreaAngle(30))
// document.write('Площа круга: ' + AreaAngle(30))



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const AreaAngle = (h, r) => {
//     let S = 2 * 3.14 * r * h;
//     return S ;
// }
//
// console.log(AreaAngle(50,50))
// document.write('Площа ' + AreaAngle(50, 50))



// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [228,1488,1337,true,false,'Hello']
// const acceptArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//     }
// }
// acceptArray(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const P = (text) => {
//     for (let i = 0; i <= 50; i++) {
//         document.write(`<p>${i} - ${text}</p>`)
//     }
// }
// P (prompt('text'))


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const listCreator = (a) => {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// listCreator ('item')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const listCreator = (size) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>item ${i}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// listCreator(3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [228, 'hello', 'go', 'v', 'dotu', true]
// const elements = (array1) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array1.length; i++){
//         document.write(`<li>${array1[i]}</li>`);
//     }
//     document.write(`<ul>`)
// }
// elements(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{id: 1, name: 'Kolya', age: 25}, {id: 2, name: 'Pavlo', age: 30}, {id: 3, name: 'Vasya', age: 50}];
// const objArray = (array1) => {
//     for (const arrrays of array1) {
//         document.write(`<div>${arrrays.id}.${arrrays.name} - ${arrrays.age}</div>`);
//     }
// }
// objArray(array)