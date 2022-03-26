import {Streamable} from './streamable';

export abstract class basicStreamableCollection<T> implements Streamable<T> {
  collection: T[];

  constructor(collection: T[] = []) {
    this.collection = collection;
  }

  abstract searchBy(collection: T[], key: string): T[];

  getNumberOfItems(): number {
    return this.collection.length;
  }

  addItem(newItem: T): void {
    this.collection.push(newItem);
  }

  deleteItem(item: T): void {
    const index = this.collection.indexOf(item);
    if (index >= -1) this.collection.splice(index, 1);
  }
}
