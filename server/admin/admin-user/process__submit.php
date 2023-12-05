<?php

$action = $_POST["action"];
$ID = $_POST["ID"];
$Name = $_POST["Name"];
$Sex = $_POST["Sex"];
$Birthday = $_POST["Birthday"];
$Email = $_POST["Email"];
$Phone = $_POST["Phone"];
$Nation = $_POST["Nation"];
$Passport_id = $_POST["Passport_id"];
$Passport_Nation = $_POST["Passport_Nation"];
$Passport_ExpireDate = $_POST["Passport_ExpireDate"];


require_once("../connect.php");

//check if $action = 'newid' then change action to 'create'
if ($ID == "newid") {
    $action = "create";
    print_r("change action: ");
    print_r($action);
}

if ($action == "create") {
    $ID = uniqid("U");
    if ($Passport_id == "newid") {
        $Passport_id = uniqid("P");
    }
    $Password = "1";
    //insert data into user table
    $sql = "INSERT INTO `passport`(`Id`, `Nation`, `Expiration`)
    VALUES ('$Passport_id','$Passport_Nation','$Passport_ExpireDate');";
    $sql .= "INSERT INTO `user`(`Id`, `Name`, `Sex`, `Birthday`, `Phone`, `Email`, `Nationality`, `Passport_id`, `Password`)
    VALUES ('$ID','$Name','$Sex','$Birthday','$Phone','$Email','$Nation','$Passport_id','$Password')";
    if ($conn->multi_query($sql) === TRUE) {
        echo "Thêm thành công!";    
    } else {
        echo "Thêm thất bại: " . $conn->error;
    }

} 
else if ($action == "update") {
    //update data in user table and passport table with user id and passport id
    $sql = "UPDATE `user` SET `Name`='$Name',`Sex`='$Sex',`Birthday`='$Birthday',`Phone`='$Phone',`Email`='$Email',`Nationality`='$Nation' WHERE `Id`='$ID';";
    $sql .= "UPDATE `passport` SET `Nation`='$Passport_Nation',`Expiration`='$Passport_ExpireDate' WHERE `Id`='$Passport_id'";
    if ($conn->multi_query($sql) === TRUE) {
        echo "Cập nhật thành công!";
    } else {
        echo "Cập nhật thất bại: " . $conn->error;
    }
}

$conn->close();
header('Location: ./index.php');
