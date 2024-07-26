//*Class Definition
class Person {
  static counter = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.counter++;
  }
  greet() {
    console.log(`Hello ${this.name} , Your Age is ${this.age}`);
  }
  setAge(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  static sum(a, b) {
    return a + b;
  }
  getStudentCount() {
    return Person.counter;
  }
  getName() {
    return this.name;
  }
  setName(fisrtname, lastname) {
    this.name = fisrtname + " " + lastname;
  }
}

const person = new Person("Aslam", 26);
person.greet();
person.setAge(20);
console.log(person.getAge());

//*Class Inheritance
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
  greet() {
    console.log(
      `Hello ${this.name} , Your Age is ${this.age} and StudentId is ${this.studentId}`
    );
  }
}

const student = new Student("Afrin", 26, 1000);
console.log(student.getStudentId());
student.greet();

//* Static methods and Properties
console.log(Person.sum(2, 3));

console.log(person.getStudentCount());

person.setName("Aslam", "Ansari");
console.log(person.getName());

class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }
  deposit(money) {
    this.#balance += money;
    console.log(`Now Balance in Account is ${this.#balance}`);
  }
  withdraw(money) {
    if (money > this.#balance) {
      console.log(`Insufficient Balance !!, Balance is ${this.#balance}`);
      return;
    }
    this.#balance -= money;
    console.log(`Successfully withdrawal!!, Balance is ${this.#balance}`);
  }
}

const account = new Account();
account.deposit(10);
account.withdraw(4);
account.withdraw(7);
