/* =========================================================
   --- RENDERIZAÇÃO DINÂMICA DOS PROJETOS COM ÍCONES SVG ---
   ========================================================= */

// Array com a lista completa dos 6 projetos e os respetivos ícones SVG profissionais
const projetos = [
    { 
        titulo: "Portfólio Pessoal", 
        descricao: "Site pessoal desenvolvido com HTML5, CSS3 moderno (Flexbox e Grid) e interatividade com JavaScript.", 
        iconeSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` 
    },
    { 
        titulo: "Protótipo no Figma", 
        descricao: "Planejamento visual das telas do site, definição de paleta de cores e interações dos botões.", 
        iconeSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>` 
    },
    { 
        titulo: "Estudos em C#", 
        descricao: "Desenvolvimento de uma aplicação orientada a objetos utilizando a linguagem C#.", 
        iconeSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` 
    },
    { 
        titulo: "Estudos em C", 
        descricao: "Implementação de rotinas e resolução de problemas computacionais utilizando a linguagem C.", 
        iconeSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="12" y1="7" x2="12" y2="17"/></svg>` 
    },
    { 
        titulo: "RpgCombatSimulator", 
        descricao: "Simulador de combates em RPG desenvolvido em C#, aplicando conceitos de orientação a objetos, gestão de turnos e mecânicas de batalha.", 
        iconeSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/></svg>` 
    },
    { 
        titulo: "Algoritmos e Estruturas de Dados", 
        descricao: "Repositório de estudo focado na implementação de estruturas fundamentais como pilhas, filas e ordenação de vetores.", 
        iconeSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>` 
    }
];

// Seleciona o container onde os cartões dos projetos serão injetados no DOM
const listaProjetos = document.querySelector("#lista-projetos");

// Função responsável por criar a estrutura HTML de cada cartão de projeto
function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");
    
    const titulo = document.createElement("h2");
    // Cria um container em span para o ícone SVG e o texto do título
    titulo.innerHTML = `<span class="projeto-icone">${projeto.iconeSVG}</span> ${projeto.titulo}`;
    
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}

// Percorre o array de projetos e cria o cartão para cada elemento individualmente
for (const projeto of projetos) {
    criarCard(projeto);
}