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

let multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Tham số phải là kiểu number"));
      }
      resolve(a * b);
    }, 2000);
  });
};

let divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Tham số phải là kiểu number"));
      }
      if (b === 0) return reject(new Error("Chia cho so 0"));
      resolve(a / b);
    }, 2000);
  });
};

let tinhDienTich = (a, b, h) => {
  return add(a, b)
    .then(res => multiply(res, h))
    .then(result => divide(result, 2));
};

tinhDienTich(6, 4, 5)
  .then(square => console.log("Dien tich hinh thang = " + square))
  .catch(err => console.log("Loi " + err));

//Kiểm tra trạng thái status
let a = add(4, 5).then(result => console.log(result), err => console.log(err));
console.log(a);
setTimeout(() => console.log(a), 2500);

// (4 + 5) + 6

// add("4", 5)
//   .then(res => add(res, 6))
//   .then(result => console.log("ket qua la: " + result))
//   .catch(err => console.log("Loi: " + err));
