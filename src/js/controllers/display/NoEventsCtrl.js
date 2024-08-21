import { NoEventsView } from "../../views/display/NoEventsView.js";
import pathUtil from "../../utils/PathManager.js";

export class NoEventsCtrl {
  #pathManager;
  #imgFile;
  constructor() {
    this.noEventsViewClass = NoEventsView;
    this.#pathManager = pathUtil;
    this.#imgFile = "astronaut.svg";
  }

  get imgFile() {
    return this.#imgFile;
  }

  set imgFile(value) {
    this.#imgFile = value;
  }

  #pathHandler() {
    this.#pathManager.updatePath(
      "asset",
      "#no-events-astronaut",
      "images",
      this.#imgFile
    );
  }

  
}
