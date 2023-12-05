<?php

$ID = $_GET["id"];
print_r($ID);

require_once("../connect.php");

$sql = "DELETE FROM `user` WHERE `ID` = '".$ID."'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
    header("Location: ./index.php");
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();