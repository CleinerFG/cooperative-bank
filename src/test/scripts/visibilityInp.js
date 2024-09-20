const API_VALUE = 156560;
const divValue = document.querySelector("#value");
const button = document.querySelector("#btn-value");

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

function init() {
  updateValue();
  button.addEventListener("click", toggleVisibility);
}

init();
