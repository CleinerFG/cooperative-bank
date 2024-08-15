// import "../css/home.css";
import { switchVisibility } from "./visibilityStatementValue.js";
import { initPathSettings } from "./pathHandler.js";
import { initEventsController } from "./eventsHandler.js";
import { initLayoutController } from "./layoutHandler.js";

initLayoutController();
switchVisibility();
initEventsController();
initPathSettings();
