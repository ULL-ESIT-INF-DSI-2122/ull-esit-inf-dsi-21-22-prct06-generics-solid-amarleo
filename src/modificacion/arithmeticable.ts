/**
 * Arithmeticable Interface
 * ERROR: Los métodos subs, multiply y divide deben de tener un único parámetro
 */
interface Arithmeticable<T> {
  add(a: T, b: T): T;
  substract(a: T, b: T): T;
  multiply(a: T, b: T): T;
  divide(a: T, b: T): T;
}

/**
 * Arithmeticable Collection Class
 * ERROR: it must be "export class ArithmeticableCollection<T extends Atithmeticable>"
 */
export class ArithmeticableCollection<T> implements Arithmeticable<T> {
  constructor(protected elements: T[]) {
  }
  /**
   * add method
   * @param a first add element
   * @param b second add element
   * @returns add of them
   */
  add(a: T, b: T): T {
    return a + b;
  }
  /**
   * substract method
   * @param a first substract element
   * @param b second substract element
   * @returns substract of them
  */
  substract(a: T, b: T): T {
    return a - b;
  }
  /**
   * multiply method
   * @param a first multiply element
   * @param b second multiply element
   * @returns multiply of them
  */
  multiply(a: T, b: T): T {
    return a * b;
  }
  /**
   * divide method
   * @param a first divide element
   * @param b second divide element
   * @returns divide of them
  */
  divide(a: T, b: T): T {
    return a / b;
  }

  /**
   * add arithemtical method
   * @param newElement it is the element to insert
   */
  addArithmeticable(newElement: T) {
    this.elements.push(newElement);
  }

  /**
   * gets the element by an index
   * @param index index to search
   * @returns element on the index
   */
  getArithmeticable(index: number): T {
    return this.elements[index];
  }
  /**
   * get the number of elements
   * @returns number of elements
   */
  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}

/**
 * Complex Class
 */
export class Complex<T> implements Arithmeticable<T> {
  r: number;
  i: string;

  constructor(r: number, i: string) {
    this.r = r;
    this.i = i;
  }
  /**
   * add method
   * @param a first add element
   * @param b second add element
   * @returns add of them
   */
  add(a: T, b: T): T {
  }
  /**
   * substract method
   * @param a first substract element
   * @param b substract add element
   * @returns substract of them
   */
  substract(a: T, b: T): T {
  }
  /**
   * multiply method
   * @param a first multiply element
   * @param b second multiply element
   * @returns multiply of them
   */
  multiply(a: T, b: T): T {
  }
  /**
   * divide method
   * @param a first divide element
   * @param b second divide element
   * @returns divide of them
   */
  divide(a: T, b: T): T {
  }
}
