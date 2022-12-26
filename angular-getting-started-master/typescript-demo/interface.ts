interface User {
  name: string;
  age?: number; //optional
  id: number;
  email: string;
}

let user: User = {
  name: "John",
  id: 1,
  email: "",
};

//extends an interface
interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  name: "John",
  id: 1,
  email: "",
  salary: 1000,
};

//interface methods
// with export the interface can be used outside the class
export interface Login {
  login(): User;
}
