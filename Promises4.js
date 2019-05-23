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
        return reject(new Error("Tham số phải là kiểu number nhân"));
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

//Nhận 1 cái mảng các promises. Xuất ra các kết quả từ những mảng promises truyển vào. Nếu 1 thằng sai thì sai hết và thằng sai nào trả về trước sẽ được hiển thị
Promise.all([add("4", 5), multiply("4", 5)])
  .then(res => console.log(res))
  .catch(e => console.log(e + ""));

//race nó cũng nhận vào 1 mảng nhưng thằng nào trả về resolve or reject trước thì sẽ hiển thị thằng đó. Thằng sau không hiện
// Promise.race([add(4, 5), multiply(4, 5)])
//   .then(res => console.log(res))
//   .catch(e => console.log(e + ""));
