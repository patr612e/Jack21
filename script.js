"use strict";

// HTML ELEMENTS

const playButton = document.querySelector("#play");
const hitButton = document.querySelector("#hit");
const standButton = document.querySelector("#stand");
const resetButton = document.querySelectorAll(".reset");

const playerCardsPos = document.querySelector("#playercards");
const playerScorePos = document.querySelector("#playerscore_printed");
const dealerCardsPos = document.querySelector("#dealercards");
const dealerScorePos = document.querySelector("#dealerscore_printed");
const infoForDeal = document.querySelector("#deal-info");
const infoForHit = document.querySelector("#hit-info");
const infoForStand = document.querySelector("#stand-info");
let firstTimePlaying = true;

const endgamePCards = document.querySelectorAll(".endgame_pcards");
const endgameDCards = document.querySelectorAll(".endgame_dcards");
const endgamePScore = document.querySelectorAll(".endgame_pscore");
const endgameDScore = document.querySelectorAll(".endgame_dscore");

// EVENTLISTENERS

playButton.addEventListener("click", () => {
  playButton.classList.add("disabled_button");
  infoForDeal.style.visibility = "hidden";

  setTimeout(dealDealerCard, 300);
  setTimeout(dealPlayerCard, 600);
  setTimeout(dealDealerCard, 900);
  setTimeout(dealPlayerCard, 1200);
  if (firstTimePlaying === true) {
    setTimeout(function() {
      infoForHit.style.visibility = "visible";
      infoForStand.style.visibility = "visible";
    }, 2000);

    firstTimePlaying = false;
  } else {
  }

  playButton.disabled = true;

  standButton.disabled = false;
  hitButton.disabled = false;
  resetButton.disabled = true;

  hitButton.classList.remove("disabled_button");
  standButton.classList.remove("disabled_button");
});

hitButton.addEventListener("click", dealPlayerCard);
standButton.addEventListener("click", standClicked);

resetButton.forEach(btn => {
  btn.addEventListener("click", resetGame);
});
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
window.dealerCards = dealerCards;
window.playerCards = playerCards;

console.log(deck);
// GLOBAL VARIABLES

let playerScore;
let dealerScore;
let visibleDealerScore;

//USER INFO

// DEALER SIDE

function dealDealerCard() {
  console.log("deal dealer card");
  let card = deck[Math.floor(Math.random() * deck.length)];
  let location = deck.indexOf(card);
  deck.splice(location, 1);

  // Add to dealerCards array
  dealerCards.push(card);

  addDealerCardToDOM(card);

  console.log(dealerScore);

  const clonedsound = document.querySelector("#dealingsound").cloneNode();
  clonedsound.play();

  //disable deal button
}

function addDealerCardToDOM(card) {
  let domcard = document.createElement("div");
  domcard.classList.add("card");
  domcard.style.backgroundImage = `url('${card.image}')`;

  // add style class to element
  // modify position on each element

  // append to DOM

  dealerCardsPos.appendChild(domcard);

  let ca = domcard.getBoundingClientRect();
  let dk = document.querySelector("#deck").getBoundingClientRect();

  //style transform add
  domcard.style.transform = `translate(${dk.x - ca.x}px, ${dk.y - ca.y}px) scaleX(-1) `;

  setTimeout(function() {
    //add transition
    domcard.style.transition = "all 1s";

    //style transform remove
    domcard.style.transform = `scaleX(-1)`;
  }, 200);

  setTimeout(function() {
    domcard.style.transform = "scaleX(-1) rotateY(180deg)";
    domcard.style.backgroundImage = `url('${card.image}')`;
  }, 200);

  setTimeout(function() {
    domcard.style.transform = "none";
    domcard.style.transition = "none";
  }, 3600);

  console.table(dealerCards);

  let forsteKort = dealerCardsPos.firstElementChild;
  forsteKort.classList.add("card_backside");

  calcDealerScore();
}

function calcDealerScore() {
  let score = 0;

  const index = dealerCards.findIndex(card => card.name === "A");

  let ace = null;
  if (index > -1) {
    ace = dealerCards.splice(index, 1);
    ace = ace[0];
  }

  dealerCards.forEach(card => {
    score += card.value;
  });

  if (ace) {
    console.log("ACE", score);
    if (score + 11 > 21) {
      score += 1;
    } else {
      score += 11;
    }
    dealerCards.push(ace);
    console.log(score);
  }

  dealerScore = score;

  visibleDealerScore = score - dealerCards[0].value;

  dealerScorePos.textContent = visibleDealerScore;
}

