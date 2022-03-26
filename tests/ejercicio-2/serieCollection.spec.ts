import 'mocha';
import {expect} from 'chai';
import {SerieCollection} from '../../src/ejercicio-2/serieCollection';
import {Serie} from '../../src/ejercicio-2/serie';

const LCDP = new Serie('La Casa de Papel', 'Jesús Colmenar', 'Drama', 2017, 4.5);
const Loki = new Serie('Loki', 'Kate Herron', 'SuperHéroes', 2021, 5);
const HTGAWM = new Serie('How to get away with murder', 'Peter Nowalk', 'Accion', 2014, 4);

const emptySerieCollection = new SerieCollection();
const exampleSerieCollection = new SerieCollection([LCDP, Loki]);

describe('serie Collection class', () => {
  describe('serie Collection constructor', () => {
    it('empty serie Collection', () => {
      expect(emptySerieCollection.collection.length).to.be.eql(0);
      expect(emptySerieCollection.collection).to.be.eql([]);
    });
    it('example Serie Collection', () => {
      expect(exampleSerieCollection.collection.length).to.be.eql(2);
      expect(exampleSerieCollection.collection).to.be.eql([LCDP, Loki]);
    });
  });
  describe('serie Collection methods', () => {
    it('searchBy method', () => {
      expect(exampleSerieCollection.searchBy('title', 'Loki')).to.be.eql([Loki]);
      expect(exampleSerieCollection.searchBy('director', 'Kate Herron')).to.be.eql([Loki]);
      expect(exampleSerieCollection.searchBy('genre', 'SuperHéroes')).to.be.eql([Loki]);
      expect(exampleSerieCollection.searchBy('year', 2021)).to.be.eql([Loki]);
      expect(exampleSerieCollection.searchBy('ranking', 5)).to.be.eql([Loki]);
    });
    it('getNumberOfItems method', () => {
      expect(exampleSerieCollection.getNumberOfItems()).to.be.eql(2);
      expect(emptySerieCollection.getNumberOfItems()).to.be.eql(0);
    });
    it('addItem method', () => {
      emptySerieCollection.addItem(HTGAWM);
      expect(emptySerieCollection.getNumberOfItems()).to.be.eql(1);
    });
    it('deleteItem method', () => {
      emptySerieCollection.deleteItem(HTGAWM);
      expect(emptySerieCollection.getNumberOfItems()).to.be.eql(0);
    });
  });
});
