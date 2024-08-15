export class Event {
  constructor(type, dueDate, value) {
    this.type = type || "WhithoutEvent";
    this.dueDate = dueDate;
    this.value = value;
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