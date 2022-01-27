// Первое задание
let password = "12344354"
password.length >= 4 && (password.includes("-") || password.includes("_")) ? console.log("Пароль надёжен") : console.log("Пароль ненадёжен")

// Второе задание
let name = "Вадим"
let surname = "Воронин"
nameNoCheck = name.substr(1) 
nameNoCheck2 = name.substr(0, 1)

surnameNoCheck = surname.substr(1) 
surnameNoCheck2 = surname.substr(0, 1)

nameCheck = nameNoCheck.toLowerCase();
nameCheck = nameNoCheck2.toUpperCase() + nameCheck;
console.log(nameCheck);

surnameCheck = surnameNoCheck.toLowerCase();
surnameCheck = surnameNoCheck2.toUpperCase() + surnameCheck;
console.log(surnameCheck);

if (name != nameCheck || surname != surnameCheck){
    console.log("Регистры букв были изменены")
}
else{
    console.log("Регистры букв не были изменены")
}