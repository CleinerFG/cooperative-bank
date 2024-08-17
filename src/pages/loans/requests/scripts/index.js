import { initLayoutController } from "../../../../js/controllers/core/layoutCore.js";
import { initLoanRequestController } from "./loanRequestHandler.js";
import { initPathManager } from "./pathHandler.js";

initLayoutController();
initPathManager();
initLoanRequestController();