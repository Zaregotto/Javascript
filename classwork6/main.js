// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let normalizeName = name => {
//     name.replaceAll('..',' ')
//     name.replaceAll('___', ' ')
//     name.replaceAll('__', ' ')
// }



// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let array = (size, num) => {
//     let arr =[];
//     for (let i = 0;i < size; i++){
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr
// }
// let result = array(10, 100);
// console.log(result)
//
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// result.sort(( a, b ) =>  a - b);
// console.log(result)
// result.sort(( a, b ) =>  b - a);
// console.log(result)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let arrayFilter = (size, num) => {
//     let arr =[];
//     for (let i = 0;i < size; i++){
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr.filter(value => value % 2 === 0);
// }
// let result = arrayFilter(10, 100);
// console.log(result)


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові
// let arrayRandom = (size, num) => {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr.map(value => value.toString());
// };
// console.log(arrayRandom(10, 100));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// function sortNums (numbers, direction) {
//     let arr = []
//     if(direction === 'ascending') {
//        arr = numbers.sort((a, b) => a - b);
//     } else if (direction === 'descending'){
//         arr = numbers.sort((a, b) => b - a);
//     }
//     return arr
// }
// console.log(sortNums([1, 2, 3, 4, 5, 6, 7, 8, 9,], 'descending') );
// console.log(sortNums([1, 2, 3, 4, 5, 6, 7, 8, 9,], 'ascending'))



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration));
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));


