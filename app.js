'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

function criarFuncionario (srcImagens){
    const cards = document.createElement('div')
    const quadro = document.getElementById('quadro')
    const img = document.createElement('img')
    const nome = document.createElement('h2')
    const cargo = document.createElement('spam')
    cards.classList.add('cards')
    img.classList.add('img')
    img.src = srcImagens.imagem
    quadro.appendChild(cards)
    cards.appendChild(img)
    
}

function carregarFuncionarios (){
    const quadro = document.getElementById('quadro')

    funcionarios.forEach(criarFuncionario)
}

carregarFuncionarios()