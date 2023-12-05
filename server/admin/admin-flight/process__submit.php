<?php

$action = $_POST["action"];
$ID = $_POST["ID"];
$Name = $_POST["Name"];
$SeatClass = $_POST["SeatClass"];
$Price = $_POST["Price"];
$From = $_POST["From"];
$To = $_POST["To"];
$Stop_Direct = $_POST["Stop/Direct"];
$Date = $_POST["Date"];
$DepartureTime = $_POST["DepartureTime"];
$ArrivalTime = $_POST["ArrivalTime"];
$TravelTime = $_POST["TravelTime"];

if($SeatClass == 'economy'){
    $SeatClass = 'Phổ thông';
}else if ($SeatClass == 'business'){
    $SeatClass = 'Thương gia';
}


//print all Post data
print_r("action: ");
print_r($action);
echo "<br>";
print_r("ID: ");
print_r($ID);
echo "<br>";
print_r("Name: ");
print_r($Name);
echo "<br>";
print_r("Seat Class: ");
print_r($SeatClass);
echo "<br>";
print_r("Price: ");
print_r($Price);
echo "<br>";
print_r("From: ");
print_r($From);
echo "<br>";
print_r("To: ");
print_r($To);
echo "<br>";
print_r("Stop/Direct: ");
print_r($Stop_Direct);
echo "<br>";
print_r("Date: ");
print_r($Date);
echo "<br>";
print_r("Travel Time: ");
print_r($DepartureTime);
echo "<br>";
print_r("Arrival Time: ");
print_r($ArrivalTime);
echo "<br>";
print_r("Travel Time: ");
print_r($TravelTime);
echo "<br>";

require_once("../connect.php");

//check if $action = 'newid' then change action to 'create'
if ($ID == "newid") {
    $action = "create";
    print_r("change action: ");
    print_r($action);
}

if ($action == "create") {
    $ID = uniqid("F");
    //insert data to flight table
    $sql = "INSERT INTO `flight`(`ID`, `From`, `To`, `Date`, `DepartureTime`, `ArrivalTime`, `TravelTime`, `Stop/Direct`, `Name`, `SeatClass`, `Price`) VALUES ('". $ID ."','". $From ."','". $To ."','". $Date ."','". $DepartureTime ."','". $ArrivalTime ."','". $TravelTime ."','". $Stop_Direct ."','". $Name ."','". $SeatClass ."','". $Price ."')";
    if ($conn->query($sql) === TRUE) {
        echo "Thêm thành công!";
    } else {
        echo "Thêm thất bại: " . $conn->error;
    }

} else if ($action == "update") {
    //update data to flight table with ID
    $sql = "UPDATE `flight` SET `From`='". $From ."',`To`='". $To ."',`Date`='". $Date ."',`DepartureTime`='". $DepartureTime ."',`ArrivalTime`='". $ArrivalTime ."',`TravelTime`='". $TravelTime ."',`Stop/Direct`='". $Stop_Direct ."',`Name`='". $Name ."',`SeatClass`='". $SeatClass ."',`Price`='". $Price ."' WHERE `ID`= '". $ID ."'";
    if ($conn->query($sql) === TRUE) {
        echo "Cập nhật thành công!";
    } else {
        echo "Cập nhật thất bại: " . $conn->error;
    }
}

$conn->close();
header('Location: ./index.php');
