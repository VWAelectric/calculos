function calculadora(num1, oper, num2) {
    let resultado = 0

    if (oper === '+') {
        return num1 + num2
    } else if (oper === '-') {
        return num1 - num2
    } else if (oper === '*') {
        return num1 * num2
    } else if (oper === '/') {
        if (num2 === 0) {
            return window.alert('Por favor, digite um número maior que 0 !!!')
        }
        return num1 / num2
    }else {
            return 'Operação Inválida'
        }
    }



function gerarResultados() {
    //Pega dados em tela
    let num1 = parseFloat(document.getElementById("displayNum1").value)
    let oper = document.getElementById("displayOper").value
    let num2 = parseFloat(document.getElementById("displayNum2").value)
    //Manda para a calculadora
    let resultado = calculadora(num1, oper, num2)
    //Exibe resultado na tela
    document.getElementById("resultado").innerText = `${num1} ${oper} ${num2} = ${resultado} `
}

