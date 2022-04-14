let timerId
let time = 60

export function timer() {
  if (!timerId) {
    let timers = document.querySelector(".timers")
    timer.textContent = `Оставшееся время: ${time}`
    timerId = setInterval(() => {
      time--
      timers.textContent = `Оставшееся время: ${time}`
      if (time === 0) {
        clearTimeout(timerId);
        alert("Ты проиграл")
      }
    }, 1500);
  }
  return time
}

export function stopTime() {
  clearTimeout(timerId)
  time = 60
  let timers = document.querySelector(".timers")
  timers.textContent = "Оставшееся время: 60"
}