<?php
require_once('../connect.php');
require_once('./searched-coach-info.php');

$action = $_POST["action"];
if ($action!='getDepartureLocation'&&$action!='getArrivalLocation')
{
    $searchedCoachInfo = new searchedCoachInfo();
    $searchedCoachInfo->departure = $_POST["departure"];
    $searchedCoachInfo->destination = $_POST["destination"];
    $searchedCoachInfo->departureDate = $_POST["departureDate"];
    $searchedCoachInfo->passengerQuantity = $_POST["passengerQuantity"];
    $pageLimit  = $_POST["pageLimit"];
}

if ($action!='getDepartureLocation'&&$action!='getArrivalLocation') {
    if ($action == "Giá thấp nhất"){
    $sql = "SELECT * FROM `bus` 
    WHERE bus.From='$searchedCoachInfo->departure' and bus.To='$searchedCoachInfo->destination' and bus.Date='$searchedCoachInfo->departureDate' and bus.NumSeat>=$searchedCoachInfo->passengerQuantity
    ORDER BY bus.Price ASC LIMIT $pageLimit";}
    else if ($action == "Giá cao nhất"){
    $sql = "SELECT * FROM `bus` 
    WHERE bus.From='$searchedCoachInfo->departure' and bus.To='$searchedCoachInfo->destination' and bus.Date='$searchedCoachInfo->departureDate' and bus.NumSeat>=$searchedCoachInfo->passengerQuantity
    ORDER BY bus.Price DESC LIMIT $pageLimit";}
    else if ($action == "Xuất phát sớm nhất"){
    $sql = "SELECT * FROM `bus` 
    WHERE bus.From='$searchedCoachInfo->departure' and bus.To='$searchedCoachInfo->destination' and bus.Date='$searchedCoachInfo->departureDate' and bus.NumSeat>=$searchedCoachInfo->passengerQuantity
    ORDER BY bus.DepartureTime ASC LIMIT $pageLimit";}
    else if ($action == "Xuất phát muộn nhất"){
    $sql = "SELECT * FROM `bus` 
    WHERE bus.From='$searchedCoachInfo->departure' and bus.To='$searchedCoachInfo->destination' and bus.Date='$searchedCoachInfo->departureDate' and bus.NumSeat>=$searchedCoachInfo->passengerQuantity
    ORDER BY bus.DepartureTime DESC LIMIT $pageLimit";}
    else if ($action == "Đến nơi sớm nhất"){
    $sql = "SELECT * FROM `bus` 
    WHERE bus.From='$searchedCoachInfo->departure' and bus.To='$searchedCoachInfo->destination' and bus.Date='$searchedCoachInfo->departureDate' and bus.NumSeat>=$searchedCoachInfo->passengerQuantity
    ORDER BY bus.ArrivalTime ASC LIMIT $pageLimit";} 
    else if ($action == "Đến nơi muộn nhất"){
    $sql = "SELECT * FROM `bus` 
    WHERE bus.From='$searchedCoachInfo->departure' and bus.To='$searchedCoachInfo->destination' and bus.Date='$searchedCoachInfo->departureDate' and bus.NumSeat>=$searchedCoachInfo->passengerQuantity
    ORDER BY bus.ArrivalTime DESC LIMIT $pageLimit";} 
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
        while ($row = $result->fetch_assoc())
        {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    }
    $conn->close();
}
if ($action == 'getDepartureLocation')
{
    $sql = "SELECT bus.From FROM `bus` GROUP BY bus.From";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    $conn->close();
}
if ($action == 'getArrivalLocation')
{
    $sql = "SELECT bus.To FROM `bus` GROUP BY bus.To";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    $conn->close();
}
?>