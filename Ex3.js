class Person {
  name = "";
  address = "";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  toString() {
    return `Person[name = ${this.name}, address = ${this.address}]`;
  }
}

class Student {
  person = null;
  program = "";
  year = 0;
  fee = 0;
  constructor(person, program, year, fee) {
    this.person = person;
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  getProgram() {
    return this.program;
  }

  setProgram(program) {
    this.program = program;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    this.year = year;
  }

  getFee() {
    return this.fee;
  }

  setFee(fee) {
    this.fee = fee;
  }

  toString() {
    return `Student[${this.person.toString()}, program = ${
      this.program
    }, year = ${this.year}, fee = ${this.fee}]`;
  }
}

class Staff {
  person = null;
  school = "";
  pay = 0;
  constructor(person, school, pay) {
    this.person = person;
    this.school = school;
    this.pay = pay;
  }

  getSchool() {
    return this.school;
  }

  setSchool(school) {
    this.school = school;
  }

  getPay() {
    return this.pay;
  }

  setPay(pay) {
    this.pay = pay;
  }

  toString() {
    return `Staff[${this.person.toString()}, school = ${this.school}, pay = ${
      this.pay
    }]`;
  }
}

const main = () => {
  const person1 = new Person("Kay", "Ban Kay");
  const student1 = new Student(person1, "Software Engineer", 65, 11400);
  const staff1 = new Staff(person1, "npru", 11400);

  console.log(student1.toString());
};

main();
