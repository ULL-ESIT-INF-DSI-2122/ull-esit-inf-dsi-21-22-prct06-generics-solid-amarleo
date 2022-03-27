import {Alphabet} from './alphabet';
import {Key} from './key';

export class Cipher {
  alphabet: Alphabet;
  key: Key;
  constructor(alphabet: Alphabet, key: Key) {
    this.alphabet = alphabet;
    this.key = key;
  }

  getAlphabet(): Alphabet {
    return this.alphabet;
  }

  getKey(): Key {
    return this.key;
  }
}
