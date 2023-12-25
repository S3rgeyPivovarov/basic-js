const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Invalid arguments");
    }
    key = key.toLowerCase();
    const encryptedMessage = [];
    message = message.toLowerCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      const currentChar = message[i];
      const keyChar = key[j % key.length];

      if (!this.alphabet.includes(currentChar)) {
        encryptedMessage.push(currentChar);
        continue;
      }

      const encryptedValue =
        (this.alphabet.indexOf(currentChar) + this.alphabet.indexOf(keyChar)) %
        26;
      encryptedMessage.push(this.alphabet[encryptedValue]);
      j++;
    }

    return (this.isDirect ? encryptedMessage : encryptedMessage.reverse())
      .join("")
      .toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Invalid arguments");
    }
    key = key.toLowerCase();
    const decryptedMessage = [];
    encryptedMessage = encryptedMessage.toLowerCase();

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const currentChar = encryptedMessage[i];
      const keyChar = key[j % key.length];

      if (!this.alphabet.includes(currentChar)) {
        decryptedMessage.push(currentChar);
        continue;
      }

      let decryptedValue =
        (this.alphabet.indexOf(currentChar) - this.alphabet.indexOf(keyChar)) %
        26;
      decryptedValue =
        decryptedValue < 0 ? decryptedValue + 26 : decryptedValue;
      decryptedMessage.push(this.alphabet[decryptedValue]);
      j++;
    }

    return (this.isDirect ? decryptedMessage : decryptedMessage.reverse())
      .join("")
      .toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
