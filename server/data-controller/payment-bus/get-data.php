<?php
require_once('../connect.php'); 

$action = $_GET["action"];

$ID = $_GET["ID"];

if ($action == "load") {
    $sql = "SELECT * FROM bus WHERE `ID` = '$ID'";
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