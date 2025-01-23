let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial () {
    exibirNaTela("h1", "Jogo do número secreto");
    exibirNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = "Você descobriu o número secreto com " + tentativas + " " + palavraTentativa + "!";
        exibirNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela("p", "O número secreto é menor.");
        } else {
            exibirNaTela("p", "O número secreto é maior.");
        } 
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroeEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 100) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroeEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroeEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroeEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}