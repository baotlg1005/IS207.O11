const headerDefault = document.getElementById("header-default");
const headerLoggedIn = document.getElementById("header-logged-in");

window.addEventListener("load", () => {
    const userId = getCookie("userId");
    if (userId) {
        headerDefault.classList.add('hide');
        headerLoggedIn.classList.remove('hide');
    } else {
        headerDefault.classList.remove('hide');
        headerLoggedIn.classList.add('hide');
    }
});

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