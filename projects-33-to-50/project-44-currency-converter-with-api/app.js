var exchangeButton = document.getElementById("exchangeButtonId")

exchangeButton.addEventListener("click", () => {
    var amountToConvert = document.getElementById("inputId").value
    
    var fromCurrency = document.getElementById("fromId").value
    var toCurrency = document.getElementById("toId").value

    var exchangeRate = fetch('https://v6.exchangerate-api.com/v6/e8f9276aa18f4c68a00ea896/latest/' + fromCurrency).then(res => res.json())
    .then(data => {
        var exchangeRateInput = document.getElementById('exchangeRateId')
        exchangeRateInput.value = data.conversion_rates[toCurrency]

        var contentResult = document.getElementById('contentId')
        contentResult.innerText = (amountToConvert * exchangeRateInput.value) + " " + toCurrency
        contentResult.style.display="block"
    })
})