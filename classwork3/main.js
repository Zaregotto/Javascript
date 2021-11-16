// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let  array = [2,17,13,6,22,31,45,66,100,-18]
// i = 0
// while (i < array.length) {
//     document.write(`<div>${array[i]}</div>`)
//     i++
// }

// 2. перебрати його циклом for
// for (let i=0; i < array.length; i++) {
//     document.write(`<div>${array[i]}</div>`)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i < array.length){
//     if (array[i]%2 === 1){
//         document.write(`<div>${array[i]}</div>`)
//     };
//     i++
// };

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i=0; i < array.length; i++) {
//     if (array[i]%2 === 1){
//         document.write(`<div>${array[i]}</div>`)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i < array.length) {
//     if (array[i]%2 === 0){
//         document.write(`<div>${array[i]}</div>`)
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0){
//         document.write(`<div>${array[i]}</div>`)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length; i++){
//     if (array[i] % 3 === 0){
//         array[i] = 'Okten';
//         document.write(`<div>${array[i]}</div>`)
//     }
// }

// 8. вивести масив в зворотньому порядку.
// let arrayBack = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrayBack.length-1; i >= 0; i--){
//     document.write(`<div>${array[i]}</div>`);
// };

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arrayBack = [2,17,13,6,22,31,45,66,100,-18];
// i = arrayBack.length-1
// while (i >= 0) {
//     document.write(`<div>${arrayBack[i]}</div>`)
//     i--
// }

// for (let i = arrayBack.length-1; i >= 0; i--) {
//     document.write(`<div>${arrayBack[i]}</div>`)
// }

// i = arrayBack.length-1
// while (i >= 0) {
//     if (arrayBack[i]%2 === 1){
//         document.write(`<div>${arrayBack[i]}</div>`)
//     };
//     i--
// };

// for (let i=arrayBack.length-1; i >+ 0; i--) {
//     if (arrayBack[i]%2 === 1){
//         document.write(`<div>${arrayBack[i]}</div>`)
//     }
// }

// i=arrayBack.length-1;
// while (i >= 0) {
//     if (arrayBack[i]%2 === 0){
//         document.write(`<div>${arrayBack[i]}</div>`)
//     }
//     i--
// }


// for (let i = arrayBack.length-1; i >= 0; i--){
//     if (arrayBack[i] % 2 === 0){
//         document.write(`<div>${arrayBack[i]}</div>`)
//     }
// }


// for (let i = arrayBack.length-1; i >= 0; i--){
//     if (arrayBack[i] % 3 === 0){
//         arrayBack[i] = 'Okten';
//         document.write(`<div>${arrayBack[i]}</div>`)
//     }
// }