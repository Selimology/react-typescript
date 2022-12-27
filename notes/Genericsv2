//Advanced Typescript : Generics

interface Array<T> {
  push(item: T): number;
  pop(): T | undefined;
}

//Generics Bounded
interface Array<T extends string | number> {
  push(item: T): number;
  pop(): T | undefined;
}

//In this case, we can only use string or number as the type argument for T.

//Generics Default Generic Types
interface Array<T extends string | number = string> {
  push(item: T): number;
  pop(): T | undefined;
}
//In this case, default type argument for T is string.

interface Person {
  name: string;
  height: number;
  weight: number;
  age: number;
}

type personProps = keyof Person;
// type personProps = "name" | "height" | "weight" | "age"

function pluck<T, K extends keyof T>(obj: T, property: K): T[K] {
  return obj[property];
}

pluck(jaime, 'name'); // 'Jaime
pluck(jaime, 'wings'); //Error

// ---------------------------------------------

type Language = 'English' | 'Spanish' | 'French';
const userLanguage: Language = 'English';
const preferences = { language: userLanguage, theme: 'light' };

console.log(typeof preferences); // object;  this is the javascript typeof
type Preferences = typeof preferences :// { language: Language; theme: string; }

type Language = keyof Preferences; // 'language' | 'theme'  

type Language2 = keyof typeof preferences; // 'language' | 'theme'
