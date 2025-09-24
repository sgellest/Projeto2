let itens = document.getElementById("item");
let textoentrada = document.querySelector("#itens");
let lista = document.querySelector("#lista");

document.getElementById("btnAdicionar").addEventListener("click", function() {
    console.log("Clicou");
   
    if (textoentrada.value.trim() !== "" ) {
        let li = document.createElement("li");
        li.innerText = textoentrada.value;


        li.addEventListener("click", function() {
            li.classList.toggle("comprado");
        })

        let botaoRemover = document.createElement("span");
        botaoRemover.innerHTML = " X";
        botaoRemover.style.color = "green";
        botaoRemover.classList.add("btnRemover");
        li.style.cursor = "pointer";
       
        botaoRemover.addEventListener("click", (event) => {
            event.stopPropagation();
            li.remove();
        });

        lista.appendChild(li);
        li.appendChild(botaoRemover);
        textoentrada.value = "";
    } else {
        alert("A lista está vazia, insira um item!");
    }
})

document.getElementById("btnLimpar").addEventListener("click", function() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
})