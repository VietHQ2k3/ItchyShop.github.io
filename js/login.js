
//3 soc menu
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

//chuyển động sign in, sign up
   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }

//check tài khoản đăng nhập
// validation form login
const inputUsername = document.querySelector(".name");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".submit");

// validation form login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "../html/product.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

//check tài khoản đăng ký
// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".name1");
const inputPasswordRegister = document.querySelector(".password1");
const btnRegister = document.querySelector(".mot");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "../index.html";
  }
});

function login1(){
  window.location.href = "../html/login.html";
}

function Home(){
  window.location.href = "../index.html";
}

function Manager(){
  window.location.href = "../html/login2.html";
}

