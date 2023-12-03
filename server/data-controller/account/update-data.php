<?php
require_once('../connect.php');

$action = $_POST['action'];

// Array
// (
//     [Id] => 1
//     [Name] =>  Văn An
//     [Sex] => Male
//     [Birthday] => 2013-11-01
//     [Phone] => 0123454321
//     [Email] => nguyenvanan@gmail.com.vn
//     [Nationality] => Vietnam
//     [Passport_id] => 1
//     [Password] => 123456
//     [Nation] => Vietnam
//     [Expiration] => 2024-11-30
// )

if($action == 'update-account-info'){
    $data = json_decode($_POST['data'], true);
    $changeInfoNames = json_decode($_POST['changeInfoNames'], true);
    $userId = $_POST['userId'];

    //each element in $changeInfoNames is a string of the name of the field that needs to be updated in the database 
    //each element in $data is the value of the field that needs to be updated in the database
    //the order of the elements in $changeInfoNames and $data is the same
    //for example: $changeInfoNames[0] = 'Name' and $data[0] = 'Văn An' => update Name = 'Văn An' in the database

    $sql = "UPDATE user";

    for($i = 0; $i < count($changeInfoNames); $i++){
        $name = $changeInfoNames[$i];
        $sql .= " SET `$name` = '$data[$name]'";
    }

    $sql .= " WHERE `Id` = '$userId';";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "fail";
    }

    $conn->close();
}