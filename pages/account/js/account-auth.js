window.addEventListener("load", CheckAuthUser);

const warningAuth = document.getElementById("warning-auth");

function CheckAuthUser() {
    const userId = getCookie("userId");
    const userAuth = getCookie("userAuth");

    if(userAuth == "false") {
        document.getElementById("user-info-view").classList.add("hide");
        document.getElementById("user-info-form").classList.remove("hide");
    }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
