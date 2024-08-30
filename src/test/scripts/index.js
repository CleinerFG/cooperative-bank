const users = [
  "Dwight Fairfield",
  "Meg Thomas",
  "Claudette Morel",
  "Jake Park",
  "Nea Karlsson",
  "Laurie Strode",
  "Ace Visconti",
  "William 'Bill' Overbeck",
  "Feng Min",
  "David King",
  "Quentin Smith",
  "Detective David Tapp",
  "Kate Denson",
  "Adam Francis",
  "Jeff Johansen",
  "Jane Romero",
  "Ashley J. Williams",
  "Yui Kimura",
  "Zarina Kassir",
  "Cheryl Mason",
  "Felix Richter",
  "Élodie Rakoto",
  "Yun-Jin Lee",
  "Jill Valentine",
  "Leon S. Kennedy",
  "Mikaela Reid",
  "Jonah Vasquez",
  "Yoichi Asakawa",
  "Haddie Kaur",
  "Ada Wong",
  "Rebecca Chambers",
  "Vittorio Toscano",
  "Thalita Lyra",
  "Renato Lyra",
  "Gabriel Soma",
  "Nicolas Cage",
  "The Trapper",
  "The Wraith",
  "The Hillbilly",
  "The Nurse",
  "The Shape (Michael Myers)",
  "The Hag",
  "The Doctor",
  "The Huntress",
  "The Cannibal (Leatherface)",
  "The Nightmare (Freddy Krueger)",
  "The Pig",
  "The Clown",
  "The Spirit",
  "The Legion",
  "The Plague",
  "The Ghost Face",
  "The Demogorgon",
  "The Oni",
  "The Deathslinger",
  "The Executioner (Pyramid Head)",
  "The Blight",
  "The Twins",
  "The Trickster",
  "The Nemesis",
  "The Cenobite (Pinhead)",
  "The Artist",
  "The Onryō (Sadako)",
  "The Dredge",
  "The Mastermind (Albert Wesker)",
  "The Knight",
  "The Skull Merchant",
  "The Singularity",
  "The Xenomorph (Alien)",
].sort((a, b) => a.localeCompare(b));

class SearchInput {
  #researchData;

  constructor(input, resultList, researchData) {
    this.input = input;
    this.resultList = resultList;
    this.#researchData = researchData;
    this.init();
  }

  #filterList(query) {
    const normalizedQuery = query.toLowerCase();
    return this.#researchData.filter((item) =>
      item.toLowerCase().includes(normalizedQuery)
    );
  }

  #handleItemClick = (event) => {
    const selectedItem = event.target.textContent;
    console.log(`Credor selected: ${selectedItem}`);
    this.input.value = selectedItem;
    this.resultList.innerHTML = "";
  };

  #renderItems(listItems) {
    this.resultList.innerHTML = "";

    listItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "query-item";
      li.dataset.queryId = index;
      li.textContent = item;

      li.addEventListener("click", this.#handleItemClick);

      this.resultList.appendChild(li);
    });
  }

  #handleInput = (event) => {
    const query = event.target.value;
    const filteredList = this.#filterList(query);
    this.#renderItems(filteredList);
  };

  #clearItemsOnBlur = () => {
    setTimeout(() => {
      this.resultList.innerHTML = "";
      console.log("Clear items");
    }, 100);
  };

  init() {
    this.input.addEventListener("click", () =>
      this.#renderItems(this.#researchData)
    );
    this.input.addEventListener("input", this.#handleInput);
    this.input.addEventListener("blur", this.#clearItemsOnBlur);
  }
}

const input = document.querySelector("#creditor");
const resultList = document.querySelector("#creditor-result");

new SearchInput(input, resultList, users);
