const menu = document.querySelector("#btnMenu");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector("#nav");
  nav.classList.toggle("ativo");
  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

menu.addEventListener("click", toggleMenu);
menu.addEventListener("touchstart", toggleMenu);
