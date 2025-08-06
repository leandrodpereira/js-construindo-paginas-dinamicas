const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

/**
 * Verifica se a lista passada como par metro tem itens ou n o. Se a lista est  vazia,
 * mostra a mensagem de lista vazia. Caso contr rio, esconde a mensagem.
 *
 * @param {Element} lista - A lista de itens a ser verificada.
 */
function verificarListaVazia(lista) {
    const itensDaLista = lista.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    }else {
     mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;
