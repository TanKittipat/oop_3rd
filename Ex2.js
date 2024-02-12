class Invoice {
  id = 0;
  customer = null;
  amount = 0;
  constructor(id, customer, amount) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }

  getId() {
    return this.id;
  }

  getCustomer() {
    return this.customer;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  getCustomerId() {
    return this.customer.id;
  }

  getCustomerName() {
    return this.customer.name;
  }

  getCustomerDiscount() {
    return this.customer.getDiscount();
  }

  getAmountAfterDiscount() {
    let dis = (this.customer.getDiscount() * this.amount) / 100;
    let amountAfterDiscount = this.amount - dis;
    return amountAfterDiscount;
  }

  toString() {
    return `Invoice[id = ${
      this.id
    }, customer = ${this.customer.toString()}, amount = ${this.amount}]`;
  }
}

class Customer {
  id = 0;
  name = "";
  discount = 0;
  constructor(id, name, discount) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDiscount() {
    return this.discount;
  }

  setDiscount(discount) {
    this.discount = discount;
  }

  toString() {
    return `name : ${this.name}(${this.id})(${this.discount}%) `;
  }
}

const main = () => {
  const customer1 = new Customer(1, "Vick", 7);
  const invoice1 = new Invoice(1, customer1, 100);

  console.log(invoice1.toString());
};
main();
