import {Fighter} from './fighter';

type PokemonType = 'Water' | 'Fire' | 'Grass' | 'Electric';

export class Pokemon extends Fighter {
  protected type: PokemonType;

  constructor(name: string, height: number, weight: number, type: PokemonType,
      attack: number, defense: number, speed: number, hp: number) {
    super(name, height, weight, attack, defense, speed, hp);
    this.type = type;
  }
  getType() {
    return this.type;
  }
}
