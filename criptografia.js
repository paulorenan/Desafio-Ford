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
  return secondCrypt;
};

cryptography(vin);