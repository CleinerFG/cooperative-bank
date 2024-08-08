export function menuHandler() {
  const menuIcon = document.querySelector("#menu-button");
  menuIcon.addEventListener("click", (ev) => {
    menuIcon.classList.toggle("header__menu-button--active");
    const divOptions = document.querySelector(".header__menu");
    divOptions.classList.toggle("header__menu--block");
  });
}
