import { ThemeView } from "../../../../js/views/layout/ThemeView.js";
import { initLayoutController } from "../../../../js/controllers/core/layoutCore.js";
import { initLoansController } from "./loansHandler.js";

initLayoutController();
initLoansController();
new ThemeView().initializeTheme();
