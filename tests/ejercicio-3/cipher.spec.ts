import 'mocha';
import {expect} from 'chai';
import {Cipher} from '../../src/ejercicio-3/cipher';
import {Alphabet} from '../../src/ejercicio-3/alphabet';
import {Key} from '../../src/ejercicio-3/key';

const testAlphabet = new Alphabet('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
const testKey = new Key('CLAVE');
const testInput = 'HOLAESTOESUNAPRUEBA';
const testCipher = new Cipher(testAlphabet, testKey, testInput);
const anotherCipher = new Cipher(testAlphabet, testKey, 'KAMWJVFPAXXYBMWXPCW');

describe('Cipher Class tests', () => {
  describe('Cipher Class Constructor', () => {
    it('Cipher attributes must be visibles', () => {
      expect(testCipher.alphabet).to.be.eql(testAlphabet);
      expect(testCipher.key).to.be.eql(testKey);
      expect(testCipher.input).to.be.eql(testInput);
    });
    it('Cipher input and extended key must have the same lenght', () => {
      expect(testCipher.input.length).to.be.eql(testCipher.extendedKey.length);
    });
  });
  describe('Cipher getter Methods', () => {
    it('getAlphabet', () => {
      expect(testCipher.getAlphabet()).to.be.eql(testAlphabet);
    });
    it('getKey', () => {
      expect(testCipher.getKey()).to.be.eql(testKey);
    });
    it('getInput', () => {
      expect(testCipher.getInput()).to.be.eql(testInput);
    });
  });
  describe('Cipher Methods', () => {
    it('Cipher', () => {
      expect(testCipher.cipher()).to.be.eql('KAMWJVFPAXXYBMWXPCW');
    });
    it('Decipher', () => {
      expect(anotherCipher.decipher()).to.be.eql('HOLAESTOESUNAPRUEBA');
    });
  });
});

