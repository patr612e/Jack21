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
    image: "svg/cards/h-2.svg"
  },
  {
    name: "2",
    value: 2,
    image: "svg/cards/k-2.svg"
  },
  {
    name: "2",
    value: 2,
    image: "svg/cards/r-2.svg"
  },
  {
    name: "2",
    value: 2,
    image: "svg/cards/s-2.svg"
  },
  {
    name: "3",
    value: 3,
    image: "svg/cards/h-3.svg"
  },
  {
    name: "3",
    value: 3,
    image: "svg/cards/k-3.svg"
  },
  {
    name: "3",
    value: 3,
    image: "svg/cards/r-3.svg"
  },
  {
    name: "3",
    value: 3,
    image: "svg/cards/s-3.svg"
  },
  {
    name: "4",
    value: 4,
    image: "svg/cards/h-4.svg"
  },
  {
    name: "4",
    value: 4,
    image: "svg/cards/k-4.svg"
  },
  {
    name: "4",
    value: 4,
    image: "svg/cards/r-4.svg"
  },
  {
    name: "4",
    value: 4,
    image: "svg/cards/s-4.svg"
  },
  {
    name: "5",
    value: 5,
    image: "svg/cards/h-5.svg"
  },
  {
    name: "5",
    value: 5,
    image: "svg/cards/k-5.svg"
  },
  {
    name: "5",
    value: 5,
    image: "svg/cards/r-5.svg"
  },
  {
    name: "5",
    value: 5,
    image: "svg/cards/s-5.svg"
  },
  {
    name: "6",
    value: 6,
    image: "svg/cards/h-6.svg"
  },
  {
    name: "6",
    value: 6,
    image: "svg/cards/k-6.svg"
  },
  {
    name: "6",
    value: 6,
    image: "svg/cards/r-6.svg"
  },
  {
    name: "6",
    value: 6,
    image: "svg/cards/s-6.svg"
  },
  {
    name: "7",
    value: 7,
    image: "svg/cards/h-7.svg"
  },
  {
    name: "7",
    value: 7,
    image: "svg/cards/k-7.svg"
  },
  {
    name: "7",
    value: 7,
    image: "svg/cards/r-7.svg"
  },
  {
    name: "7",
    value: 7,
    image: "svg/cards/s-7.svg"
  },
  {
    name: "8",
    value: 8,
    image: "svg/cards/h-8.svg"
  },
  {
    name: "8",
    value: 8,
    image: "svg/cards/k-8.svg"
  },
  {
    name: "8",
    value: 8,
    image: "svg/cards/r-8.svg"
  },
  {
    name: "8",
    value: 8,
    image: "svg/cards/s-8.svg"
  },
  {
    name: "9",
    value: 9,
    image: "svg/cards/h-9.svg"
  },
  {
    name: "9",
    value: 9,
    image: "svg/cards/k-9.svg"
  },
  {
    name: "9",
    value: 9,
    image: "svg/cards/r-9.svg"
  },
  {
    name: "9",
    value: 9,
    image: "svg/cards/s-9.svg"
  },
  {
    name: "10",
    value: 10,
    image: "svg/cards/h-10.svg"
  },
  {
    name: "10",
    value: 10,
    image: "svg/cards/k-10.svg"
  },
  {
    name: "10",
    value: 10,
    image: "svg/cards/r-10.svg"
  },
  {
    name: "10",
    value: 10,
    image: "svg/cards/s-10.svg"
  },
  {
    name: "J",
    value: 10,
    image: "svg/cards/h-j.svg"
  },
  {
    name: "J",
    value: 10,
    image: "svg/cards/k-j.svg"
  },
  {
    name: "J",
    value: 10,
    image: "svg/cards/r-j.svg"
  },
  {
    name: "J",
    value: 10,
    image: "svg/cards/s-j.svg"
  },
  {
    name: "Q",
    value: 10,
    image: "svg/cards/h-q.svg"
  },
  {
    name: "Q",
    value: 10,
    image: "svg/cards/k-q.svg"
  },
  {
    name: "Q",
    value: 10,
    image: "svg/cards/r-q.svg"
  },
  {
    name: "Q",
    value: 10,
    image: "svg/cards/s-q.svg"
  },
  {
    name: "K",
    value: 10,
    image: "svg/cards/h-k.svg"
  },
  {
    name: "K",
    value: 10,
    image: "svg/cards/k-k.svg"
  },
  {
    name: "K",
    value: 10,
    image: "svg/cards/r-k.svg"
  },
  {
    name: "K",
    value: 10,
    image: "svg/cards/s-k.svg"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "svg/cards/h-1.svg"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "svg/cards/k-1.svg"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "svg/cards/r-1.svg"
  },
  {
    name: "A",
    value: 11,
    value2: 1,
    image: "svg/cards/s-1.svg"
  }
];
window.deck = deck;

console.log(deck);
// GLOBAL VARIABLES

let playerScore;
let dealerScore;

function dealPlayerCard() {
  // Pick and splice card from deck array

  let card = deck[Math.floor(Math.random() * deck.length)];
  let location = deck.indexOf(card);
  deck.splice(location, 1);

  // Add to playerCards array
  playerCards.push(card);

  addCardToDOM(card);

  console.log(playerScore);

  // Call Calc playerCards array value function
}

function addCardToDOM(card) {
  let domcard = document.createElement("div");
  domcard.classList.add("card");
  domcard.style.backgroundImage = `url('${card.image}')`;

  // add style class to element
  // modify position on each element

  // append to DOM

  playerCardsPos.appendChild(domcard);

  console.table(playerCards);

  calcPlayerScore();
}

function calcPlayerScore() {
  let score = 0;

  const index = playerCards.findIndex(card => card.name === "A");

  let ace = null;
  if (index > -1) {
    ace = playerCards.splice(index, 1);
    ace = ace[0];
  }

  playerCards.forEach(card => {
    score += card.value;
  });
  if (ace) {
    console.log("ACE", score);
    if (score + 11 > 21) {
      score += 1;
    } else {
      score += 11;
    }
    playerCards.push(ace);
    console.log(score);
  }

  playerScore = score;

  playerScorePos.textContent = playerScore;

  bustCheck();
}

function bustCheck() {
  if (playerScore > 21) {
    alert("busted");
  }
}

function resetGame() {
  // reset arrays (push, pop etc.)
  // reset scores
  // reset DOM
}
