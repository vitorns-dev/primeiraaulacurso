/* =========================================================
   --- RENDERIZAÇÃO E FILTRAGEM DE PROJETOS (MAP & FILTER) ---
   ========================================================= */

const listaProjetos = document.querySelector("#lista-projetos");
const contagem = document.querySelector("#contagem");

let todosProjetos = [];

// Função para criar um card individual
const criarCard = (projeto) => {
    const card = document.createElement("section");
    card.classList.add("card");
    
    const titulo = document.createElement("h2");
    titulo.innerHTML = `<span class="projeto-icone">${projeto.iconeSVG}</span> ${projeto.titulo}`;
    
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
};

// Função principal de exibição que utiliza .map() e .map() para os títulos
const mostrar = (lista) => {
    listaProjetos.innerHTML = "";
    
    // Renderiza cada card
    lista.forEach(projeto => criarCard(projeto));

    // Utiliza .map() para extrair os títulos e exibi-los na contagem (como no vídeo)
    const titulos = lista.map(projeto => projeto.titulo);
    contagem.textContent = `${lista.length} projetos: ${titulos.join(", ")}`;
};

// Função de filtragem usando .filter()
const filtrar = (categoria) => {
    if (categoria === "todos") {
        mostrar(todosProjetos);
    } else {
        const filtrados = todosProjetos.filter(projeto => projeto.categoria === categoria);
        mostrar(filtrados);
    }
};

// Fetch para carregar os dados
fetch("projetos.json")
    .then(resposta => resposta.json())
    .then(projetos => {
        todosProjetos = projetos;
        mostrar(todosProjetos);

        // Seleção dos botões de filtro
        const botaoTodos = document.querySelector("#filtro-todos");
        const botaoWeb = document.querySelector("#filtro-web");
        const botaoEstudos = document.querySelector("#filtro-estudos");

        // Eventos de clique nos botões
        if (botaoTodos) botaoTodos.addEventListener("click", () => filtrar("todos"));
        if (botaoWeb) botaoWeb.addEventListener("click", () => filtrar("web"));
        if (botaoEstudos) botaoEstudos.addEventListener("click", () => filtrar("estudos"));
    })
    .catch(erro => console.error("Erro ao carregar os dados:", erro));