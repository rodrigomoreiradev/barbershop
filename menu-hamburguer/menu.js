const btnMenu = document.querySelector("#btnMenu");

function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);
