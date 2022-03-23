export abstract class Fighter {
  constructor(protected name: string, protected height: number,
    protected weight: number, protected attack: number,
    protected defense: number, protected speed: number,
    protected hp: number) {
  }

  getName() {
    return this.name;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getAttack() {
    return this.attack;
  }

  getDefense() {
    return this.defense;
  }

  getSpeed() {
    return this.speed;
  }

  getHp() {
    return this.hp;
  }
}
