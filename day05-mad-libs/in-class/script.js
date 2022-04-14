/**
 *  Base: Mad Libs Adjectives
 */

// Create default statement
var randomWord = ``;
var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomWord} wife.`;

// Initialise an empty names array
var adjectives = [];
var arrayLength = adjectives.length;

// Build a random integer generator (up to length of existing array)
var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input == `create`) {
    arrayLength = adjectives.length;
    randomWord = adjectives[getRandomIndex(arrayLength)];
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomWord} wife.`;
    var myOutputValue = madLib;
    return myOutputValue;
  }

  // Build the library of adjectives
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the adjectives array, and set found to true if the input name already
  // exists in the adjectives array

  for (var index = 0; index < adjectives.length; index += 1) {
    var currentName = adjectives[index];
    if (currentName == input) {
      found = true;
    }
  }
  // If no duplicate name was found, add the input name to the adjectives array
  if (!found) {
    adjectives.push(input);
  }

  //randomWord = adjectives[getRandomIndex(arrayLength)];
  //console.log(`random word generated is:${randomWord}`);

  myOutputValue = `All adjectives: ${adjectives}`;
  return myOutputValue;
};

/**
 *  Comfortable: Input and Create Mode
 */

// Declare variables and modes
var randomWord = ``;
var adjectives = [];
var arrayLength = adjectives.length;
var mode = "input";
var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomWord} wife.`;

// Build a random integer generator (up to length of existing array)
var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

  if (input == `input` || (input == `` && mode == "input")) {
    mode = input;
    return `You are now in INPUT mode. Enter an adjective to build your library or type "create" to switch to CREATE mode.`;
  }
  if (input == `create`) {
    mode = input;
    return `You are now in CREATE mode. Click Submit button again to generate madlib.`;
  }

  if (mode == `create` && input == ``) {
    arrayLength = adjectives.length;
    randomWord = adjectives[getRandomIndex(arrayLength)];
    console.log(`random word is ${randomWord}`);
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomWord} wife.`;

    return madLib;
  }

  // Build the library of adjectives (if input is not `input` or `create`)
  // Set a boolean value found to a default value of false
  var found = false;
  // Loop over the adjectives array, and set found to true if the input name already
  // exists in the adjectives array
  for (var index = 0; index < adjectives.length; index += 1) {
    var currentName = adjectives[index];
    if (currentName == input) {
      found = true;
    }
  }
  // If no duplicate name was found, add the input name to the adjectives array
  if (!found && input != ``) {
    adjectives.push(input);

    var myOutputValue = `You are in INPUT mode. All adjectives logged so far: ${adjectives}`;
    return myOutputValue;
  }
};

/**
 * Comfortable: Input Multiple Words
 */

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
