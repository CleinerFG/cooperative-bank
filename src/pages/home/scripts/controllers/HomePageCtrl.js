import { PageCtrl } from "../../../../js/controllers/PageCtrl.js";
import { HomePageView } from "../views/HomePageView.js";
import { StatementCtrl } from "../controllers/StatementCtrl.js";
import { CardLinkGroupsCtrl } from "../controllers/CardLinkGroupsCtrl.js";
import { EventGroup } from "../components/EventGroup.js";

export class HomePageCtrl extends PageCtrl {
  constructor() {
    super(HomePageView);
  }

  _initControllers() {
    new StatementCtrl();
    new CardLinkGroupsCtrl();
    new EventGroup();
  }
}
