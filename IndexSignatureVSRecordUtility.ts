//Index Signature
//Creating an object, but you don't know the exact keys names. (Pizza,Books,Jobs)

//In this interface, pizza,books, jobs are required, but dave is optional
interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
  readonly [key: string]: number;
}
// interface TransactionObj {
//   //Declares all the keys will be string, and the value will be number
//   [key: string]: number;
// }

const todaysTransaction: TransactionObj = {
  Pizza: 10,
  Books: -40,
  Job: 100,
  Dave: 42,
};

console.log(todaysTransaction.Pizza); //10
console.log(todaysTransaction['Pizza']); //10

let prop: string = 'Pizza';
console.log(todaysTransaction[prop]);

// ------------------------------
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransaction));

todaysTransaction.Pizza = 40; //40

//Since we are using index signature, typescript assumes we have "Dave" in the object.
//So this is one issue with index signature
console.log(todaysTransaction['Dave']);

//---------------------------

//Index Signature in an interface with multiple types requires you to assign all of the types to that key
interface Student {
  name: string;
  GPA: number;
  class?: number[];
  //We have to assign string,number,number[],undefined to the key
  // [key: string]: string | number | number[] | undefined;
}

const firstStudent: Student = {
  name: 'Dave',
  GPA: 3.5,
  class: [1, 2, 3, 4, 5],
};

/*
When looping through an object, using "in" , it will require you to use the index signature

Otherwise, in case you just want to loop over teh values, use of Object.values
Or if you want to iterate over the key and its value, use Object.entries
You can also use as keyof Student
*/

for (const key in firstStudent) {
  console.log(`${key}: ${firstStudent[key]}`);
  //This will print :
  // name: Dave
  // GPA: 3.5
  // class: 1,2,3,4,5
  // undefined
}

//Using below, we don't have to use the index signature
for (const key in firstStudent) {
  console.log(`${key}:${firstStudent[key as keyof Student]}`);
  //This will print :
  // name: Dave
  // GPA: 3.5
  // class: 1,2,3,4,5
  //undefined
}

Object.keys(firstStudent).map((key) => {
  console.log(firstStudent[key as keyof typeof firstStudent]);
  //This will print :
  // Dave
  // 3.5
  // 1,2,3,4,5
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`$Student ${key}: ${student[key]}`);
};

logStudentKey(firstStudent, 'GPA'); //Student GPA: 3.5

for (const key of Object.values(firstStudent)) {
  console.log(key);
  //This will print :
  // Dave
  // 3.5
  // 1,2,3,4,5
}

for (const [key, value] of Object.entries(firstStudent)) {
  console.log(`${key}: ${value}`);
  //This will print :
  // name: Dave
  // GPA: 3.5
  // class: 1,2,3,4,5
}

//---------------------------

//Equivalent to the index signature
// interface Incomes {
//   [key: string]: number;
// [key:'salary] : number; //Wouldn't work
// }

//Difference using Record is , we can assign literal types to the key
//However, we can't assign different types
type Streams = 'salary' | 'freelance' | 'investments';
type Incomes = Record<Streams, number>;
//While in index signature, we shouldn't assign different types
type Incomes2 = Record<Streams, number | string>;

const monthlyIncomes: Incomes2 = {
  salary: 1000,
  freelance: 500,
  investments: 100,
};

//To loop
//It won't work if we simply do monthlyIncomes[revenue]

// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue]);
// }
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes2]);
}
