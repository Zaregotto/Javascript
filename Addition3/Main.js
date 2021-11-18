// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// const func = (a, b) => {
//     if (a && !b) return a;
//
//     if (a && b) {
//         return a + b;
//     }
// }

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let a = [1,2,3,4]
// let b = [2,3,4,5]
// let sum = arraySum(a, b)
// // function arraySum (a, b) {
// //     return a.map((item,index) => item + b[index])
// //
// // }
// function arraySum (a, b) {
//     let result = []
//     for (let i = 0; i < a.length; i++){
//         result.push(a[i]+b[i])
//     }
//     return result
// }
//
// console.log(sum)


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function getKeys (arr) {
//     let result = []
//     for (const obj of arr) {
//         for (const key of Object.keys(obj)) {
//             result.push(key)
//         }
//
//     }
//     return result
// }
//
// console.log(getKeys(array))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function getValues (arr) {
//     let result = []
//     for (const obj of arr) {
//         for (const value of Object.values(obj)) {
//             result.push(value)
//         }
//
//     }
//     return result
// }
//
// console.log(getValues(array))




