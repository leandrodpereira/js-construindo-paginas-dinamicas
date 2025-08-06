 import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
 const inputItem = document.getElementById("input-item");

 let contador = 0;
 
 export function criarItemDaLista() {   
     
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
        inputItem.value = ""; // Limpa o campo de entrada após adicionar o item     

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

        const dataCompleta = gerarDiaDaSemana();

        const dataHora = document.createElement("p");
        dataHora.classList.add("texto-data");
        dataHora.innerText = dataCompleta;
        itemDaLista.appendChild(dataHora);

        return itemDaLista;
}