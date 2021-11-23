// Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const Number = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1)
//         console.log(num1)
//     }
//     else if (num2 > num3 && num2 > num1) {
//         document.write(num2)
//         console.log(num2)
//     }
//     else {
//         document.write(num3)
//         console.log(num3)
//     }
// }
// Number(1, 2, 3);



// const Number = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1)
//         console.log(num1)
//     }
//     else if (num2 < num3 && num2 < num1) {
//         document.write(num2)
//         console.log(num2)
//     }
//     else {
//         document.write(num3)
//         console.log(num3)
//     }
// }
// Number(1, 2, 3);



// - створити функцію яка повертає найбільше число з масиву
// const maxFromArray = (numbers) => {
//     let max = numbers[0]
//     for (const number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max;
// }



// - створити функцію яка повертає найменьше число з масиву
// const maxFromArray = (numbers) => {
//     let min = numbers[0]
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let SumArray = [1, 2, 10];
// const SumArr = (nums) => {
//     let result = 0;
//     for (const num of nums) {
//         result = num + result;
//     }
//     return result;
// }
// document.write(SumArr(SumArray))



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let SumArray = [1, 2, 10];
// const avgArr = (nums) => {
//     let result = 0
//     for (const num of nums ) {
//         result = num + result
//     }
//     return result / nums.length
// }
// document.write(avgArr(SumArray))



//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const maxminArray = (nums) => {
//     let max = nums[0];
//     let min = nums[0];
//     for (const num of nums) {
//         if (num > max) {
//             max = num;
//         }
//
//         if (num < min) {
//             min = num
//         }
//     }
//     console.log("max", max)
//     return min;
// }


//- створити функцію яка заповнює масив рандомними числами
// const random = (arr) => {
//     let array = []
//     for (let i = 0; i < arr; i++) {
//         array.push(Math.floor(Math.random() * 100))
//     }
//     return array;
// }
// document.write(random(20))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const random = (arr,limit) => {
//     let array = []
//     for (let i = 0; i < arr; i++) {
//         array.push(Math.round(Math.random() * limit))
//     }
//     return array;
// }
// document.write(random(20,100))



//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const reverse = (arr) => {
//     let newArr = [];
//     for (let i = newArr.length - 1, ri = 0; i >= 0; i--, ri++){
//        newArr[ri] = newArr[i];
//     }
//
//
//     return newArr;
// }