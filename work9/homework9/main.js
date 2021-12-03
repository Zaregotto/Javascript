// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap','collapse','alpha','beta')
// document.body.appendChild(div)
// let h1 = document.createElement('h1')
// h1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae?';
// let wraps = document.getElementsByClassName('wrap');
// wraps[0].appendChild(h1)
// wraps[0].style.background = 'red'
// wraps[0].style.color = 'blue'
// wraps[0].style.fontSize = '20px'
// document.body.appendChild(div.cloneNode(true))
// document.body.appendChild(div.cloneNode(true))




//     - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// const array = ['Main','Products','About us','Contacts']
// array.forEach(function (item){
//     const li = document.createElement('li')
//     const text = document.createTextNode(item);
//     li.appendChild(text);
//     const ul = document.getElementsByClassName('menu')
//     for (const ulElement of ul) {
//         ulElement.appendChild(li)
//     }
// });




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const block = document.createElement('div')
//     block.innerText = coursesAndDurationArrayElement.title + ' ' + coursesAndDurationArrayElement.monthDuration
//     document.body.appendChild(block)
// }




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const divElelment = document.createElement('div');
//     const h1 = document.createElement('h1')
//     const p = document.createElement('p')
//     divElelment.setAttribute('class', 'item')
//     h1.setAttribute('class', 'heading')
//     h1.innerText = coursesAndDurationArrayElement.title
//     p.setAttribute('class','description')
//     p.innerText = coursesAndDurationArrayElement.monthDuration
//     document.body.appendChild(divElelment);
//     const heading = document.getElementsByClassName('item')
//     for (const headingElement of heading) {
//         headingElement.appendChild(h1)
//     }
//     const description = document.getElementsByClassName('item')
//     for (const descriptionElement of description) {
//         descriptionElement.appendChild(p)
//     }
// }






