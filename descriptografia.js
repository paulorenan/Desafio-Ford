const vin = 'cfdeaarddgci^txyb';

function decrypt (vin) {
  const vinLength = vin.length;
  let firstDecrypt = "";
  for (let i = 0; i < vinLength; i ++) {
    const charNumber = vin.charCodeAt(i);
    if (charNumber >= 65 && charNumber <= 90) {
      const newChar = String.fromCharCode(charNumber).toLowerCase();
      firstDecrypt += newChar;
    } else if (charNumber >= 97 && charNumber <= 122) {
      const newChar = String.fromCharCode(charNumber).toUpperCase();
      firstDecrypt += newChar;
    } else {
      firstDecrypt += String.fromCharCode(charNumber);
    }
  }
  let secondDecrypt = firstDecrypt.split("").reverse().join("");
  let thirdDecrypt = "";
  for (let i = 0; i < vinLength; i ++) {
    const charNumber = secondDecrypt.charCodeAt(i);
    const newChar = String.fromCharCode(charNumber - vinLength);
    thirdDecrypt += newChar;
  }
  return thirdDecrypt;
};

module.exports = {
  vin,
  decrypt
};