let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    amigos.push(nome);

    atualizarListaAmigos();

    inputNome.value = "";
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpar lista existente

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione ao menos um nome.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>${amigoSorteado} foi sorteado!</li>`;
}
