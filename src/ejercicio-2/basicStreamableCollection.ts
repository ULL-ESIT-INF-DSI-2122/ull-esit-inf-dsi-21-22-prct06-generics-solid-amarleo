import {Streamable} from './streamable';

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  collection: T[];

  constructor(collection: T[] = []) {
    this.collection = collection;
  }

  abstract searchBy(key: string, search: string | number): T[] | string;

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
