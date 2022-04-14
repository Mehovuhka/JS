import { stopTime } from "./timer.js";

export function checkEndaGame(ToArrInArr){
let check = true;

  for (let i = 0; i < ToArrInArr.length; i++) {
    if (ToArrInArr[i].style.visibility === "hidden") {
        check = false;
      break;
    }
  }
  if (check) {
    setTimeout(() => {
      alert("Ура, Победа!");
      stopTime();
    }, 20);
  }
}