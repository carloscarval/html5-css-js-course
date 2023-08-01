var weightSlider = document.getElementById("weightId")
var heightSlider = document.getElementById("heightId")

weightSlider.addEventListener("input", function() {
    updateValue("weightTextId", this)
})

heightSlider.addEventListener("input", function() {
    updateValue("heightTextId", this)
})

function updateValue(id, slider) {
    var textElement = document.getElementById(id)
    if (slider.id == "heightId")
        textElement.innerHTML = slider.value + " cm"
    else
        textElement.innerHTML = slider.value + " kg"

    var weight = weightSlider.value
    var height = heightSlider.value

    if(weight > 0 && height > 0) {
        var bmi = calculateBmi(height, weight)
        document.getElementById('bmiResultId').innerHTML = bmi + statusBmi(bmi)
    }
}

function calculateBmi(height, weight) {
    return (weight / ((height * height / 10000))).toFixed(2)
}

function statusBmi(bmi) {
    if (bmi < 18.5)
        return " - Underweight"
    else if (bmi >= 18.5 && bmi <= 24.9)
        return " - Normal weight"
    else if (bmi >= 25 && bmi <= 29.9)
        return " - Overweight"
    else if (bmi >= 30)
        return " - Obesity"
}