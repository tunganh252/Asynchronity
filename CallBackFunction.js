let square = (a, b, h) => ((a + b) * h) / 2;
console.log("Dien tích: " + square(2, 3, 2));

let add = (a, b, callBack) => {
  setTimeout(() => {
    if (typeof a != "number" || typeof b != "number") {
      return callBack(new Error("tham số phải có kiểu number"));
    }
    callBack(undefined, a + b);
  }, 3000);
};
// add(1, 2, (err, result) => {
//   if (err) return console.log(err + "");
//   console.log("phép cộng 2 số la: ", result);
// });

let multiply = (a, b, callBack) => {
  setTimeout(() => {
    if (typeof a != "number" || typeof b != "number") {
      return callBack(new Error("tham số phải có kiểu number"));
    }
    callBack(undefined, a * b);
  }, 1000);
};

let divide = (a, b, callBack) => {
  setTimeout(() => {
    if (typeof a != "number" || typeof b != "number") {
      return callBack(new Error("tham số phải có kiểu number"));
    }
    if (b == 0) {
      return callBack(new Error("Chia cho 0"));
    }
    callBack(undefined, a / b);
  }, 1000);
};

let tinhDienTichHinhThang = (a, b, h, callBack) => {
  add(a, b, (err, result) => {
    if (err) return callBack(err);
    console.log("add", result);
    multiply(result, h, (err, result) => {
      if (err) return callBack(err);
      divide(result, 2, (err, result) => {
        if (err) return callBack(err);
        callBack(undefined, result);
      });
    });
  });
};

tinhDienTichHinhThang(2, 4, 2, (err, result) => {
  if (err) return console.log(err + "");
  console.log("Dien tich hinh thang la: ", result);
});
