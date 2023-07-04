var button = document.getElementById("countButton")
button.addEventListener("click", calculate)

var number1Field = document.getElementById("number1")
var number2Field = document.getElementById("number2")

var selection = document.getElementById("select")

var resultField = document.getElementById("result")

function calculate() {
    let number1 = parseInt(number1Field.value)
    let number2 = parseInt(number2Field.value)

    let result
    switch
    if (selection.value == 'Addition') {
        result = addition(number1, number2)
    }
    if (selection.value == 'Subtraction') {
        result = subtraction(number1, number2)
    }
    if (selection.value == 'Multiplication') {
        result = multiplication(number1, number2)
    }
    if (selection.value == 'Division') {
        result = division(number1, number2)
    }
    resultField.textContent = result
}

function addition(number1, number2) {
    return number1 + number2
}

function subtraction(number1, number2) {
    return number1 - number2
}

function multiplication(number1, number2) {
    return number1 * number2
}

function division(number1, number2) {
    return number1 / number2
}