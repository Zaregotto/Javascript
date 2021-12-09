// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let inputs = document.getElementsByTagName('input');
// let name = inputs[0];
// let age = inputs[1];
// let btn = document.getElementsByTagName('button')[0];
// btn.onclick = function () {
//     let nameValue = name.value;
//     let ageValue = age.value;
//     localStorage.setItem('users', JSON.stringify({name : nameValue, age : ageValue}));
// };




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let car = document.forms.form1;

car.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value
    let carForm = {model : model, type : type, volume: volume};
    let cars = localStorage.getItem('cars');
    if (!cars) {
        cars = [];
        cars.push(carForm);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
    else {
        cars.push(carForm);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
}