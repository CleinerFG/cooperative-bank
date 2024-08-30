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


const creditorInput = document.querySelector("#creditor");
const creditorResultList = document.querySelector("#creditor-result");

creditorInput.addEventListener("click", () => populateCreditorList(users));
creditorInput.addEventListener("input", handleInput);
creditorInput.addEventListener("blur", clearCreditorListOnBlur);

function handleInput(event) {
  const searchQuery = event.target.value.toLowerCase();
  const filteredCreditors = filterCreditorsByName(searchQuery);
  populateCreditorList(filteredCreditors);
}

function filterCreditorsByName(query) {
  return users.filter((user) => user.toLowerCase().includes(query));
}

function populateCreditorList(creditors) {
  creditorResultList.innerHTML = "";

  creditors.forEach((creditor, index) => {
    const listItem = document.createElement("li");
    listItem.className = "creditor-item";
    listItem.dataset.creditorId = index;
    listItem.textContent = creditor;

    listItem.addEventListener("click", handleCreditorClick);

    creditorResultList.appendChild(listItem);
  });
}

function clearCreditorListOnBlur() {
  setTimeout(() => {
    creditorResultList.innerHTML = "";
  }, 200);
}

function handleCreditorClick(event) {
  const selectedCreditor = event.target.textContent;
  console.log(`Credor selecionado: ${selectedCreditor}`);
  creditorInput.value = selectedCreditor;
  creditorResultList.innerHTML = "";
}
