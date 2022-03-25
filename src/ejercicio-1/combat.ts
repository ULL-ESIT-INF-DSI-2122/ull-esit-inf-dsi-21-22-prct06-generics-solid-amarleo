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
  fighterDamage(atkFighter: Fighter, defFighter: Fighter): number {
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
  start(): string {
    let firstFighterTotalDamage: number = 0;
    let secondFighterTotalDamage: number = 0;
    let firstFighterAttack: number = 0;
    let secondFighterAttack: number = 0;
    let turns: number = 1;
    let combatRecord: string = '';
    let firstFighterHP: number = this.firstFighter.getHp();
    let secondFighterHP: number = this.secondFighter.getHp();
    while (firstFighterTotalDamage < this.secondFighter.getHp() && secondFighterTotalDamage < this.firstFighter.getHp()) {
      if (turns % 2 === 1) {
        firstFighterAttack = this.fighterDamage(this.firstFighter, this.secondFighter);
        firstFighterTotalDamage += firstFighterAttack;
        combatRecord += 'Turn ' + turns + ': ' + this.firstFighter.getPhrase() + '\n\t' +
          this.firstFighter.getName() +
          ' hits ' + this.secondFighter.getName() + ' with ' +
          firstFighterAttack + ' points of damage -> [ ' +
          secondFighterHP + ' - ' + firstFighterAttack + ' = ';
        secondFighterHP -= firstFighterAttack;
        combatRecord += secondFighterHP + 'HP left ]\n\n';
      } else {
        secondFighterAttack = this.fighterDamage(this.secondFighter, this.firstFighter);
        secondFighterTotalDamage += secondFighterAttack;
        combatRecord += 'Turn ' + turns + ': ' + this.secondFighter.getPhrase() + '\n\t' +
          this.secondFighter.getName() +
          ' hits ' + this.firstFighter.getName() + ' with ' +
          secondFighterAttack + ' points of damage -> [ ' +
          firstFighterHP + ' - ' + secondFighterAttack + ' = ';
        firstFighterHP -= secondFighterAttack;
        combatRecord += firstFighterHP + 'HP left ]\n\n';
      }
      turns++;
    } console.log(this.secondFighter.getHp());
    console.log(secondFighterTotalDamage);
    if (secondFighterTotalDamage >= this.firstFighter.getHp()) {
      combatRecord += this.firstFighter.getName() + ' fainted!\n' +
        this.secondFighter.getName() + ' Wins!';
      return combatRecord;
    } else if (firstFighterTotalDamage >= this.secondFighter.getHp()) {
      combatRecord += this.secondFighter.getName() + ' fainted!\n' +
        this.firstFighter.getName() + ' Wins!';
      return combatRecord;
    } else return combatRecord;
  }
}
