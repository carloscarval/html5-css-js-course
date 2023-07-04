const countButton = document.getElementById("countButton")

countButton.addEventListener("click", countLetters)

function countLetters() {
    const input = document.getElementById('input').value
    var amountLetters = input.replace(/[^a-zA-Z]/g, "").length;
    
    updateText(amountLetters)
}

function updateText(amountLetters) {
    document.getElementById("paragraph").textContent = "The input has " + amountLetters
}
