// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => {
//     const div = document.createElement('div')
//     div.classList.add('first')
//     for (const user of users) {
//         const divAdd = document.createElement('div')
//         divAdd.classList.add('list')
//         divAdd.innerHTML = `
//         <h3>ID: ${user.id}</h3>
//         <h4>Name: ${user.name}</h4>
//         <h4>Username: ${user.username}</h4>
//         <h5>Email: ${user.email}</h5>
//         <h5>Address: ${user.address.street}</h5>
//         <h5>${user.address.suite}</h5>
//         <h5>${user.address.city}</h5>
// `;
//         const button = document.createElement('button')
//         button.innerText = 'Переглянути всі пости'
//         button.onclick = (id) => {
//             fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
//                 .then(response => response.json())
//                 .then(posts => {
//                     for (const post of posts) {
//                         if (user.id === post.userId) {
//                         }
//                         let divPosts = document.createElement('div');
//                         divPosts.classList.add('cardComments');
//                         divPosts.innerHTML = `
//                        <h3>ID: ${post.id}</h3>
//                        <h4>Title ${post.title}</h4>
//                        <h5>Body: ${post.body}</h5>`;
//                         divAdd.appendChild(divPosts)
//                     }
//                 })
//         }
//         const btn = document.createElement('button')
//         btn.innerText = 'нажміть щоб побачити коментарі'
//         btn.onclick = (id) => {
//             fetch('https://jsonplaceholder.typicode.com/posts/' + user.id + '/comments')
//                 .then(response => response.json())
//                 .then(comments => {
//                     for (const comment of comments) {
//                         if (user.id === comment.postId) {
//                         }
//                         let divComments = document.createElement('div');
//                         divComments.classList.add('cardComments');
//                         divComments.innerHTML = `
//                        <h3>ID: ${comment.id}</h3>
//                        <h4>Name: ${comment.name}</h4>
//                        <h5>Email: ${comment.email}</h5>
//                        <h6>Body: ${comment.body}</h6>`;
//                         divAdd.appendChild(divComments)
//                     }
//                 })
//         }
//         document.body.appendChild(div);
//         div.appendChild(divAdd);
//         divAdd.append(button,btn)
//     }
// })