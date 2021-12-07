// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const div = document.createElement('div')
// div.id = 'text';
// document.body.appendChild(div)
// const p = document.createElement('p')
// div.appendChild(p)
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate esse ex in incidunt ipsa ipsum laborum minus molestias nemo non possimus quae quidem quod, reiciendis, rem sed sit suscipit?'
// const clickText = document.getElementById('text')
// clickText.onclick = function () {
//     clickText.style.display = 'none'
// }



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const input = document.createElement('input')
// input.id = 'button'
// input.setAttribute('type', 'button')
// input.setAttribute('value', 'Нажміть на текст')
// document.body.appendChild(input)
// clickButton = document.getElementById('button')
// clickButton.onclick = function () {
//     clickButton.hidden = true;
// }



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const input = document.createElement('input')
// input.id = 'age'
// input.setAttribute('type', 'text')
// document.body.appendChild(input)
// const input2 = document.createElement('input')
// input2.id = 'button'
// input2.setAttribute('type', 'button')
// input2.setAttribute('value', 'перевірити')
// document.body.appendChild(input2)
//
// document.getElementById('button').onclick = function () {
//     const verifyAge = document.getElementById('age').value;
//     if (+verifyAge < 18) {
//         alert('малий вік')
//     }
//     else if (+verifyAge >= 18) {
//         alert('Вітаємо')
//     }
//     else {
//        alert('Ви ввели неправильно')
//     }
// }



// - Создайте меню, которое раскрывается/сворачивается при клике

// let div = document.createElement('div')
// div.classList.add('menu')
// div.style.cursor = 'pointer'
// document.body.appendChild(div)
// for (let i = 1; i <= 1; i++) {
//     let h2 = document.createElement('h2')
//     h2.classList.add('list')
//     h2.innerText = 'список'
//
//     let ul = document.createElement('ul')
//     div.appendChild(h2)
//     h2.appendChild(ul)
//
// for (let i = 1; i <= 10; i++) {
//     let li = document.createElement('li')
//     li.innerText = 'список' + i;
//
//     ul.appendChild(li)
// }
// }
//
// const elementMenu = document.querySelector('.menu');
// const titleElement = elementMenu.querySelector('.list');
//
// titleElement.onclick = function () {
//     elementMenu.classList.toggle('hidden');
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'воздушная ядерка', body: 'в тропосфере'},
//     {title: 'висотна ядерка', body: 'в верхних слоях атмосферы и в ближнем околопланетном космосе'},
//     {title: 'космічна ядерка', body: 'космический — в дальнем околопланетном космосе и далее'},
//     {title: 'наземный взрыв', body: 'у самой земли'},
//     {title: 'подземный взрыв', body: 'под поверхностью земли'},
//     {title: 'надводный', body: 'у самой поверхности воды'},
//     {title: 'подводный', body: 'под водой'}
//     ]
//
// let div = document.createElement('div')
// document.body.appendChild(div)
// for (const divElement of comments) {
//     let divE = document.createElement('div')
//     let h2 = document.createElement('h2')
//     let p = document.createElement('p')
//     let button = document.createElement('button')
//     let hr = document.createElement('hr');
//
//     h2.innerText = divElement.title
//     p.innerText = divElement.body
//     button.innerText = 'закрити'
//
//     button.onclick = function ()
//     {
//     p.style.display = 'none'
//     }
//     divE.append(h2, p, button)
//     div.append(divE, hr)
// }


