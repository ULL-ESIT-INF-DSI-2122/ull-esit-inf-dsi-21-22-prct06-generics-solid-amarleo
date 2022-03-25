import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';
import {Fighter} from '../../src/ejercicio-1/Fighter';
import {Marvel} from '../../src/ejercicio-1/marvel';

const Gyarados = new Fighter('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Fighter('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Fighter('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

const ajak = new Marvel('Ajak', 1.7, 65, 'Eternal', 200, 150, 125, 400);
const doctorStrange =
  new Marvel('Doctor Strange', 1.85, 75, 'Human', 150, 300, 150, 400);
const heimdall =
  new Marvel('Heimdall', 1.9, 80, 'Asgardian', 100, 300, 100, 350);

const GyaradosVsNinetales = new Combat(Gyarados, Ninetales);
const ChikoritaVsGyarados = new Combat(Chikorita, Gyarados);
const AjakVsDoctorStrange = new Combat(ajak, doctorStrange);
const AjakVsHeimdall = new Combat(ajak, heimdall);
const GyaradosVsHeimdall = new Combat(Gyarados, heimdall);

describe('Combat Class tests', () => {
  it('Combat Constructor', () => {
    expect(GyaradosVsNinetales.firstFighter).to.be.eql(Gyarados);
    expect(GyaradosVsNinetales.secondFighter).to.be.eql(Ninetales);
  });
  describe('Combat Class methods', () => {
    it('Combat getters', () => {
      expect(GyaradosVsNinetales.getFirstFighter()).to.be.eql(Gyarados);
      expect(GyaradosVsNinetales.getSecondFighter()).to.be.eql(Ninetales);
    });
  });
  describe('Fighter Damage Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      expect(GyaradosVsNinetales.fighterDamage(Gyarados, Ninetales))
          .to.be.eql(87);
    });
    it('Example 2: Chikorita vs Gyarados', () => {
      expect(GyaradosVsNinetales.fighterDamage(Chikorita, Gyarados))
          .to.be.eql(82);
    });
  });
  describe('Fighter Start Combat Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      expect(GyaradosVsNinetales.start()).to.have.string('Gyarados Wins!');
    });
    it('Example 2: Chikorita vs Gyarados', () => {
      expect(ChikoritaVsGyarados.start()).to.have.string('Gyarados Wins!');
    });
    it('Example 3: Ajak vs Doctor Strange', () => {
      expect(AjakVsDoctorStrange.start()).to.have.string('Ajak Wins!');
    });
    it('Example 4: Ajak vs Heimdall', () => {
      expect(AjakVsHeimdall.start()).to.have.string('Ajak Wins!');
    });
    it('Example 5: Chikorita vs Gyarados', () => {
      expect(GyaradosVsHeimdall.start()).to.have.string('Heimdall Wins!');
    });
  });
});
