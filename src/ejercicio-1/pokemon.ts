import {Fighter} from './fighter';

/**
 * PokemonType datatype
 */
type PokemonType = 'Water' | 'Fire' | 'Grass' | 'Electric';

export class Pokemon extends Fighter {
  protected type: PokemonType;

  /**
   * Pokemon Class
   * @param name Pokemon object name string
   * @param height Pokemon object height number
   * @param weight Pokemon object wight number
   * @param type Pokemon object type number
   * @param attack Pokemon object attack number
   * @param defense Pokemon object defense number
   * @param speed Pokemon object speed number
   * @param hp Pokemon object hp number
   * @param phrase Pokemon object phrase string
   */
  constructor(name: string, height: number, weight: number, type: PokemonType,
      attack: number, defense: number, speed: number, hp: number, phrase: string) {
    super(name, height, weight, attack, defense, speed, hp, phrase);
    this.type = type;
  }
  /**
   * Type getter
   * @returns type Pokemon datatype
   */
  getType() {
    return this.type;
  }
}
