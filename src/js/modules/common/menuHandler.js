export function menuHandler() {
  document.querySelector(".menu-icon").addEventListener("click", (ev) => {
    const divOptions = document.querySelector(".menu-options");
    divOptions.classList.toggle("menu-options-block");
  });
}
