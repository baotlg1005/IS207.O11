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
            window.location.href = '../account/edit-info'; //thay đổi đường dẫn nếu cần
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }