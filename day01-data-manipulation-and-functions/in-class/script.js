/*
 Base: Fahrenheit to Celsius
 */
var fahrenheitToCelsiusMain = function (Fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celcius = ((Fahrenheit - 32) * 5) / 9;
  var myOutputValue = "The temperature is " + celcius + ".";
  return myOutputValue;
};
/**
 * Base: Road Trip Cost
 */

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  var carMileage = 9;
  var costPerLitre = 2.2;
  var totalFuelConsumed = tripLengthInMiles / carMileage;
  var carfuelCost = totalFuelConsumed * costPerLitre;
  return carfuelCost;
};

var roadTripCostBaseMain = function (distanceInKm) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  /* var distanceInMiles = distanceInKm * 0.62;
  var carMileage = 9;
  var costPerLitre = 2.2;
  var totalFuelConsumed = distanceInMiles / carMileage;
  var fuelCost = totalFuelConsumed * costPerLitre;

  var myOutputValue = fuelCost;
  return myOutputValue; */

  var tripLengthInMiles = convertKmToMiles(distanceInKm);
  var totalCost = calculateTotalFuelCost(tripLengthInMiles);
  var myOutputValue = "The cost is $" + totalCost + ".";
  return myOutputValue;
};

/**
 * Comfortable: Road Trip Cost
 */

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCostForComfortable = function (
  tripLengthInMiles,
  costPerLitre
) {
  // Some code that calculates total fuel cost
  var trainCarMileage = 9;
  var totalFuelConsumed = tripLengthInMiles / trainCarMileage;
  var totalFuelCost = totalFuelConsumed * costPerLitre;
  return totalFuelCost;
};

var roadTripCostComfortableMain = function (distanceInKm) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var tripLengthInMiles = convertKmToMiles(distanceInKm);
  var fuelSavings =
    calculateTotalFuelCostForComfortable(tripLengthInMiles, 2.2) -
    calculateTotalFuelCostForComfortable(tripLengthInMiles, 2);
  var myOutputValue = "The fuelSavings is $" + fuelSavings + "";

  return myOutputValue;
};

/**
 *
 * More Comfortable: Ice Machine
 */

var iceMachineMain = function (noOfGuests) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var drinks = 2;
  var iceCube = 4;
  var weightOfIceInGrams = 1.5;
  var weightOfIceInPounds = weightOfIceInGrams / 454;
  var speed = 5;
  var duration = (noOfGuests * drinks * iceCube * weightOfIceInPounds) / speed;

  var myOutputValue =
    "The time taken to run the ice machine is " + duration + " hours.";
  return myOutputValue;
};

/**
 * More Comfortable: Beer Order
 */

var beerOrderMain = function (noOfCustomersPerDay) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var pintsPerCustPerVisit = 2;
  var noOfPintsPerKeg = 124;
  var noOfCustomersPerQuarter = noOfCustomersPerDay * 3 * 30;
  var noOfPintsPerQuarter = noOfCustomersPerQuarter * pintsPerCustPerVisit;
  var noOfKegsPerQuarter = noOfPintsPerQuarter / noOfPintsPerKeg;
  var myOutputValue = `The number of half-barrel kegs needed per quarter are ${noOfKegsPerQuarter}.`;
  return myOutputValue;
};

/**
 * More Comfortable: Cost of Cellular Data
 */

var cellularDataMain = function (dataPerMonth) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  // Calculate no. of 50GB plan needed per month
  var noOf50GBPlanNeeded = Math.ceil(dataPerMonth / 50);
  // Calculate total cost per month
  var totalCost = noOf50GBPlanNeeded * 19.99;
  // Calculate cost/GB
  var costPerGB = totalCost / dataPerMonth;

  var myOutputValue = `The cost per GB this month is ${costPerGB}`;
  return myOutputValue;
};
