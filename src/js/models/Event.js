export class Event {
  constructor(type, eventID, dueDate, value) {
    this._type = type || "NoEvents";
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
}
