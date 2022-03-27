/**
 * Fighter Class
 */
export abstract class Fighter {
  constructor(protected name: string, protected height: number,
    protected weight: number, protected attack: number,
    protected defense: number, protected speed: number,
    protected hp: number, protected phrase: string) {
  }
  /**
   * Fighter name getter
   * @returns Fighter object name
   */
  getName() {
    return this.name;
  }
  /**
   * Fighter height getter
   * @returns Fighter object number height
   */
  getHeight() {
    return this.height;
  }
  /**
   * Fighter weight getter
   * @returns Fighter object number weight
   */
  getWeight() {
    return this.weight;
  }
  /**
   * Fighter attack getter
   * @returns Fighter object number attack
   */
  getAttack() {
    return this.attack;
  }
  /**
   * Fighter defense getter
   * @returns Fighter object number defense
   */
  getDefense() {
    return this.defense;
  }

  /**
   * Fighter speed getter
   * @returns FIghter object number speed
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * Fighter hp getter
   * @returns Fighter object number hp
   */
  getHp() {
    return this.hp;
  }

  /**
   * Fighter phrase getter
   * @returns Fighter object string phrase
   */
  getPhrase() {
    return this.phrase;
  }
}
