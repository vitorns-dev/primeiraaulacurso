/* =========================================================
   --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
   ========================================================= */

// Seleciona o formulário e o elemento de resposta no DOM
const formulario = document.querySelector("#formulario");
const resposta = document.querySelector("#resposta");

// Adiciona o ouvinte de evento para o envio (submit) do formulário
formulario.addEventListener("submit", function (evento) {
    // Evita o recarregamento padrão da página
    evento.preventDefault();
    
    // Captura os valores preenchidos nos campos
    const nome = document.querySelector("#nome").value;
    const mensagem = document.querySelector("#mensagem").value.trim();

    // Validação do tamanho mínimo da mensagem (mínimo de 10 caracteres)
    if (mensagem.length < 10) {
        resposta.textContent = "Escreva pelo menos 10 letras.";
        resposta.classList.add("erro"); // Aplica o estilo de erro em destaque
    } else {
        // Mensagem de sucesso personalizada com o nome do utilizador
        resposta.textContent = "Obrigado, " + nome + "!";
        resposta.classList.remove("erro"); // Remove a classe de erro em caso de sucesso
        formulario.reset(); // Limpa os campos do formulário após o envio
    }
});