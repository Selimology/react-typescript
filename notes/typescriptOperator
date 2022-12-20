//Typesript Operators

const answer: number = 15 + 27;

type NumberOrString = number | string;

interface Fruit {
  name: string;
  color: string;
  nutrition: {
    name: string;
    amount: number;
    age: number;
  }[];
}
//Type Index Access Operator is used to access the type of a property in an interface
type FruitNutritionList = Fruit['nutrition'];

type FruitNutrition = FruitNutritionList[number];

//typeof operator is used to get the type of a variable
//in this case rectangle is of type {width: number, height: number}
let rectangle = { width: 100, height: 200 };
let rectangle2: typeof rectangle;

// same as below
interface Rectangle {
  width: number;
  height: number;
}

//keyof operator is used to get the keys of an interface -- width | height in this case
let propertyName: keyof Rectangle = 'height';

//keyof typeof - keyof is to access keys of type and typeof is to access the variables type
// so you are accessing the keys/properties of a variable

let rectangle3: keyof typeof rectangle = 'width';
let rectangle4: keyof typeof rectangle = 'height';

//--------------------------------------------

//Typescript will infer the type of the variable based on the value assigned to it
//In this case it will be inferred as number

let circle = { radius: 100 };

//However if we really want to assign a value as a type we do:
// let circle2: { radius: 100 } = { radius: 100 };

//we use as const to make sure that the value is not changed
let circle2 = { radius: 100 } as const;

//Incase we want to make only one of them a constant property we do:
let circle3 = { radius: 100, color: 'red' as const };

//Another example:
let message = 'Hello' as const;

// --------------------------------------------

enum Seasons {
  winter,
  spring,
  summer,
  autumn,
}

const SEASONS = {
  winter: 'winter',
  spring: 'spring',
  summer: 'summer',
  autumn: 'autumn',
} as const;

//typeof SEASONS will give us the type of the variable SEASONS - {winter: string, spring: string, summer: string, autumn: string}
//keyof typeof SEASONS will give us the keys of the variable SEASONS - winter | spring | summer | autumn
//typeof SEASONS[keyof typeof SEASONS] will give us the type of the value of the keys of the variable SEASONS - string
//so we are saying that the parameter season will be of type string

function seasonsGreeting(season: typeof SEASONS[keyof typeof SEASONS]) {
  if (season === SEASONS.winter) {
    console.log('It is winter');
  }
  if (season === SEASONS.spring) {
    console.log('It is spring');
  }
  if (season === SEASONS.summer) {
    console.log('It is summer');
  }
  if (season === SEASONS.autumn) {
    console.log('It is autumn');
  }
}

// --------------------------------------------


let message2 ='hello'
let count = 5;


//If we do not use as const then the type of the variable will be string | number | function
const assortedItems = [message2, count, (fruit: Fruit) => {}];

const assortedItems2: ['hello', 5, (fruit: Fruit) => {}] as const;


