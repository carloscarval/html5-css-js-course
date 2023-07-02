var chosenNumber = Math.floor(Math.random() * 100)
var tries = 0


function checkNumber() {
    var number = document.getElementById("guessInput").value
    var message =  document.getElementById("result")
    if (number == chosenNumber) {
        message.innerHTML = "Congratulations! You've found out the number in " + tries + " attempts!"
    } else if(number > chosenNumber) {
        message.innerHTML = "Too high, try again!"
    } else {
        message.innerHTML = "Too low, try again!"
    }
    tries++
}
