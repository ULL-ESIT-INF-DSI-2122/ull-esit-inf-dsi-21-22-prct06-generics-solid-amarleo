import 'mocha';
import {expect} from 'chai';
import {Universe} from '../../src/ejercicio-1/universe';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Marvel} from '../../src/ejercicio-1/marvel';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500, 'GYAAA!');
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45, 'Chik Chik');
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73, 'Argg');

const ajak = new Marvel('Ajak', 1.7, 65, 'Eternal', 200, 150, 125, 400, 'A lo largo de los años, nunca hemos interferido... hasta ahora.');
const doctorStrange =
  new Marvel('Doctor Strange', 1.85, 75, 'Human', 150, 300, 150, 400, 'Sólo eres una mota minúscula y pasajera dentro de un universo indiferente.');

const universe = new Universe([Gyarados, ajak, Chikorita, doctorStrange]);

describe('Universe Class Tests', () => {
  describe('Universe Attributes must be accesibles', () => {
    it('Universe List', () => {
      expect(universe.list).to.be.eql([Gyarados, ajak, Chikorita, doctorStrange]);
    });
    it('Universe List', () => {
      expect(universe.list[0]).to.be.eql(Gyarados);
    });
  });

  describe('Universe methods', () => {
    it('getUniverseList', () => {
      expect(universe.getUniverseList()).to.be.eql([Gyarados, ajak, Chikorita, doctorStrange]);
    });
    it('setUniverseList', () => {
      universe.setUniverseList(Ninetales);
      expect(universe.getUniverseList()).to.be.eql([Gyarados, ajak, Chikorita, doctorStrange, Ninetales]);
    });
  });
});
