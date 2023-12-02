<?php
require_once('./searched-flight-info.php');

$action = $_POST["action"];
if ($action=="load"){

$searchedFlightInfo = new SearchedFlightInfo();
$searchedFlightInfo->seatType = $_POST["seatType"];
$searchedFlightInfo->departure = $_POST["departure"];
$searchedFlightInfo->destination = $_POST["destination"];
$searchedFlightInfo->departureDate = $_POST["departureDate"];
$searchedFlightInfo->numOfSeat = $_POST["numOfSeat"];
$sortType = $_POST["sortType"];
$pageLimit  = $_POST["pageLimit"];

if ($searchedFlightInfo->seatType == "economy") {
    $searchedFlightInfo->seatType = "Phổ thông";
} else {
    $searchedFlightInfo->seatType = "Thương gia";
}

$departureDate = date_create($searchedFlightInfo->departureDate);
$searchedFlightInfo->departureDate = date_format($departureDate, "Y-m-d");}

if ($action == "load") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db_ie104";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($sortType == "Giá thấp nhất") {
        $sql = "SELECT * FROM flight WHERE `From` LIKE '%$searchedFlightInfo->departure%' AND `To` LIKE '%$searchedFlightInfo->destination%' AND `SeatClass` LIKE '%$searchedFlightInfo->seatType%' AND `Date` > '$searchedFlightInfo->departureDate' AND `NumSeat` >=$searchedFlightInfo->numOfSeat ORDER BY `Price` ASC LIMIT $pageLimit";
    } elseif ($sortType == "Giá cao nhất") {
        $sql = "SELECT * FROM flight WHERE `From` LIKE '%$searchedFlightInfo->departure%' AND `To` LIKE '%$searchedFlightInfo->destination%' AND `SeatClass` LIKE '%$searchedFlightInfo->seatType%' AND `Date` > '$searchedFlightInfo->departureDate' AND `NumSeat` >=$searchedFlightInfo->numOfSeat ORDER BY `Price` DESC LIMIT $pageLimit";
    } elseif ($sortType == "Cất cánh sớm nhất") {
        $sql = "SELECT * FROM flight WHERE `From` LIKE '%$searchedFlightInfo->departure%' AND `To` LIKE '%$searchedFlightInfo->destination%' AND `SeatClass` LIKE '%$searchedFlightInfo->seatType%' AND `Date` > '$searchedFlightInfo->departureDate' AND `NumSeat` >=$searchedFlightInfo->numOfSeat ORDER BY `DepartureTime` ASC LIMIT $pageLimit";

    } elseif ($sortType == "Cất cánh muộn nhất") {
        $sql = "SELECT * FROM flight WHERE `From` LIKE '%$searchedFlightInfo->departure%' AND `To` LIKE '%$searchedFlightInfo->destination%' AND `SeatClass` LIKE '%$searchedFlightInfo->seatType%' AND `Date` > '$searchedFlightInfo->departureDate' AND `NumSeat` >=$searchedFlightInfo->numOfSeat ORDER BY `DepartureTime` DESC LIMIT $pageLimit";

    } elseif ($sortType == "Hạ cánh sớm nhất") {
        $sql = "SELECT * FROM flight WHERE `From` LIKE '%$searchedFlightInfo->departure%' AND `To` LIKE '%$searchedFlightInfo->destination%' AND `SeatClass` LIKE '%$searchedFlightInfo->seatType%' AND `Date` > '$searchedFlightInfo->departureDate' AND `NumSeat` >=$searchedFlightInfo->numOfSeat ORDER BY `ArrivalTime` ASC LIMIT $pageLimit";

    } elseif ($sortType == "Hạ cánh muộn nhất") {
        $sql = "SELECT * FROM flight WHERE `From` LIKE '%$searchedFlightInfo->departure%' AND `To` LIKE '%$searchedFlightInfo->destination%' AND `SeatClass` LIKE '%$searchedFlightInfo->seatType%' AND `Date` > '$searchedFlightInfo->departureDate' AND `NumSeat` >=$searchedFlightInfo->numOfSeat ORDER BY `ArrivalTime` DESC LIMIT $pageLimit";

    }

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // while ($row = $result->fetch_assoc()) {
        //     $data = $result->fetch_all(MYSQLI_ASSOC);
        //     echo json_encode($data, JSON_UNESCAPED_UNICODE);
        // }
        while ($data = $result->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } 

    $conn->close();
}
if ($action == 'getDepartureLocation'){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db_ie104";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT flight.From FROM `flight` GROUP BY flight.From";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } 
}
if ($action == 'getArrivalLocation'){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db_ie104";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT flight.To FROM `flight` GROUP BY flight.To";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } 
}