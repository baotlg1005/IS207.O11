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

//print all Post data
print_r($action);
echo "<br>";
print_r($ID);
echo "<br>";
print_r($Name);
echo "<br>";
print_r($Seat);
echo "<br>";
print_r($Price);
echo "<br>";
print_r($From);
echo "<br>";
print_r($To);
echo "<br>";
print_r($Stop_Direct);
echo "<br>";
print_r($Date);
echo "<br>";
print_r($TravelTime);
echo "<br>";
print_r($ArrivalTime);
echo "<br>";
print_r($TravelTime);
echo "<br>";
print_r($ArrivalTime);
echo "<br>";
print_r($TravelTime);
echo "<br>";
print_r($ArrivalTime);
echo "<br>";
print_r($TravelTime);

if($SeatClass == 'economy'){
    $SeatClass = 'Phổ thông';
}else if ($SeatClass == 'business'){
    $SeatClass = 'Thương gia';
}

require_once("../connect.php");

if ($action == "create") {

} else if ($action == "update") {
    //update data to flight table with ID
    $sql = "UPDATE `flight` SET `From`='". $From ."',`To`='". $To ."',`Date`='". $Date ."',`DepartureTime`='". $DepartureTime ."',`ArrivalTime`='". $ArrivalTime ."',`TravelTime`='". $TravelTime ."',`Stop/Direct`='". $Stop_Direct ."',`Name`='". $Name ."',`SeatClass`='". $SeatClass ."',`Price`='". $Price ."' WHERE `ID`= '". $ID ."'";
    if ($conn->query($sql) === TRUE) {
        echo "Cập nhật thành công!";
    } else {
        echo "Cập nhật thất bại: " . $conn->error;
    }

    $conn->close();
}

header('Location: ../index.php');
