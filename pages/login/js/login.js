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
                    window.location.href = "../../main";
                }else{
                    alert(response);
                }
            }
        });
    });
});