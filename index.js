import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault(); 
     // Criar novo item e adicionar à lista
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
     // Verificar se a lista está vazia
    verificarListaVazia(listaDeCompras);       
})

verificarListaVazia(listaDeCompras);// Exemplo de uso da função olaMundo