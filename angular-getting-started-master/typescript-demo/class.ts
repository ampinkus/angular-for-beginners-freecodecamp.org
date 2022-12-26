/* class Employee {
  //properties
  #id: number; // # tells that the property is private
  protected name: string; // used for extending classes
  address: string;

  //constructor
  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  // getter and setter:
  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  //methods
  getNameAddress(): string {
    return `${this.name} lives at ${this.address}`;
  }

  getNameId = (): string => `${this.name} has id number ${this.#id}`;

  // static method
  static getEmployeeCount(): number {
    return 50;
  }
}

class Manager extends Employee {
  //constructor
  constructor(id: number, name: string, address: string) {
    super(id, name, address); // for extended classes super is mandatory
  }

  //methods
  getNameAddress(): string {
    return `${this.name} lives at ${this.address}`;
  }
}

let John = new Employee(1, "John", "Cabildo");
let Mike = new Manager(2, "Mike", "Rivadavia");

console.log(John);
let nameAddress = John.getNameAddress();
let nameId = John.getNameId();
console.log(nameAddress);
console.log(nameId);
console.log(Employee);

let nameAddress2 = Mike.getNameAddress();
console.log(nameAddress2);

John.empId = 100;
console.log(John.empId);
 */
