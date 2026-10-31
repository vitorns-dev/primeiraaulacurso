/* =========================================================
   --- RENDERIZAÇÃO DINÂMICA DOS PROJETOS VIA JSON & FETCH ---
   ========================================================= */

// Seleciona o container onde os cartões dos projetos serão injetados no DOM
const listaProjetos = document.querySelector("#lista-projetos");

// Função responsável por criar a estrutura HTML de cada cartão de projeto
function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");
    
    const titulo = document.createElement("h2");
    // Injeta o span com o ícone SVG e o texto do projeto
    titulo.innerHTML = `<span class="projeto-icone">${projeto.iconeSVG}</span> ${projeto.titulo}`;
    
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}

// Busca os dados do arquivo JSON externo de forma assíncrona
fetch("projetos.json")
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (projetos) {
        // Percorre o array obtido do JSON e cria o cartão para cada elemento
        for (const projeto of projetos) {
            criarCard(projeto);
        }
    })
    .catch(function (erro) {
        console.error("Erro ao carregar os dados dos projetos:", erro);
    });