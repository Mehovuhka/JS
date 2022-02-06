// 1 задание

console.log("1 задание")

let mas = []
let n = 0
let m = 100
let count = 100

for (let i = 0; i < count; i++) {
    mas.push(Math.round(Math.random() * (m - n) + n))
}
console.log(mas)

// 2 задание

console.log("2 задание")

var stroka = "Привет, Мир!"
var NewStroka = ""
for (i = stroka.length-1; i >= 0; i--) {
    NewStroka += stroka[i]
}
console.log(NewStroka)

// 3 задание

console.log("3 задание")

let numRoad = 0
let roadBombs = [false, true, false, false, true, false, false, true, false, false]
let destroy = 0

for (let bomb of roadBombs){
    numRoad++
    console.log(`Танк переместился на ${numRoad}`)
    if (bomb){
        destroy++
        if (destroy == 1){
            console.log("Танк подбит")
        }
        else if (destroy == 2){
            console.log("Танк уничтожен")
            break;
        }
        else{
            console.log("Что-то пошло не так")
        }
    }
}

if (destroy != 2){
    console.log("Задача выполнена")
} 

// 4 задание

console.log("4 задание")

let month = []
let weekday = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let daysOfMonth = []
let numberOfDay = 0
let firstDay = Math.floor(Math.random() * 7)
daysOfMonth[0] = weekday[firstDay]

for (let i = 0; i < 31; i++) {
    month[i] = i + 1
}

numberOfDay = i + 1 
console.log(`${month[0]} января, ${daysOfMonth[0]}`)

for (let i = 1; i < month.length; i++){
    if (numberOfDay === 7){
        numberOfDay = 0
    }
    daysOfMonth[i] = weekday[numberOfDay]
    numberOfDay++
    console.log(`${month[i]} января, ${daysOfMonth[i]}`)
}