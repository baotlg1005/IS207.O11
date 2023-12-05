document.querySelector(".btn-signup").addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retype-password").value;

    if (password !== retypePassword) {
        alert("Sai mật khẩu nhập lại");
        return;
    }

    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            phone: phone,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log("Signup successful! Email:", email, "Phone:", phone, "Password:", password);
            alert("Đăng ký thành công");
            setCookie('userId', data.userId, 1);
            CheckUserInfo(data.userId);
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function CheckUserInfo(userId) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        try {
          let userInfo = JSON.parse(this.responseText)[0];
            //check if any info in userInfo object is null
            setCookie('userAuth', true, 1);
            for (let key in userInfo) {
                if (userInfo[key] == null) {
                    //redirect to info page
                    setCookie('userAuth', false, 1);
                }
            }
            if(getCookie('userAuth') == 'true'){
                window.location.href = "../main/"; //Chỉnh đường dẫn
            }else{
                window.location.href = "../account/"; //Chỉnh đường dẫn
            }
        } catch (err) {
        }
      }
    };
    xhttp.open(
      "GET",
      "../../server/data-controller/check-user-info.php?action=check-user-info&userId=" +
        userId,
      true
    );
    xhttp.send();
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

const signupIcon = document.querySelectorAll(".signup-input-icon");
const passwordInput = document.getElementById("password");
const passwordConfirmInput  = document.getElementById("retype-password");
const passwordIcon = document.getElementById("password-icon");
const retypeIcon = document.getElementById("retype-icon");

signupIcon.forEach((icon) => { 
    icon.addEventListener("click", function(e) {
        if (e.target.id == "password-icon") {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                passwordIcon.name = "eye-off-outline";
            } else {
                passwordInput.type = "password";
                passwordIcon.name = "eye-outline";
            }
        }
        else if (e.target.id == "retype-icon") {
            if (passwordConfirmInput.type === "password") {
                passwordConfirmInput.type = "text";
                retypeIcon.name = "eye-off-outline";
            } else {
                passwordConfirmInput.type = "password";
                retypeIcon.name = "eye-outline";
            }
        }
    });
});