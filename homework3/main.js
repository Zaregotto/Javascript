// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let num = [228, 1488, 1337, 307, 666]
// let tape = ['okten', 'game', 'work', 'killer', 'space']
// let all = [false, true, 'okten', 228, 'homework']
// console.log(num)
// console.log(tape)
// console.log(all)



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = []
// array [0] = true
// array [1] = 'house'
// array [2] = 777
// array [3] = 'haunted'
// console.log(array)




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>Item x</div>`);
// }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>довільним текстом і індексом всередині ${i}</div>`);
// }
// let a = 0
// while (a <= 10){
//     document.write(`<div><h1>довільним текстом</h1></div>`);
//     a++;
// }
// let b = 0
// while (b <= 10){
//     document.write(`<div><h1>довільним текстом і індексом всередині.${b}</h1></div>`);
//     b++;
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (i = 0; i < array.length; i++) {
//     document.write(`<div>${array[i]}</div>`);
// }
// let  array2 = ['okten', 'work', 'game', 'like', 'era', 'hotline', 'miami', 'Sharingan', 'tearz', 'Netrunner']
// for (i = 0; i < array2.length; i++) {
//     document.write(`<div>${array2[i]}</div>`)
// }
// let array3 = [true, 'Twilight', 228, 'endless', 1488, 'shine', 'good', false, 666, 'silence']
// for (i = 0; i < array3.length; i++) {
//     document.write(`<div>${array3[i]}</div>`)
// }
// let array4 = [true, 'Twilight', 228, 'endless', 1488, 'shine', 'good', false, {}, []]
// for (i = 0; i < array4.length; i++) {
//     if (typeof array4[i] === "boolean"){
//         document.write(`<div>${array4[i]}</div>`)
//     }
// }
// let array5 = [true, 'Twilight', 228, 'endless', 1488, 'shine', 'good', false, {}, []]
// for (i = 0; i < array5.length; i++) {
//     if (typeof array5[i] === "number"){
//         document.write(`<div>${array5[i]}</div>`)
//     }
// }
// let array6 = [true, 'Twilight', 228, 'endless', 1488, 'shine', 'good', false, {}, []]
// for (i = 0; i < array6.length; i++) {
//     if (typeof array6[i] === "string"){
//         document.write(`<div>${array6[i]}</div>`)
//     }
// }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = []
// array [0] = true
// array [1] = 228
// array [2] = 'LEAVE'
// array [3] = 'Beginning'
// array [4] = 1488
// array [5] = false
// array [6] = 'fireworks'
// array [7] = 1377
// array [8] = 'white'
// array [9] = 'queen'
// for (let i = 0; i < array.length; i++) {
//     document.write(`<div>${array[2]}</div>`);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('Крок циклу: ' + 3 + '  ');
//     document.write('Крок циклу: ' + i + '  ');
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('Крок циклу: ' + 3 + '  ');
//     document.write('Крок циклу: ' + i + '  ');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log('Крок циклу: ' + 3 + '  ');
//     document.write('Крок циклу: ' + i + '  ');
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('поточний крок циклу : ' + i + ' ');
//         document.write('поточний крок циклу : ' + i + ' ');
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки Не парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('поточний крок циклу : ' + i + ' ');
//         document.write('поточний крок циклу : ' + i + ' ');
//     }
// }

