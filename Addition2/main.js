// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// a. заповнити його 50 парними числами за допомоги циклу.
// let array = []
// for (let i = 2; i <= 50; i += 2) {
//     array[i] = i;
//     document.write(`<div>${array[i]}</div>`)
// }


// b. заповнити його 50 непарними числами за допомоги циклу.
// let array = []
// for (let i = 1; i <= 50; i += 2) {
//     array[i] = i;
//     document.write(`<div>${array[i]}</div>`)
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let array = []
// for (let i = 0; i < 20; i++){
//     array.push(Math.round(Math.random() *i))
// }
// document.write(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let array = []
// for (let i = 0; i < 20; i++){
//     array[i] = Math.floor(Math.random() * (732 - 8)) + 8;
// }
// console.log(array)



// Вивести за допомогою console.log кожен третій елемен
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// for (let i = 0; i <= 10; i += 3) {
//     array[i] = i;
//     console.log(array[i])
//
// }




// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// for (let i = 0; i <= 15; i += 3){
//     if (array[i] % 2 === 0) {
//         array[i] = i;
//         console.log(array[i]);
//     }
// }



// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// let arr = [];
// for (let i = 0; i <= array.length; i += 3){
//     if (array[i] % 2 === 0){
//       arr.push(array[i])
//     }
// }
// console.log(arr);



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i <= array.length; i++){
//     if (array[i + 1] % 2 === 0)
//         console.log(array[i]);}




// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100,250,50,168,120,345,188]
// let sum = 0;
// let arr = [];
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//
//     let result = sum / array.length;
//
// console.log(result);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [100,250,50,168,120,345,188]
// let arr = []
//
// for (let i = 0; i < array.length; i++){
//     array[i] *= 5;
//     arr.push(array[i])
//
// }
// console.log(arr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let array = [true, 'Twilight', 228, 'endless', 1488, 'shine', 'good', false, {}, []]
// let arr = []
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number"){
//         arr.push(array[i])
//
//     }
// }
// console.log(arr)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (const usersWithCities of usersWithId){
//     document.write(${usersWithId})
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [100,250,50,168,120,345,188,200,8,1001]
// for (let i = 0; i <= array.length; i++){
//      if (array[i] % 2 === 0)
//          console.log(array[i]);}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array = [100,250,50,168,120,345,188,200,8,1001]
// let arr = []
// for (let i = 0; i < array.length; i++){
//     arr.push(array[i])
// }
// console.log(arr)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c']
// let word = '';
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
//
// }
// console.log(word)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c']
// let word = '';
// let i = 0;
// while (arr.length !== word.length) {
//     word += arr[i];
//     i++;
// }
// console.log(word)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c']
// let word = '';
// for (let item of arr) {
//     word += item;
// }
// console.log(word)




