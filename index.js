import { criarItemDaLista } from "./scripts/criarItemDaLista.js";


const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
           
    const itemDaLista = criarItemDaLista();

    listaDeCompras.appendChild(itemDaLista);
    inputItem.value = ""; // Limpa o campo de entrada após adicionar o item   
    atualizarMensagemListaVazia();       
})


const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function atualizarMensagemListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    }else {
     mensagemListaVazia.style.display = "none";
    }
}

atualizarMensagemListaVazia();
