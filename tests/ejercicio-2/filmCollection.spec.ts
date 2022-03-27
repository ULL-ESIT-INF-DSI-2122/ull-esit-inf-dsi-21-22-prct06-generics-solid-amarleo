import 'mocha';
import {expect} from 'chai';
import {FilmCollection} from '../../src/ejercicio-2/filmCollection';
import {Film} from '../../src/ejercicio-2/film';

const django = new Film('Django Unchained', 'Quentin Tarantino', 'Western', 2012, 4);
const stuartLittle = new Film('Stuart Little', 'Rob Minkoff', 'Infantil', 1999, 4);
const johnWick = new Film('John Wick', 'Chad Stahelski', 'Accion', 2014, 5);

const emptyFilmCollection = new FilmCollection();
const exampleFilmCollection = new FilmCollection([django, stuartLittle]);

describe('film Collection class', () => {
  describe('film Collection constructor', () => {
    it('empty film Collection', () => {
      expect(emptyFilmCollection.collection.length).to.be.eql(0);
      expect(emptyFilmCollection.collection).to.be.eql([]);
    });
    it('example Film Collection', () => {
      expect(exampleFilmCollection.collection.length).to.be.eql(2);
      expect(exampleFilmCollection.collection).to.be.eql([django, stuartLittle]);
    });
  });
  describe('film Collection methods', () => {
    it('searchBy method', () => {
      expect(exampleFilmCollection.searchBy('title', 'Stuart Little')).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('director', 'Rob Minkoff')).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('genre', 'Infantil')).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('year', 1999)).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('ranking', 4)).to.be.eql([django, stuartLittle]);
    });
    it('getNumberOfItems method', () => {
      expect(exampleFilmCollection.getNumberOfItems()).to.be.eql(2);
      expect(emptyFilmCollection.getNumberOfItems()).to.be.eql(0);
    });
    it('addItem method', () => {
      emptyFilmCollection.addItem(johnWick);
      expect(emptyFilmCollection.getNumberOfItems()).to.be.eql(1);
    });
    it('deleteItem method', () => {
      emptyFilmCollection.deleteItem(johnWick);
      expect(emptyFilmCollection.getNumberOfItems()).to.be.eql(0);
    });
  });
});
