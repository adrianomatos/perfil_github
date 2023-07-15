function mudarTema() {
  const html = document.documentElement;
  // Função PRONTA para adicionar ou remover valor
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    // html.classList.remove("light");
    img.setAttribute("src", "assets/meu_avatar_light.png");
  } else {
    // html.classList.add("light");
    img.setAttribute("src", "assets/meu_avatar.png");
  }
}
