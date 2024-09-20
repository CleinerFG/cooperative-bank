const API_VALUE = 156560;
const divValue = document.querySelector("#value");
const btnDivValue = document.querySelector("#btn-value");
const inpPass = document.querySelector("#password");
const btnInpPass = document.querySelector("#btn-pass");

const hiddenValueTemplate = `
  R$
  <div class="points-container">
    <span class="point"></span>
    <span class="point"></span>
    <span class="point"></span>
    <span class="point"></span>
    <span class="point"></span>
    <span class="point"></span>
  </div>
`;

function updateValue() {
  divValue.textContent = API_VALUE.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function toggleVisibility() {
  const isVisible = divValue.dataset.visibility === "on";

  if (isVisible) {
    divValue.innerHTML = hiddenValueTemplate;
    divValue.dataset.visibility = "off";
  } else {
    updateValue();
    divValue.dataset.visibility = "on";
  }
}

function toggleInpType() {
  let type = "text";
  if (inpPass.type === "text") type = "password";
  inpPass.type = type;
}

function init() {
  updateValue();
  btnDivValue.addEventListener("click", toggleVisibility);
  btnInpPass.addEventListener("click", toggleInpType);
}

init();
