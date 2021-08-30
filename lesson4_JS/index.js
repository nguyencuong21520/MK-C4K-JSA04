// cau1:
// function thucDay(thu){
//     console.log("chào thứ " + thu);
//     console.log("thức dậy");
//     console.log("đánh răng");
//     console.log("ăn sáng");
// }

// thucDay(5);
// thucDay(2);

function findEven(number) {
  if (number > 4 && number < 20) {
    for (let i = 0; i < number; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else {
    console.log("số bạn nhập không hợp lệ");
  }
}

// cau2:
let huyanh = document.getElementById("a");

huyanh.addEventListener("mouseover", () => {
  huyanh.style.background = "yellow";
});
huyanh.addEventListener("mouseout", () => {
  huyanh.style.background = "red";
});

// câu 3
for (let i = 1; i < 6; i++) {
  let r = "";
  for (let j = 0; j < i; j++) {
    r += "1"; //r+= 1 || r = r + 1
  }
  console.log(r);
}
//câu 4
let domb = document.querySelector("#b");
function HuyAnh() {
  let thoigian = new Date();

  let gio = thoigian.getHours();
  let phut = thoigian.getMinutes();
  let giay = thoigian.getSeconds();

  domb.innerHTML = gio + ":" + phut + ":" + giay;
}

setInterval(HuyAnh,1000)