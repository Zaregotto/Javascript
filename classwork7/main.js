// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, producer, year, maxSpeed,engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна
//         ${this.engineCapacity}`)}
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed;
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
// }
// let addCar = new car('nissan Gtr', 'Japan', 2008, 320, 3.8 )
// console.log(addCar)
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(330);
// addCar.drive();
// addCar.changeYear(2010);
// addCar.addDriver('Beaf')
// console.log(addCar)



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class carClass{
//     constructor(model, producer, year, maxSpeed,engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
// }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info () {
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна
//         ${this.engineCapacity}`)}
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue
//     }
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
// let addCars = new carClass('nissan Gtr', 'Japan', 2008, 320, 3.8 )
// console.log(addCars)
// addCars.drive();
// addCars.info();
// addCars.increaseMaxSpeed(330);
// addCars.drive();
// addCars.changeYear(2010);
// addCars.addDriver('Beaf')
// console.log(addCars)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class cinderalla {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// let  cinderallas = [
//     new cinderalla('Akira', 19, 37),
//     new cinderalla('Byanka', 19, 38),
//     new cinderalla('izumi', 18, 37),
//     new cinderalla('Jina', 20, 45),
//     new cinderalla('Kayao', 17, 36),
//     new cinderalla('Mari', 18, 39),
//     new cinderalla('miho', 21, 40),
//     new cinderalla('Reiko', 21, 39),
//     new cinderalla('Hitomi', 20, 40),
//     new cinderalla('Shayori', 19, 46),
//     new cinderalla('Yuri', 21, 39)
// ];
// console.log(cinderallas)
//
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class prince {
//     constructor(name, age, shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes
//     }
// }
// let princs = [
//     new prince('Oleg', 22, 44)
//     ];
// console.log(princs)


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// const array = (cinderallas, princs) => {
//     for (const item of cinderallas) {
//         if (item.footsize === princs.shoes) {
//             return `Потрібна попелюшка: ${item.name}`
//         }
//     }
// };
//
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// const arr = cinderallas.find((item) => item.footsize === princs.shoes);




