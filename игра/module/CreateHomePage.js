import { createCard } from "./CreateCard.js"

let ToArrInArr = []
let iconArr = [
    {url: "brunei", uses: 0},
    {url: "guarani", uses: 0},
    {url: "manat", uses: 0},
    {url: "shekel", uses: 0},
    {url: "som", uses: 0},
    {url: "zcash", uses: 0},
    {url: "australian-dollar", uses: 0},
    {url: "swiss-franc", uses: 0}
] 

export function CreateHomePage(){
    const glavDiv = document.querySelector('.container')
    const titleGame = document.createElement('div')
    const titleText = document.createElement('p')
    const divHaveTimer = document.createElement('div')
    const butGoGame = document.createElement('button')

    glavDiv.append(titleGame)
    glavDiv.append(divHaveTimer)

    divHaveTimer.append(butGoGame)

    titleGame.append(titleText)

    glavDiv.className = "glavDiv"
    titleText.textContent = 'Игра "Найди пару"'
    titleText.className = "titleText"
    titleGame.className = "titleGame"

    divHaveTimer.className = "divHaveTimer"

    butGoGame.className = "butGoGame button waves-effect waves-light btn-small black"
    butGoGame.textContent = "Начать игру"

    // var numberCards = [111, 222, 333, 444, 555],
    //     list = document.createElement('select'),
    //     item = document.createElement('option');
    //     list.name='myList';
    // for (var i = 0; i < arr.length; i++) {
    //     item.text = arr[i];
    //     item.value = arr[i];
    //     list.appendChild(item.cloneNode(true));
    // }   
    // document.body.appendChild(list);

    butGoGame.addEventListener('click',()=>{
        createCard(ToArrInArr, iconArr)
    })
}