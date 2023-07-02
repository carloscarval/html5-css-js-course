var ageInput = document.getElementById("ageInput")
var button = document.getElementById("myButton")

function validar() {    
    var msg = ageInput.value > 18 ? "You're an adult!" : "You're a minor!"
    alert(msg)
    ageInput.value = ""
}

button.addEventListener("click", validar)