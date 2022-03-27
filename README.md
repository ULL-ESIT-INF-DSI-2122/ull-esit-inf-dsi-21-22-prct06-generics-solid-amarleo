# Práctica 6: Clases e interfaces genéricas. Principios SOLID

## Indice

  - [Introducción](#introducción)
  - [Tareas previas](#tareas-previas)
  - [Ejercicios](#ejercicios)
  - [Conclusión](#conclusión)

## Introducción

El presente informe perteneciente a la sexta práctica de la asignatura de Desarrollo de Sistemas Informáticos tiene como principales objetivos seguir poniendo en práctica el desarrollo dirigido por pruebas a través de Mocha y Chai, además de continuar desarrollando código con el apoyo de las herramientas [Instanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/), de las que se obtendrá un informe sobre el cubrimiento del mismo.

## Tareas Previas

En cuanto a las tareas previas, en esta ocasión no se llevarán a cabo ninguna explicación sobre la instalación y uso de las herramientas Instanbul y Coveralls, debido a que esto ya fue desarrollado en la práctica anterior. En adición, se ha realizado un repaso de los principios SOLID, así como de realizar un planteamiento previo de las clases y atributos que formarían parte en los ejercicios que serán explicados a continuación.

## Ejercicios

A continuación, se comenzará a detallar cada uno de los ejercicios propuestos en esta práctica, mostrando y detallando los planteamientos que han sido llevados a cabo para la resolución de los mismos.

### Ejercicio 1: El Combate Definitivo

En primer lugar, se ha ideado una posible propuesta de jerarquía y diseño de clases para este ejercicio. Principalmente se han de destacar cuatro tipos de clases: 

- Fighter: Clase abstracta que permite crear un nuevo luchador
- Combat: Clase que define y construye los combates.
- Universe: Se trata de una ampliación de la ya conocida clase Pokédex de la práctica anterior
- Marvel y Pokémon: Se tratan de clases que definen a los luchadores de un mismo Universo.

A continuación, se detallarán los pasos llevados a cabo para la creación de cada clase.

#### Fighter 

Tal y como se ha descrito anteriormente, se trata de una clase abstracta. Ésta tiene la motivación de ser la clase en la que se definan los diferentes atributos y métodos que va a requerir un luchador, como son por ejemplo el nombre, la altura, etc.

Para llevar a cabo esta tarea, se ha desarrollado como ha sido costumbre en las anteriores prácticas, una serie de tests (localizados en el directorio con el mimo nombre) sobre los que se han construido diferentes escenarios. En este caso, al tratarse de una clase abstracta, y por tanto, al no poder definirse objetos de la misma, no se han generado los tests pertinentes. Sin embargo, el uso de esta clase será convenientemente testeado sobre aquellas clases que la extiendan (en este caso, Marvel y Pokémon)

Después de esto, se ha creado la clase en el directorio src. En el código que se encuentra a continuación, se puede observar como ha sido construida esta clase, donde se han omitido parte de los métodos de la misma: 

```typescript
export abstract class Fighter {
  constructor(protected name: string, protected height: number,
    protected weight: number, protected attack: number,
    protected defense: number, protected speed: number,
    protected hp: number, protected phrase: string) {
  }
  /**
   * Fighter name getter
   * @returns Fighter object name
   */
  getName() {
    return this.name;
  }
```

#### Marvel y Pokémon

En primer lugar, se han creado los tests para las clases Pokémon y Marvel, donde se podrán realizar comprobaciones en el funcionamiento de no sólo estas clases, sino de su propia superclase.

```typescript
const ajak = new Marvel('Ajak', 1.7, 65, 'Eternal', 200, 150, 125, 400, 'A lo largo de los años, nunca hemos interferido... hasta ahora.');
const doctorStrange =
  new Marvel('Doctor Strange', 1.85, 75, 'Human', 150, 300, 150, 400, 'Sólo eres una mota minúscula y pasajera dentro de un universo indiferente.');
const heimdall =
  new Marvel('Heimdall', 1.9, 80, 'Asgardian', 100, 300, 100, 350, 'Estoy atado por honor a nuestro rey.');

describe('Marvel class tests', () => {
  describe('Marvel Class getters', () => {
    it('getName method', () => {
      expect(ajak.getName()).to.be.eql('Ajak');
      expect(doctorStrange.getName()).to.be.eql('Doctor Strange');
      expect(heimdall.getName()).to.be.eql('Heimdall');
    });
    it('getHeight method', () => {
      expect(ajak.getHeight()).to.be.eql(1.7);
      expect(doctorStrange.getHeight()).to.be.eql(1.85);
      expect(heimdall.getHeight()).to.be.eql(1.9);
    });

    [- - -]
```

El procedimiento que se ha llevado a cabo durante la práctica ha sido, crear una serie de objetos para comprobar el funcionamiento de cada uno de los métodos y atributos de la clase. En el código anterior se puede observar un pequeño ejemplo de esta idea.

Pokémon y Marvel tratan de subclases de la superclase Figther anteriormente comentada. Estas subclases heredarán todos los atributos que fueron creados en Fighter, y, además, incluirán un atributo adicional, referente a el tipo de Pokémon o para el caso de Marvel, las distintas Especies posibles. En el siguiente ejemplo se puede observar como se ha procedido con la clase Marvel (aunque para la de Pokémon se ha procedido de forma similar)

```typescript
type MarvelSpecies = 'Human' | 'Asgardian' | 'Eternal';

export class Marvel extends Fighter {
  protected species: MarvelSpecies;

  constructor(name: string, height: number, weight: number,
      species: MarvelSpecies, attack: number, defense: number,
      speed: number, hp: number, phrase: string) {
    super(name, height, weight, attack, defense, speed, hp, phrase);
    this.species = species;
  }
```

Como se puede observar, se ha procedido creando en primer lugar, un type con los posibles strings a elegir. Luego, en el constructor se instancian los atributos propios de la superclase, donde se ha añadido además el atributo especies.

#### Universe

Por otro lado, la clase Universe ha resultado ser una pequeña modificación de la ya conocida clase Pokédex. En este caso, se trata de básicamente un array de Fighters, donde se almacenarán todos aquellos luchadores que han sido conocidos. Debido a esto, se han desarrollado los principales métodos propios de arrays.

Al igual que para el resto de casos, se han creado los diferentes tests unitarios.comprobando así el buen funcionamiento de la clase. Esto se puede ver tanto en el directorio tests (universe.spec.ts).

#### Combat

La finalidad de esta clase es la de organizar, gestionar y visualizar los combates de los diferentes luchadores. La intención por tanto es la de establecer principalmente dos atributos, para cada combatiente. Obviando conceptos que se han visto ya con otros ejemplos de esta clase y debido a la longitud de los códigos, se procederá a detallar aquellos métodos más representativos o importantes. 

En primer lugar, se detalla el método **fighterDamage()**, el cuál distingue entre los tipos de datos introducidos (Fighters). Se ha mantenido la estructura de cálculo de daño de Pokémon, sólo que esta vez, se ha añadido diferencias para la clase Marvel. A continuación se puede observar las líneas que modifican esto: 

```typescript
  fighterDamage(atkFighter: Fighter, defFighter: Fighter): number {
    let multiplier: number = 1;
    if ((atkFighter instanceof Pokemon) && (defFighter instanceof Pokemon)) {
      if (atkFighter.getType() == 'Fire') {
        if (defFighter.getType() == 'Grass') multiplier = 2;
        if (defFighter.getType() == 'Water') multiplier = 0.5;
      }
      if (atkFighter.getType() == 'Water') {
        if (defFighter.getType() == 'Grass') multiplier = 0.5;
        if (defFighter.getType() == 'Fire') multiplier = 2;
      }
      if (atkFighter.getType() == 'Grass') {
        if (defFighter.getType() == 'Fire') multiplier = 0.5;
        if (defFighter.getType() == 'Water') multiplier = 2;
      }
      if (atkFighter.getType() == 'Electric') {
        if (defFighter.getType() == 'Grass') multiplier = 0.5;
        if (defFighter.getType() == 'Water') multiplier = 2;
      }
    } else if (atkFighter instanceof Marvel) {
      if (atkFighter.getSpecies() == 'Asgardian') multiplier = 1.2;
      else if (atkFighter.getSpecies() == 'Human') multiplier = 1;
      else if (atkFighter.getSpecies() == 'Eternal') multiplier = 1.2;
    } else {
      multiplier = 1;
    }
    return Math.round(
        50 * (atkFighter.getAttack() / defFighter.getDefense()) * multiplier);
  }
```

Finalmnente, se encuentra el método **start()**. Este método se trata de una ampliación del que fue desarrollado para la clase Combat de la práctica anterior. Se ha añadido cambios en el historial de combate, donde esta vez se presentan frases de los luchadores. Finalmente, se define el ganador del combate:

```bash
Turn 1: Argg
        Ninetales hits Ajak with 25 points of damage -> [ 400 - 25 = 375HP left ]

Turn 2: A lo largo de los años, nunca hemos interferido... hasta ahora.
        Ajak hits Ninetales with 160 points of damage -> [ 73 - 160 = -87HP left ]

Ninetales fainted!
Ajak Wins!
```

### Ejercicio 2: DSIflix

Para este ejercicio se ha planteado definir una interfaz genérica con el nombre **Streamable**. Esta interfaz ha sido desarrollada con la intención de especificar métodos con los que debe contar las diferentes colecciones, creadas como clases. 

En este caso, debido a que se han de realizar búsquedas según una categoría concreta de cualquier tipo de emisión, se ha propuesto el método **searchBy**, la cuál a través de una categoría (key) y un campo de texto o número a buscar (search), procede a listar todos los elementos encontrados que cumplan dichas condiciones.

Por otro lado, con el objetivo de ser clases un tanto más prácticas, se han establecido getters y diferentes métodos de utilidad como son addItem y deleteItem para añadir o quitar elementos de una colección.

A continuación se puede observar como ha quedado el diseño: 


```typescript
export interface Streamable<T> {
  searchBy(key: string, search: string | number): T[] | string;
  getNumberOfItems(): number;
  addItem(newItem: T): void;
  deleteItem(item: T): void;
}
```
Posteriormente, se ha definido la clase **BasicStreamableCollection**, la cuál implementa la interfaz anterior. Se trata además de una clase abstracta que tiene como único atributo un array del dato T. De esta forma, posteriormente, con el uso de subclases, se podrán definir los difentes tipos de datos con los que se construirá ese array.

En la misma clase se han definido los métodos, así como se ha establecido el seatchBy como método abstracto, ya que serán definifo luego en las subclases.

Antes de definir las Colecciones, se definen las diferentes clases de los elementos a stremear. En este caso se ha propuesto tres clases (film, serie y documental), que contendrán diferente información relevante, como son categorías o descripciones para definir cada uno de los elementos. Estas clases son bastante similares entre sí, donde únicamente se han instanciado atributos, además de una serie de getters y setters propios de cada clase.

Finalmente se han definido las clases Collections. Existe una por cada una de las clases de elementos stremeables (filmCollection, serieCollection y documentalCollection). Estas tienen la intención de crear arrays de la forma en la que fue definida la clase abstracta genérica basicStreamableCollection, pero en lugar de establecer el tipo T, se establece la clase en cuestión.

A continuación se puede observar un ejemplo con la clase serieCollection: 


```typescript
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * Serie Collection Constructor
   * @param collection array of Serue objects
   */
  constructor(collection: Serie[] = []) {
    super(collection);
  }

  [. . .]
```

En esta clase se ha definido además, el método que había sido declarado como abstracto en la superclase. En este caso se realiza un filtro de la categoría a buscar, y posteriormente, se settean en un array auxiliar, todos los elementos que cumplen ambas condiciones. A continuación se muestra cómo se ha desarrollado el método: 

```typescript
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
```
Como se puede observar, además se devuelve un código de error en caso de introducirse mal la categoría. El funcionamiento de este método y el resto, se puede observar dentro de todos los ficheros de especativas creados apoyados en Mocha y Chai.

### Ejercicio 3: El cifrado indescifrable

## Conclusión
