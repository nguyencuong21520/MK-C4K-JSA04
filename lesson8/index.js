let arr = [
  {
    name: "iphone 11",
    price: 10000,
  },
  {
    name: "iphone 12",
    price: 6000,
  },
  {
    name: "iphone 13",
    price: 7000,
  },
];

// Câu 1: output : 1 cái mảng mới, với giá đã giảm đi 25% ///map
// Câu 2: trả về 1 mảng gồm các sản phẩm có giá lớn hơn 6500 ///filter

// let bai1 = arr.map((e) => {
//   let rObj = {
//     name: e.name,
//     price: e.price * 0.75,
//   };
//   return rObj;
// });

// let sale = (discount) => {
//   let bai1 = arr.map((e) => {
//     let rObj = {
//       name: e.name,
//       price: e.price * (1-discount),
//     };
//     return rObj;
//   });
//   console.log(bai1);
// };
// sale(0.5)

let b2 = arr.filter((e) =>{
    return e.price > 6000
})

console.log(b2);