import {Fighter} from './fighter';
import {Marvel} from './marvel';
import {Pokemon} from './pokemon';

/**
 * Combat Class
 */
export class Combat {
  firstFighter: Fighter;
  secondFighter: Fighter;

  constructor(firstFighter: Fighter, secondFighter: Fighter) {
    this.firstFighter = firstFighter;
    this.secondFighter = secondFighter;
  }
  getFirstFighter() {
    return this.firstFighter;
  }
  getSecondFighter() {
    return this.secondFighter;
  }
  fighterDamage(atkFighter: Fighter, defFighter: Fighter) {
    let multiplier: number = 1;
    if ((atkFighter instanceof Pokemon) && (defFighter instanceof Pokemon)) {
      if (atkFighter.getType() == 'Fire') {
        if (defFighter.getType() == 'Grass') multiplier = 2;
        if (defFighter.getType() == 'Water') multiplier = 0.5;
      }
      if (atkFighter.getType() == 'Water') {
        if (defFighter.getType() == 'Grass') multiplier = 0.5;
        if (defFighter.getType() == 'Fire') multiplier = 2;
      }
      if (atkFighter.getType() == 'Grass') {
        if (defFighter.getType() == 'Fire') multiplier = 0.5;
        if (defFighter.getType() == 'Water') multiplier = 2;
      }
      if (atkFighter.getType() == 'Electric') {
        if (defFighter.getType() == 'Grass') multiplier = 0.5;
        if (defFighter.getType() == 'Water') multiplier = 2;
      }
    } else if (atkFighter instanceof Marvel) {
      if (atkFighter.getSpecies() == 'Asgardian') multiplier = 1.2;
      else if (atkFighter.getSpecies() == 'Human') multiplier = 1;
      else if (atkFighter.getSpecies() == 'Eternal') multiplier = 1.2;
    } else {
      multiplier = 1;
    }
    return Math.round(
        50 * (atkFighter.getAttack() / defFighter.getDefense()) * multiplier);
  }
}
