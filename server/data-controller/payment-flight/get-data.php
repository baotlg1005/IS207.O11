<?php
require_once('../connect.php'); 

$action = $_POST["action"];

$flightID = $_POST["flightID"];

if ($action == "load") {
    $sql = "SELECT * FROM flight WHERE `ID` = '$flightID'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } else {
        echo "No result found";
    }

    $conn->close();
}