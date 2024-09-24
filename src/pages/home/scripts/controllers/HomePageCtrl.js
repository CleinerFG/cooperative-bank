import { PageCtrl } from "../../../../js/controllers/PageCtrl.js";
import { HomeView } from "../views/HomeView.js";
import { StatementCtrl } from "../controllers/StatementCtrl.js";
import { ActionCardsCtrl } from "../controllers/ActionCardsCtrl.js";
// import { EventsCtrl } from "./EventsCtrl.js";
// import {EventModel} from "../models/EventModel.js"
// import { apiDataEvents } from "../../../../js/testData.js";

export class HomePageCtrl extends PageCtrl {
  constructor() {
    super(HomeView);
  }

  _initStatementCtrl() {
    new StatementCtrl();
  }

  _initActionCardsCtrl() {
    new ActionCardsCtrl();
  }

  _initEventsCtrl() {
    const eventsData = apiDataEvents.map((params) => new EventModel(params));
    const ctrl = new EventsCtrl();
    eventsData.forEach((event) => ctrl.addComponent(event));
    ctrl.initComponents();
    ctrl.removeComponent(1450);
    // ctrl.clearComponents();
  }

  _initControllers() {
    this._initStatementCtrl();
    this._initActionCardsCtrl();
    // this._initEventsCtrl();
  }
}
