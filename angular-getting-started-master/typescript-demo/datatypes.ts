let lname: string = "Pinkus";
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
