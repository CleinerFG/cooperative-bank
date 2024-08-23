// import "../css/home.css";
import { ThemeView } from "../../../js/views/layout/ThemeView.js";
import { initLayoutController } from "../../../js/controllers/core/layoutCore.js";
import { switchVisibility } from "./visibilityStatementValue.js";
import { initActionCardsController } from "./actionCardsHandler.js";
import { initPathManager } from "./pathHandler.js";
import { initEventsController } from "./eventsHandler.js";

initLayoutController();
switchVisibility();
initActionCardsController();
initEventsController();
initPathManager();
new ThemeView().initializeTheme()
