<?php
require_once('./connect.php');

$action = $_GET['action'];

if($action == 'check-user-info'){
    $userId = $_GET['userId'];
    $sql = "SELECT * FROM user 
    WHERE `Id` = '$userId';";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($data = $result->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } else{
        echo 'no-data';
    }

    $conn->close();
}