/**
 * Exercise - Follow Along
 */

// Declare card deck object
var deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1
  },
  {
    name: "2",
    suit: "spades",
    rank: 2
  },
  {
    name: "3",
    suit: "spades",
    rank: 3
  },
  {
    name: "4",
    suit: "spades",
    rank: 4
  },
  {
    name: "5",
    suit: "spades",
    rank: 5
  },
  {
    name: "6",
    suit: "spades",
    rank: 6
  },
  {
    name: "7",
    suit: "spades",
    rank: 7
  },
  {
    name: "8",
    suit: "spades",
    rank: 8
  },
  {
    name: "9",
    suit: "spades",
    rank: 9
  },
  {
    name: "10",
    suit: "spades",
    rank: 10
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12
  },
  {
    name: "king",
    suit: "spades",
    rank: 13
  }
];

// Declare shuffle deck function
// -- Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// -- Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // -- Return the shuffled deck
  return cardDeck;
};

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(deck);

var followObjectsMain = function (input) {
  // Attempt the Follow Along exercise from the Objects module below with followObjectsMain as the main function.
  var computerCardOne = shuffledDeck.pop();
  var computerCardTwo = shuffledDeck.pop();
  var playerCardOne = shuffledDeck.pop();
  var playerCardTwo = shuffledDeck.pop();
  // Default output statement
  var myOutputValue = `Computer draw "${computerCardOne.name} of ${computerCardOne.suit}" and "${computerCardTwo.name} of ${computerCardTwo.suit}".
  Player draw "${playerCardOne.name} of ${playerCardOne.suit}" and "${playerCardTwo.name} of ${playerCardTwo.suit}". `;

  // Compare cards by rank attribute
  if (
    Math.max(computerCardOne.rank, computerCardTwo.rank) >
    Math.max(playerCardOne.rank, playerCardTwo.rank)
  ) {
    myOutputValue += `<br><br>Computer WINS!`;
  }

  if (
    Math.max(computerCardOne.rank, computerCardTwo.rank) <
    Math.max(playerCardOne.rank, playerCardTwo.rank)
  ) {
    myOutputValue += `<br><br>Player WINS!`;
  }
  // If rank is same, compare by suit - works for 1 card. But not for 2 cards (I give up)
  if (
    Math.max(computerCardOne.rank, computerCardTwo.rank) ==
    Math.max(playerCardOne.rank, playerCardTwo.rank)
  ) {
    /**
     * If 1 card, compare suit to determine winner
     
    if (computerCard.suit == `spades`) {
      myOutputValue += `<br><br>Computer WINS!`;
    } else if (
      computerCard.suit == `hearts` &&
      (playerCard.suit == `clubs` || playerCard == `diamonds`)
    ) {
      myOutputValue += `<br><br>Computer WINS!`;
    } else if (computerCard.suit == `clubs` && playerCard.suit == `diamonds`) {
      myOutputValue += `<br><br>Computer WINS!`;
    } else myOutputValue += `<br><br>Player WINS!`;
    */
    myOutputValue += `<br><br>It's a TIE!`;
  }

  return myOutputValue;
  // Note: This game will run into error when the cards run out from drawing.
};

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
