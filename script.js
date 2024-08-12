function Soma(event)
{
    event.preventDefault()
    let n1 = parseInt(document.getElementById('Numero1').value)
    let n2 = parseInt(document.getElementById('Numero2').value)
    let resultado = n1 + n2
    alert(resultado)
}

function Subtracao(event)
{
    event.preventDefault()
    let n1 = parseInt(document.getElementById('Numero1').value)
    let n2 = parseInt(document.getElementById('Numero2').value)
    let resultado = n1 - n2
    alert(resultado)
}

function Divisao(event)
{
    event.preventDefault()
    let n1 = parseInt(document.getElementById('Numero1').value)
    let n2 = parseInt(document.getElementById('Numero2').value)
    let resultado = n1 / n2
    alert(resultado)
}

function Multiplicacao(event)
{
    event.preventDefault()
    let n1 = parseInt(document.getElementById('Numero1').value)
    let n2 = parseInt(document.getElementById('Numero2').value)
    let resultado = n1 * n2
    alert(resultado)
}


