/**
 * Key Class
 */
export class Key {
  content: string;
  constructor(content: string = '') {
    this.content = content;
  }

  /**
   * Content getter
   * @returns content string
   */
  getContent() {
    return this.content;
  }

  /**
   * Content setter
   * @param content string
   */
  setContent(content: string) {
    this.content = content;
  }

  /**
   * size getter
   * @returns conent size
   */
  getSize() {
    return this.content.length;
  }
}
