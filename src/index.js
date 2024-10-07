const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let decodedMessage = "";
  for (let i = 0; i < expr.length; i += 10) {
    let encodedSymbol = expr.slice(i, i + 10);
    if (encodedSymbol === "**********") {
      decodedMessage += " ";
    } else {
      let morseCode = encodedSymbol
        .replace(/00/g, "")
        .replace(/10/g, ".")
        .replace(/11/g, "-");
      decodedMessage += MORSE_TABLE[morseCode];
    }
  }
  return decodedMessage;
}

module.exports = {
  decode,
};
