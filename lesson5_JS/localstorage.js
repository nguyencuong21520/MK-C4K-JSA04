// localStorage.clear()

let a = "Cường trả lời đi"
let b = ["hello", "bye", "xin chào"]


localStorage.clear()

localStorage.setItem("cuong1", JSON.stringify(b))

let result1 = JSON.parse(localStorage.getItem("cuong1")) 

localStorage.removeItem('cuong1');

console.log(result1);

