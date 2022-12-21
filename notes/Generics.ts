//Generics are a way to create reusable code that can work with different types.

//Both this functions are the same, but we are taking number type in first, and string type in second.: number {}

function getFirstItem(list: number[]): number {
  return list[0];
}

function getFirstStringItem(list: string[]): string {
  return list[0];
}

//Using generics
function getFirstItemGeneric<T>(list: T[]): T {
  return list[0];
}

const item = getFirstItemGeneric([1, 2, 3]);
const stringItem = getFirstItemGeneric(['hello', 'world']);

//Generics on class

class Fruit {
  constructor(public name: string) {}
}
const fruit = getFirstItemGeneric([
  new Fruit('Apple'),
  new Fruit('Banana'),
  new Fruit('Orange'),
]);

// ----------------------------

type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

interface Fruit {
  name: string;

  color: string;
}

const fruitTree: Tree<Fruit> = {
  value: { name: 'Apple', color: 'Red' },
  left: {
    value: { name: 'Banana', color: 'Yellow' },
  },
  right: {
    value: { name: 'Orange', color: 'Orange' },
  },
};

//---------------------------

class FruitBasket {
  contructor(public fruits: Fruits[] = []) {}
  add(fruit: Fruits) {
    this.fruits.push(fruit);
  }
  eat() {
    this.fruits.pop();
  }
}

class Fruits {
  isFruit: true;
  constructor(public name: string) {}
}
