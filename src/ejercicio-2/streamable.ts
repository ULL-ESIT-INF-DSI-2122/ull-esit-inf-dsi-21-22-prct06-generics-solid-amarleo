export interface Streamable<T> {
  searchBy(collection: T[], key: string): T[];
  getNumberOfItems(): number;
  addItem(newItem: T): void;
  deleteItem(item: T): void;
}
