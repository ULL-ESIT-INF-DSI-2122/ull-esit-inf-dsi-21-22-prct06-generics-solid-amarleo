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
}
