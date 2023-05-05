const inputArea = document.getElementById('numbersInputContant')
const copyButton = document.getElementById('copyButton')
const clearButton = document.getElementById('clearButton')
const calculateButton = document.getElementById('calculateButton')
const allowedKeys = ['1', '2','3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*']

inputArea.addEventListener('keydown', function (ev) {

    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){

        inputArea.value += ev.key 
    }
    if(ev.key === 'Backspace'){

        inputArea.value = inputArea.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){

        calculate()
    }
})

copyButton.addEventListener('click', function (ev) {

    navigator.clipboard.writeText(inputArea.value)
})

calculateButton.addEventListener('click', calculate)

clearButton.addEventListener('click', function allowedKeysFunction() {

    inputArea.value = null
})

document.querySelectorAll('.sectionsButtonsContant').forEach(function (ev) {

    ev.addEventListener('click', function () {

        inputArea.value += ev.dataset.value
    })
})

function calculate() {

    const result = eval(inputArea.value)
    inputArea.value = result
}







