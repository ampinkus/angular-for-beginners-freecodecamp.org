function add(a: number, b: number): number {
  // need to return number
  return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

const mult = function (a: number, b: number): number {
  // need to return number
  return a * b;
};

// optional parameters. if c exists return a + b + c, else a + b
const addThree = (a: number, b: number, c?: number): number =>
  c ? a + b + c : a + b;

//Required parameter, if c not specified we use 10, it needs to be the LAST parameter!
const addRequired = (a: number, b: number, c: number = 10): number => a + b + c;

console.log(add(1, 2));
console.log(addArrow(1, 2));
console.log(mult(3, 2));
console.log(addThree(1, 2, 3));
console.log(addThree(1, 2));
console.log(addRequired(1, 2));

// Rest operator, we can use a undefined number of arguments
const addReduce = (a: number, b: number, ...c: number[]): number =>
  a + b + c.reduce((a, b) => a + b, 0);

let numbers: number[] = [3, 4, 5];
console.log(addReduce(1, 2, ...numbers));

//generic function
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatNumbers = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatNumbers);
console.log(concatString);
