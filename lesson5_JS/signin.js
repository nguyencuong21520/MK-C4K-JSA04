let domSignin = document.getElementById("formSignin");

let users = localStorage.getItem("user");
let usersList = [];
if (users) {
  usersList = JSON.parse(localStorage.getItem("user"));
}




domSignin.onsubmit = function (e) {
  e.preventDefault();

  let email = domSignin.email.value;
  let password = domSignin.password.value;

  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].email == email) {
      if (usersList[i].password == password) {
        sweetAlert("success", "wrong password")
        setTimeout(function(){ window.open("./home.html", "_self"); }, 3000);
        
      } else {
        sweetAlert("error", "wrong password")
      }
      break;
    } else {
        sweetAlert("error", "email is not exist")
    }
  }
};

function sweetAlert( icon, mess) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: mess,
  });
}


