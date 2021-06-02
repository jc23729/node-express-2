// Solve the following problem in JavaScript:

// Turn a string of 24h time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

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