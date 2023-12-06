<?php

$action = $_POST["action"];
$ID = $_POST["ID"];
$Brand = $_POST["Brand"];
$SeatNum = $_POST["SeatNum"];
$Luggage = $_POST["Luggage"];
$Price = $_POST["Price"];
$State = $_POST["State"];
$Type = $_POST["Type"];

require_once("../connect.php");

//check if $action = 'newid' then change action to 'create'
if ($ID == "newid") {
    $action = "create";
    print_r("change action: ");
    print_r($action);
}

if ($action == "create") {
    $ID = uniqid("T");

    $sql = "INSERT INTO `taxi`(`Id`, `Type_id`, `Name`, `Luggage`, `NumofSeat`, `Price`, `State`)
    VALUES ('$ID','$Type','$Brand','$Luggage','$SeatNum','$Price','$State')";

    if ($conn->query($sql) === TRUE) {
        echo "Thêm thành công!";    
    } else {
        echo "Thêm thất bại: " . $conn->error;
    }

} 
else if ($action == "update") {
    
    $sql = "UPDATE `taxi` SET `Type_id`='$Type',`Name`='$Brand',`Luggage`='$Luggage',`NumofSeat`='$SeatNum',`Price`='$Price',`State`='$State' WHERE `Id`='$ID'";
    if ($conn->query($sql) === TRUE) {
        echo "Cập nhật thành công!";
    } else {
        echo "Cập nhật thất bại: " . $conn->error;
    }
}

$conn->close();
header('Location: ./index.php');
