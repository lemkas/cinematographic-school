const uuid = require("uuid").v4;
const fs = require("fs");
const path = require("path");

class User {
  constructor(first_name, last_name, password, email, id) {
    (this.first_name = first_name),
      (this.last_name = last_name),
      (this.password = password),
      (this.email = email),
      (this.id = uuid());
  }

  toJSON() {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      email: this.email,
      id: this.id,
    };
  }

  async save() {
    const users = await User.getUser();
    users.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "users.json"),
        JSON.stringify(users),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static getUser() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "users.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        }
      );
    });
  }
}

module.exports = User;
