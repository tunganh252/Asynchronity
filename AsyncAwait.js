//let a = await aPromise

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

// let add = async () => {
//   let res = await addPromise(4, 5);
//   console.log(res);
// };

// add();

// let tinhDienTichHinhThang = async (a, b, h, cb) => {
//   try {
//     let ab = await add(a, b);
//     let abh = await multiply(ab, h);
//     let square = await divide(abh, 2);
//     cb(undefined, square);
//   } catch (error) {
//     cb(error);
//   }
// };

// //Sử dụng callback function để return kết quả trả về
// tinhDienTichHinhThang(4, 5, "6", (err, resolve) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(resolve);
// });

let tinhDienTichHinhThang = async (a, b, h) => {
  try {
    let ab = await add(a, b);
    let abh = await multiply(ab, h);
    let square = await divide(abh, 2);
    return Promise.resolve(square);
  } catch (error) {
    return Promise.reject(error);
  }
};

//Sử dụng callback function để return kết quả trả về
tinhDienTichHinhThang(4, 5, 6)
  .then(res => console.log(res))
  .catch(err => console.log(err));
