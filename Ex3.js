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

class Student extends Person {
  program = "";
  year = 0;
  fee = 0;
  constructor(name, address, program, year, fee) {
    super(name, address);
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
    return `Student[${super.toString()}, program = ${this.program}, year = ${
      this.year
    }, fee = ${this.fee}]`;
  }
}

class Staff extends Person {
  school = "";
  pay = 0;
  constructor(name, address, school, pay) {
    super(name, address);
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
    return `Staff[${super.toString()}, school = ${this.school}, pay = ${
      this.pay
    }]`;
  }
}

const main = () => {
  const person1 = new Person("Kay", "Ban Kay");
  const student1 = new Student(
    "Kay",
    "Kay House",
    "Software Engineer",
    65,
    11400
  );
  const staff1 = new Staff("Kay", "Kay House", "npru", 11400);

  console.log(student1.toString());
};

main();
