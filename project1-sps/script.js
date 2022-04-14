// Declare variables
var SCISSORS = `scissors`;
var PAPER = `paper`;
var STONE = `stone`;
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

// Declare initial states
var numOfUserWins = 0;
var numOfComputerWins = 0;
var numOfDraws = 0;
var numOfGames = 0;
var mode = ``;
var prevRoundWinner = ``;

// Declare game mode

// Keep track of user's name to personalise the game.
var userName = ``;

// Generate random computer output
var getRandomOutput = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return SCISSORS;
  }
  if (randomNum == 1) {
    return PAPER;
  }
  return STONE;
};

/**
 *  Return boolean if player wins computer
 */
var didPlayerWins = function (playerObject, computerObject) {
  return (
    (playerObject == SCISSORS && computerObject == PAPER) ||
    (playerObject == PAPER && computerObject == STONE) ||
    (playerObject == STONE && computerObject == SCISSORS) ||
    (playerObject == REVERSED_SCISSORS && computerObject == STONE) ||
    (playerObject == REVERSED_PAPER && computerObject == SCISSORS) ||
    (playerObject == REVERSED_STONE && computerObject == PAPER)
  );
};

/**
 *  Return boolean if player draws with computer
 */
var didPlayerDraws = function (playerObject, computerObject) {
  return (
    playerObject == computerObject ||
    (playerObject == REVERSED_SCISSORS && computerObject == SCISSORS) ||
    (playerObject == REVERSED_PAPER && computerObject == PAPER) ||
    (playerObject == REVERSED_STONE && computerObject == STONE)
  );
};

/**
 *  Generate default output message
 */
var getDefaultMessage = function (playerObject, computerObject) {
  return `The computer chose ${computerObject}.<br/>You chose ${playerObject}.<br/><br/>`;
};

/**
 * MAIN FUNCTION
 */
var main = function (input) {
  // Check if user name has been recorded. Otherwise, prompt user to input username.
  if (!userName) {
    // If user has yet to input anything, prompt user to input something as their username.
    if (!input) {
      return `Please input your username to start playing!`;
    }
    userName = input;
    return `Welcome ${userName}. Please key in to select your preferred game mode.`;
  }

  // Select game mode
  if (!mode) {
    if (!input) {
      return `Please input game mode to start playing.`;
    }
    if (input == `normal`) {
      mode = `normal`;
      return `You have selected NORMAL game mode. You may start playing.`;
    }
    if (input == `korean`) {
      mode = `korean`;
      return `You have selected KOREAN game mode. You may start playing`;
    } else {
      return `Invalid game mode! Please key in "normal" or "korean".`;
    }
  }

  // Check for invalid user input
  if (
    input != SCISSORS &&
    input != PAPER &&
    input != STONE &&
    input != REVERSED_SCISSORS &&
    input != REVERSED_PAPER &&
    input != REVERSED_STONE
  ) {
    return `You have provided an invalid input. Please key in only either "scissors", "paper" or "stone".`;
  }

  // Call function for random computer output
  var computerObject = getRandomOutput();
  // Call input playerObject
  var playerObject = input;
  // Call function for default output message
  var defaultMessage = getDefaultMessage(playerObject, computerObject);

  /**
   * Normal Game mode
   */

  // Win conditions
  if (mode == `normal`) {
    if (didPlayerWins(playerObject, computerObject)) {
      numOfGames += 1;
      numOfUserWins += 1;
      return (
        defaultMessage +
        `You WIN!<br/><br/># user wins: ${numOfUserWins}
        <br/># computer wins: ${numOfComputerWins}
        <br/># draw: ${numOfDraws}
        <br/><br/>So far ${userName}, you've been winning ${numOfUserWins}/${numOfGames} turns. Pretty good!`
      );
    }
    // DraW conditions
    if (didPlayerDraws(playerObject, computerObject)) {
      numOfGames += 1;
      numOfDraws += 1;
      return (
        defaultMessage +
        `You draw.<br/><br/># user wins: ${numOfUserWins}
        <br/># computer wins: ${numOfComputerWins}
        <br/># draw: ${numOfDraws}
        <br/><br/>So far ${userName}, you've been winning ${numOfUserWins}/${numOfGames} turns. Pretty good!`
      );
    }
    // Lose conditions
    numOfGames += 1;
    numOfComputerWins += 1;
    return (
      defaultMessage +
      `You lose! Bummer.<br/><br/># user wins: ${numOfUserWins}
      <br/># computer wins: ${numOfComputerWins}
      <br/># draw: ${numOfDraws}
      <br/><br/>So far ${userName}, you've been winning ${numOfUserWins}/${numOfGames} turns. Pretty good!`
    );
  }

  /**
   * Korean Game mode
   */

  if (mode == `korean` && prevRoundWinner == ``) {
    // First round conditions and outcomes
    if (didPlayerWins(playerObject, computerObject) && prevRoundWinner == ``) {
      prevRoundWinner = `player`;
      return defaultMessage + `You: MUK-JJI-PPA!<br/><br/>Throw again!`;
    }

    if (didPlayerDraws(playerObject, computerObject) && prevRoundWinner == ``) {
      return defaultMessage + `Draw!<br/><br/>Throw again!`;
    }
    prevRoundWinner = `computer`;
    return defaultMessage + `Computer: MUK-JJI-PPA!<br/><br/>Throw again!`;
  }

  // Second round conditions and outcomes
  if (mode == `korean` && prevRoundWinner == `player`) {
    if (didPlayerDraws(playerObject, computerObject)) {
      prevRoundWinner = ``;
      return defaultMessage + `You win the MUK-JJI-PPA!`;
    }
    if (didPlayerWins(playerObject, computerObject)) {
      prevRoundWinner = "player";
      return defaultMessage + `You: MUK-JJI-PPA!<br/><br/>Throw again!`;
    }
    prevRoundWinner = "computer";
    return defaultMessage + `Computer: MUK-JJI-PPA!<br/><br/>Throw again!`;
  }

  if (mode == `korean` && prevRoundWinner == `computer`) {
    if (didPlayerDraws(playerObject, computerObject)) {
      prevRoundWinner = ``;
      return defaultMessage + `Computer wins the MUK-JJI-PPA!`;
    }
    if (didPlayerWins(playerObject, computerObject)) {
      prevRoundWinner = "player";
      return defaultMessage + `You: MUK-JJI-PPA!<br/><br/>Throw again!`;
    }
    prevRoundWinner = "computer";
    return defaultMessage + `Computer: MUK-JJI-PPA!<br/><br/>Throw again!`;
  }
};
