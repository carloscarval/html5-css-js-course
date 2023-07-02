const time = document.getElementById('time')
var millisecondsStopwatch = 0

let intervalId;

const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")

startButton.addEventListener("click", startStopwatch)
stopButton.addEventListener("click", stopStopwatch)
resetButton.addEventListener("click", resetStopwatch)

function startStopwatch(event) {
    intervalId = setInterval(updateStopwatch, 10)
    disableButton(event.target)
    enableButton(stopButton)
    enableButton(resetButton)
}

function stopStopwatch(event) {
    stop
    disableButton(event.target)
    enableButton(startButton)
    enableButton(resetButton)
    clearInterval(intervalId)
}

function resetStopwatch(event) {
    disableButton(event.target)
    enableButton(startButton)
    enableButton(stopButton)
    millisecondsStopwatch = 0
    clearInterval(intervalId)
    time.textContent = '00:00:00'
}


function updateStopwatch() {
    millisecondsStopwatch++
    time.textContent = formatTime(millisecondsStopwatch)
}


function formatTime(milliseconds) {
    const minutes = String(Math.floor(milliseconds / 6000)).padStart(2, "0")
    const seconds = String(Math.floor((milliseconds % 6000) / 100)).padStart(2, "0")
    const millisecondsRemaining = String(milliseconds % 100).padStart(2, "0")
  
    return `${minutes}:${seconds}:${millisecondsRemaining}`
}


function enableButton(button) {
    button.disabled = false
    button.classList.remove("disabled")
}

function disableButton(button) {
    button.disabled = true
    button.classList.add("disabled")
}