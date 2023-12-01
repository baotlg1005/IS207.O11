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
  
  
  const headerAccountBtnGroup = document.querySelector(".top-content__account-btn-group");
  const headerLoginBtn = headerAccountBtnGroup.querySelector(".account-btn-group__login-btn");
  const headerSignUpBtn = headerAccountBtnGroup.querySelector(".account-btn-group__sign-up-btn");
  const headerAccountBtn = headerAccountBtnGroup.querySelector(".account-btn-group__account-btn");
  
  window.onload = function (e) {
    const userId = getCookie("userId");
    if (userId) {
        headerLoginBtn.classList.add("hide");
        headerSignUpBtn.classList.add("hide");
        headerAccountBtn.classList.remove("hide");
    } else {
        headerLoginBtn.classList.remove("hide");
        headerSignUpBtn.classList.remove("hide");
        headerAccountBtn.classList.add("hide");
    }
}