import {Fighter} from './fighter';

/**
 * Universe Class
 */
export class Universe {
  list: Fighter[];
  /**
   * Universe Class constructor
   * @param list array of Fighter
   */
  constructor(list: Fighter[] = []) {
    this.list = list;
  }

  /**
   * Universe List getter
   * @returns list object
   */
  getUniverseList(): Fighter[] {
    return this.list;
  }
  
  /**
   * Universe list setter
   * @param fighter fighter add list
   */
  setUniverseList(fighter: Fighter) {
    this.list.push(fighter);
  }
}
