/**
 * Film Class
 */
export class Film {
  title: string;
  director: string;
  genre: string;
  year: number;
  ranking: number;
  constructor(title: string = '', director: string = '', genre: string = '', year: number = 0, ranking: number = 0) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.ranking = ranking;
  }

  /**
   * Title string getter
   * @returns string with title
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * Director string getter
   * @returns string with director
   */
  getDirector(): string {
    return this.director;
  }

  /**
   * Genre string getter
   * @returns string with genre
   */
  getGenre(): string {
    return this.genre;
  }

  /**
   * Year number getter
   * @returns number with year
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Ranking number getter
   * @returns number with ranking
   */
  getRanking(): number {
    return this.ranking;
  }
}
