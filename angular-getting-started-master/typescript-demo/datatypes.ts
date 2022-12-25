/* let lname: string = "Pinkus";
console.log(lname);
lname = "Alfredo";
let newName = lname.toUpperCase();
console.log(newName);

let age: number = 25;
console.log(age);
console.log(age / 7);
console.log(age.valueOf());
age = parseInt("64");
console.log(age);

// boolean need to be initialized
let isValid: boolean = true;
console.log(isValid);

// strings
let employees: string[];
employees = ["Alfredo", "Tomas", "Juan"];
console.log(employees);

let names: Array<string>; // another way to define an Array
names = ["Alfredo", "Tomas", "Juan"];
console.log(names);

let numList: Array<number>; // another way to define an Array
numList = [1, 2, 3, 4, 5];
console.log(numList);

let filtered = numList.filter((num) => num > 2); // filter the numbers that are > 2
console.log(filtered);

let finded = numList.find((num) => num > 2); // return the first number that comply with the condition
console.log(finded);

let other = numList.find((num) => num == 5); // return the number if it is there
console.log(other);

let findName = employees.find((findName) => (findName = "Alfredo")); // we can use findname in all the sentence
console.log(findName);

let numList2: Array<number>; // another way to define an Array
numList2 = [1, 2, 3, 4, 5];

let suma = numList2.reduce((acc, num) => acc + num);
console.log(suma);

//enum
enum Color {
  red,
  green,
  blue,
}
let color = Color.blue;
console.log(Color);
console.log(color);

const enum Color2 {
  red,
  green,
  blue,
}
let color2 = Color2.blue; // when it compile to JS it assign to color the index value of blue
console.log(color2);
*/

// tuples
let swapNumbs: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = [10, 20];
console.log(swapNumbs);
console.log(swapNumbs[0]);
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);

let code: any;
code = 10;
code = "asd";
