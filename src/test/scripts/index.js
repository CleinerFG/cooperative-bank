// import { HomeCtrl } from "../../js/controllers/pages/HomeCtrl.js";

// new HomeCtrl();

function something(a, b, c) {
  console.log("O parametro A e B serão passados posteriormente: ", a, b);
  console.log("O parametro C foi passado antes de armazenar a função: ", c);
}

const names = ["apple", "banana", "orange"];
const functions = [];

// funções armazenadas em functions:
function something(a, b) {
  console.log("O parametro A e B serão passados posteriormente: ", a, b);
  console.log("O parametro C foi passado antes de armazenar a função: ", "apple");
}

function something(a, b) {
  console.log("O parametro A e B serão passados posteriormente: ", a, b);
  console.log("O parametro C foi passado antes de armazenar a função: ", "banana");
}

function something(a, b) {
  console.log("O parametro A e B serão passados posteriormente: ", a, b);
  console.log("O parametro C foi passado antes de armazenar a função: ", "orange");
}