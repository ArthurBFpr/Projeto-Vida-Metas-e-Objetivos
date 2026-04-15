const botoes = document.querySelectorAll(".botao");
const conteudo = document.getElementById("conteudo");

const textos = [
  "Estudar cursos na Alura para melhorar minhas habilidades em programação.",
  "Criar projetos em JavaScript para ganhar experiência prática.",
  "Montar um portfólio online com meus trabalhos.",
  "Atualizar meu currículo para novas oportunidades."
];

// verifica se tudo carregou
if (botoes.length && conteudo) {

  botoes.forEach((botao, index) => {

    botao.addEventListener("click", () => {

      // remove ativo de todos
      botoes.forEach(b => b.classList.remove("ativo"));

      // adiciona no clicado
      botao.classList.add("ativo");

      // troca texto
      conteudo.innerHTML = `<p>${textos[index]}</p>`;
    });

  });

}