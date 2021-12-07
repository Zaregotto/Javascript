// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let div1 = document.createElement('div')
// document.body.appendChild(div1)
// div1.innerText = 'форма 1'
// let div2 = document.createElement('div')
// div2.innerText = 'форма 2'
// document.body.appendChild(div2)
//
// let form = document.createElement('form')
// form.setAttribute('name', 'form')
// div1.appendChild(form)
//
// let form1 = document.createElement('form')
// form1.setAttribute('name', 'form1')
// div2.appendChild(form1)
//
// let inputOne = document.createElement('input')
// inputOne.setAttribute('name', 'inputOne')
//
// let input1 = document.createElement('input')
// input1.setAttribute('name', 'input1')
//
// let input2 = document.createElement('input')
// input2.setAttribute('name', 'input2')
//
// let input3 = document.createElement('input')
// input3.setAttribute('name', 'input3')
//
// let button = document.createElement('button')
// button.innerText = 'Кнопка'
//
// form.append(input1,inputOne)
// form1.append(input2,input3)
// document.body.appendChild(button)
//
// button.addEventListener('click', function () {
//     console.log(document.forms.form.input1.value);
//     console.log(document.forms.form.inputOne.value);
//     console.log(document.forms.form1.input2.value)
//     console.log(document.forms.form1.input3.value)
// })




// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Таблиця';
// document.body.append(inputOne, inputTwo, inputThree, button);
// button.addEventListener('click', function () {
//     let one = inputOne.value;
//     let two = inputTwo.value;
//     let three = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '3px solid blue';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '3px solid orange';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '2px solid black';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(one, two, three);
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let mat = ['лгбт', 'фемінізм', 'Робота в суботу і неділю']
// let input = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = 'Перевірка'
// document.body.append(input, button)
// button.addEventListener('click', function (){
//     let value = input.value
//     for (const mats of mat) {
//         if (mats === value) {
//             alert('матюк')
//             return
//         }
//     }
//
//     if (value) {
//         alert('Не матюк')
//     }
// })



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let mats = ['лгбт', 'фемінізм', 'Робота в суботу і неділю']
// let input = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = 'Перевірка'
// document.body.append(input, button)
// button.addEventListener('click', function () {
//     let value = input.value
//     for (const mat of mats) {
//         if (value.includes(mat)) {
//             alert('матюк')
//             return
//         }
//     }
//     if (value) {
//         alert('Не матюк')
//     }
// })



