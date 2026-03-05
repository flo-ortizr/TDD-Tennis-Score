import Tennis from "./tennis.js";

const tennis = new Tennis();

const buttonJ1 = document.querySelector("#btn-j1");
const buttonJ2 = document.querySelector("#btn-j2");
const div = document.querySelector("#resultado-div");

// Mostrar estado inicial
div.innerHTML = "<p>" + tennis.score() + "</p>";

// Jugador 1 anota
buttonJ1.addEventListener("click", (event) => {
  event.preventDefault();
  tennis.player1Scores();
  div.innerHTML = "<p>" + tennis.score() + "</p>";
});

// Jugador 2 anota
buttonJ2.addEventListener("click", (event) => {
  event.preventDefault();
  tennis.player2Scores();
  div.innerHTML = "<p>" + tennis.score() + "</p>";
});