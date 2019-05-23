let fs = require("fs");

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Tham số phải là kiểu number"));
      }
      resolve(a + b);
    }, 2000);
  });
};

add("4", 5).then(res => console.log(res), err => console.log(err + ""));

fs.readFile("./a.txt", "utf8", (err, data) => {
  if (err) return console.log("Loi: " + err);
  console.log(data);
});

// let promiseRead = new Promise((resolve, reject) => {
//   fs.readFile("./a.txt", "utf8", (err, data) => {
//     if (err) return reject(err);
//     resolve(data);
//   });
// });

//promiseRead.then(data => console.log(data), err => console.log(err + ""));

let readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile("./a.txt", "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

readFile("./a.txt").then(
  data => consolog.log(data),
  err => console.log(err + "")
);
