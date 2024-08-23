import { ThemeView } from "../../../../js/views/layout/ThemeView.js";
import { initLayoutController } from "../../../../js/controllers/core/layoutCore.js";
import { ThemeView } from "../../../../js/views/layout/ThemeView.js";
import { initLoanRequestsController } from "./loanRequestsHandler.js";
import { initPathManager } from "./pathHandler.js";

initLayoutController();
initPathManager();
initLoanRequestsController();
new ThemeView().initializeTheme();
