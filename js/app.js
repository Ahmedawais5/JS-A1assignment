/// VARIABEL
const Dicebutton = document.getElementById('RollDice');
const Scoreboard1 = document.getElementById('Scoreboard1');
const Scoreboard2 = document.getElementById('Scoreboard2');
const Player1Dice = document.getElementById('Player1Dice');
const AIDice = document.getElementById('AIDice');
const DrawText = document.getElementById('DrawNoPoint');

let scoreAI= 0;
let scorePlayer = 0;

let RandomNumber = "";
let RandomNumberAI = "";

///PROCESS

loadGame();
updatescore();

Dicebutton.addEventListener('click', () => {
  DrawText.innerText = "";
  RandomDiceNumber();
  NumberToImage();
  CheckWinner();
  updatescore();
  saveasCookie();
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
    scoreAI++;
  }
else if (RandomNumberAI < RandomNumber) {

  scorePlayer++;
  }
else if (RandomNumberAI == RandomNumber) {

  DrawText.innerText = "DRAW NO POINT";

  }
}

 function updatescore() {
    Scoreboard2.innerText = scoreAI;
    Scoreboard1.innerText = scorePlayer;

 }

 // COOIKES
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}

function loadGame (){
  scorePlayer= getCookie("scorePlayer");
  scoreAI= getCookie("scoreAI");
}

 function saveasCookie() {
   document.cookie = "scoreAI=" + scoreAI + ";expires=Thu, 18 Dec 2025 12:00:00UTC";
   document.cookie = "scorePlayer=" + scorePlayer + ";expires=Thu, 18 Dec 2025 12:00:00UTC";
 }
