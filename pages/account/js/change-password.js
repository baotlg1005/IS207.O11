const oldPassword = document.getElementById('password-txt-old');
const newPassword = document.getElementById('password-txt-new');
const confirmPassword = document.getElementById('password-txt-confirm');
const savePasswordBtn = document.getElementById('password-btn-save');

savePasswordBtn.addEventListener('click', CheckOldPassword);

function CheckOldPassword() {
    if (oldPassword.value === '' || newPassword.value === '' || confirmPassword.value === '') {
        alert('Please fill in all fields!');
        return;
    }
    if (newPassword.value !== confirmPassword.value) {
        alert('New password and confirm password do not match!');
        return;
    }
    //use XHTTPResquest
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //get response
            const response = this.responseText;
            if(response === 'fail'){
                alert('Current password is incorrect!');
                return;
            }
            SavePassword();
        }
    };

    //open connection
    xhttp.open('POST', '../../server/data-controller/account/change-password.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=check-old-password&userId=${getCookie("userId")}&oldPassword=${oldPassword.value}`);
}

function SavePassword() {
    //use XHTTPResquest
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = this.responseText;
            if (response === 'success') {
                alert('Change password successfully!');
                oldPassword.value = '';
                newPassword.value = '';
                confirmPassword.value = '';
            }
        }
    };

    //open connection
    xhttp.open('POST', '../../server/data-controller/account/change-password.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=change-password&userId=${getCookie("userId")}&oldPassword=${oldPassword.value}&newPassword=${newPassword.value}`);
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