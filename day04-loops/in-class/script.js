/**
 * Base: Emoji Drawing Number of Characters
 */

var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = ``;
  for (var i = 0; i < input; i += 1) {
    myOutputValue += `👍`;
  }
  return myOutputValue;
};

/**
 * Base: Emoji Drawing Square
 */

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = ``;
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      myOutputValue += "👍";
    }
    myOutputValue += "<br/>";
  }
  return myOutputValue;
};

/**
 * Comfortable: Emoji Drawing Triangle
 */

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = ``;
  for (var i = 1; i <= input; i += 1) {
    for (var j = 0; j < i; j += 1) {
      myOutputValue += "👍";
    }
    myOutputValue += "<br/>";
  }
  return myOutputValue;
};

/**
 * More Comfortable: Emoji Drawing Outline Square
 */

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = ``;
  for (var outer = 0; outer < input; outer += 1) {
    for (var inner = 0; inner < input; inner += 1) {
      if (
        outer == 0 ||
        outer == input - 1 ||
        inner == 0 ||
        inner == input - 1
      ) {
        myOutputValue += `✊`;
      } else {
        myOutputValue += "👍";
      }
    }
    myOutputValue += "<br/>";
  }
  return myOutputValue;
};

/**
 * More Comfortable: Emoji Drawing Center Square
 */

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = ``;
  if (input % 2 != 1) {
    return `Please enter an odd number`;
  }
  for (var outer = 0; outer < input; outer += 1) {
    for (var inner = 0; inner < input; inner += 1) {
      if (
        outer == 0 ||
        outer == input - 1 ||
        inner == 0 ||
        inner == input - 1
      ) {
        myOutputValue += `✊`;
      } else if (inner == (input - 1) / 2 && outer == (input - 1) / 2) {
        myOutputValue += `😊`;
      } else {
        myOutputValue += "👍";
      }
    }
    myOutputValue += "<br/>";
  }
  return myOutputValue;
};

/**
 * Base: Multi-Dice Game
 */

// Declare variables
var numOfDiceRoll;
var guessOfDiceRoll;

// Generate random dice roll
var rollDice = function () {
  var getRandomNum = Math.floor(Math.random() * 6) + 1;
  return getRandomNum;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  // Declare variables

  // Generate output statement for Mode 1
  numOfDiceRoll = input;

  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
