// global scope
var globalVariable = 0;

/**
 * Base Exercise: Follow Along (Intro to Scope)
  

// also global scope
var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }

  return myOutputValue;
};
*/

/**
 * Base Exercises Global variables
 */
// Track the previous dice roll value
var prevDiceRoll = 0;
//console.log(`The previous roll was ${prevDiceRoll}`);

// Track the num of games played
var numOfGamesPlayed = 0;
//console.log(`The num of games played is ${numOfGamesPlayed}`);

// Trace the num of games won and winrate
var numOfGamesWon = 0;
var winRate = 0;

// Trace the num of points won so far
var numOfPoints = 0;

/**
 * Set a function that returns the value of a dice roll
 */
var rollDice = function () {
  // Generate random decimal between 0 (inclusive) and 6 (exclusive)
  var randomDecimal = Math.random() * 6;
  // Generate random integer betw 0 (inclusive) and 5 (inclusive)
  var randomInteger = Math.floor(randomDecimal);
  // Generate random integer betw 1 to 6
  var diceNum = randomInteger + 1;

  return diceNum;
};

/**
 * Base: App Setup
 
var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = `You rolled ${randomDiceNumber}. You lose.`;

  if (randomDiceNumber == input) {
    myOutputValue = `You rolled ${randomDiceNumber}. You WIN!`;
  }
  return myOutputValue;
};
*/

/**
 * Base: Last Roll. Set a function that displays info about the previous dice roll
 */
var getPreviousRollInfo = function () {
  if (prevDiceRoll == 0) {
    return `This is your first roll.`;
  } else {
    return `Your previous roll was ${prevDiceRoll}. `;
  }
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  // Generate output statement if it is first roll
  var randomDiceNumber = rollDice();
  var prevDiceRollInfo = getPreviousRollInfo();
  prevDiceRoll = randomDiceNumber;
  console.log(`Reassigning prevDiceRoll as ${prevDiceRoll}`);
  var myOutputValue =
    prevDiceRollInfo +
    `You just rolled a ${randomDiceNumber}. You guessed ${input}. `;
  if (input == randomDiceNumber) {
    myOutputValue += `You win!`;
  } else {
    myOutputValue += "You lose!";
  }
  return myOutputValue;
};

/**
 * Base: Win / Loss. Tell them what their current win / loss percentage is.
 */

var getWinRate = function () {
  return `You win ${winRate}% of the time. `;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var randomDiceNumber = rollDice();

  numOfGamesPlayed += 1;
  console.log(`The num of games played so far ${numOfGamesPlayed}`);

  if (input == randomDiceNumber) {
    numOfGamesWon += 1;
    console.log(
      `num of games won so far ${numOfGamesWon}. num of games played so far ${numOfGamesPlayed}`
    );
    winRate = (numOfGamesWon / numOfGamesPlayed) * 100;
    var myOutputValue =
      getWinRate() +
      `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  } else {
    winRate = (numOfGamesWon / numOfGamesPlayed) * 100;
    myOutputValue =
      getWinRate() +
      `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
  }
  return myOutputValue;
};

/**
 * More Comfortable - Most Rolled
 */

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "hello world333";
  return myOutputValue;
};

/**
 * More Comfortable - Guessing
 */

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice();
  if (input == randomDiceNumber) {
    numOfPoints += 2;
    var myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 2 points.<br/>Your total points are ${numOfPoints}.`;
  } else if (Math.abs(input - randomDiceNumber) == 1) {
    numOfPoints += 1;
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 1 point.<br/>Your total points are ${numOfPoints}.`;
  } else {
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained ZERO point.<br/>Your total points are ${numOfPoints}.`;
  }

  return myOutputValue;
};

/**
 * More Comfortable - Advanced Guessing
 */

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var randomDiceNumber = rollDice();
  if (input == randomDiceNumber) {
    numOfPoints += 5;
    var myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 5 points.<br/>Your total points are ${numOfPoints}.`;
  } else if (Math.abs(input - randomDiceNumber) == 1) {
    numOfPoints += 4;
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 4 points.<br/>Your total points are ${numOfPoints}.`;
  } else if (Math.abs(input - randomDiceNumber) == 2) {
    numOfPoints += 3;
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 3 points.<br/>Your total points are ${numOfPoints}.`;
  } else if (Math.abs(input - randomDiceNumber) == 3) {
    numOfPoints += 2;
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 2 points.<br/>Your total points are ${numOfPoints}.`;
  } else if (Math.abs(input - randomDiceNumber) == 4) {
    numOfPoints += 1;
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained 1 points.<br/>Your total points are ${numOfPoints}.`;
  } else {
    myOutputValue = `You rolled ${randomDiceNumber}. You guessed ${input}. You gained ZERO point.<br/>Your total points are ${numOfPoints}.`;
  }

  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
