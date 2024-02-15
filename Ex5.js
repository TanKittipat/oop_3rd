class Customer {
  name = "";
  member = false;
  memberType = 0;
  constructor(name, member = false, memberType) {
    this.name = name;
    this.member = member;
    this.memberType = memberType;
  }

  getName() {
    return this.name;
  }

  isMember() {
    return this.member;
  }

  setMember(member) {
    this.member = member;
  }

  getMemberType() {
    return this.memberType;
  }

  setMemberType(memberType) {
    this.memberType = memberType;
  }

  toString() {
    return `Customer[name = ${this.name}, member = ${this.member}, memberType = ${this.memberType}]`;
  }
}

class Visit {
  customer = null;
  date = "";
  serviceExpense = 0;
  productExpense = 0;
  constructor(customer, date, serviceExpense, productExpense) {
    this.customer = customer;
    this.date = date;
    this.serviceExpense = serviceExpense;
    this.productExpense = productExpense;
  }

  getName() {
    return this.name;
  }

  getServiceExpense() {
    return this.serviceExpense;
  }

  setServiceExpense(serviceExpense) {
    this.serviceExpense = serviceExpense;
  }

  getProductExpense() {
    return this.productExpense;
  }

  setProductExpense(productExpense) {
    this.productExpense = productExpense;
  }

  getTotalExpense() {
    return this.serviceExpense + this.productExpense;
  }

  toString() {
    return `Visit[${this.customer.toString()}, serviceExpense = ${
      this.serviceExpense
    }, productExpense = ${
      this.productExpense
    }, total = ${this.getTotalExpense()}]`;
  }
}

class DiscountRate {
  static SPREMIUM = new DiscountRate(0.2);
  static SGOLD = new DiscountRate(0.15);
  static SSILVER = new DiscountRate(0.1);
  static PPREMIUM = new DiscountRate(0.1);
  static PGOLD = new DiscountRate(0.1);
  static PSILVER = new DiscountRate(0.1);

  constructor(name) {
    this.name = name;
  }

  getServiceDiscountRate() {
    return this.name;
  }

  getProductDiscountRate() {
    return this.name;
  }
}

const main = () => {
  const customer1 = new Customer("Punsan", true, DiscountRate.SGOLD);
  const visit1 = new Visit(customer1, "2024/02/13", 500, 500);

  console.log(customer1.toString());
};
main();
