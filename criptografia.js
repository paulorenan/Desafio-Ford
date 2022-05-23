const vin = '1HGCM82633A004352';

function cryptography (vin) {
  const vinLength = vin.length;
  let firstCrypt = "";
  for (let i = 0; i < vinLength; i++) {
    const charNumber = vin.charCodeAt(i);
    const newChar = String.fromCharCode(charNumber + vinLength);
    firstCrypt += newChar
  }
  let secondCrypt = firstCrypt.split("").reverse().join("");
  let thirdCrypt = "";
  for (let i = 0; i < vinLength; i ++) {
    const charNumber = secondCrypt.charCodeAt(i);
    if (charNumber >= 65 && charNumber <= 90) {
      const newChar = String.fromCharCode(charNumber).toLowerCase();
      thirdCrypt += newChar;
    } else if (charNumber >= 97 && charNumber <= 122) {
      const newChar = String.fromCharCode(charNumber).toUpperCase();
      thirdCrypt += newChar;
    } else {
      thirdCrypt += String.fromCharCode(charNumber);
    }
  }
  return thirdCrypt;
};

module.exports = {
  vin,
  cryptography
};