<?php
require_once('../connect.php');
require_once('./searched-flight-info.php');

$action = $_POST["action"];

$searchedFlightInfo = new SearchedFlightInfo();
$searchedFlightInfo->seatType = $_POST["seatType"];
$searchedFlightInfo->departure = $_POST["departure"];
$searchedFlightInfo->destination = $_POST["destination"];
$searchedFlightInfo->departureDate = $_POST["departureDate"];
$searchedFlightInfo->haveReturn = $_POST["haveReturn"];
$searchedFlightInfo->returnDate = $_POST["returnDate"];


if ($action == "showresult") {
    $sql = "SELECT * FROM flight WHERE `From` LIKE '$searchedFlightInfo->departure%'";
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
