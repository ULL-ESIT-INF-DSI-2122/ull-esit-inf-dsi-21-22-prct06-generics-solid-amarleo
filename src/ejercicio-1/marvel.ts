import {Fighter} from './fighter';

type MarvelSpecies = 'Human' | 'Asgardian' | 'Eternal';

export class Marvel extends Fighter {
  protected species: MarvelSpecies;

  constructor(name: string, height: number, weight: number,
      species: MarvelSpecies, attack: number, defense: number,
      speed: number, hp: number) {
    super(name, height, weight, attack, defense, speed, hp);
    this.species = species;
  }
  getSpecies() {
    return this.species;
  }
}
