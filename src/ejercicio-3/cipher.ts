import {Alphabet} from './alphabet';
import {Key} from './key';

/**
 * Cipher Class
 */
export class Cipher {
  alphabet: Alphabet;
  key: Key;
  input: string;
  extendedKey: string;
  /**
   * Alphabet Class Constructor
   * @param alphabet Alphabet Object
   * @param key Key Object
   * @param input string with the cipher
   */
  constructor(alphabet: Alphabet, key: Key, input: string) {
    this.alphabet = alphabet;
    this.key = key;
    this.input = input;
    this.extendedKey = key.getContent().repeat((input.length / key.getSize()));
    for (let i = 0; i < input.length % key.getSize(); i++) {
      this.extendedKey += key.getContent()[i];
    }
  }

  /**
   * Alphabet getter
   * @returns alphabet object
   */
  getAlphabet(): Alphabet {
    return this.alphabet;
  }

  /**
   * Key getter
   * @returns key object
   */
  getKey(): Key {
    return this.key;
  }

  /**
   * Input getter
   * @returns string input
   */
  getInput(): string {
    return this.input;
  }

  /**
   * cipher method
   * @returns ciphered word
   */
  cipher(): string {
    let d: number = 0;
    let inputNumber: number = 0;
    let word: string = '';
    for (let i = 0; i < this.input.length; i++) {
      d = this.alphabet.getContent().indexOf(this.extendedKey[i]) + 1;
      inputNumber = this.alphabet.getContent().indexOf(this.input[i]);
      d += inputNumber;
      if (d >= this.alphabet.getSize()) d = d % this.alphabet.getSize();
      word += this.alphabet.content[d];
      d = 0;
    }
    return word;
  }
  /**
   * Decipher method
   * @returns deciphered word
   */
  decipher(): string {
    let d: number = 0;
    let inputNumber: number = 0;
    let word: string = '';
    for (let i = 0; i < this.input.length; i++) {
      d = this.alphabet.getContent().indexOf(this.extendedKey[i]) + 1;
      inputNumber = this.alphabet.getContent().indexOf(this.input[i]);
      d = inputNumber - d;
      console.log(d);
      if (d < 0) d = d + this.alphabet.getSize();
      word += this.alphabet.content[d];
      d = 0;
    }
    return word;
  }
}
