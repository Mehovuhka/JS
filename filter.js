let emailCheck = ["user1@mail.ru", "user2@gmail.com", "dedisaid@mail.ru", "user12345@mail.com", "3213214@rambler.ru", "e131ea@yandex.com", "UsEr!283@mail.ru"]
let emailBlackList = ["dedisaid@mail.ru", "user12345@mail.com", "UsEr!283@mail.ru"]
let indexOfBlackList = []
let emailChecked = []

emailChecked = filter(emailCheck, emailBlackList)

function filter(emailCheck, emailBlackList){
    let index2 = 0

    for (let index in emailBlackList){
        indexOfBlackList.push(emailCheck.indexOf(emailBlackList[index]))
    }
    for (index = 0; index < emailCheck.length; index++){
        if (indexOfBlackList.includes(index)){
            continue
        }
        else{
            emailChecked[index2] = emailCheck[index]
            index2++
        }
    }
    return emailChecked
}
console.log(emailChecked)