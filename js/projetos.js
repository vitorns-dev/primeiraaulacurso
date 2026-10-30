/* =========================================================
   --- RENDERIZAÇÃO DINÂMICA DOS PROJETOS ---
   ========================================================= */

// Array com a lista completa dos 6 projetos desenvolvidos
const projetos = [
    { titulo: "Portfólio Pessoal", descricao: "Site pessoal desenvolvido com HTML5, CSS3 moderno (Flexbox e Grid) e interatividade com JavaScript." },
    { titulo: "Protótipo no Figma", descricao: "Planejamento visual das telas do site, definição de paleta de cores e interações dos botões." },
    { titulo: "Estudos em C#", descricao: "Desenvolvimento de uma aplicação orientada a objetos utilizando a linguagem C#." },
    { titulo: "Estudos em C", descricao: "Implementação de rotinas e resolução de problemas computacionais utilizando a linguagem C." },
    { titulo: "RpgCombatSimulator", descricao: "Simulador de combates em RPG desenvolvido em C#, aplicando conceitos de orientação a objetos, gestão de turnos e mecânicas de batalha." },
    { titulo: "Algoritmos e Estruturas de Dados", descricao: "Repositório de estudo focado na implementação de estruturas fundamentais como pilhas, filas e ordenação de vetores." }
];

// Seleciona o container onde os cartões dos projetos serão injetados no DOM
const listaProjetos = document.querySelector("#lista-projetos");

// Função responsável por criar a estrutura HTML de cada cartão de projeto
function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");
    
    const titulo = document.createElement("h2");
    titulo.textContent = projeto.titulo;
    
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}

// Percorre o array de projetos e cria o cartão para cada elemento individualmente
for (const projeto of projetos) {
    criarCard(projeto); // Passa o objeto singular 'projeto'
}