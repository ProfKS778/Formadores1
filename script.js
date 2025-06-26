function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome_cursista");
    elemento.textContent = nomeUsuario;
}
inserirNome();
