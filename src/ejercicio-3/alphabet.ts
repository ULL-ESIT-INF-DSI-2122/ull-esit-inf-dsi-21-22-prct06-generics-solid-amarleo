/**
 * Alphabet Class
 */
export class Alphabet {
  content: string;
  constructor(content: string = '') {
    this.content = content;
  }
  /**
  * Content getter
  * @returns string alphabet
  */
  getContent() {
    return this.content;
  }

  /**
   * Content setter
   * @param content string setter
   */
  setContent(content: string) {
    this.content = content;
  }

  /**
   * size getter
   * @returns alphabet size
   */
  getSize() {
    return this.content.length;
  }
}
