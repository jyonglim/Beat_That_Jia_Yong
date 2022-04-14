// -- Project breakdown
// 1. Roll 2 dice and return output for player 1. Player then chooses the dice order, and return the new output.
// 2. Repeat for player 2.
// -- i. Store player 1 score.
// -- ii. Return to roll dice mode for player 2 to play.
// -- iii. Store player 2 score
// 3. Compare scores for player 1 and 2. Determine winner.
// 4. Restart game for both players to repeat.

// Declare game modes, global variables
var GAME_MODE_ROLL_DICE = `GAME_MODE_ROLL_DICE`;
var GAME_MODE_CHOOSE_DICE_ORDER = `GAME_MODE_CHOOSE_DICE_ORDER`;
var GAME_MODE_COMPARE_SCORES = `GAME_MODE_COMPARE_SCORES`;
var gameState = GAME_MODE_ROLL_DICE;

var REGULAR_MODE = `REGULAR MODE`;
var LOWEST_COMBINED_MODE = `LOWEST COMBINED MODE`;
var mode = "";

var currentPlayerRolls = [];

var currentPlayer = 1;
var allPlayersScore = [];
var grandAllPlayersScore = [0, 0];

// Declare function for roll dice
var rollDice = function () {
  var randomInteger = Math.floor(Math.random() * 6) + 1;
  return randomInteger;
};

// Declare function to roll 2 dice
var rollTwoDice = function () {
  console.log(`Check: Start of rollTwoDice()`);
  for (var counter = 0; counter < 2; counter += 1) {
    currentPlayerRolls.push(rollDice());
  }
  console.log(`Check: End of rollTwoDice. playerRolls: ${currentPlayerRolls}`);

  return `Hello, Player ${currentPlayer}. You rolled:<br><br>Dice 1: ${currentPlayerRolls[0]}.<br>Dice 2: ${currentPlayerRolls[1]}.<br><br>Click Submit again to automatically tabulate your final score/value for this round.`;
};

// Declare function to get player score
var getPlayerScore = function (userInput) {
  var playerScore;
  // userInput validation
  if (userInput != 1 && userInput != 2) {
    //console.log(`check allPlayerScore ${allPlayersScore}`);
    gameState = GAME_MODE_CHOOSE_DICE_ORDER;
    return `Invalid input!<br>Please only key in "1" or "2" to select the dice # to be used as first digit of your final score/ value.<br><br>Your dice rolls are <br>Dice 1: ${currentPlayerRolls[0]}<br>Dice 2: ${currentPlayerRolls[1]}.`;
  }
  // if userinput == 1
  if (userInput == 1) {
    playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
  }
  // if userInput == 2
  if (userInput == 2) {
    playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
  }
  // store current player score into array. Player 1 score in [0], Player 2 score in [1]
  allPlayersScore.push(playerScore);
  console.log(`check ${allPlayersScore}`);
  // clear current player rolls
  currentPlayerRolls = [];
  return `Player ${currentPlayer}. Your chosen value is: ${playerScore}.`;
};

// Declare function to tabulate player's score automatically
var getPlayerScoreAuto = function () {
  var playerScore;
  // if REGULAR mode
  if (mode == REGULAR_MODE) {
    if (currentPlayerRolls[0] > currentPlayerRolls[1]) {
      playerScore = Number(
        String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
      );
    }
    if (currentPlayerRolls[1] > currentPlayerRolls[0]) {
      playerScore = Number(
        String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
      );
    }
    if (currentPlayerRolls[1] == currentPlayerRolls[0]) {
      playerScore = Number(
        String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
      );
    }
  }
  // if LOWEST COMBINED mode
  if (mode == LOWEST_COMBINED_MODE) {
    if (currentPlayerRolls[0] > currentPlayerRolls[1]) {
      playerScore = Number(
        String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
      );
    }
    if (currentPlayerRolls[1] > currentPlayerRolls[0]) {
      playerScore = Number(
        String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
      );
    }
    if (currentPlayerRolls[1] == currentPlayerRolls[0]) {
      playerScore = Number(
        String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
      );
    }
  }
  // store current player score into array. Player 1 score in [0], Player 2 score in [1]
  allPlayersScore.push(playerScore);
  console.log(`check ${allPlayersScore}`);
  // clear current player rolls
  currentPlayerRolls = [];
  return `Player ${currentPlayer}. Your auto calculated value is: ${playerScore}.`;
};

