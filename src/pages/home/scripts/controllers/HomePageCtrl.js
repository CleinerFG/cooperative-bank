import { PageCtrl } from "../../../../js/controllers/PageCtrl.js";
import { HomePageView } from "../views/HomePageView.js";
import { StatementCtrl } from "../controllers/StatementCtrl.js";
import { ActionCardsCtrl } from "../controllers/ActionCardsCtrl.js";
import { EventGroupCtrl } from "./EventGroupCtrl.js";

export class HomePageCtrl extends PageCtrl {
  constructor() {
    super(HomePageView);
  }
  
  _initControllers() {
    new StatementCtrl();
    new ActionCardsCtrl();
    new EventGroupCtrl();
  }
}
