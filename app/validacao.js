function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;
    if (numeroValido(numero)){
        elementoChute.innerHTML += `<div> Valor inválido </div>`
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(chuteCerto(numero)){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>

        <button id="jogar-novamente" class="jogar-novamente">Jogar novamente</button>
        `
    } else if (chuteMenor(numero)) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior
                <i class="fa-solid fa-arrow-up-long">
                </i>
            </div>
        `
    } else if (chuteMaior(numero)){
        elementoChute.innerHTML += `
            <div>O número secreto é menor
                <i class="fa-solid fa-arrow-down-long">
                </i>
            </div>
        `
    }
}
 
function numeroValido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function chuteCerto(numero){
    return numero === numeroSecreto
}

function chuteMaior(numero){
    return numero > numeroSecreto
}

function chuteMenor(numero){
    return numero < numeroSecreto
}

document.body.addEventListener('click', evento => {
    if (evento.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
