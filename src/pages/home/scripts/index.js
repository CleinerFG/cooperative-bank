// import "../css/home.css";
import { switchVisibility } from "./visibilityStatementValue.js";
import { initPathManager } from "./pathHandler.js";
import { initEventsController } from "./eventsHandler.js";
import { initLayoutController } from "./layoutHandler.js";

initLayoutController();
switchVisibility();
initEventsController();
initPathManager()
