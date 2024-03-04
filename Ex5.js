class Customer {
  name = "";
  member = false;
  memberType = "";
  constructor(name) {
    this.name = name;
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
  constructor(customer, date) {
    this.customer = customer;
    this.date = date;
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
    let total = 0;
    let proTotal =
      this.getProductExpense() -
      DiscountRate.getProductDiscountRate(this.customer.getMemberType()) *
        this.getProductExpense();
    let serTotal =
      this.getServiceExpense() -
      DiscountRate.getServiceDiscountRate(this.customer.getMemberType()) *
        this.getServiceExpense();

    total = serTotal + proTotal;

    return total;
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
  static PREMIUM = new DiscountRate("Premium");
  static GOLD = new DiscountRate("Gold");
  static SILVER = new DiscountRate("Silver");

  constructor(type) {
    this.type = type;
  }

  static getServiceDiscountRate(type) {
    switch (type) {
      case "Premium":
        return 0.2;
      case "Gold":
        return 0.15;
      case "Silver":
        return 0.1;
      default:
        return 0;
    }
  }

  static getProductDiscountRate(type) {
    switch (type) {
      case "Premium":
        return 0.1;
      case "Gold":
        return 0.1;
      case "Silver":
        return 0.1;
      default:
        return 0;
    }
  }
}

const main = () => {
  const customer1 = new Customer("Punsan");
  customer1.setMember(true);
  customer1.setMemberType("Premium");

  const visit1 = new Visit(customer1, "2024/02/13");
  visit1.setProductExpense(150);
  visit1.setServiceExpense(100);

  console.log(visit1.toString());
};
main();
