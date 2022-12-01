//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
let randomNum = Math.round(Math.random() * 10)
let xAttempts = 1

inputNumber.min = 0;
inputNumber.max = 10;

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickEnter)

//funções callback - é uma função que é passada como argunmento de outra função - "dentro dos ()"
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNum) {
        screen1.classList.add("hide") 
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNum = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide") 
    screen2.classList.toggle("hide")
}

function clickEnter(e) {
    console.log(e.key)
    if(e.key =='Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
