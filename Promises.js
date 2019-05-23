// let square = (a, b, h) => (a + b) * h / 2;
// console.log('Dien tích: ' + square(2, 3, 2));

// let add = (a, b, callBack) => {
//   setTimeout(() => {
//     if (typeof a != 'number' || typeof b != 'number') {
//       return callBack(new Error('tham số phải có kiểu number'));
//     }
//     callBack(undefined, a + b);
//   }, 1000);
// }

// let multiply = (a, b, callBack) => {
//   setTimeout(() => {
//     if (typeof a != 'number' || typeof b != 'number') {
//       return callBack(new Error('tham số phải có kiểu number'));
//     }
//     callBack(undefined, a * b);
//   }, 1000);
// }

// let divide = (a, b, callBack) => {
//   setTimeout(() => {
//     if (typeof a != 'number' || typeof b != 'number') {
//       return callBack(new Error('tham số phải có kiểu number'));
//     }
//     if (b == 0) {
//       return callBack(new Error('Chia cho 0'));
//     }
//     callBack(undefined, a / b);
//   }, 1000);
// }

// let tinhDienTichHinhThang = (a, b, h, callBack) => {
//   add(a, b, (err, result) => {
//     if (err) return callBack(err);
//     multiply(result, h, (err, result) => {
//       if (err) return callBack(err);
//       divide(result, 2, (err, result) => {
//         if (err) return callBack(err);
//         callBack(undefined, result);
//       })
//     })
//   });
// }

// tinhDienTichHinhThang(2, 3, 2, (err, result) =>{
//   if(err) return console.log(err + '');
//   console.log('Dien tich hinh thang la: ', result);
// })

let aPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Thanh cong");
  }, 2000);
  // reject(new Error('Khong the ket noi den server'));
});

aPromises.then(
  msg => console.log("Da thuc thi: ", msg),
  errMsg => console.log(errMsg + "")
);
