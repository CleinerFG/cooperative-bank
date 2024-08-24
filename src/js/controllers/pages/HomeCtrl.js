import { PageCtrl } from "./PageCtrl.js";
import { HomeView } from "../../views/pages/HomeView.js";
import { StatementCtrl } from "../display/StatementCtrl.js";
import { ActionCardsCtrl } from "../display/ActionCardsCtrl.js";
import { EventsCtrl } from "../../controllers/display/EventsCtrl.js"

export class HomeCtrl extends PageCtrl {
  constructor() {
    super(HomeView);
  }

  #initStatementController() {
    console.log("test1")
    const statementContainer = document.querySelector(".statement");
    new StatementCtrl(statementContainer);
  }

  #initActionCardsController() {
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

  #initEventsController() {
    // Test data
    const data = [
      {
        id: 1450,
        type: 2,
        dueDate: "10/05/2024",
        value: 2200,
      },
      {
        id: 1456,
        type: 1,
        dueDate: "10/09/2024",
        value: 300,
      },
      {
        id: 15565,
        type: 2,
        dueDate: "08/07/2024",
        value: 2800,
      },
      {
        id: 515,
        type: 2,
        dueDate: "09/05/2024",
        value: 3400,
      },
      {
        id: 104,
        type: 1,
        dueDate: "10/08/2024",
        value: 200,
      },
      {
        id: 410,
        type: 2,
        dueDate: "12/07/2024",
        value: 5800,
      },
      {
        id: 4610,
        type: 1,
        dueDate: "15/08/2024",
        value: 400,
      },
    ];

    const events = data.map(
      (event) => new Event(event.id, event.type, event.dueDate, event.value)
    );

    const container = document.querySelector(".events__cards");
    const ctrl = new EventsCtrl(container, "events");

    events.forEach((event) => ctrl.addComponent(event));
    ctrl.renderComponents();
    ctrl.removeComponent(1450);
    // ctrl.clearComponents();
  }

  _initControllers() {
    this.#initStatementController();
    this.#initActionCardsController();
    this.#initEventsController();
  }
}