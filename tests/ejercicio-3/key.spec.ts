import 'mocha';
import {expect} from 'chai';
import {Key} from '../../src/ejercicio-3/key';

const key = new Key('CLAVE');
const emptyKey = new Key('');

describe('Key Class tests', () => {
  describe('Key Constructor', () => {
    it('Key atributtes must be accesible', () => {
      expect(key.content).to.be.eql('CLAVE');
      expect(emptyKey.content).to.be.eql('');
    });
  });
  describe('Key Methods', () => {
    it('GetContent', () => {
      expect(key.getContent()).to.be.eql('CLAVE');
    });
    it('setContent', () => {
      key.setContent('ABCD');
      expect(key.getContent()).to.be.eql('ABCD');
    });
    it('getSize', () => {
      expect(key.getSize()).to.be.eql(4);
    });
  });
});
