// Solve the following problem in JavaScript:

// Turn a string of 24h time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

lowWords[15]
var lowWords = [
  "oh",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

var tensWords = ["twenty", "thirty", "forty", "fifty"];

// 1. Split the time string into hours and minutes.
// 2. If the hours are 00 and the minutes are 00, return “midnight”.
// 3. If the hours are 12 and the minutes are 00, return “noon”.
// 4. If the hours are less than 12, return the hours and minutes in the format “hours am”.
// 5. If the hours are greater than 12, return the hours and minutes in the format “hours pm”.

function timeToWords(timeStr) {
  let hours = timeStr.split(":")[0];
  let minutes = timeStr.split(":")[1];
  if (hours == "00" && minutes == "00") {
    return "midnight";
  } else if (hours == "12" && minutes == "00") {
    return "noon";
  } else if (hours < "12") {
    return `${convertHoursToWord(hours)} ${convertMinutesToWords(minutes)} am`;
  } else {
    return `${convertHoursToWord(hours)} ${convertMinutesToWords(minutes)} pm`;
  }
}

// 1. The function converts the hours to a string.
// 2. If the hours are greater than 12, the function subtracts 12 from the hours.
// 3. If the hours are equal to 0, the function returns the word “twelve”.
// 4. If the hours are anything else, the function returns the word for the hours.

function convertHoursToWord(hours) {
  var result;
  if (hours > "12") {
    hours -= 12;
  }
  if (hours == "00") {
    result = "twelve";
  } else {
    result = lowWords[parseInt(hours)];
  }
  return result;
}

// 1. The `convertMinutesToWords()` function takes a number of minutes as a parameter and returns a string.
// 2. If the number of minutes is "00", the function returns "o'clock".
// 3. If the number of minutes is less than the length of the `lowWords` array, the function returns the word at the corresponding index.
// 4. If the number of minutes is less than the length of the `tensWords` array, the function returns the word at the corresponding index.
// 5. If the number of minutes is greater than the length of the `tensWords` array, the function returns "unknown".

function convertMinutesToWords(minutes) {
  var tens, ones, result;
  if (minutes == "00") {
    result = "o'clock";
  } else if (minutes < lowWords.length) {
    if (minutes < "10") {
      result = `oh ${lowWords[parseInt(minutes)]}`;
    } else {
      result = lowWords[parseInt(minutes)];
    }
  } else {
    tens = Math.floor(minutes / 10);
    ones = minutes % 10;
    if (tens <= 5) {
      result = tensWords[tens - 2];
      if (ones > 0) {
        result += " " + lowWords[ones];
      }
    } else {
      result = "unknown";
    }
  }
  return result;
}

module.exports = { timeToWords, convertHoursToWord, convertMinutesToWords };