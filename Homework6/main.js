// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello word'
// console.log(str.length)
//
// let str1 = 'lorem ipsum'
// console.log(str1.length)
//
// let  str2 = 'javascript is cool'
// console.log(str2.length)




// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase)

// let str1 = 'lorem ipsum'
// let toUpperCaseTwo = str1.toUpperCase()
// console.log(toUpperCaseTwo)

// let str2 = 'javascript is cool'
// let toUpperCaseThree = str2.toUpperCase()
// console.log(toUpperCaseThree)




// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD'
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase)
//
// let str1 = 'LOREM IPSUM'
// let toLowerCaseTwo = str1.toLowerCase()
// console.log(toLowerCaseTwo)
//
// let str2 = 'JAVASCRIPT IS COOL'
// let toLowerCaseThree = str2.toLowerCase()
// console.log(toLowerCaseThree)



// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = '      dirty string   '
// console.log(str.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let stringToarray = (str) => {
//     return str.split(' ')
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr)



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 6));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let insert_dash = (str) => {
//     let toUpperCase = str.split(' ').join('-').toUpperCase();
//     return toUpperCase;
// }
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str));
// document.write(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let insert_dash = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
//
// }
// console.log(insert_dash('hello'));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
//      };
//     console.log(capitalize('okten hi you are welcome'))