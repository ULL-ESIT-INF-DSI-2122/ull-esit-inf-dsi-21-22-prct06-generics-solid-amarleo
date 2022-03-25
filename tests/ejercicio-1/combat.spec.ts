import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Marvel} from '../../src/ejercicio-1/marvel';

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

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
const NinetalesVsAjak = new Combat(Ninetales, ajak);

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
    it('Example 3: Ajak vs Doctor Strange', () => {
      expect(AjakVsDoctorStrange.fighterDamage(ajak, doctorStrange))
          .to.be.eql(40);
    });
    it('Example 4: Gyarados vs Heimdall', () => {
      expect(GyaradosVsHeimdall.fighterDamage(Gyarados, heimdall))
          .to.be.eql(11);
    });
    it('Example 5: Ajak vs Heimdall', () => {
      expect(AjakVsHeimdall.fighterDamage(ajak, heimdall))
          .to.be.eql(40);
    });
  });
  describe('Fighter Start Combat Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      console.log(GyaradosVsNinetales.start());
      expect(GyaradosVsNinetales.start()).to.have.string('Gyarados Wins!');
    });
    it('Example 2: Chikorita vs Gyarados', () => {
      console.log(ChikoritaVsGyarados.start());
      expect(ChikoritaVsGyarados.start()).to.have.string('Gyarados Wins!');
    });
    it('Example 3: Ajak vs Doctor Strange', () => {
      console.log(AjakVsDoctorStrange.start());
      expect(AjakVsDoctorStrange.start()).to.have.string('Doctor Strange Wins!');
    });
    it('Example 4: Ajak vs Heimdall', () => {
      console.log(AjakVsHeimdall.start());
      expect(AjakVsHeimdall.start()).to.have.string('Ajak Wins!');
    });
    it('Example 5: Ninetales vs Heimdall', () => {
      console.log(NinetalesVsAjak.start());
      expect(NinetalesVsAjak.start()).to.have.string('Ajak Wins!');
    });
  });
});
