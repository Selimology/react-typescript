//Typeguards are functions that check the type of a variable at runtime

function sayAlexsNameLoud(name: unknown) {
  //typeof is a typeguard that checks the type of a variable at runtime

  // if(typeof name !== 'string') return; will mean that name is not a string
  if (typeof name === 'string') {
    console.log(`Hey, ${name.toUpperCase()}`);
  }
}

function calculateScore(score: number | string) {
  switch (typeof score) {
    case 'number':
      return score * 2;
      break;
    case 'string':
      return score + score;
      break;
    default:
      throw new Error('Invalid score');
  }
}

//Typeguards on objects, arrays and classes

function combineList(list: unknown): any {
  if (Array.isArray(list)) {
    //In this case, the list is an array of any[] type
    list;
  }
}

//Typeguard on array - filtering the array to check if it a number array.

function combineList2(list: unknown): any {
  if (Array.isArray(list)) {
    //filtering the array to check if it a number array.
    const filteredList: number[] = list.filter((item) => {
      if (typeof item != 'number') return false;
      return true;
    });
  }
}

//Typeguard on array - mapping the array to check if it a number array.

function combineList3(list: unknown): any {
  if (Array.isArray(list)) {
    const mappedList: number[] = list.map((item) => {
      const numberValue = parseFloat(item); //parseFloat converts a string to a number
      if (isNaN(numberValue)) return 0; //isNaN checks if the value is not a number
      return numberValue;
    });
  }
}

//Typeguard on array - for loop the array to check if it a number array.

function combineList4(list: unknown): any {
  if (Array.isArray(list)) {
    let loopedList: number[] = [];
    for (let item of list) {
      if (typeof item === 'number') {
        loopedList.push(item);
      }
    }
  }
}

//--------------------------------------------

//Typeguard of class

class Fruit {
  constructor(public name: string) {}
  eat() {
    console.log(`Mmm. ${this.name}s.`);
  }
}

function eatFruit(fruit: unknown) {
  //instanceof is a typeguard that checks if the object is an instance of a class
  if (fruit instanceof Fruit) {
    fruit.eat();
  }
}

//--------------------------------------------

//Objects

interface Person {
  name: string;
}

//Typeguard of object
//we assign object rather than unknown and then check if the object has a name property
//since it will not have a name property, we also need to assign Person type.
function sayPersonNameLoud(person: object | Person) {
  //check if the object has a name property
  if ('name' in person) {
    console.log(`Hey, ${person.name.toUpperCase()}`);
  }
}
