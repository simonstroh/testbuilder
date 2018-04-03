// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var cardString = cardNumber
  if ((cardString.slice(0, 2) === "34" || cardString.slice(0, 2) === "37") && cardString.length === 15) {
    return "American Express"
  } else if ((cardString.slice(0, 2) === "38" || cardString.slice(0, 2) === "39") && cardString.length === 14) {
    return "Diner's Club"
  } else if (cardString.slice(0, 1) === "4" && (cardString.length === 16 || cardString.length === 13 || cardString.length === 19)) {
    return "Visa"
  } else if ((cardString.slice(0, 2) === "51" || cardString.slice(0, 2) === "52" || cardString.slice(0, 2) === "53" || cardString.slice(0, 2) === "54" || cardString.slice(0, 2) === "55") && cardString.length === 16) {
    return "MasterCard"
  } else if (cardString.slice(0, 4) === "6011" && (cardString.length === 16 || cardString.length === 19)) {
    return "Discover"
  }

  for (i = 644; i <= 649; i++) {
    if (cardString.slice(0, 3) === i.toString() && (cardString.length === 16 || cardString.length === 19)) {
      return "Discover"
    }
  }
  for (i = 12; i <= 19; i++) {
    if (cardString.length === i && (cardString.slice(0, 4) === "5018" || cardString.slice(0, 4) === "5020" || cardString.slice(0, 4) === "5038" || cardString.slice(0, 4) === "6304")) {
      return "Maestro"
    }
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
