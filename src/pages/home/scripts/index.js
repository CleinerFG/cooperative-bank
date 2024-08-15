// import "../css/home.css";
import { switchVisibility } from "./visibilityStatementValue.js";
import { initPathSettings } from "./pathSetter.js";
import { initEventsHandler } from "./eventsHandler.js";
import { initLayoutController } from "./layoutHandler.js";

initLayoutController();
switchVisibility();
initEventsHandler();
initPathSettings();
