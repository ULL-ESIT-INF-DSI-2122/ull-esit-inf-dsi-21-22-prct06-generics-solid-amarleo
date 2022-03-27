/**
 * Documental Class
 */
export class Documental {
  title: string;
  director: string;
  genre: string;
  year: number;
  ranking: number;
  /**
   * Documental constructor attibute
   * @param title string with the title of Documental
   * @param director string with the director of Documental
   * @param genre string with the genre of Documental
   * @param year number with the year of Documental
   * @param ranking number with the ranking of Documental
   */
  constructor(title: string = '', director: string = '', genre: string = '', year: number = 0, ranking: number = 0) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.ranking = ranking;
  }

  /**
   * Tittle attribute getter
   * @returns title string
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * Director attribute getter
   * @returns director string
   */
  getDirector(): string {
    return this.director;
  }

  /**
   * Genre attribute getter
   * @returns genre string
   */
  getGenre(): string {
    return this.genre;
  }

  /**
   * Year attribute getter
   * @returns year number
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Ranking attribute getter
   * @returns ranking number
   */
  getRanking(): number {
    return this.ranking;
  }
}
