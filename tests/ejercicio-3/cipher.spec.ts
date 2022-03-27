import 'mocha';
import {expect} from 'chai';
import {Cipher} from '../../src/ejercicio-3/cipher';
import {Alphabet} from '../../src/ejercicio-3/alphabet';
import {Key} from '../../src/ejercicio-3/key';

const testAlphabet = new Alphabet('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
const testKey = new Key('CLAVE');
const testCipher = new Cipher(testAlphabet, testKey);

describe('Cipher Class tests', () => {
  describe('Cipher Class Constructor', () => {
    it('Cipher attributes must be visibles', () => {
      expect(testCipher.alphabet).to.be.eql('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      expect(testCipher.key).to.be.eql('CLAVE');
      expect(testCipher.extendedKey).to.be.eql('CLAVECLAVECLAVECLAV');
    });
  });
  describe('Cipher getter Methods', () => {
    it('getAlphabet', () => {
      expect(testCipher.getAlphabet()).to.be.eql('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    });
    it('getKey', () => {
      expect(testCipher.getKey()).to.be.eql('CLAVE');
    });
    it('get Extended key', () => {
      expect(testCipher.getExtendedKey()).to.be.eql('CLAVECLAVECLAVECLAV');
    });
  });
  describe('Cipher Methods', () => {
  });
});

