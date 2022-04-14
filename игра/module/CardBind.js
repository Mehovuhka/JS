import { checkEndaGame } from "./checkEndaGame.js"

let openes = []

export function checkPair(i, ToArrInArr, timerId){
    let glavDiv = document.querySelector('.glavDiv')
    if(ToArrInArr[i].style.visibility = "hidden"){
        ToArrInArr[i].style.visibility = ""
        openes.push(i)
    }
    if(openes[1] !== undefined && ToArrInArr[openes[0]].src !== ToArrInArr[openes[1]].src){
        glavDiv.style.pointerEvents = "none"
        setTimeout(()=>{
            ToArrInArr[openes[0]].style.visibility = "hidden"
            ToArrInArr[openes[1]].style.visibility = "hidden"
            openes = []
            glavDiv.style.pointerEvents = "auto"
        }, 500)
    } else if(openes[1] !== undefined && ToArrInArr[openes[0]].src === ToArrInArr[openes[1]].src){
        glavDiv.style.pointerEvents = "none"
        openes = []
        setTimeout(() => {
            glavDiv.style.pointerEvents = "auto";
          }, 15);
    }
    checkEndaGame(ToArrInArr, timerId)
}