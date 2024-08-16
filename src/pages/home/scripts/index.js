// import "../css/home.css";
import { initLayoutController } from "../../../js/controllers/core/layoutCore.js";
import { switchVisibility } from "./visibilityStatementValue.js";
import { initPathManager } from "./pathHandler.js";
import { initEventsController } from "./eventsHandler.js";

initLayoutController();
switchVisibility();
initEventsController();
initPathManager();
