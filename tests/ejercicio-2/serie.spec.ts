import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-2/serie';

const LCDP = new Serie('La Casa de Papel', 'Jesús Colmenar', 'Drama', 2017, 4.5);
const Loki = new Serie('Loki', 'Kate Herron', 'SuperHéroes', 2021, 5);
const HTGAWM = new Serie('How to get away with murder', 'Peter Nowalk', 'Accion', 2014, 4);

describe('serie class tests', () => {
  describe('serie constructor', () => {
    it('serie empty object', () => {
      const emptyserie = new Serie();
      expect(emptyserie.title).to.be.eql('');
      expect(emptyserie.director).to.be.eql('');
      expect(emptyserie.genre).to.be.eql('');
      expect(emptyserie.year).to.be.eql(0);
      expect(emptyserie.ranking).to.be.eql(0);
    });
    it('LCDP serie object', () => {
      expect(LCDP.title).to.be.eql('La Casa de Papel');
      expect(LCDP.director).to.be.eql('Jesús Colmenar');
      expect(LCDP.genre).to.be.eql('Drama');
      expect(LCDP.year).to.be.eql(2017);
      expect(LCDP.ranking).to.be.eql(4.5);
    });
    it('Loki serie object', () => {
      expect(Loki.title).to.be.eql('Loki');
      expect(Loki.director).to.be.eql('Kate Herron');
      expect(Loki.genre).to.be.eql('SuperHéroes');
      expect(Loki.year).to.be.eql(2021);
      expect(Loki.ranking).to.be.eql(5);
    });
    it('LCDP serie object', () => {
      expect(HTGAWM.title).to.be.eql('How to get away with murder');
      expect(HTGAWM.director).to.be.eql('Peter Nowalk');
      expect(HTGAWM.genre).to.be.eql('Accion');
      expect(HTGAWM.year).to.be.eql(2014);
      expect(HTGAWM.ranking).to.be.eql(4);
    });
  });
  describe('serie getters', () => {
    it('Get Tittle method', () => {
      expect(HTGAWM.getTitle()).to.be.eql('How to get away with murder');
    });
    it('Get director method', () => {
      expect(HTGAWM.getDirector()).to.be.eql('Peter Nowalk');
    });
    it('Get genre method', () => {
      expect(HTGAWM.getGenre()).to.be.eql('Accion');
    });
    it('Get year method', () => {
      expect(HTGAWM.getYear()).to.be.eql(2014);
    });
    it('Get ranking method', () => {
      expect(HTGAWM.getRanking()).to.be.eql(4);
    });
  });
});
