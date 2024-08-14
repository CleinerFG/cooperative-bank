export class Event {
  constructor(type, dueDate, value) {
    this.type = type;
    this.dueDate = dueDate;
    this.value = value;
  }

  render() {
    // Call CardData.render()
    console.log("Render call");
  }
}
