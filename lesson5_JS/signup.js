let formSignup = document.getElementById("formSignup");

console.dir(formSignup)

let users = localStorage.getItem("user")
let usersList = []
if(users){
  usersList = JSON.parse(localStorage.getItem("user"))
}

formSignup.onsubmit = function (huy) {
  huy.preventDefault();

  setTextError("#emailError", "");
  setTextError("#passwordError", "");  //reset lỗi
  setTextError("#cfpasswordError", "");

  let email = formSignup.email.value;
  let password = formSignup.password.value;
  let cfpassword = formSignup.cfpassword.value;

  let validate = true

  if (!email) {
    setTextError("#emailError", "Email is required"); //show lỗi
    validate = false;
  }
  if (!password) {
    setTextError("#passwordError", "Password is required");
    validate = false;
  }
  if (password.length < 6) {
    setTextError(
      "#passwordError",
      "Password length must be more than 6 characters"
    );
    validate = false;
  }
  if(cfpassword != password){
      setTextError("#cfpasswordError", "Password not matched")
      validate = false
  }

  if(validate){
      let user ={
          email : email,
          password: password
      }
      usersList.push(user)
      localStorage.setItem("user", JSON.stringify(usersList))
  }
};

function setTextError(query, content) {
  document.querySelector(query).innerHTML = content;
}
