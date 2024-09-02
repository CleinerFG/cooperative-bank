import { PageCtrl } from "./PageCtrl.js";
import { HomeView } from "../../views/pages/HomeView.js";
import { StatementCtrl } from "../StatementCtrl.js";
import { ActionCardsCtrl } from "../ActionCardsCtrl.js";
import { EventsCtrl } from "../../controllers/EventsCtrl.js";
import { eventsData } from "../../testData.js";

export class HomeCtrl extends PageCtrl {
  constructor() {
    super(HomeView);
  }

  _initStatementCtrl() {
    const statementContainer = document.querySelector(".statement__container");
    new StatementCtrl(statementContainer);
  }

  _initActionCardsCtrl() {
    const loans = {
      name: "loans",
      items: ["requests", "payments", "overview", "timeline"],
    };

    const investments = {
      name: "investments",
      items: ["all", "reports"],
    };

    const loansContainer = document.querySelector(".loans__cards");
    new ActionCardsCtrl(loansContainer, loans);

    const investContainer = document.querySelector(".investments__cards");
    new ActionCardsCtrl(investContainer, investments);
  }

  _initEventsCtrl() {
    const ctrl = new EventsCtrl();
    eventsData.forEach((event) => ctrl.addComponent(event));
    ctrl.renderComponents();
    ctrl.removeComponent(1450);
    // ctrl.clearComponents();
  }

  _initControllers() {
    this._initStatementCtrl();
    this._initActionCardsCtrl();
    this._initEventsCtrl();
  }
}
