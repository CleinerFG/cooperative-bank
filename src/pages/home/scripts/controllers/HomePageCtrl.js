import { PageCtrl } from "../../../../js/controllers/PageCtrl.js";
import { HomePageView } from "../views/HomePageView.js";
import { CardLinkGroupsCtrl } from "../controllers/CardLinkGroupsCtrl.js";
import { EventGroup } from "../components/EventGroup.js";
import { FinancialStatement } from "../components/FinancialStatement.js";

/**
 * Page controller for app home.
 *
 * @class
 * @extends PageCtrl
 */
export class HomePageCtrl extends PageCtrl {
  constructor() {
    super(HomePageView);
  }

  _initControllers() {
    new FinancialStatement();
    new CardLinkGroupsCtrl();
    new EventGroup();
  }
}
