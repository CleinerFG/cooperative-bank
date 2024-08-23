import { ActionCardsCtrl } from "../../../js/controllers/display/ActionCardsCtrl.js";

const loans = {
  name: "loans",
  items: ["requests", "payments", "overview", "timeline"],
};

const investments = {
  name: "investments",
  items: ["all", "reports"],
};

export function initActionCardsController() {
  const loansContainer = document.querySelector(".loans__cards");
  new ActionCardsCtrl(loansContainer, loans);

  const investContainer = document.querySelector(".investments__cards");
  new ActionCardsCtrl(investContainer, investments);
}
