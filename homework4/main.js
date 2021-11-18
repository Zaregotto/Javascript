// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function AreaRectangle(a, b) {
//     let s = a * b;
//     return s;
// }
// console.log(AreaRectangle(50,50))
// document.write('площа прямокутника:' + AreaRectangle(50, 50))



// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function AreaAngle(r) {
//
//     let radius = r ** 2;
//     let s = 3.14 * radius;
//     return s;
// }
// console.log(AreaAngle(30))
// document.write('Площа круга: ' + AreaAngle(30))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function AreaAngle(h, r) {
//     let S = 2 * 3.14 * r * h;
//     return S ;
// }
//
// console.log(AreaAngle(50,50))
// document.write('Площа ' + AreaAngle(50, 50))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [228,1488,1337,true,false,'Hello']
// function acceptArray (array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//     }
// }
// acceptArray(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function P (text) {
//     for (let i = 0; i <= 50; i++) {
//         document.write(`<p>${i} - ${text}</p>`)
//     }
// }
// P (prompt('text'))


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listCreator(a) {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// listCreator ('item')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listCreator(size) {
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
// function elements (array1) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array1.length; i++){
//         document.write(`<li>${array1[i]}</li>`);
//     }
//     document.write(`<ul>`)
// }
// elements(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{id: 1, name: 'Kolya', age: 25}, {id: 2, name: 'Pavlo', age: 30}, {id: 3, name: 'Vasya', age: 50}];
// function objArray(array1) {
//     for (const arrrays of array1) {
//         document.write(`<div>${arrrays.id}.${arrrays.name} - ${arrrays.age}</div>`);
//     }
// }
// objArray(array)