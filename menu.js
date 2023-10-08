const menuMobile = document.querySelector("#btnMenu");

function toogleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("ativo");
}

menuMobile.addEventListener("click", toogleMenu);
