export interface Streamable<T> {
  searchBy(key: string, search: string | number): T[] | string;
  getNumberOfItems(): number;
  addItem(newItem: T): void;
  deleteItem(item: T): void;
}
