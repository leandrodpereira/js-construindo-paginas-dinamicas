const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("adicionar-item")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    if(inputItem.value === "") {
        alert("Por favor, insira um item válido.");
        return;
    } else {
        const itemDaLista = document.createElement("li");
        const containerItemDaLista = document.createElement("div");
        containerItemDaLista.classList.add("lista-item-container");
    }
})
