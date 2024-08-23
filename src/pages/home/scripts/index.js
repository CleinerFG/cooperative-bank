// import "../css/home.css";
import { HomeView } from "../../../js/views/pages/homeView.js";
import { switchVisibility } from "./visibilityStatementValue.js";
// import { initActionCardsController } from "./actionCardsHandler.js";
import { initPathManager } from "./pathHandler.js";
import { initEventsController } from "./eventsHandler.js";

// initLayoutController();
new HomeView();
switchVisibility();
// initActionCardsController();
initEventsController();
initPathManager();
