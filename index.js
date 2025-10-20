// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour, mins] = time.split(":");

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

  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  function calculateTimeWord() {
    let hourWord = numberWords[Number(hour) + 1];
    let leftMinsTohour = 60 - Number(mins);

    let miniutes =
      leftMinsTohour < 30
        ? numberWords[leftMinsTohour + 1]
        : numberWords[Number(mins) + 1];

    const formattedWord =
      mins === 0
        ? `${hourWord} o'clock`
        : mins < 30
        ? `${hourWord} past ${miniutes} `
        : `${numberWords[leftMinsTohour]} to ${hourWord}`;
    return formattedWord;
  }
  console.log(calculateTimeWord());
  return ``;
}

convertTimeToWords("2:11");
module.exports = { convertTimeToWords };
