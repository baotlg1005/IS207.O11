<?php
    require 'D:\Homework\Web\IE104-Group14-test-reponsive\server\admin\connect.php';

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = trim($_POST["email"]);
        $password = trim($_POST["password"]);

        $sql = "SELECT Id, Email, Password FROM user WHERE Email = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);

        if($stmt->execute()){
            $user = $stmt->fetch();
            if($user){
                if(password_verify($password, $user['Password'])){
                    session_start();
                    $_SESSION["loggedin"] = true;
                    $_SESSION["Id"] = $user["Id"];
                    $_SESSION["Email"] = $user["Email"];

                    echo "success";
                }else{
                    echo "Wrong password!";
                }
            }else{
                echo "No account found with that email!";
            }
        }else{
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn = null;
    }
?>