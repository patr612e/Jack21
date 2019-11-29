"use strict";

// HTML ELEMENTS

const playButton = document.querySelector("#play");
const hitButton = document.querySelector("#hit");

const playerCardsPos = document.querySelector("#playercards");
const playerScorePos = document.querySelector("#playerscore_printed");

// EVENTLISTENERS

hitButton.addEventListener("click", hit);
playButton.addEventListener("click", dealPlayerCard);

// ARRAYS

let dealerCards = [];
let playerCards = [];
let deck = [
  {
    name: "2",
    value: 2,
    image: "tba"
  },
  {
    name: "2",
    value: 2,
    image: "tba"
  },
  {
    name: "2",
    value: 2,
    image: "tba"
  },
  {
    name: "2",
    value: 2,
    image: "tba"
  },
  {
    name: "3",
    value: 3,
    image: "tba"
  },
  {
    name: "3",
    value: 3,
    image: "tba"
  },
  {
    name: "3",
    value: 3,
    image: "tba"
  },
  {
    name: "3",
    value: 3,
    image: "tba"
  },
  {
    name: "4",
    value: 4,
    image: "tba"
  },
  {
    name: "4",
    value: 4,
    image: "tba"
  },
  {
    name: "4",
    value: 4,
    image: "tba"
  },
  {
    name: "4",
    value: 4,
    image: "tba"
  },
  {
    name: "5",
    value: 5,
    image: "tba"
  },
  {
    name: "5",
    value: 5,
    image: "tba"
  },
  {
    name: "5",
    value: 5,
    image: "tba"
  },
  {
    name: "5",
    value: 5,
    image: "tba"
  },
  {
    name: "6",
    value: 6,
    image: "tba"
  },
  {
    name: "6",
    value: 6,
    image: "tba"
  },
  {
    name: "6",
    value: 6,
    image: "tba"
  },
  {
    name: "6",
    value: 6,
    image: "tba"
  },
  {
    name: "7",
    value: 7,
    image: "tba"
  },
  {
    name: "7",
    value: 7,
    image: "tba"
  },
  {
    name: "7",
    value: 7,
    image: "tba"
  },
  {
    name: "7",
    value: 7,
    image: "tba"
  },
  {
    name: "8",
    value: 8,
    image: "tba"
  },
  {
    name: "8",
    value: 8,
    image: "tba"
  },
  {
    name: "8",
    value: 8,
    image: "tba"
  },
  {
    name: "8",
    value: 8,
    image: "tba"
  },
  {
    name: "9",
    value: 9,
    image: "tba"
  },
  {
    name: "9",
    value: 9,
    image: "tba"
  },
  {
    name: "9",
    value: 9,
    image: "tba"
  },
  {
    name: "9",
    value: 9,
    image: "tba"
  },
  {
    name: "10",
    value: 10,
    image: "tba"
  },
  {
    name: "10",
    value: 10,
    image: "tba"
  },
  {
    name: "10",
    value: 10,
    image: "tba"
  },
  {
    name: "10",
    value: 10,
    image: "tba"
  },
  {
    name: "J",
    value: 10,
    image: "tba"
  },
  {
    name: "J",
    value: 10,
    image: "tba"
  },
  {
    name: "J",
    value: 10,
    image: "tba"
  },
  {
    name: "J",
    value: 10,
    image: "tba"
  },
  {
    name: "Q",
    value: 10,
    image: "tba"
  },
  {
    name: "Q",
    value: 10,
    image: "tba"
  },
  {
    name: "Q",
    value: 10,
    image: "tba"
  },
  {
    name: "Q",
    value: 10,
    image: "tba"
  },
  {
    name: "K",
    value: 10,
    image: "tba"
  },
  {
    name: "K",
    value: 10,
    image: "tba"
  },
  {
    name: "K",
    value: 10,
    image: "tba"
  },
  {
    name: "K",
    value: 10,
    image: "tba"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "tba"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "tba"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "tba"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "tba"
  }
];

// GLOBAL VARIABLES

let playerScore;
let dealerScore;

function dealPlayerCards() {
  // CARD 1

  const card1 = deck[Math.floor(Math.random() * deck.length)];
  const index1 = deck.indexOf(card1);
  deck.splice(index1, 1);
  playerCards.push(card1);

  // CARD 2

  const card2 = deck[Math.floor(Math.random() * deck.length)];
  const index2 = deck.indexOf(card2);
  deck.splice(index2, 1);
  playerCards.push(card2);

  console.log(card1);
  console.log(card2);
  console.log(deck);

  // UPDATE DOM

  document.querySelector(".cardtype1").textContent = card1.name;
  document.querySelector(".cardtype2").textContent = card2.name;

  // DISABLE DEAL BUTTON

  // IF TWO ACES USE DIFFERENT CARD VALUE

  calcScore(card1, card2);
}

function dealPlayerCard() {
  // Pick and splice card from deck array

  let card = deck[Math.floor(Math.random() * deck.length)];
  let location = deck.indexOf(card);
  deck.splice(location, 1);

  // Add to playerCards array
  playerCards.push(card);

  addCardToDOM(card);

  // Call Calc playerCards array value function
}

function addCardToDOM(card) {
  let domcard = document.createElement("div");
  domcard.classList.add("card");

  // add style class to element
  // modify position on each element

  // append to DOM

  playerCardsPos.appendChild(domcard);

  console.log(playerCards);

  calcPlayerScore();
}

function calcPlayerScore() {
  let score = 0;

  playerCards.forEach(card => {
    score += card.value;
  });

  playerScore = score;
  console.log(playerScore);

  playerScorePos.textContent = playerScore;

  bustCheck();
}

function calcScore(card1, card2) {
  console.log(card1);
  console.log(card2);

  playerScore = card1.value + card2.value;
}

function bustCheck() {
  if (playerScore > 21) {
    alert("busted");
  }
}

function hit() {
  // Pick and splice random card from deck array
  // Add to playerCards array
  // Calc new score and update playerScore
  // Call bustCheck()
}

function resetGame() {
  // reset arrays (push, pop etc.)
  // reset scores
  // reset DOM
}
