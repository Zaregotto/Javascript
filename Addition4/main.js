// - Дано натуральное число n. Выведите все числа от 1 до n.
// const arr = (n) => {
//     if (n == 1) {
//         return "1";
//     }
//     return  arr(n - 1) + "" + n;
// }
// console.log(arr(20));

// (:
// function recursion(b, n) {
//     console.log(b);
//     b++
//     if (b > n) {
//         return;
//     }
//     recursion(b);
// }
// recursion(1,)




// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//  const arr = (a,b) => {
//     if (a < b) {
//         for (let i = a; i < b + 1; i++) {
//             console.log(i)
//         }
//         }
//     else {
//         for (let i = a; i > b - 1;i--){
//             console.log(i)
//         }
//      }
//     }
// console.log(arr(10,20))

// const arr = (a,b) => {
//     if (a <= b) {
//         console.log(a)
//         if (a !== b) {
//             arr(a+1, b)
//         }
//     }
//     else {
//         console.log(a)
//         arr(a-1, b)
//     }
// }
//
// arr(10,20)




// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array = (a,b) => {
//     for (let i=0; i <= a.length; i++){
//
//         if (i === b) {
//             let index = a[i]
//             a[i] = a[i+1]
//             a[i+1] = index
//         }
//         console.log(a)
//     }
//     return
// }
// array([9,8,0,4], 0)



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100

// let array = [0, 2, 3,4, 10, 0, 11, 0, 300, 0, 228];
// array.sort(function(a, b) {
//     if(a==0 && b!=0)
//         return 1;
//     else if(b==0 && a!=0)
//         return -1;
//     else
//         return 0;
// });
// console.log(array)




