// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour, minutes] = time.split(":");

  const numberWords = [
    "zero",
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
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  if (time === "00:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  function calculateTimeWord() {
    const numHour = Number(hour);
    const numMinutes = Number(minutes);

    if (numMinutes === 0) {
      return `${numberWords[numHour]} o'clock`;
    }

    const nextHour = numHour === 23 ? 0 : numHour + 1;
    const minutesToHour = 60 - numMinutes;

    if (numMinutes === 15) return `quarter past ${numberWords[numHour]}`;
    if (numMinutes === 30) return `half past ${numberWords[numHour]}`;
    if (numMinutes === 45) return `quarter to ${numberWords[nextHour]}`;

    if (numMinutes < 30) {
      return `${numberWords[numMinutes]} past ${numberWords[numHour]}`;
    } else {
      return `${numberWords[minutesToHour]} to ${numberWords[nextHour]}`;
    }
  }

  return calculateTimeWord();
}

console.log(convertTimeToWords("00:00"));
module.exports = { convertTimeToWords };
