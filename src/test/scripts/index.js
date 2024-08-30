const users = [
  {
    id: 417764,
    name: "Ace Visconti",
  },
  {
    id: 159387,
    name: "Ada Wong",
  },
  {
    id: 783100,
    name: "Adam Francis",
  },
  {
    id: 474239,
    name: "Ashley J. Williams",
  },
  {
    id: 918578,
    name: "Cheryl Mason",
  },
  {
    id: 727257,
    name: "Claudette Morel",
  },
  {
    id: 810821,
    name: "David King",
  },
  {
    id: 650515,
    name: "Detective David Tapp",
  },
  {
    id: 616073,
    name: "Dwight Fairfield",
  },
  {
    id: 479909,
    name: "Élodie Rakoto",
  },
  {
    id: 421775,
    name: "Felix Richter",
  },
  {
    id: 891925,
    name: "Feng Min",
  },
  {
    id: 774724,
    name: "Gabriel Soma",
  },
  {
    id: 484195,
    name: "Haddie Kaur",
  },
  {
    id: 117070,
    name: "Jake Park",
  },
  {
    id: 316696,
    name: "Jane Romero",
  },
  {
    id: 674494,
    name: "Jeff Johansen",
  },
  {
    id: 457473,
    name: "Jill Valentine",
  },
  {
    id: 273127,
    name: "Jonah Vasquez",
  },
  {
    id: 880008,
    name: "Kate Denson",
  },
  {
    id: 791006,
    name: "Laurie Strode",
  },
  {
    id: 156411,
    name: "Leon S. Kennedy",
  },
  {
    id: 809141,
    name: "Meg Thomas",
  },
  {
    id: 605106,
    name: "Mikaela Reid",
  },
  {
    id: 667148,
    name: "Nea Karlsson",
  },
  {
    id: 656423,
    name: "Nicolas Cage",
  },
  {
    id: 236512,
    name: "Quentin Smith",
  },
  {
    id: 654940,
    name: "Rebecca Chambers",
  },
  {
    id: 205473,
    name: "Renato Lyra",
  },
  {
    id: 209738,
    name: "Thalita Lyra",
  },
  {
    id: 262177,
    name: "The Artist",
  },
  {
    id: 554002,
    name: "The Blight",
  },
  {
    id: 693693,
    name: "The Cannibal (Leatherface)",
  },
  {
    id: 557505,
    name: "The Cenobite (Pinhead)",
  },
  {
    id: 818596,
    name: "The Clown",
  },
  {
    id: 285170,
    name: "The Deathslinger",
  },
  {
    id: 696293,
    name: "The Demogorgon",
  },
  {
    id: 955582,
    name: "The Doctor",
  },
  {
    id: 888354,
    name: "The Dredge",
  },
  {
    id: 763011,
    name: "The Executioner (Pyramid Head)",
  },
  {
    id: 784905,
    name: "The Ghost Face",
  },
  {
    id: 262748,
    name: "The Hag",
  },
  {
    id: 348009,
    name: "The Hillbilly",
  },
  {
    id: 300267,
    name: "The Huntress",
  },
  {
    id: 246545,
    name: "The Knight",
  },
  {
    id: 540585,
    name: "The Legion",
  },
  {
    id: 181390,
    name: "The Mastermind (Albert Wesker)",
  },
  {
    id: 890670,
    name: "The Nemesis",
  },
  {
    id: 572491,
    name: "The Nightmare (Freddy Krueger)",
  },
  {
    id: 782704,
    name: "The Nurse",
  },
  {
    id: 853214,
    name: "The Oni",
  },
  {
    id: 951034,
    name: "The Onryō (Sadako)",
  },
  {
    id: 125844,
    name: "The Pig",
  },
  {
    id: 731148,
    name: "The Plague",
  },
  {
    id: 380938,
    name: "The Shape (Michael Myers)",
  },
  {
    id: 541637,
    name: "The Singularity",
  },
  {
    id: 786749,
    name: "The Skull Merchant",
  },
  {
    id: 376498,
    name: "The Spirit",
  },
  {
    id: 162691,
    name: "The Trapper",
  },
  {
    id: 933982,
    name: "The Trickster",
  },
  {
    id: 676786,
    name: "The Twins",
  },
  {
    id: 124394,
    name: "The Wraith",
  },
  {
    id: 515617,
    name: "The Xenomorph (Alien)",
  },
  {
    id: 426085,
    name: "Vittorio Toscano",
  },
  {
    id: 711711,
    name: "William 'Bill' Overbeck",
  },
  {
    id: 985792,
    name: "Yoichi Asakawa",
  },
  {
    id: 191212,
    name: "Yui Kimura",
  },
  {
    id: 638997,
    name: "Yun-Jin Lee",
  },
  {
    id: 182616,
    name: "Zarina Kassir",
  },
];

class SearchInput {
  #researchData;
  #dataset;
  constructor(input, resultList, dataset, researchData) {
    this.input = input;
    this.resultList = resultList;
    this.#dataset = dataset;
    this.#researchData = researchData;
    this.init();
  }

  #getElementDataset(element) {
    return element.dataset[`${this.#dataset}Id`];
  }

  #setElementDataset(element, value) {
    element.dataset[`${this.#dataset}Id`] = value;
  }

  #filterList(query) {
    const normalizedQuery = query.toLowerCase();
    return this.#researchData.filter(({ name }) =>
      name.toLowerCase().includes(normalizedQuery)
    );
  }

  #handleItemClick = (event) => {
    const selectedItem = event.target;
    this.#setElementDataset(input, this.#getElementDataset(selectedItem));
    this.input.value = selectedItem.textContent;
    this.resultList.innerHTML = "";
  };

  #renderItems(listItems) {
    this.resultList.innerHTML = "";
    listItems.forEach(({ id, name }) => {
      const li = document.createElement("li");

      li.className = "query-item";
      this.#setElementDataset(li, id);
      li.textContent = name;

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
    }, 200);
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

new SearchInput(input, resultList, "creditor", users);
