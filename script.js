const inputArea = document.getElementById('numbersInputContant')
const root = document.querySelector(':root')
const changeThemeButton = document.getElementById('changeThemeButton')
const copyButton = document.getElementById('copyButton')
const clearButton = document.getElementById('clearButton')
const calculateButton = document.getElementById('calculateButton')
const allowedKeys = ['1', '2','3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*']

document.querySelectorAll('.sectionsButtonsContant').forEach(function (ev) {

    ev.addEventListener('click', function () {

        inputArea.value += ev.dataset.value
    })
})

inputArea.addEventListener('keydown', function (ev) {

    ev.preventDefault()
    
    if(allowedKeys.includes(ev.key)){

        inputArea.value += ev.key 
    }
    if(ev.key === 'Backspace'){

        inputArea.style.backgroundColor = getComputedStyle(root).getPropertyValue('---bg-color')
        inputArea.value = inputArea.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){

        calculate()
    }
})

changeThemeButton.addEventListener('click', function () {

    if(changeThemeButton.value == 'Green Theme'){

        changeThemeButton.value = 'Black Theme'
        root.style.setProperty('---bg-color', '#000000')
        root.style.setProperty('---color', '#fff')
        inputArea.style.backgroundColor = getComputedStyle(root).getPropertyValue('---bg-color')

        if(inputArea.value == 'ERRO'){

            inputArea.value = ''
        }
    }else if(changeThemeButton.value == 'Black Theme'){

        changeThemeButton.value = 'White Theme'
        root.style.setProperty('---bg-color', '#fff')
        root.style.setProperty('---color', '#000000')
        inputArea.style.backgroundColor = getComputedStyle(root).getPropertyValue('---bg-color')

        if(inputArea.value == 'ERRO'){

            inputArea.value = ''
        }
    }else if(changeThemeButton.value == 'White Theme'){

        changeThemeButton.value = 'Green Theme'
        root.style.setProperty('---bg-color', '#79e479')
        root.style.setProperty('---color', '#fff')
        inputArea.style.backgroundColor = getComputedStyle(root).getPropertyValue('---bg-color')

        if(inputArea.value == 'ERRO'){

            inputArea.value = ''
        }
    }
})

copyButton.addEventListener('click', function (ev) {

    navigator.clipboard.writeText(inputArea.value)
})

calculateButton.addEventListener('click', calculate)

clearButton.addEventListener('click', function allowedKeysFunction() {

    inputArea.style.backgroundColor = getComputedStyle(root).getPropertyValue('---bg-color')
    inputArea.value = null
})

function calculate() {

    const currentValue = inputArea.value
    inputArea.style.backgroundColor = '#eb3b3b'
    inputArea.value = 'ERRO'
    inputArea.value = eval(currentValue)
    inputArea.style.backgroundColor = getComputedStyle(root).getPropertyValue('---bg-color')
}







