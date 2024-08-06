export function menuHandler() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", (ev) => {
    menuIcon.classList.toggle("menu-active");
    const divOptions = document.querySelector(".menu-options");
    divOptions.classList.toggle("menu-options-block");
  });
}
