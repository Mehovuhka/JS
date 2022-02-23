let arrayOp = []
for(let index = 0; index < 5; index++){
    arrayOp[index] = {
        value: `co${index + 1}`,
        label: `Вариант ${index + 1}`,
    }
}
let selected = document.createElement("select")
let selReady = initOpt(arrayOp)
document.body.append(selReady)
function initOpt(arrayOp){
    opArr = []
    for (let index in arrayOp){
        opArr[index] = document.createElement("option")
    } 
    console.log(opArr)
    for (let index in opArr){
        opArr[index].textContent = arrayOp[index].label
        opArr[index].value = arrayOp[index].value
        selected.append(opArr[index])
    }
    return selected
}