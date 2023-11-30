window.onscroll = function() {scrollFunction()};

//DONE: scroll function: change header background color and text color on scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("on-scroll");
  } else {
    document.getElementById("header").classList.remove("on-scroll");
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


const accountBtnGroup = document.querySelector(".top-content__account-btn-group");
const loginBtn = document.querySelector(".top-content__login-btn");
const signUpBtn = document.querySelector(".account-btn-group__sign-up-btn");
const accountBtn = document.querySelector(".account-btn-group__account-btn");

window.onload = function (e) {
  // const userId = getCookie("userId");

  console.log("user logged in");
  if (userId != "") {
    loginBtn.classList.add("hide");
    signUpBtn.classList.add("hide");
    accountBtnGroup.classList.remove("hide");
  } else {
    loginBtn.classList.remove("hide");
    signUpBtn.classList.remove("hide");
    accountBtnGroup.classList.add("hide");
  }
}