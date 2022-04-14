import { checkPair } from "./CardBind.js"
import { timer } from "./timer.js"

let workTime = false

export function createCard(ToArrInArr, iconArr){
    let timerId
    let time
    const cardDiv = document.createElement('div')
    let glavDiv = document.querySelector('.glavDiv')
    glavDiv.append(cardDiv)
    cardDiv.className = "cardDiv"

    const timers = document.createElement('div')
    let divHaveTimer = document.querySelector('.divHaveTimer')
    divHaveTimer.append(timers)
    timers.style.display = "block"
    timers.className = "timers"
    
    for(let i = 0; i < iconArr.length*2; i++) {
        let card = document.createElement('div')
        ToArrInArr[i] = document.createElement('img');
        card.className = "card";
        let icon = Math.floor(Math.random() * iconArr.length)
        if(iconArr[icon].uses != 2){
            ToArrInArr[i].src = `icons/${iconArr[icon].url}.png`
            iconArr[icon].uses++ 
            ToArrInArr[i].style.visibility = "hidden"
            card.append(ToArrInArr[i])
            cardDiv.appendChild(card)
            
            card.addEventListener("click",()=>{
                if(!workTime){
                    time = timer(ToArrInArr)
                    workTime = true
                }
                checkPair(i, ToArrInArr, timerId)
            })
        } 
        else{
            i -= 1
        }  
    }
}