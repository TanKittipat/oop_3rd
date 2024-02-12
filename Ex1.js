class Author {
  name = "";
  email = "";
  gender = "";
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  toString() {
    return (
      "Author[name = " +
      this.name +
      ", email = " +
      this.email +
      ", gender = " +
      this.gender +
      "]"
    );
  }
}

class Book {
  name = "";
  authors = [];
  price = 0;
  qty = 0;
  constructor(name, authors, price, qty = 0) {
    this.name = name;
    this.authors = authors;
    this.price = price;
    this.qty = qty;
  }

  //เพราะ JS นับ constructor รวมกัน เลยตั้งให้ qty = 0 แต่ถ้าภาษาอื่น ต้องสร้าง constructor แยก

  getName() {
    return this.name;
  }

  getAuthors() {
    return this.authors;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getQty() {
    return this.qty;
  }

  setQty(qty) {
    this.qty = qty;
  }

  toString() {
    let detail = "";
    for (let i = 0; i < this.authors.length; i++) {
      detail += this.authors[i].toString();
      if (i < this.authors.length - 1) {
        detail += ", ";
      }
    }
    return (
      "Book[name = " +
      this.name +
      ", authors = {" +
      detail +
      "}" +
      ", price = " +
      this.price +
      ", qty = " +
      this.qty +
      "]"
    );
  }

  getAuthorNames() {
    // อย่าลืมใส่ค่าให้ตัวแปร เพราะ JS มอง Undefined เป็นค่า
    let authorName = "";
    for (let i = 0; i < this.authors.length; i++) {
      authorName += this.authors[i].getName();
      if (i < this.authors.length - 1) {
        authorName += ", ";
      }
    }
    return authorName;
  }
}

const main = () => {
  const author1 = new Author("Tin", "654259027@webmail.npru.ac.th", "Male");
  const author2 = new Author("Mind", "654259012@webmail.npru.ac.th", "Female");

  const book1 = new Book("Book1", [author1, author2], 999, 9);

  console.log(book1.getAuthorNames());
};

main();