// PLAYER SIDE

function dealPlayerCard() {
  let card = deck[Math.floor(Math.random() * deck.length)];
  let location = deck.indexOf(card);
  deck.splice(location, 1);

  // Add to playerCards array
  playerCards.push(card);

  addPlayerCardToDOM(card);

  console.log(playerScore);
  document.querySelector("#dealingsound").play();

  // Call Calc playerCards array value function
}

function addPlayerCardToDOM(card) {
  let domcard = document.createElement("div");
  domcard.classList.add("card");
  domcard.style.backgroundImage = `url('./svg/cards/card.svg')`;

  // append to DOM

  playerCardsPos.appendChild(domcard);

  //get bounding clientRect
  let ca = domcard.getBoundingClientRect();
  let dk = document.querySelector("#deck").getBoundingClientRect();

  //style transform add
  domcard.style.transform = `translate(${dk.x - ca.x}px, ${dk.y - ca.y}px) scaleX(-1) `;

  setTimeout(function() {
    //add transition
    domcard.style.transition = "all 1s";

    //style transform remove
    domcard.style.transform = `scaleX(-1)`;
  }, 200);

  setTimeout(function() {
    domcard.style.transform = "scaleX(-1) rotateY(180deg)";
    domcard.style.backgroundImage = `url('${card.image}')`;
  }, 200);

  setTimeout(function() {
    domcard.style.transform = "none";
    domcard.style.transition = "none";
  }, 3600);

  console.table(playerCards);

  calcPlayerScore();
}

