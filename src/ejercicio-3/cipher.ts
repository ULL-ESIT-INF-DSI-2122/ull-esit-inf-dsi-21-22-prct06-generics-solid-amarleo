import {Alphabet} from './alphabet';
import {Key} from './key';

export class Cipher {
  alphabet: Alphabet;
  key: Key;
  input: string;
  extendedKey: string;
  constructor(alphabet: Alphabet, key: Key, input: string) {
    this.alphabet = alphabet;
    this.key = key;
    this.input = input;
    this.extendedKey = key.getContent().repeat((input.length / key.getSize()));
    for (let i = 0; i < input.length % key.getSize(); i++) {
      this.extendedKey += key.getContent()[i];
    }
  }
  getAlphabet(): Alphabet {
    return this.alphabet;
  }

  getKey(): Key {
    return this.key;
  }

  getInput(): string {
    return this.input;
  }

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
  // decipher(): string {
  //   let d: number = 0;
  //   let inputNumber: number = 0;
  //   let word: string = '';
  //   for (let i = 0; i < this.input.length; i++) {
  //     d = this.alphabet.getContent().indexOf(this.extendedKey[i]) + 1;
  //     inputNumber = this.alphabet.getContent().indexOf(this.input[i]);
  //     d += inputNumber;
  //     if (d >= this.alphabet.getSize()) d = d % this.alphabet.getSize();
  //     word += this.alphabet.content[d];
  //     d = 0;
  //   }
  //   return word;
  // }
}
