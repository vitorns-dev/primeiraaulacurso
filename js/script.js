/* =========================================================
   --- MENSAGEM DE TESTE NO CONSOLE ---
   ========================================================= */
// Confirma no console do navegador que o script foi carregado com sucesso
console.log("Olá! O JavaScript está funcionando");

/* =========================================================
   --- OBTENÇÃO DA HORA E SAUDAÇÃO DINÂMICA ---
   ========================================================= */
// Obtém a data e hora atuais do sistema
const agora = new Date();
let hora = agora.getHours(); // Extrai a hora atual (0 a 23) em formato numérico

// Formata a hora para exibir no padrão brasileiro (HH:MM)
const horaFormatada = agora.toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit' 
});
console.log("Hora atual:", horaFormatada);

// Define a mensagem de saudação de acordo com o horário do dia
let saudacao;
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

// Atualiza a mensagem de boas-vindas do H1 apenas se o utilizador estiver na página inicial
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = saudacao + " Seja bem-vindo ao meu portfólio!";
    }
}

/* =========================================================
   --- CONTROLO DO TEMA (MODO CLARO / ESCURO) ---
   ========================================================= */
// Seleciona o botão de alternância de tema no DOM
const botao = document.querySelector("#tema");

// Função auxiliar para atualizar o ícone e o texto do botão de tema
function atualizarBotao(eClaro) {
    if (!botao) return; // Interrompe se o botão não existir na página atual
    
    if (eClaro) {
        botao.innerHTML = `<span class="icone">🌙</span> <span class="texto-btn">Modo Escuro</span>`;
    } else {
        botao.innerHTML = `<span class="icone">☀️</span> <span class="texto-btn">Modo Claro</span>`;
    }
}

// Recupera a preferência de tema salva previamente no navegador
const temaSalvo = localStorage.getItem("tema");

// Aplica o tema salvo assim que a página é carregada
if (temaSalvo === "claro") {
    document.documentElement.classList.add("claro"); // Aplica a classe 'claro' na raiz (HTML)
    atualizarBotao(true);
} else {
    document.documentElement.classList.remove("claro"); // Mantém o tema escuro padrão
    atualizarBotao(false);
}

// Adiciona o ouvinte de evento para alternar o tema ao clicar no botão
if (botao) {
    botao.addEventListener("click", function () {
        // Alterna a classe 'claro' na tag HTML
        document.documentElement.classList.toggle("claro"); 
        
        // Verifica se o tema atual passou a ser o claro
        const eClaro = document.documentElement.classList.contains("claro");
        
        // Guarda a preferência do utilizador no localStorage do navegador
        if (eClaro) {
            localStorage.setItem("tema", "claro");
        } else {
            localStorage.setItem("tema", "escuro");
        }
        
        // Atualiza a aparência visual do botão
        atualizarBotao(eClaro);
    });
}

/* =========================================================
   --- RENDERIZAÇÃO DINÂMICA DA LISTA DE GOSTOS ---
   ========================================================= */
// Array com a lista de gostos e interesses pessoais
const gostos = [
    "Programar", "Assistir séries", "Jogar", "Ouvir música", 
    "Rock", "Danças", "Violino", "Guitarra", "Bateria", 
    "Espaguete", "Lasanha", "Animes", "Desenhos", "Spider"
];

// Exibe a quantidade total de itens e o primeiro elemento no console
console.log(gostos.length);
console.log(gostos[0]);

// Seleciona o elemento UL ou OL onde os gostos serão inseridos no HTML
const lista = document.querySelector("#gostos");

// Percorre a lista de gostos e cria elementos <li> dinamicamente
if (lista) {
    for (const gosto of gostos) {
        const item = document.createElement("li");
        item.textContent = gosto;
        lista.appendChild(item); // Adiciona o item <li> como filho da lista
    }
}