import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-2/documental';

const pulpo = new Documental('Lo que el pulpo me enseñó', 'Pippa Ehrlich', 'Naturaleza', 2020, 5);
const rescate = new Documental('Rescate en las Profundidades', 'Elizabeth Chai Vasarhelyi', 'Catástrofes', 2021, 4);
const BobRoss = new Documental('Bob Ross: Happy Accidents, Betrayal & Greed', 'Joshua Rofé', 'Biográfico', 2021, 3.5);

describe('documental class tests', () => {
  describe('documental constructor', () => {
    it('documental empty object', () => {
      const emptydocumental = new Documental();
      expect(emptydocumental.title).to.be.eql('');
      expect(emptydocumental.director).to.be.eql('');
      expect(emptydocumental.genre).to.be.eql('');
      expect(emptydocumental.year).to.be.eql(0);
      expect(emptydocumental.ranking).to.be.eql(0);
    });
    it('pulpo documental object', () => {
      expect(pulpo.title).to.be.eql('Lo que el pulpo me enseñó');
      expect(pulpo.director).to.be.eql('Pippa Ehrlich');
      expect(pulpo.genre).to.be.eql('Naturaleza');
      expect(pulpo.year).to.be.eql(2020);
      expect(pulpo.ranking).to.be.eql(5);
    });
    it('rescate documental object', () => {
      expect(rescate.title).to.be.eql('Rescate en las Profundidades');
      expect(rescate.director).to.be.eql('Elizabeth Chai Vasarhelyi');
      expect(rescate.genre).to.be.eql('Catástrofes');
      expect(rescate.year).to.be.eql(2021);
      expect(rescate.ranking).to.be.eql(4);
    });
    it('pulpo documental object', () => {
      expect(BobRoss.title).to.be.eql('Bob Ross: Happy Accidents, Betrayal & Greed');
      expect(BobRoss.director).to.be.eql('Joshua Rofé');
      expect(BobRoss.genre).to.be.eql('Biográfico');
      expect(BobRoss.year).to.be.eql(2021);
      expect(BobRoss.ranking).to.be.eql(3.5);
    });
  });
  describe('documental getters', () => {
    it('Get Tittle method', () => {
      expect(BobRoss.getTitle()).to.be.eql('Bob Ross: Happy Accidents, Betrayal & Greed');
    });
    it('Get director method', () => {
      expect(BobRoss.getDirector()).to.be.eql('Joshua Rofé');
    });
    it('Get genre method', () => {
      expect(BobRoss.getGenre()).to.be.eql('Biográfico');
    });
    it('Get year method', () => {
      expect(BobRoss.getYear()).to.be.eql(2021);
    });
    it('Get ranking method', () => {
      expect(BobRoss.getRanking()).to.be.eql(3.5);
    });
  });
});
