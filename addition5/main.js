// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// const email = document.getElementById("mail");
// email.addEventListener("input", (event) => {
//     const value = event.target.value.toLowerCase()
//     if (value && !value.includes('@')) {
//         return email.setCustomValidity('Не має собачки')
//     } else if (value && !value.includes('.')) {
//         return email.setCustomValidity('Не має точки')
//     } else {
//         const ending = value.substring(value.indexOf('@'))
//         const domainName = ending.slice(1, ending.indexOf('.'))
//         if (domainName.length <= 2) {
//             email.setCustomValidity('Доменне ім\'я занадто коротке')
//         }
//         else {
//             email.setCustomValidity('')
//         }
//     }
// })


// - є масив відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// coursesArray.sort(function (a, b) {
//     if (a.modules.length > b.modules.length) {
//         return 1;
//     }
//     if (a.modules.length < b.modules.length) {
//         return -1;
//     }
//     return 0;
//
// });

// document.write(`<div>`);
// for (const courseArray of coursesArray)
//     document.write(`<h1>${courseArray.title}. ${courseArray.monthDuration}. ${courseArray.hourDuration}. ${courseArray.modules}`)
//
// document.write(`</div>`);



// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symbol = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symbol)) // 5

// let symbol = 'о';
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, symbol) => {
//     let arrayOfStrings = str.split(' ');
//     let counter = 0;
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         if (arrayOfStrings[i].includes(symbol)) {
//             ++counter ;
//         }
//     }
//     return counter
// };
// console.log(count(str, symbol));

// let symbol = 'о';
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, symbol) => {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === symbol) {
//             ++counter ;
//         }
//     }
//     return counter
// };
// console.log(count(str, symbol));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// function stringToarray(str) {
//     return str.trim().split(" ")
// }
// let arr = stringToarray(str)
// document.write(arr.splice(0, 5))

