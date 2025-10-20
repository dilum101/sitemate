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

  function getWordForSpecific(mins) {
    if (mins === 15) return "quarter";
    if (mins === 30) return "half";
  }

  function calculateTimeWord() {
    const mins = Number(minutes);

    const calculatedHour = mins < 30 ? Number(hour) : Number(hour) + 1;
    const hourWord = numberWords[Number(calculatedHour)];
    const leftMinsTohour = 60 - mins;

    const miniuteWord =
      mins === 15 || mins === 30
        ? getWordForSpecific(mins)
        : leftMinsTohour < 30
        ? numberWords[leftMinsTohour + 1]
        : numberWords[mins];

    const formattedWord =
      mins === 0
        ? `${hourWord} o'clock`
        : mins < 30
        ? `${hourWord} past ${miniuteWord} `
        : `${
            mins === 15 || mins === 30
              ? miniuteWord
              : numberWords[leftMinsTohour]
          } to ${hourWord}`;

    return formattedWord;
  }

  return calculateTimeWord();
}

console.log(convertTimeToWords("21:31"));
module.exports = { convertTimeToWords };
