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
            window.location.href = 'login.html'; //thay đổi đường dẫn nếu cần
        } else {
            alert("Có lỗi xảy ra. Hãy thử lại sau.");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});