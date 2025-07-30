const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    if(inputItem.value === "") {
        alert("Por favor, insira um item válido.");
        return;
    }
        const itemDaLista = document.createElement("li");
        const containerItemDaLista = document.createElement("div");
        containerItemDaLista.classList.add("lista-item-container");
        const inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";        
        inputCheckbox.id = "checkbox-" + contador++; 
        const nomeItem = document.createElement("p");
        nomeItem.textContent = inputItem.value;

        inputCheckbox.addEventListener("click", () => {
            if (inputCheckbox.checked) {
                itemDaLista.style.textDecoration = "line-through";
            } else {                
                itemDaLista.style.textDecoration = "none";
            }
        });

        containerItemDaLista.appendChild(inputCheckbox);
        containerItemDaLista.appendChild(nomeItem);
        itemDaLista.appendChild(containerItemDaLista);

        const diaDaSemana = new Date().toLocaleDateString('pt-BR', { 
            weekday: 'long' });
        const data = new Date().toLocaleDateString('pt-BR');
        
        const hora = new Date().toLocaleTimeString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric'
        });

        const dataCompleta = `${diaDaSemana}, (${data}) às ${hora}`;//Template String
        const dataHora = document.createElement("p");
        dataHora.classList.add("texto-data");
        dataHora.innerText = dataCompleta;

        itemDaLista.appendChild(dataHora);

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
