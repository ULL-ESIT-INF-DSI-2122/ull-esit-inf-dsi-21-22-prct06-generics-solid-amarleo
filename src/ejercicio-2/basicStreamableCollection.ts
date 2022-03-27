import {Streamable} from './streamable';

/**
 * Abstract Class Basic Streamable Collection
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  collection: T[];
  /**
   * BasicStreamableCollection constructor attributes
   * @param collection array of T type
   */
  constructor(collection: T[] = []) {
    this.collection = collection;
  }

  /**
   * abstract method searchby
   * @param key string with the category to search by
   * @param search string or number to search
   */
  abstract searchBy(key: string, search: string | number): T[] | string;

  /**
   * Number of Item getter
   * @returns returns length
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  /**
   * Adds new Item to the collection attibute
   * @param newItem item to add
   */
  addItem(newItem: T): void {
    this.collection.push(newItem);
  }

  /**
   * Delete a item from a collection
   * @param item item to delete
   */
  deleteItem(item: T): void {
    const index = this.collection.indexOf(item);
    if (index >= -1) this.collection.splice(index, 1);
  }
}
