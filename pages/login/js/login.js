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
            window.location.href = "../../main"; //Chỉnh đường dẫn
        } else {
            alert('Invalid email/phone or password');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});