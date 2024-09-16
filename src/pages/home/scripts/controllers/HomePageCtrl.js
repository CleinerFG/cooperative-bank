import { PageCtrl } from "../../../../js/controllers/pages/PageCtrl.js";
import { HomeView } from "../views/HomeView.js";
import { StatementCtrl } from "../controllers/StatementCtrl.js";
import { ActionCardsCtrl } from "../controllers/ActionCardsCtrl.js";
import { EventsCtrl } from "./EventsCtrl.js";
import {Event} from "../models/Event.js"
import { apiDataEvents } from "../../../../js/testData.js";

export class HomePageCtrl extends PageCtrl {
  constructor() {
    super(HomeView);
  }

  _initStatementCtrl() {
    new StatementCtrl();
  }

  _initActionCardsCtrl() {
    new ActionCardsCtrl("loans");
    new ActionCardsCtrl("investments");
  }

  _initEventsCtrl() {
    const eventsData = apiDataEvents.map((params) => new Event(params));
    const ctrl = new EventsCtrl();
    eventsData.forEach((event) => ctrl.addComponent(event));
    ctrl.renderComponents();
    ctrl.removeComponent(1450);
    ctrl.clearComponents();
  }

  _initControllers() {
    this._initStatementCtrl();
    this._initActionCardsCtrl();
    this._initEventsCtrl();
  }
}
