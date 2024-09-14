import { PageCtrl } from "./PageCtrl.js";
import { OverviewPageView } from "../../views/pages/OverviewPageView.js";

export class OverviewPageCtrl extends PageCtrl {
  constructor() {
    super(OverviewPageView);
  }

  _initControllers() {
    // Must implement
  }

}
