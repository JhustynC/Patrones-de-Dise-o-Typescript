interface IEnemy {
  alias: string;
  health: number;
  atack(): void;
}

class EnemyOne implements IEnemy {
  alias: string;
  health: number;

  constructor(name: string, health: number) {
    this.alias = name;
    this.health = health;
  }

  atack(): void {
    console.log(`Atack from enemy: ${this.alias}`);
  }
}

class EnemyTwo implements IEnemy {
  alias: string;
  health: number;

  constructor(name: string, health: number) {
    this.alias = name;
    this.health = health;
  }

  atack(): void {
    console.log(`Atack from enemy: ${this.alias}`);
  }
}

export interface IEnemyFactory {
  createEnemy(enemyType: string): IEnemy | undefined;
}

// Esta es una implementacion de un simple factory que no cumple con el principio	O/C
// export class EnemySimpleFactory implements IEnemyFactory {
//   private enemysMap = new Map<string, IEnemy>([
//     ["one", new EnemyOne("Enemy One", 100)],
//     ["two", new EnemyTwo("Enemy Two", 150)],
//   ]);

//   public createEnemy(enemyType: string): IEnemy | undefined {
//     return this.enemysMap.get(enemyType);
//   }
// }

export class EnemyOneFactory implements IEnemyFactory {
  createEnemy(
    alias: string = "Enemy One",
    health: number = 100
  ): IEnemy | undefined {
    return new EnemyOne(alias, health);
  }
}

// Usage
// const enemyFactory = new EnemySimpleFactory(); Esto viola el pricio Open/Close

/*
Mediante una fabrica para cada enemy protegemos el codigo y en caso de agregar mas
enemigos el codigo no se vera afectado ni modificado, ademas cada fabrica cumple una
unica funcion (crear un solo tipo de enemigo) lo cual cumple con el principo de 
responsabilidad unica
*/
const enemyOneFactory = new EnemyOneFactory(); 

const enemy1 = enemyOneFactory.createEnemy();
const enemy2 = enemyOneFactory.createEnemy();
const enemy3 = enemyOneFactory.createEnemy();

function SomeEnenmyAction(enemy: IEnemy) {
  enemy.atack();
}

SomeEnenmyAction(enemy1!);
SomeEnenmyAction(enemy2!);
SomeEnenmyAction(enemy3!);
