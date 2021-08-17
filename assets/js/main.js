function calc() {
    let inputValue = Number(document.getElementById("input").value)
    let toGross = document.getElementById("toGross").checked ? true : false
    let reducedTax = document.getElementById("7P").checked ? true : false
    let multiplier = reducedTax ? 1.07 : 1.19
    let resultString = document.getElementById("resultString")
    let result = document.getElementById("result")
    let taxResult = document.getElementById("taxResult")
    let endResult

    if (toGross) {
        resultString.innerHTML = "Brutto-Betrag:"
        endResult = (inputValue * multiplier).toFixed(2)
        result.innerHTML = endResult + " €"
        taxResult.innerHTML = (endResult - inputValue).toFixed(2) + " €"
    }
    else {
        resultString.innerHTML = "Netto-Betrag:"
        endResult = (inputValue / multiplier).toFixed(2)
        result.innerHTML = endResult + " €"
        taxResult.innerHTML = (inputValue - endResult).toFixed(2) + " €"
    }
}