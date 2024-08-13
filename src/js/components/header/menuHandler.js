export function menuHandler() {
  const menuBtn = document.querySelector("#menu-button");
  menuBtn.addEventListener("click", (ev) => {
    menuBtn.classList.toggle("header__menu-button--active");
    const nav = document.querySelector(".header__menu");
    nav.classList.toggle("header__menu--block");
  });
}
