import "../css/home.css";
import { menuHandler } from "./modules/common/menuHandler.js";
import { visibilitySwitch } from "./modules/home/visibilitySwitch.js";

// Menu
document.querySelector(".menu-icon").addEventListener("click", menuHandler);

// Visibility
document
  .querySelector(".visibility-icon")
  .addEventListener("click", visibilitySwitch);

// Wallet cards
// Investments cards
// Liquidy Events
