<?php

$ID = $_GET["id"];
print_r($ID);

require_once("../connect.php");

$sql = "DELETE FROM `taxi_area_detail` WHERE `Taxi_id` = '$ID';";
$sql .= "DELETE FROM `taxi` WHERE `Id` = '$ID';";

if ($conn->multi_query($sql) === TRUE) {
    echo "Record deleted successfully";
    header("Location: ./index.php");
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();