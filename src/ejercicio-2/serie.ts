export class Serie {
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

  getTitle(): string {
    return this.title;
  }
  getDirector(): string {
    return this.director;
  }
  getGenre(): string {
    return this.genre;
  }
  getYear(): number {
    return this.year;
  }
  getRanking(): number {
    return this.ranking;
  }
}
