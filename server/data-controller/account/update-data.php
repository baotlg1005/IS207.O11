<?php
require_once('../connect.php');

$action = $_POST['action'];


if($action == 'update-account-info'){
    $data = json_decode($_POST['data'], true);
    $changeInfoNames = json_decode($_POST['changeInfoNames'], true);
    $userId = $_POST['userId'];

    $sql = "UPDATE user as t1
        INNER JOIN passport as t2
     SET";

    for($i = 0; $i < count($changeInfoNames); $i++){
        $name = $changeInfoNames[$i];
        $sql .= " `$name` = '$data[$name]'";
        if($i != count($changeInfoNames) - 1){
            $sql .= ",";
        }
    }

    $sql .= " WHERE t1.`Id` = '$userId';";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "fail";
    }

    $conn->close();
}