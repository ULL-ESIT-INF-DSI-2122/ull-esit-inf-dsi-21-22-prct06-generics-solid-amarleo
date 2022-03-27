import {BasicStreamableCollection} from './basicStreamableCollection';
import {Serie} from './serie';

/**
 * Serie Colllection Class
 */
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * Serie Collection Constructor
   * @param collection array of Serue objects
   */
  constructor(collection: Serie[] = []) {
    super(collection);
  }

  /**
   * searchBy method
   * @param key string of number to search
   * @param search string of number to search
   * @returns Serie object array or string error
   */
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
