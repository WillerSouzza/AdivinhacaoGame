alert('Boas vindas ao jogo de número secreto!')

let min = 1
let max = 100

let numeroSecreto = parseInt(Math.random() * max + min)
let chute
let tentativas = 1

while(chute != numeroSecreto) {
    console.log(numeroSecreto)
    chute = prompt(`Escolha um número entre ${min} e ${max}`)

    if(chute == numeroSecreto) break;
    else if(chute > numeroSecreto) alert(`O número secreto é menor que ${chute}`)
    else alert(`O número secreto é maior que ${chute}`)
    tentativas++
}

let palavraTentativa = (tentativas > 1) ? 'tentativas' : 'tentativa'
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`)
