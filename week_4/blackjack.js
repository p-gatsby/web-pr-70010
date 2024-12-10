// packages needed to execute code
import superagent from "superagent"; // HTTP requests
import prompt from "prompt-sync"; // user input in the terminal
import chalk from "chalk"; //use color for texts

const userInput = prompt();
// Get a deck id and save to a variable
let deckId;
// Set player and dealer hand to empty lists
let playerHand = [];
let dealerHand = [];

// helper function to fetch a shuffled deck
async function getShuffledDeck() {
  const response = await superagent.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  // return the deck_id
  return response.body.deck_id;
}

// helper function to draw cards
async function drawCards(deckId, count = 1) {
  const response = await superagent.get(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );
  return response.body.cards;
}

// calculate score
function calculateScore(hand) {
  let score = 0;
  let aces = 0;

  for (let i = 0; i < hand.length; i++) {
    const value = hand[i].value;
    if (["KING", "QUEEN", "JACK"].includes(value)) {
      score += 10;
    } else if (value === "ACE") {
      aces += 1;
      score += 11;
    } else {
      score += parseInt(hand[i].value);
    }
  }

  // adjust score if aces make the total exceed 21
  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }

  return score;
}

// display hand
function displayHand(hand, name) {
  console.log(`${name}'s hand`);
  hand.forEach((card) => {
    console.log(chalk.bgCyan.black(`- ${card.value} of ${card.suit}`));
  });

  console.log(`Total Value: ${calculateScore(hand)}\n`);
}

async function playGame() {
  console.log(chalk.blue("Welcome to Gatsby's game of Blackjack\n"));

  deckId = await getShuffledDeck();

  // initial cards - 2 cards for the player and dealer
  playerHand = await drawCards(deckId, 2);
  dealerHand = await drawCards(deckId, 2);

  displayHand(playerHand, "Player");
  console.log("Dealer shows: ");
  console.log(
    chalk.bgRed.black(`- ${dealerHand[0].value} of ${dealerHand[0].suit}\n`)
  );

  // player's turn
  let playerTurn = true;
  while (playerTurn) {
    const playerScore = calculateScore(playerHand);
    if (playerScore > 21) {
      console.log(chalk.bgRed.black("Player Busts! Dealer wins\n"));
      return;
    }

    const action = userInput("Do you want to 'hit' or 'stand'? ");
    if (action.toLowerCase() === "hit") {
      const newCard = await drawCards(deckId, 1);
      //   console.log(newCard[0])
      playerHand.push(...newCard);
      displayHand(playerHand, "Player");
    } else if (action.toLowerCase() === "stand") {
      playerTurn = false;
    } else {
      console.error("Invalid action. Please type 'hit' or 'stand'.");
    }
  }

  // dealer's turn
  console.log("Dealer's turn...\n");
  displayHand(dealerHand, "Dealer");

  while (calculateScore(dealerHand) < 17) {
    console.log("Dealer hits...");
    const newCard = await drawCards(deckId, 1);
    dealerHand.push(...newCard);
    displayHand(dealerHand, "Dealer");
  }

  const dealerScore = calculateScore(dealerHand);
  const playerScore = calculateScore(playerHand);

  if (dealerScore > 21) {
    console.log(
      chalk.bgRed.black("Dealer busts!", chalk.bgGreen.black("Player wins!\n"))
    );
  } else if (playerScore > dealerScore) {
    console.log(chalk.bgGreen.black("Player wins!\n"));
  } else if (playerScore < dealerScore) {
    console.log(chalk.bgRed.black("Dealer wins!\n"));
  } else {
    console.log(
      chalk.bgRed.black("It's a tie, and you still lose your money!")
    );
  }
}

playGame();
