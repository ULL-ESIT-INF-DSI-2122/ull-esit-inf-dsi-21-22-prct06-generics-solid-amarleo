import {BasicStreamableCollection} from './basicStreamableCollection';
import {Serie} from './serie';

export class SerieCollection extends BasicStreamableCollection<Serie> {
  constructor(collection: Serie[] = []) {
    super(collection);
  }

  searchBy(key: string, search: string | number): Serie[] | string {
    let result: Serie[] = [];
    if (key === 'title') {
      this.collection.forEach((element: Serie) => {
        if (element.getTitle() === search) {
          result.push(element);
        }
      });
    } else if (key === 'director') {
      this.collection.forEach((element: Serie) => {
        if (element.getDirector() === search) {
          result.push(element);
        }
      });
    } else if (key === 'genre') {
      this.collection.forEach((element: Serie) => {
        if (element.getGenre() === search) {
          result.push(element);
        }
      });
    } else if (key === 'year') {
      this.collection.forEach((element: Serie) => {
        if (element.getYear() === search) {
          result.push(element);
        }
      });
    } else if (key === 'ranking') {
      this.collection.forEach((element: Serie) => {
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
