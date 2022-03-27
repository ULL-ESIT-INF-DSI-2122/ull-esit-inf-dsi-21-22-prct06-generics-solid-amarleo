import 'mocha';
import {expect} from 'chai';
import {Alphabet} from '../../src/ejercicio-3/alphabet';

const alphabet = new Alphabet('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
const emptyAlphabet = new Alphabet('');

describe('Alphabet Class tests', () => {
  describe('Alphabet Constructor', () => {
    it('Alphabet atributtes must be accesible', () => {
      expect(alphabet.content).to.be.eql('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
      expect(emptyAlphabet.content).to.be.eql('');
    });
  });
  describe('Alphabet Methods', () => {
    it('GetContent', () => {
      expect(alphabet.getContent()).to.be.eql('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    });
    it('setContent', () => {
      alphabet.setContent('ABCD');
      expect(alphabet.getContent()).to.be.eql('ABCD');
    });
    it('getSize', () => {
      expect(alphabet.getSize()).to.be.eql(4);
    });
  });
});
