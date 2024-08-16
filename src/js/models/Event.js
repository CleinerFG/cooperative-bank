export class Event {
  constructor(type, eventID, dueDate, value) {
    this._type = type || "WithoutEvent";
    this._eventID = eventID;
    this._dueDate = dueDate;
    this._value = value;
  }

  get type() {
    return this._type;
  }

  get eventID() {
    return this._eventID;
  }

  get dueDate() {
    return this._dueDate;
  }

  get value() {
    return this._value;
  }

  getHtmlStr() {
    return `
    <div class="whithout__events">
      <img class="event__img" id="event-img-whithout">
      <p class="info-text">There are no events, as soon as there is something new we will let you know</p>
    </div>
    `;
  }
}