function calcPlayerScore() {
  let score = 0;

  const index = playerCards.findIndex(card => card.name === "A");

  let ace = null;
  if (index > -1) {
    // ace is an array:
    ace = playerCards.splice(index, 1);
    // ace is first (and only) object in array:
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
const endgamePCardsb = document.querySelector("#endgame_pcards");
const endgameDCardsb = document.querySelector("#endgame_dcards");
const endgamePScoreb = document.querySelector("#endgame_pscore");
const endgameDScoreb = document.querySelector("#endgame_dscore");

function bustCheck() {
  if (playerScore > 21) {
    console.log("dealer wins, you went bust!");
    hitButton.disabled = true;
    standButton.disabled = true;

    setTimeout(function() {
      document.querySelector("#overlay").style.opacity = "1";
    }, 2000);

    // turn (show) first card
    let firstCard = dealerCardsPos.firstElementChild;
    setTimeout(function() {
      firstCard.classList.remove("card_backside");
      dealerScorePos.textContent = dealerScore;
    }, 1000);

    setTimeout(function() {
      document.querySelector("#player_bust").classList.remove("hide");
      bustCheckClone();
    }, 2000);
  }

  function bustCheckClone() {
    let firstCard = dealerCardsPos.firstElementChild;
    firstCard.classList.remove("card_backside");
    endgameDScoreb.textContent = dealerScore;
    endgamePScoreb.textContent = playerScore;

    let clonePb = playerCardsPos.cloneNode(true);
    let cloneDb = dealerCardsPos.cloneNode(true);

    endgamePCardsb.appendChild(clonePb);
    endgameDCardsb.appendChild(cloneDb);
  }

  //You went bust window

  // play again (reset) button
}

function standClicked() {
  console.log("clicked på stand");

  // find firstCard

  let firstCard = dealerCardsPos.firstElementChild;

  // let firstCard = dealerCards[0];

  // firstCard.style.backgroundImage = "url(svg/cards/card.svg)";

  // og find card

  stand(firstCard);
  infoForStand.style.visibility = "hidden";
  infoForHit.style.visibility = "hidden";
}

function stand(firstCard) {
  // disable buttons

  hitButton.disabled = true;
  hitButton.classList.add("disabled_button");
  standButton.disabled = true;
  standButton.classList.add("disabled_button");

  resetButton.forEach(btn => {
    btn.classList.remove("disabled_button");
    btn.disabled = false;
  });

  // resetButton.disabled = false;
  // resetButton.classList.remove("disabled_button");

  // draw a card until score is 17 or more
  drawACard();

  function drawACard() {
    if (dealerScore < 17) {
      dealDealerCard();
    }
    if (dealerScore < 17) {
      setTimeout(drawACard, 1000);
    } else {
      // turn (show) first card
      setTimeout(function() {
        firstCard.classList.remove("card_backside");
        dealerScorePos.textContent = dealerScore;
        determineWinner();
      }, 1000);
    }
  }

  /*
  while (dealerScore < 17) {
    //setTimeout(dealDealerCard, 1000);
    dealDealerCard();
  }
*/
  // reveal dealerScore
}

function determineWinner() {
  console.log("determinewinner");

  if (dealerScore > 21 && playerScore <= 21) {
    console.log("player wins, dealer went bust");
    setTimeout(function() {
      document.querySelector("#dealer_bust").classList.remove("hide");
    }, 1500);
  }

  if (dealerScore > playerScore && dealerScore <= 21 && playerScore <= 21) {
    console.log("dealer wins, dealer has the highest hand");

    setTimeout(function() {
      document.querySelector("#dealer_wins").classList.remove("hide");
    }, 1500);
  }

  if (dealerScore == playerScore && playerScore < 21 && dealerScore < 21) {
    console.log("it's a tie!");

    setTimeout(function() {
      document.querySelector("#tie").classList.remove("hide");
    }, 1500);
  }

  if (playerScore > dealerScore && playerScore <= 21) {
    console.log("player wins, player has the highest hand");

    setTimeout(function() {
      document.querySelector("#player_wins").classList.remove("hide");
    }, 1500);
  }

  if (dealerScore === 21) {
    console.log("dealer wins, dealer has blackjack");

    setTimeout(function() {
      document.querySelector("#dealer_blackjack").classList.remove("hide");
    }, 1500);
  }

  if (playerScore === 21) {
    console.log("player wins, player has blackjack!");

    setTimeout(function() {
      document.querySelector("#player_blackjack").classList.remove("hide");
    }, 1500);
  }

  if (playerScore > 21) {
    console.log("dealer wins, you went bust");

    setTimeout(function() {
      document.querySelector("#player_bust").classList.remove("hide");
    }, 1500);
  }
  console.log("virker overlay");

  setTimeout(function() {
    document.querySelector("#overlay").style.opacity = "1";
  }, 1500);

  // document.querySelector("#overlay").style.opacity = "1";

  cloneToEndgameBox();
}

function cloneToEndgameBox() {
  console.log("cloning");

  endgameDScore.forEach(score => {
    score.textContent = dealerScore;
  });
  endgamePScore.forEach(score => {
    score.textContent = playerScore;
  });

  endgamePCards.forEach(endgamebox => {
    let cloneP = playerCardsPos.cloneNode(true);
    endgamebox.appendChild(cloneP);
  });
  endgameDCards.forEach(endgamebox => {
    let cloneD = dealerCardsPos.cloneNode(true);
    endgamebox.appendChild(cloneD);
  });
}

function resetGame() {
  document.querySelector("#overlay").style.opacity = "0";
  // reset arrays (push, pop etc.)

  for (let i = 0; i < dealerCards.length; i++) {
    deck.push(dealerCards[i]);
    dealerCards.splice(i, 1);
    i--;
  }

  for (let i = 0; i < playerCards.length; i++) {
    deck.push(playerCards[i]);
    playerCards.splice(i, 1);
    i--;

    infoForStand.style.visibility = "hidden";
    infoForHit.style.visibility = "hidden";
  }

  // reset scores

  playerScore = 0;
  dealerScore = 0;
  visibleDealerScore = 0;

  // reset DOM

  dealerCardsPos.innerHTML = "";
  playerCardsPos.innerHTML = "";

  playerScorePos.textContent = 0;
  dealerScorePos.textContent = 0;

  endgameDScore.textContent = 0;
  endgamePScore.textContent = 0;

  endgameDCardsb.innerHTML = "";
  endgamePCardsb.innerHTML = "";

  endgameDCards.forEach(window => {
    window.innerHTML = "";
  });

  endgamePCards.forEach(window => {
    window.innerHTML = "";
  });

  document.querySelectorAll(".endgame").forEach(window => {
    window.classList.add("hide");
  });

  // hide class on play again windows

  // enable buttons, remove classes

  playButton.disabled = false;
  playButton.classList.remove("disabled_button");
  hitButton.disabled = true;
  hitButton.classList.add("disabled_button");
  standButton.disabled = true;
  standButton.classList.add("disabled_button");
}

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
document.querySelector("#playerName").textContent = id;

let signBtn = document.querySelectorAll(".sign-button");

signBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    location.href = "form.html?id=" + id;
  });
});
