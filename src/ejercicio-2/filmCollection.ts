import {BasicStreamableCollection} from './basicStreamableCollection';
import {Film} from './film';

export class FilmCollection extends BasicStreamableCollection<Film> {
  /**
   * Film Collection Constructor
   * @param collection array of documental objects
   */
  constructor(collection: Film[] = []) {
    super(collection);
  }
  /**
   * searchBy method
   * @param key string with the category to search by
   * @param search string or number to search
   * @returns Documental object array or string error
   */
  searchBy(key: string, search: string | number): Film[] | string {
    let result: Film[] = [];
    if (key === 'title') {
      this.collection.forEach((element: Film) => {
        if (element.getTitle() === search) {
          result.push(element);
        }
      });
    } else if (key === 'director') {
      this.collection.forEach((element: Film) => {
        if (element.getDirector() === search) {
          result.push(element);
        }
      });
    } else if (key === 'genre') {
      this.collection.forEach((element: Film) => {
        if (element.getGenre() === search) {
          result.push(element);
        }
      });
    } else if (key === 'year') {
      this.collection.forEach((element: Film) => {
        if (element.getYear() === search) {
          result.push(element);
        }
      });
    } else if (key === 'ranking') {
      this.collection.forEach((element: Film) => {
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
