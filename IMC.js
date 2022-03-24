let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")

let resultado = document.getElementById("resultado")


function calcular() {

    let peso = inputPeso.value
    let altura = inputAltura.value

    let imc = peso / (altura ** 2)

    function classificacao() {

        if (imc <= 18.5) {
            return `Abaixo do peso`
        } else if (18.5 <= imc && imc <= 24.9) {
            return `Peso ideal`
        } else if (25.0 <= imc && imc <= 29.9) {
            return `Pré-obesidade`
        } else if (30.0 <= imc && imc <= 34.9) {
            return `Obesidade Grau 1`
        } else if (35.0 <= imc && imc <= 39.9) {
            return `Obesidade Grau 2`
        } else {
            return `Obesidade Grau 3`
        }
    }

    function pesoIdeal() {

        if (imc <= 18.5) {
            return `Você precisa ganhar ${(18.5 * altura ** 2 - peso).toFixed(2)} quilos para seu peso ideal`
        } else if (imc >= 24.9) {
            return `Você precisa perder ${-(24.9 * altura ** 2 - peso).toFixed(2)} quilos para seu peso ideal`
        } else {
            return `Parabéns, você está no Peso Ideal!`
        }
    }


    resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)}</p>`

    resultado.innerHTML += `<p>${classificacao()}</p>`

    resultado.innerHTML += `<p>${pesoIdeal()}</p>`
}

