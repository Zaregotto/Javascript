// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
//
//
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let UserArray = [
//     new User(18, 'Kolya', 'Nikolai', 'Kolya@gmail.com', '8-800-555-35-35'),
//     new User(19, 'Sraka', 'Motika', 'Motika@mail.com', '8-800-555-35-35'),
//     new User(20, 'Vasya', 'Nina', 'ddf@gmail.com', '8-800-555-35-35'),
//     new User(21, 'BTS', 'Govno', 'BTS@rambler.ru', '8-800-555-35-35'),
//     new User(22, 'GO', 'Vdota', 'Dota@yandex.ru', '8-800-555-35-35'),
//     new User(23, 'Ya', 'Hochu', 'Piva@gmail.com', '8-800-555-35-35'),
//     new User(24, 'Angela', 'Rok', 'Rok@gmail.com', '8-800-555-35-35'),
//     new User(24, 'Hobit', 'Milhaus', 'Hobit@gmail.com', '8-800-555-35-35'),
//     new User(24, 'Ragnarok', 'Gendalf', 'Gendalf@gmail.com', '8-800-555-35-35'),
//     new User(24, 'Silver', 'White', 'White@gmail.com', '8-800-555-35-35'),
// ];



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsers = UserArray.filter(value => value.id % 2 === 0)
// console.log(filterUsers)




// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userShort = UserArray.sort((a,b) => b.id - a.id);
// console.log(userShort)



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, email, phone, order) {
//
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }



// створити пустий масив, наповнити його 10 об'єктами Client

// let clientArray = [
//     new Client(1, 'Kolya', 'kolya@gmail.com', '093-228-1488-1337', ['apple', 'juice'] ),
//     new Client(2, 'Nana', 'nana@gmail.com', '093-228-1488-1337', ['milk', 'papaya'] ),
//     new Client(3, 'Dmitro', 'Dmitro@gmail.com', '093-228-1488-1337', ['beer', 'fish'] ),
//     new Client(4, 'Marta', 'Marta@gmail.com', '093-228-1488-1337', ['vodka', 'oil'] ),
//     new Client(5, 'Ira', 'Ira@gmail.com', '093-228-1488-1337', ['fig', 'pear'] ),
//     new Client(6, 'dog', 'dog@gmail.com', '093-228-1488-1337', ['lime', 'lemon'] ),
//     new Client(7, 'cat', 'cat@gmail.com', '093-228-1488-1337', ['pomegranate', 'quince'] ),
//     new Client(8, 'Vasya', 'Vasya@gmail.com', '093-228-1488-1337', ['milkShake', 'watermelon'] ),
//     new Client(9, 'Nika', 'Nika@gmail.com', '093-228-1488-1337', ['peach', 'dogberry'] ),
//     new Client(10, 'Gendalf', 'Gendalf@gmail.com', '093-228-1488-1337', ['viski', 'Coca-cola'] ),
// ]



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let clientsSort = clientArray.sort((a, b) => b.order.length - a.order.length)