// Declare function to compare grand score so far
var compareScore = function () {
  // generic output message
  grandAllPlayersScore[0] = grandAllPlayersScore[0] + allPlayersScore[0];
  grandAllPlayersScore[1] = grandAllPlayersScore[1] + allPlayersScore[1];
  var myOutputValue = `For this round:<br><br>Player 1 score: ${allPlayersScore[0]}<br>Player 2 score: ${allPlayersScore[1]}.`;

  // If game mode is REGULAR
  if (mode == REGULAR_MODE) {
    // Player 1 temporary wins
    if (grandAllPlayersScore[0] > grandAllPlayersScore[1]) {
      myOutputValue += `<br><br>Player 1 is leading!<br><br>Current leaderboard:<br><br>Player 2: ${grandAllPlayersScore[1]}<br>Player 1: ${grandAllPlayersScore[0]}<br><br>Click Submit button to play again.`;
      return myOutputValue;
    }
    // Player 2 temporary wins
    if (grandAllPlayersScore[1] > grandAllPlayersScore[0]) {
      myOutputValue += `<br><br>Player 2 is leading!<br><br>Current leaderboard:<br><br>Player 1: ${grandAllPlayersScore[0]}<br>Player 2: ${grandAllPlayersScore[1]}<br><br>Click Submit button to play again.`;
      return myOutputValue;
    }
    // Temporary Draw
    if (grandAllPlayersScore[0] == grandAllPlayersScore[1]) {
      myOutputValue += `<br><br>It's a draw!<br><br>Click Submit button to play again.<br><br>Current leaderboard:<br><br>Player 1: ${grandAllPlayersScore[0]}<br>Player 2: ${grandAllPlayersScore[1]}`;
      return myOutputValue;
    }
  }

  // If game mode is LOWEST COMBINED MODE
  if (mode == LOWEST_COMBINED_MODE) {
    // Player 1 temporary wins
    if (grandAllPlayersScore[0] < grandAllPlayersScore[1]) {
      myOutputValue += `<br><br>Player 1 is leading!<br><br>Current leaderboard:<br><br>Player 2: ${grandAllPlayersScore[1]}<br>Player 1: ${grandAllPlayersScore[0]}<br><br>Click Submit button to play again.`;
      return myOutputValue;
    }
    // Player 2 temporary wins
    if (grandAllPlayersScore[1] < grandAllPlayersScore[0]) {
      myOutputValue += `<br><br>Player 2 is leading!<br><br>Current leaderboard:<br><br>Player 1: ${grandAllPlayersScore[0]}<br>Player 2: ${grandAllPlayersScore[1]}<br><br>Click Submit button to play again.`;
      return myOutputValue;
    }
    // Temporary Draw
    if (grandAllPlayersScore[0] == grandAllPlayersScore[1]) {
      myOutputValue += `<br><br>It's a draw!<br><br>Click Submit button to play again.<br><br>Current leaderboard:<br><br>Player 1: ${grandAllPlayersScore[0]}<br>Player 2: ${grandAllPlayersScore[1]}`;
      return myOutputValue;
    }
  }
};

// Declare function to reset this round game
var resetGame = function () {
  currentPlayer = 1;
  gameState = GAME_MODE_ROLL_DICE;
  allPlayersScore = [];
};

var main = function (input) {
  // Select mode - REGULAR or LOWEST COMBINED
  if (!mode) {
    if (input != REGULAR_MODE && input != LOWEST_COMBINED_MODE) {
      return `Please input either 'REGULAR MODE' or 'LOWEST COMBINED MODE' to choose your mode.`;
    }
    mode = input;
    console.log(mode);
    return `You have selected ${mode}.<br>Player ${currentPlayer} please click Submit to roll your dice.`;
  }

  var myOutputValue = ``;
  if (gameState == GAME_MODE_ROLL_DICE && currentPlayerRolls.length == 0) {
    // Display rolled dice as output message
    myOutputValue = rollTwoDice();
    // Change game state after dice are rolled
    gameState = GAME_MODE_CHOOSE_DICE_ORDER;
    return myOutputValue;
  }

  if (gameState == GAME_MODE_CHOOSE_DICE_ORDER) {
    // Call getPlayerScore function
    myOutputValue = getPlayerScoreAuto(input);

    /** Not required anymore to check invalid inputs now with auto calculation of score 
    // If input is invalid (not 1 or 2)
    if (
      (currentPlayer == 1 && allPlayersScore[0] == undefined) ||
      (currentPlayer == 2 && allPlayersScore[1] == undefined)
    ) {
      return myOutputValue;
    }
    */

    // Switch to next player
    /** else*/ if (currentPlayer == 1) {
      currentPlayer = 2;
      gameState = GAME_MODE_ROLL_DICE;
      return myOutputValue + `<br><br>Now it's Player 2's turn!`;
    }
    if (currentPlayer == 2) {
      gameState = GAME_MODE_COMPARE_SCORES;
      return (
        myOutputValue + `<br><br>Click Submit to tabulate the score so far!`
      );
    }
  }

  if (gameState == GAME_MODE_COMPARE_SCORES) {
    myOutputValue = compareScore();
    resetGame();
    return myOutputValue;
  }
};
