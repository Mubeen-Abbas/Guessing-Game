let success = document.querySelector(".success");
let user_guess = document.querySelector(".input_index");
let score = document.querySelector(".score");
let start = document.querySelector(".start");
let score_user = 100;
let question_mark = document.querySelector(".question_mark");
let submit_index = document.querySelector(".submit_index");

let gameAudio = document.getElementById("gameAudio");
let successAudio = document.getElementById("successAudio");
let failAudio = document.getElementById("failAudio");

let random_number = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
let guessing_number;
submit_index.style.pointerEvents = "auto";
let startSubElement = document.querySelector(".start_sub");
let startElement = document.querySelector(".start");
function restart() {
  success.textContent = "Frequency";
  guessing_number = random_number(1, 100);
  question_mark.textContent = "?";
  startElement.style.pointerEvents = "none";
  startElement.style.backgroundColor = "lightgray";
  startElement.style.color = "gray";
  startElement.textContent = "Game In Progress";

  startSubElement.style.pointerEvents = "none";
  startSubElement.style.backgroundColor = "lightgray";
  startSubElement.style.color = "gray";
  startSubElement.textContent = "Game In Progress";

  gameAudio.play();
}

function submit() {
  console.log(guessing_number);
  let user_value = user_guess.value;
  if (user_value == guessing_number) {
    success.textContent = " You won";
    question_mark.textContent = guessing_number;
    successAudio.play();
  } else if (user_value > guessing_number) {
    success.textContent = "Too High";
    score_user -= 10;
    failAudio.play();
  } else if (user_value < guessing_number) {
    success.textContent = "Too low";
    score_user -= 10;
    failAudio.play();
  }
  score.textContent = score_user;
  if (score_user == 0) {
    success.textContent = "You lost  ";
    submit_index.style.pointerEvents = "none";
    question_mark.textContent = guessing_number;
    startElement.textContent = "Click reset";
    startSubElement.textContent = "Click reset";
  }
  if (success.textContent == "You won") {
    submit_index.style.pointerEvents = "none";
    question_mark.textContent = guessing_number;
    startElement.textContent = "Click reset";
    startSubElement.textContent = "Click reset";
  }
}

function reset() {
  location.reload();
}
function home() {
  window.location.href = "index.html";
}
