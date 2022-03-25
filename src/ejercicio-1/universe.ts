import {Fighter} from './fighter';

export class Universe {
  list: Fighter[];

  constructor(list: Fighter[] = []) {
    this.list = list;
  }

  getUniverseList(): Fighter[] {
    return this.list;
  }
  setUniverseList(fighter: Fighter) {
    this.list.push(fighter);
  }
}
