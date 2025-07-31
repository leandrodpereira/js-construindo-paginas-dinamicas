import { criarItemDaLista } from "./scripts/criarItemDaLista.js";


const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); 
     // Criar novo item e adicionar à lista
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
     // Verificar se a lista está vazia
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
