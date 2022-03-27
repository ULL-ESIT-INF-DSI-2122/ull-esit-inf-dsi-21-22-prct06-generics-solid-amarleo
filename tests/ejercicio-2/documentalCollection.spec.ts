import 'mocha';
import {expect} from 'chai';
import {DocumentalCollection} from '../../src/ejercicio-2/documentalCollection';
import {Documental} from '../../src/ejercicio-2/documental';

const pulpo = new Documental('Lo que el pulpo me enseñó', 'Pippa Ehrlich', 'Naturaleza', 2020, 5);
const rescate = new Documental('Rescate en las Profundidades', 'Elizabeth Chai Vasarhelyi', 'Catástrofes', 2021, 4);
const BobRoss = new Documental('Bob Ross: Happy Accidents, Betrayal & Greed', 'Joshua Rofé', 'Biográfico', 2021, 3.5);


const emptyDocumentalCollection = new DocumentalCollection();
const exampleDocumentalCollection = new DocumentalCollection([pulpo, rescate]);

describe('documental Collection class', () => {
  describe('documental Collection constructor', () => {
    it('empty documental Collection', () => {
      expect(emptyDocumentalCollection.collection.length).to.be.eql(0);
      expect(emptyDocumentalCollection.collection).to.be.eql([]);
    });
    it('example Documental Collection', () => {
      expect(exampleDocumentalCollection.collection.length).to.be.eql(2);
      expect(exampleDocumentalCollection.collection).to.be.eql([pulpo, rescate]);
    });
  });
  describe('documental Collection methods', () => {
    it('searchBy method', () => {
      expect(exampleDocumentalCollection.searchBy('title', 'Rescate en las Profundidades')).to.be.eql([rescate]);
      expect(exampleDocumentalCollection.searchBy('director', 'Elizabeth Chai Vasarhelyi')).to.be.eql([rescate]);
      expect(exampleDocumentalCollection.searchBy('genre', 'Catástrofes')).to.be.eql([rescate]);
      expect(exampleDocumentalCollection.searchBy('year', 2021)).to.be.eql([rescate]);
      expect(exampleDocumentalCollection.searchBy('ranking', 5)).to.be.eql([rescate]);
    });
    it('getNumberOfItems method', () => {
      expect(exampleDocumentalCollection.getNumberOfItems()).to.be.eql(2);
      expect(emptyDocumentalCollection.getNumberOfItems()).to.be.eql(0);
    });
    it('addItem method', () => {
      emptyDocumentalCollection.addItem(BobRoss);
      expect(emptyDocumentalCollection.getNumberOfItems()).to.be.eql(1);
    });
    it('deleteItem method', () => {
      emptyDocumentalCollection.deleteItem(BobRoss);
      expect(emptyDocumentalCollection.getNumberOfItems()).to.be.eql(0);
    });
  });
});
