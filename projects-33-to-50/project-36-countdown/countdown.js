const timeInput = document.getElementById('inputTime')

let time = 0
let intervalId

const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")

startButton.addEventListener("click", startCountdown)
stopButton.addEventListener("click", stopCountdown)
resetButton.addEventListener("click", resetCountdown)

function startCountdown(event) {  
    time = time == 0 ? timeInput.value * 60 : time
    timeInput.value = formatTime(time)

    intervalId = setInterval(updateCountdown, 1000)
    disableButton(event.target)
    enableButton(stopButton)
    enableButton(resetButton)
}

function stopCountdown(event) {
    disableButton(event.target)
    enableButton(startButton)
    enableButton(resetButton)
    clearInterval(intervalId)
}

function resetCountdown(event) {
    disableButton(event.target)
    enableButton(startButton)
    enableButton(stopButton)
    time = 0
    timeInput.value = 0
    clearInterval(intervalId)
}
function updateCountdown() {
    if(time > 0) {
        time--
        timeInput.value = formatTime(time)
        if (time == 0) {
            let firework = document.getElementById("firework")
            firework.style.display = "block";

            setTimeout(() => {
                firework.style.transform = "translate(" + 0 + "px, " + 280 + "px) scale(" + 5 + ")"
            }, 10);
            clearInterval(intervalId)
            enableButton(startButton)
        }
    }
}


function formatTime(segundos) {
    const minutes = String(Math.floor(segundos / 60)).padStart(2, "0");
    const seconds = String(Math.floor((segundos % 60))).padStart(2, "0");
  
    return `${minutes}:${seconds}`;
  }


function enableButton(button) {
    button.disabled = false
    button.classList.remove("disabled")
}

function disableButton(button) {
    button.disabled = true
    button.classList.add("disabled")
}