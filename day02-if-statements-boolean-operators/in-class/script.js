/**
 *  Lucky 11
 */

// Function for diceroll
var rollDice = function (rigged = false) {
  if (rigged) {
    return 6;
  }

  // Generate random number for dice roll
  // Generate a float from 0 to 6, inclusive of 0 and exclusive of 6.
  var randomFloat = Math.random() * 6;
  // Remove decimal with the floor operation. Integer will be 0 to 5 inclusive.
  var randomInteger = Math.floor(randomFloat);
  // Make the random integer range from 1 to 6 inclusive.
  var randomDice = randomInteger + 1;
  return randomDice;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  // Generating 2 dice rolls
  var randomRollDice1 = rollDice((rigged = true));
  var randomRollDice2 = rollDice((rigged = true));
  // Generate default output.
  var myOutputValue = `You input ${input}. Your 1st roll is ${randomRollDice1}, 2nd roll is ${randomRollDice2}.`;
  // Winning conditions - (1) input = randomRollDice1, OR (2) input = randomRollDice2, OR (3) randomRollDice1 + randomRollDice2 = 11;
  var sumOfRollDice1n2 = randomRollDice1 + randomRollDice2;
  // Generating output
  if (
    input == randomRollDice1 ||
    input == randomRollDice2 ||
    sumOfRollDice1n2 === 12
  ) {
    myOutputValue += `You win!`;
  } else {
    myOutputValue += `You lose!`;
  }

  return myOutputValue;
};

/**
 * Hawker Food Categorization
 */

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.

  var myOutputValue = "The base of the food is ";
  if (input == "chicken rice" || input == "nasi lemak") {
    console.log(`Within if statement`);
    myOutputValue += "rice.";
  } else if (input == "hokkien mee" || input == "laksa") {
    console.log(`Within else if statement`);
    myOutputValue += "noodle.";
  } else if (input == "bak ku teh" || input == "prata") {
    myOutputValue += "other.";
  } else {
    myOutputValue = "Please input only the 6 options.";
  }

  return myOutputValue;
};

/**
 * Comfortable: 4D with Single-Digit Comparison
 */

var rollNum = function (rigged = false) {
  if (rigged) {
    return 6;
  }
  // Generate random number for 4D
  // Generate a float from 0 to 9, inclusive of 0 and exclusive of 9.
  var randomFloat = Math.random() * 9;
  // Round to the nearest integer. Integer will be 0 to 9 inclusive.
  var randomInteger = Math.round(randomFloat);
  return randomInteger;
};

// Generate ouput

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  // Generate 4 random numbers.
  var randomNum1 = rollNum();
  var randomNum2 = rollNum();
  var randomNum3 = rollNum();
  var randomNum4 = rollNum();
  // Generate default statement.
  var myOutputValue = `You have input ${input}. The winnning numbers are ${randomNum1}, ${randomNum2}, ${randomNum3}, ${randomNum4}. `;
  // Winning condition - If input equals to any of the 4 random numbers.
  if (
    input == randomNum1 ||
    input == randomNum2 ||
    input == randomNum3 ||
    input == randomNum4
  ) {
    myOutputValue += `YOU HAVE WON!`;
  } else {
    myOutputValue += "You lost!";
  }
  return myOutputValue;
};

/**
 * Comfortable: Hawker Food Randomness
 */

// Generate random number from 1 to 6
var generateRandomInteger = function (rigged = false, numOfDishes) {
  if (rigged) {
    return 6;
  }
  // Generate random float from 0 to max (6), inclusive of 0 and exclusive of max (6)
  var randomDecimal = Math.random() * numOfDishes;
  // Generate random integer from 1 to max inclusive
  var randomInteger = Math.round(randomDecimal) + 1;
  return randomInteger;
};

// Generate the random hawker dish that will be cooked
var generateRandomDish = function () {
  // Generate a random dish number between 1 to 6
  var randomDishNum = generateRandomInteger((rigged = false), 6);
  console.log(randomDishNum);
  if (randomDishNum == 1) {
    return `chicken rice`;
  } else if (randomDishNum == 2) {
    return `roti prata`;
  } else if (randomDishNum == 3) {
    return `nasi lemak`;
  } else if (randomDishNum == 4) {
    return `hokkien mee`;
  } else if (randomDishNum == 5) {
    return `bak ku teh`;
  } else if (randomDishNum == 6) {
    return `laksa`;
  } else {
    return `ERROR`;
  }
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var randomDish = generateRandomDish();
  // Generate generic output
  var myOutputValue = `Your guess is ${input}. Uncle cooked ${randomDish}. `;
  if (randomDish == input) {
    myOutputValue += `You WON! You get a free meal!`;
  } else {
    myOutputValue += `You LOSE! No free meal for you!`;
  }
  return myOutputValue;
};

/**
 * More Comfortable: 4D with Winning Range
 */

// Generate random 4-digit number from 0000 to 9999 both inclusive
var generateRandom4dNum = function () {
  // Generate random float from 0 (inclusive) to 10000 (exclusive)
  var randomFloat = Math.random() * 10000;
  // Generate random integer from 0 (inclusive) to 9999 (inclusive)
  var random4dNum = Math.floor(randomFloat);
  return random4dNum;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var winningNum = generateRandom4dNum();
  // Generate default output statement
  var differenceWinAndGuessNum = Math.abs(input - winningNum);
  var myOutputValue = `You have key in ${input}. The winning number is ${winningNum}. The difference is ${differenceWinAndGuessNum}. `;
  // Winning condition: Difference between input and winningNum is <=1000
  if (differenceWinAndGuessNum <= 1000) {
    myOutputValue += `You have WON!!`;
  }
  myOutputValue += `You LOST~~`;

  return myOutputValue;
};

/**
 * More Comfortable: Hawker Food Omakase
 */

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
