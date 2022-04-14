/**
 * Orange Juice Calculator
 */

var orangeJuiceMain = function (numGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var glassesPerGuest = 2;
  var numGlasses = numGuest * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `We will need ${numOranges} oranges.`;
  return myOutputValue;
};

/**
 * Orange Juice Calculator - Advanced
 * Function to accept 2 inputs. Do not worry about our input field not accepting >1 parameter for now.
 

 var orangeJuiceMainAdvanced = function (numGuest, glassesPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var numGlasses = numGuest * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `We will need ${numOranges} oranges.`;
  return myOutputValue;
 */

/**
 * House Paint
 */

var paintMain = function (pricePerLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var roomArea = 3 * 3;
  var numRooms = 6;
  var paintAreaPerLitre = 300;
  var numCoats = 2;
  // Calculate amount of paint needed
  var litrePaintNeeded = ((roomArea * numRooms) / paintAreaPerLitre) * numCoats;
  var costOfPainting = pricePerLitre * litrePaintNeeded;
  var myOutputValue = `The cost of painting the house is $${costOfPainting}.`;
  return myOutputValue;
};

/**
 * House Paint - Advanced
 */

var paintMainAdvanced = function (pricePerLitre, numRooms, numCoats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var roomArea = 3 * 3;
  var paintAreaPerLitre = 300;
  // Calculate amount of paint needed
  var litrePaintNeeded = ((roomArea * numRooms) / paintAreaPerLitre) * numCoats;
  var costOfPainting = pricePerLitre * litrePaintNeeded;
  var myOutputValue = `The cost of painting the house is $${costOfPainting}.`;
  return myOutputValue;
};

/**
 * Dice Roll Program Logic. (3.3.2) Rigged Dice Exercise
 */

var rollDice = function (rigged = false) {
  // rig the dice in debug mode
  if (rigged) {
    console.log("rigged dice, returning 6");
    return 6;
  }

  // Generate a float from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomFloat = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomFloat);
  // Make the random integer range from 1 to 6 inclusive.
  var randomDice = randomInteger + 1;

  return randomDice;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDiceNumber1 = rollDice((rigged = true));
  var randomDiceNumber2 = rollDice((rigged = true));

  var gotSnakeEyes = randomDiceNumber1 == 1 && randomDiceNumber2 == 1;

  // Default output
  var myOutputValue = `Your first roll is ${randomDiceNumber1}. Your second roll is ${randomDiceNumber2}. You guessed ${input}. `;

  /**
   * Main Exercise
   
  // Winning condition - If both rolls are same as guess AND rolls are not snake eyes, you win.
  if (
    randomDiceNumber1 == input &&
    randomDiceNumber2 == input &&
    !gotSnakeEyes
  ) {
    myOutputValue += `YOU WIN!`;
  }
  */

  var difference1 = randomDiceNumber1 - input;
  var difference2 = randomDiceNumber2 - input;

  /** 
   * Case 1
   
  // Case 1 Win - If guess is within 1 for any of 2 dice.

  if (Math.abs(difference1) <= 1 || Math.abs(difference2) <= 1) {
    myOutputValue += `User wins if guess is within 1 for any of 2 dice. So you win!!!`;
  }

  // Return and print output.
  return myOutputValue;
};
*/

  /**
 * Case 2

  // Case 2 Win - If guess is within 1 for ALL 2 dice.

  if (Math.abs(difference1) <= 1 && Math.abs(difference2) <= 1) {
    myOutputValue += `User wins if guess is within 1 for ALL 2 dice. So you win!!!`;
  }

  // Return and print output.
  return myOutputValue;
};
*/

  /** 
 * Case 3
 

  // Case 3 Win - If guess is within 1 for any of 2 dice, but no snake eyes roll.

  if (
    (Math.abs(difference1) <= 1 || Math.abs(difference2) <= 1) &&
    !gotSnakeEyes
  ) {
    myOutputValue += `User wins if guess is within 1 for any of the 2 dice, AND user does not roll snake eyes. So you win!!!`;
  }

  // Return and print output.
  return myOutputValue;
};
*/

  // Case 4 Win - If guess is within 1 for any of 2 dice, OR snake eyes roll.

  if (
    Math.abs(difference1) <= 1 ||
    Math.abs(difference2) <= 1 ||
    gotSnakeEyes
  ) {
    myOutputValue += `<br/>User wins if guess is within 1 for any of the 2 dice, OR user rolls snake eyes. So you win!!!`;
  }

  // Return and print output.
  return myOutputValue;
};

/**
 * Secret Phrase Exercise
 */

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "the door shall not open.";
  // If input value is secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += "but you are nearly there.";
  } else {
    myOutputValue += "and nope, you are far from the right phrase.";
  }
  // return myOutputValue as output
  return myOutputValue;
};

/**
 * Dice Game (If, Else, Else If) - BASE EXERCISE
 */

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output statement
  var myOutputValue = `You guessed ${input}. You rolled ${randomDiceNumber}. `;

  /** Easier Dice Game - guess within 2 of dice roll
  
  var difference = input - randomDiceNumber;
  console.log("the difference is " + difference + ".");

  // If the guess is off by 2, the user wins.
  if (Math.abs(difference) <= 2) {
    myOutputValue += "You win!";
  } else {
    myOutputValue += "You lose.";
  }
  // Return myOutputValue as output.
  return myOutputValue;
  
  **/

  // Even Easier Dice Game - odd / even. More Comfortable - Combo Game
  // Remainder of dice roll and guess
  var remainderDiceRoll = randomDiceNumber % 2;
  var remainderGuess = input % 2;

  // Winning conditions
  // If roll and guess are odd, or roll and guess are even, you win
  if (remainderDiceRoll == remainderGuess) {
    myOutputValue += `You win!`;
  } else if (input == "palatable papaya") {
    myOutputValue += `You have inputted the secret phrase! You still WIN!`;
  } else {
    myOutputValue += `You lose.`;
  }
  return myOutputValue;
};

/**
 * Twice the guess dice game
 */

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Default output statement
  var myOutputValue = `You guessed ${input}. You rolled ${randomDiceNumber}.`;

  // If roll is twice of guess, you win.
  if (input == randomDiceNumber / 2) {
    myOutputValue += `Your roll is twice of your guess.You win!`;
  } else {
    myOutputValue += `Your roll is NOT twice of your guess. You lose.`;
  }
  return myOutputValue;
};
