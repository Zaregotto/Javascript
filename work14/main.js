// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

let day = []

function wakeUp(first) {
    return new Promise((resolve) => {
    setTimeout(() => {
        if (first) {
            console.log('wake up')
            resolve(day)
        }
},400);
})
}

function breakfast(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('breakfast')
                resolve(day)
            }
        }, 300);
    })
}

function bathroom(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('go to bathroom')
                resolve(day)
            }
        }, 2000);
    })
}

function goWork(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('go to work')
                resolve(day)
            }
        }, 1000);
    })
}

function work(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('work')
                resolve(day)
            }
        }, 4000);
    })
}

function goHome(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('go to home')
                resolve(day)
            }
        }, 1000);
    })
}

function game(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('go to game dota 2')
                resolve(day)
            }
        }, 2000);
    })
}

function classwork(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('complete classwork')
                resolve(day)
            }
        }, 3000);
    })
}

function supper(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('supper')
                resolve(day)
            }
        }, 300);
    })
}

function goBed(first) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (first) {
                console.log('go to bed')
                resolve(day)
            }
        }, 500);
    })
}

async function myDay() {
    await wakeUp(true)
    await breakfast(true)
    await bathroom(true)
    await goWork(true)
    await work(true)
    await goHome(true)
    await game(true)
    await classwork(true)
    await supper(true)
    await goBed(true)
}
myDay()



