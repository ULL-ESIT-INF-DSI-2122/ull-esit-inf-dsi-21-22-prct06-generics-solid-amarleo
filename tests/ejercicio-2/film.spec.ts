import 'mocha';
import {expect} from 'chai';
import {Film} from '../../src/ejercicio-2/film';

const django = new Film('Django Unchained', 'Quentin Tarantino', 'Western', 2012, 4);
const stuartLittle = new Film('Stuart Little', 'Rob Minkoff', 'Infantil', 1999, 4);
const johnWick = new Film('John Wick', 'Chad Stahelski', 'Accion', 2014, 5);

describe('Film class tests', () => {
  describe('Film constructor', () => {
    it('Film empty object', () => {
      const emptyFilm = new Film();
      expect(emptyFilm.title).to.be.eql('');
      expect(emptyFilm.director).to.be.eql('');
      expect(emptyFilm.genre).to.be.eql('');
      expect(emptyFilm.year).to.be.eql(0);
      expect(emptyFilm.ranking).to.be.eql(0);
    });
    it('django Film object', () => {
      expect(django.title).to.be.eql('Django Unchained');
      expect(django.director).to.be.eql('Quentin Tarantino');
      expect(django.genre).to.be.eql('Western');
      expect(django.year).to.be.eql(2012);
      expect(django.ranking).to.be.eql(4);
    });
    it('Stuart Little Film object', () => {
      expect(stuartLittle.title).to.be.eql('Stuart Little');
      expect(stuartLittle.director).to.be.eql('Rob Minkoff');
      expect(stuartLittle.genre).to.be.eql('Infantil');
      expect(stuartLittle.year).to.be.eql(1999);
      expect(stuartLittle.ranking).to.be.eql(4);
    });
    it('django Film object', () => {
      expect(johnWick.title).to.be.eql('John Wick');
      expect(johnWick.director).to.be.eql('Chad Stahelski');
      expect(johnWick.genre).to.be.eql('Accion');
      expect(johnWick.year).to.be.eql(2014);
      expect(johnWick.ranking).to.be.eql(5);
    });
  });
  describe('Film getters', () => {
    it('Get Tittle method', () => {
      expect(johnWick.getTitle()).to.be.eql('John Wick');
    });
    it('Get director method', () => {
      expect(johnWick.getDirector()).to.be.eql('Chad Stahelski');
    });
    it('Get genre method', () => {
      expect(johnWick.getGenre()).to.be.eql('Accion');
    });
    it('Get year method', () => {
      expect(johnWick.getYear()).to.be.eql(2014);
    });
    it('Get ranking method', () => {
      expect(johnWick.getRanking()).to.be.eql(5);
    });
  });
});
