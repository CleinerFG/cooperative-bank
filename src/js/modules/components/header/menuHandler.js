export function menuHandler() {
  const menuIcon = document.querySelector(".menu-icon-container");
  menuIcon.addEventListener("click", (ev) => {
    menuIcon.classList.toggle("menu-active-container");
    const divOptions = document.querySelector(".menu-options");
    divOptions.classList.toggle("menu-options-block");
  });
}
