import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/marvel';

const ajak = new Marvel('Ajak', 1.7, 65, 'Eternal', 200, 150, 125, 400, 'A lo largo de los años, nunca hemos interferido... hasta ahora.');
const doctorStrange =
  new Marvel('Doctor Strange', 1.85, 75, 'Human', 150, 300, 150, 400, 'Sólo eres una mota minúscula y pasajera dentro de un universo indiferente.');
const heimdall =
  new Marvel('Heimdall', 1.9, 80, 'Asgardian', 100, 300, 100, 350, 'Estoy atado por honor a nuestro rey.');

describe('Marvel class tests', () => {
  describe('Marvel Class getters', () => {
    it('getName method', () => {
      expect(ajak.getName()).to.be.eql('Ajak');
      expect(doctorStrange.getName()).to.be.eql('Doctor Strange');
      expect(heimdall.getName()).to.be.eql('Heimdall');
    });
    it('getHeight method', () => {
      expect(ajak.getHeight()).to.be.eql(1.7);
      expect(doctorStrange.getHeight()).to.be.eql(1.85);
      expect(heimdall.getHeight()).to.be.eql(1.9);
    });
    it('getWeight method', () => {
      expect(ajak.getWeight()).to.be.eql(65);
      expect(doctorStrange.getWeight()).to.be.eql(75);
      expect(heimdall.getWeight()).to.be.eql(80);
    });
    it('getSpecies method', () => {
      expect(ajak.getSpecies()).to.be.eql('Eternal');
      expect(doctorStrange.getSpecies()).to.be.eql('Human');
      expect(heimdall.getSpecies()).to.be.eql('Asgardian');
    });
    it('getAttack method', () => {
      expect(ajak.getAttack()).to.be.eql(200);
      expect(doctorStrange.getAttack()).to.be.eql(150);
      expect(heimdall.getAttack()).to.be.eql(100);
    });
    it('getDefense method', () => {
      expect(ajak.getDefense()).to.be.eql(150);
      expect(doctorStrange.getDefense()).to.be.eql(300);
      expect(heimdall.getDefense()).to.be.eql(300);
    });
    it('getSpeed method', () => {
      expect(ajak.getSpeed()).to.be.eql(125);
      expect(doctorStrange.getSpeed()).to.be.eql(150);
      expect(heimdall.getSpeed()).to.be.eql(100);
    });
    it('getHp method', () => {
      expect(ajak.getHp()).to.be.eql(400);
      expect(doctorStrange.getHp()).to.be.eql(400);
      expect(heimdall.getHp()).to.be.eql(350);
    });
    it('getphrase method', () => {
      expect(ajak.getPhrase()).to.be.eql('A lo largo de los años, nunca hemos interferido... hasta ahora.');
      expect(doctorStrange.getPhrase()).to.be.eql('Sólo eres una mota minúscula y pasajera dentro de un universo indiferente.');
      expect(heimdall.getPhrase()).to.be.eql('Estoy atado por honor a nuestro rey.');
    });
  });
});
