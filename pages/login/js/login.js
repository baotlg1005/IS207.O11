document.querySelector('.btn-login').addEventListener('click', async (e) => {
    e.preventDefault();

    let emailOrPhone = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    try {
        let response = await fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailOrPhone, password })
        });

        let result = await response.json();

        if (result.success) {
            setCookie('userId', result.userId, 1);
            CheckUserInfo(result.userId);
        } else {
            alert('Invalid email/phone or password');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function CheckUserInfo(userId) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        try {
          let userInfo = JSON.parse(this.responseText)[0];
          
          setCookie('userAuth', true, 1);
          for (let key in userInfo) {
                if (userInfo[key] == null) {
                    //redirect to info page
                    setCookie('userAuth', false, 1);
                    break;
                }
            }
            
            if(getCookie('userAuth') == 'true'){
                window.location.href = "../main/"; 
            }else{
                window.location.href = "../account/"; 
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