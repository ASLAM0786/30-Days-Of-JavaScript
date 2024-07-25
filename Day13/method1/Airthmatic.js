export function add(a, b) {
  return a + b;
}

export const Person = {
  name: "Aslam",
  age: "28",
  email: "aslam0746@gmail.com",
  getAge() {
    return Person.age;
  },
  getName() {
    return Person.name;
  },
};

export function subtract(a, b) {
  return a - b;
}
