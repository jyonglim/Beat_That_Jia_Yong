var main = function (input) {
  var myOutputValue = "hello world. You have inputted " + input + ".";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "Hello " +
    input +
    ", you look great today! " +
    input +
    " is a wonderful name, I love it! <br/> Nice to meet you!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = distanceInMiles;
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var speedTrain1 = 200;
  var timeTrain1ToTokyo = 2;
  var distanceToTokyo = speedTrain1 * timeTrain1ToTokyo;
  var delayForTrain2 = input;
  var timeTrain2ToTokyo = timeTrain1ToTokyo - delayForTrain2;
  var speedTrain2 = distanceToTokyo / timeTrain2ToTokyo;

  var myOutputValue = `Train 2 will need to travel at ${speedTrain2} kph to reach Tokyo the same time as Train 1.`;
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var minutesPast1Pm = input;

  // Calculate position of hour hand after input minutes has passed
  var percentageHourHandMoved = minutesPast1Pm / 60;
  var angleOfHourHandRefTo0000 =
    360 / 12 + (360 / 12) * percentageHourHandMoved;

  // Calculate position of minute hand based on input minutes
  var angleOfMinuteHandRefTo0000 = percentageHourHandMoved * 360;

  var angleBetwHourAndMinute = Math.abs(
    angleOfMinuteHandRefTo0000 - angleOfHourHandRefTo0000
  );

  var myOutputValue = `The angle between the hour hand and minute hand is ${angleBetwHourAndMinute} degree.`;
  return myOutputValue;
};
