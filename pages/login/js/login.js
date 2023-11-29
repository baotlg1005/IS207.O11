$(document).ready(function(){
    $(".btn-login").click(function(){
        var email = $(".login-input input[type='text']").val();
        var password = $(".login-input input[type='password']").val();

        $.ajax({
            url: "./login.php",
            // Thay đường dẫn phù hợp
            type: "POST",
            data: {
                email: email,
                password: password
            },
            success: function(response){
                if(response == "success"){
                    window.location.href = "D:\Homework\Web\IE104-Group14-test-reponsive\pages\index\index.html";
                }else{
                    alert(response);
                }
            }
        });
    });
});