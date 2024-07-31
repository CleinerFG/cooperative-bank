import { menuHandler } from "./modules/menuHandler.js";
import { visibilitySwitch } from "./modules/visibilitySwitch.js";

// Menu
document.querySelector(".menu-icon").addEventListener("click", menuHandler);

// Visibility
document
  .querySelector(".visibility-icon")
  .addEventListener("click", visibilitySwitch);

// Wallet cards
// Investments cards
// Liquidy Events
