import {BasicStreamableCollection} from './basicStreamableCollection';
import {Documental} from './documental';

export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  constructor(collection: Documental[] = []) {
    super(collection);
  }

  searchBy(key: string, search: string | number): Documental[] | string {
    let result: Documental[] = [];
    if (key === 'title') {
      this.collection.forEach((element: Documental) => {
        if (element.getTitle() === search) {
          result.push(element);
        }
      });
    } else if (key === 'director') {
      this.collection.forEach((element: Documental) => {
        if (element.getDirector() === search) {
          result.push(element);
        }
      });
    } else if (key === 'genre') {
      this.collection.forEach((element: Documental) => {
        if (element.getGenre() === search) {
          result.push(element);
        }
      });
    } else if (key === 'year') {
      this.collection.forEach((element: Documental) => {
        if (element.getYear() === search) {
          result.push(element);
        }
      });
    } else if (key === 'ranking') {
      this.collection.forEach((element: Documental) => {
        if (element.getRanking() === search) {
          result.push(element);
        }
      });
    } else {
      return 'Wrong key';
    }
    return result;
  }
}
