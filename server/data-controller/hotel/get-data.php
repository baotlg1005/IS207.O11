<?php
require_once('../connect.php');
require_once('./searched-hotel-info.php');

$action = $_POST["action"];
if ($action!='getLocation')
{
    $searchedHotelInfo = new searchedHotelInfo();
    $searchedHotelInfo->location = $_POST["location"];
    $searchedHotelInfo->checkinDate = $_POST["checkinDate"];
    $searchedHotelInfo->checkoutDate = $_POST["checkoutDate"];
    $searchedHotelInfo->adultQuantity = $_POST["adultQuantity"];
    $searchedHotelInfo->childQuantity = $_POST["childQuantity"];
    $searchedHotelInfo->roomQuantity = $_POST["roomQuantity"];
    $pageLimit  = $_POST["pageLimit"];
}

if ($action=='showResult') {
    $max = $searchedHotelInfo->adultQuantity + $searchedHotelInfo->childQuantity;
    $sql = "SELECT room.Id as 'roomid', room.name as 'roomname',hotel.Name as 'hotelname',hotel.Address as 'address',room.Price as 'price' 
    FROM `room`,`hotel` 
    WHERE room.Hotel_id=hotel.Id and hotel.Area='$searchedHotelInfo->location' and room.Max>=$max and room.State='Free'
    ORDER BY room.Price ASC LIMIT $pageLimit";
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
if ($action == 'getLocation')
{
    $sql = "SELECT Area  FROM `hotel` GROUP BY hotel.Area";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    $conn->close();
}
?>