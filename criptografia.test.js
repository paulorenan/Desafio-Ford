const crypt = require('./criptografia');
const decrypt = require('./descriptografia');
test('criptografar', () => {
  expect(crypt.cryptography(crypt.vin)).toBe(decrypt.vin);
});

test('descriptografar', () => {
  expect(decrypt.decrypt(decrypt.vin)).toBe(crypt.vin);
});