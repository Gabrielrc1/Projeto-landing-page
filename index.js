// Variáveis que pegam o elemento pelo id no html
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("seta_direita")
var SetaEsquerda = window.document.getElementById("seta_esquerda")

// Função que faz rolagem para a direita no carrossel
function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

// Função que faz rolagem apar a esquerda no carrossel
function RolarParaEsquerda() {
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}