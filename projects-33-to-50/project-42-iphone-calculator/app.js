var numberOne = document.getElementById("oneButton")
var numberTwo = document.getElementById("twoButton")
var numberThree = document.getElementById("threeButton")
var numberFour = document.getElementById("fourButton")
var numberFive = document.getElementById("fiveButton")
var numberSix = document.getElementById("sixButton")
var numberSeven = document.getElementById("sevenButton")
var numberEight = document.getElementById("eightButton")
var numberNine = document.getElementById("nineButton")
var numberZero = document.getElementById("zeroButton")
var numberDecimal = document.getElementById("decimalButton")
var clearButton = document.getElementById("clearButton")
var divideButton = document.getElementById("divideButton")
var multiplyButton = document.getElementById("multiplyButton")
var subtractButton = document.getElementById("subtractButton")
var additionButton = document.getElementById("additionButton")
var modulusButton = document.getElementById("modulusButton")
var equalButton = document.getElementById("equalButton")

var input = document.getElementById("inputText")

var inputActualNumber = ""
var number1 = 0
var number2 = 0
var lastOperation = ""
var operationOngoing = false

clearButton.addEventListener("click", () => {
    clearInput()
})

numberZero.addEventListener("click", () => {
    if (inputActualNumber != "") {
        updateInput("0")
    }
})

numberOne.addEventListener("click", () => {
    updateInput("1")
    
})

numberTwo.addEventListener("click", () => {
    updateInput("2")
})

numberThree.addEventListener("click", () => {
    updateInput("3")    
})

numberFour.addEventListener("click", () => {
    updateInput("4")
})

numberFive.addEventListener("click", () => {
    updateInput("5")    
})

numberSix.addEventListener("click", () => {
    updateInput("6")    
})

numberSeven.addEventListener("click", () => {
    updateInput("7")    
})

numberEight.addEventListener("click", () => {
    updateInput("8")    
})

numberNine.addEventListener("click", () => {
    updateInput("9")
})

numberDecimal.addEventListener("click", () => {
    if (inputActualNumber.indexOf(".") == -1 && inputActualNumber == "") {
        updateInput("0,")
    } else if (inputActualNumber.indexOf(".") == -1 && inputActualNumber != "") {
        updateInput(",")
    }
})


additionButton.addEventListener("click", () => {
    proccessOperation("sum")
})

subtractButton.addEventListener("click", () => {
    proccessOperation("subtract")
})

multiplyButton.addEventListener("click", () => {
    proccessOperation("multiply")
})

divideButton.addEventListener("click", () => {
    proccessOperation("divide")
})

modulusButton.addEventListener("click", () => {
    proccessOperation("modulus")
})

function proccessOperation(operation) {
    if (!operationOngoing && inputActualNumber != "") {
        number1 = parseFloat(inputActualNumber)
        inputActualNumber = ""
        lastOperation = operation
        operationOngoing = true
    }
}

equalButton.addEventListener("click", () => {
    if (inputActualNumber != "") {
        number2 = operationOngoing ? parseFloat(inputActualNumber) : number2
        input.value = calculate(lastOperation, number1, number2).toString().replace(".", ",")
        inputActualNumber = input.value.replace(",", ".")
        operationOngoing = false
        number1 = input.value
    }
})

function updateInput(number) {
    input.value = inputActualNumber.replace(".", ",") + number
    inputActualNumber = input.value.replace(",", ".")
}

function clearInput() {
    input.value = "0"
    inputActualNumber = ""
    operationOngoing = false
    number1 = 0
    number2 = 0
}

function calculate(operation, number1, number2) {
    var result = 0
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
    switch(operation) {
        case "sum":
            result = number1 + number2
            break
        case "subtract":
            result = number1 - number2
            break
        case "multiply":
            result = number1 * number2
            break
        case "divide":
            result = number1 / number2
            break
        case "modulus":
            result = number1 % number2
            break
    }
    return result
}