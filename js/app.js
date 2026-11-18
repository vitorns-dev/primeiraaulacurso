const projetos = [
  { titulo: "Portfólio Pessoal", descricao: "Site pessoal desenvolvido com HTML5, CSS3 moderno e interatividade com JavaScript." },
  { titulo: "Protótipo no Figma", descricao: "Planejamento visual das telas do site, definição de paleta de cores e interações dos botões." },
  { titulo: "Estudos em C#", descricao: "Desenvolvimento de uma aplicação orientada a objetos utilizando a linguagem C#." },
  { titulo: "Estudos em C", descricao: "Implementação de rotinas e resolução de problemas computacionais utilizando a linguagem C." },
  { titulo: "RpgCombatSimulator", descricao: "Simulador de combates em RPG desenvolvido em C#, aplicando conceitos de orientação a objetos." },
  { titulo: "Algoritmos e Estruturas de Dados", descricao: "Repositório de estudo focado na implementação de estruturas fundamentais como pilhas e filas." }
];

const Card = (props) => {
  return (
    <section className="card">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </section>
  );
};

const App = () => {
  return (
    <main>
      <h1>Meus projetos em React</h1>
      <p>{projetos.length} projetos</p>
      {projetos.map((projeto) => (
        <Card
          key={projeto.titulo}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
        />
      ))}
    </main>
  );
};

const raiz = ReactDOM.createRoot(document.querySelector("#raiz"));
raiz.render(<App />);