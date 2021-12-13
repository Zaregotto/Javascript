// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then(posts => {
     const div = document.createElement('div');
     div.classList.add('first');
     for (const post of posts) {
        const divCard = document.createElement('div');
        divCard.classList.add('list');
        divCard.innerHTML = `
            <h3>ID: ${post.id}</h3>
            <h4>Title: ${post.title}</h4>
            <h5>Body: ${post.body}</h5>`;
     const btn = document.createElement('button')
     btn.innerText = 'нажміть щоб побачити коментарі'
     btn.onclick = (id) => {
         fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
             .then(response => response.json())
             .then(comments => {
                 for (const comment of comments) {
                     if (post.id === comment.postId) {
                     }
                     let divComments = document.createElement('div');
                     divComments.classList.add('cardComments');
                     divComments.innerHTML = `
                       <h3>ID: ${comment.id}</h3>
                       <h4>Name: ${comment.name}</h4>
                       <h5>Email: ${comment.email}</h5>
                       <h6>Body: ${comment.body}</h6>`;
                     divCard.appendChild(divComments)
                 }
             })
     }
     document.body.appendChild(div)
         div.appendChild(divCard)
         divCard.appendChild(btn)
     }
 })