const vin = 'cfdeaarddgci^txyb';

function decrypt (vin) {
  const vinLength = vin.length;
  let firstDesCrypt = "";
  for (let i = 0; i < vinLength; i ++) {
    const charNumber = vin.charCodeAt(i);
    if (charNumber >= 65 && charNumber <= 90) {
      const newChar = String.fromCharCode(charNumber).toLowerCase();
      firstDesCrypt += newChar;
    } else if (charNumber >= 97 && charNumber <= 122) {
      const newChar = String.fromCharCode(charNumber).toUpperCase();
      firstDesCrypt += newChar;
    } else {
      firstDesCrypt += String.fromCharCode(charNumber);
    }
  }
  let secondDesCrypt = firstDesCrypt.split("").reverse().join("");
  let thirdDesCrypt = "";
  for (let i = 0; i < vinLength; i ++) {
    const charNumber = secondDesCrypt.charCodeAt(i);
    const newChar = String.fromCharCode(charNumber - vinLength);
    thirdDesCrypt += newChar;
  }
  return thirdDesCrypt;
};