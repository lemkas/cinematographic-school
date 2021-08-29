const uuid = require("uuid").v4;
const fs = require("fs");
const path = require("path");

class Course {
  constructor(title, price, img, content, id) {
    (this.title = title),
      (this.price = price),
      (this.img = img),
      (this.content = content),
      (this.id = uuid());
  }

  toJSON() {
    return {
      title: this.title,
      price: this.price,
      img: this.img,
      content: this.content,
      id: this.id,
    };
  }

  // обновление отредактированного курса
  static async update(course) {
    const courses = await Course.getALL();

    const idx = courses.findIndex((c) => c.id === course.id);
    courses[idx] = course;

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "courses.json"),
        JSON.stringify(courses),
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

  //метод сохраняющий данные в файл
  async save() {
    const courses = await Course.getALL();
    courses.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "courses.json"),
        JSON.stringify(courses),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });

    console.log(courses);
  }

  static getALL() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "courses.json"),
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

  static async getById(id) {
    const courses = await Course.getALL();
    return courses.find((c) => c.id === id);
  }
}

module.exports = Course;
