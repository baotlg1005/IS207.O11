<?php
require_once('../connect.php'); 

$action = $_GET["action"];

$roomID = $_GET["roomID"];

if ($action == "load") {
    $sql = "SELECT `Name` FROM room WHERE `ID` = '$roomID'";
    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo json_encode($row, JSON_UNESCAPED_UNICODE);
        }
    } else {
        echo "No result found";
    }

    $conn->close();
}