function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Para fins de depuração, mostra a seção no console

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string vazia
  if (campoPesquisa == "") {
    section.innerHTML = "Nenhuma linguagem de programação foi encontrada";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada item da lista de linguagens e constrói o HTML
  for (let item of lista_linguagens) {
    titulo = item.titulo.toLowerCase();
    descricao = item.descricao.toLowerCase();
    tags = item.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${item.link} target="_blank">${item.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${item.descricao}
          </p>
        </div>`;
    }
  }
  if (!resultados) {
    resultados = "Digite uma linguagem de programação válida";
  }

  // Atualiza o conteúdo da seção com o HTML gerado
  section.innerHTML = resultados;
}
