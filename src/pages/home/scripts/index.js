// import "../css/home.css";
import { HeaderCtrl } from "../../../js/controllers/layout/HeaderCtrl.js";
import { FooterCtrl } from "../../../js/controllers/layout/FooterCtrl.js";
import { ThemeView } from "../../../js/views/layout/ThemeView.js";

// import { initLayoutController } from "../../../js/controllers/core/layoutCore.js";
import { switchVisibility } from "./visibilityStatementValue.js";
import { initActionCardsController } from "./actionCardsHandler.js";
import { initPathManager } from "./pathHandler.js";
import { initEventsController } from "./eventsHandler.js";

// initLayoutController();
switchVisibility();
initActionCardsController();
initEventsController();
initPathManager();

// Test deinition
new HeaderCtrl();
new FooterCtrl();
new ThemeView().initializeTheme();
