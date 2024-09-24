// VARIABLES
let button0 = document.getElementById("button0");
const textfield = document.getElementById("player1score");
const increaseScoreButton = document.getElementById("button0");

let score = 0;

// text
let playerRollText = document.getElementById("playerRollText");
let playerRoll = 0;



// PROCESSES
button0.addEventListener("click", function() {
  getRandomNumberFromOneToSixForPlayer ();
  showplayerrollresult();
});


// CONTROLLERS
function getRandomNumberFromOneToSixForPlayer () {
  playerRoll = Math.floor(Math.random() * 6 ) +1;
}

// VIEWS
function showplayerrollresult() {
  playerRollText.innerHTML = playerRoll;
}


