import {Fighter} from './fighter';

/**
 * MarvelSpecies datatype
 */
type MarvelSpecies = 'Human' | 'Asgardian' | 'Eternal';

export class Marvel extends Fighter {
  protected species: MarvelSpecies;

  /**
   * Marvel Class
   * @param name Marvel object name string
   * @param height Marvel object height number
   * @param weight Marvel object Weight number
   * @param species Marvel object Species number
   * @param attack Marvel object Attack number
   * @param defense Marvel object Defense number
   * @param speed Marvel object Speed number
   * @param hp Marvel object HP number
   * @param phrase Marvel object phrase string
   */
  constructor(name: string, height: number, weight: number,
      species: MarvelSpecies, attack: number, defense: number,
      speed: number, hp: number, phrase: string) {
    super(name, height, weight, attack, defense, speed, hp, phrase);
    this.species = species;
  }
  /**
   * Species getter
   * @returns species Marvel datatype
   */
  getSpecies() {
    return this.species;
  }
}
