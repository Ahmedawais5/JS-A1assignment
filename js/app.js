/// VARIABEL
const Dicebutton = document.getElementById('RollDice');
const Scoreboard1 = document.getElementById('Scoreboard1');
const Scoreboard2 = document.getElementById('Scoreboard2');
const Player1Dice = document.getElementById('Player1Dice');
const AIDice = document.getElementById('AIDice');
const DrawText = document.getElementById('DrawNoPoint');
let score2=0;
let score1 =0

let RandomNumber = "";
let RandomNumberAI = "";

///PROCESS

Dicebutton.addEventListener('click', () => {
  DrawText.innerText = "";
  RandomDiceNumber();
  NumberToImage();
  CheckWinner();

})

/// FUNCTIONS

function RandomDiceNumber() {
  RandomNumber = Math.floor(Math.random() * 6 )+1;
  console.log(RandomNumber);
  RandomNumberAI = Math.floor(Math.random() * 6)+1;
}

function NumberToImage() {
  if (RandomNumber === 1) {
    Player1Dice.src = "img/dice1.png";
  }
  else if(RandomNumber === 2) {
    Player1Dice.src = "img/dice2.png";

  }
  else if(RandomNumber === 3) {
    Player1Dice.src = "img/dice3.png";

  }
  else if(RandomNumber === 4) {
    Player1Dice.src = "img/dice4.png";

  }
  else if(RandomNumber === 5) {
    Player1Dice.src = "img/dice5.png";

  }
  else if(RandomNumber === 6) {
    Player1Dice.src = "img/dice6.png";

  }

  if(RandomNumberAI === 1) {
    AIDice.src = "img/dice1.png";
  }
  else if (RandomNumberAI === 2) {
    AIDice.src = "img/dice2.png";
  }
  else if(RandomNumberAI === 3) {
    AIDice.src = "img/dice3.png";
  }
  else if(RandomNumberAI === 4) {
    AIDice.src = "img/dice4.png";
  }
  else if(RandomNumberAI === 5) {
    AIDice.src = "img/dice5.png";
  }
  else if(RandomNumberAI === 6) {
    AIDice.src = "img/dice6.png";
  }





}

function CheckWinner() {
  if (RandomNumberAI > RandomNumber) {
    score2++;
    Scoreboard2.innerText = score2;
  }
else if (RandomNumberAI < RandomNumber) {

  score1++;
  Scoreboard1.innerText = score1;
  }
else if (RandomNumberAI == RandomNumber) {

  DrawText.innerText = "DRAW NO POINT";

  }



}


