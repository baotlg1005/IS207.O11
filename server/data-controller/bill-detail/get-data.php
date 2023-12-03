<?php
require_once('../connect.php');

$action = $_GET['action'];

if($action == 'load-bill-detail-flight'){
    $invoiceID = $_GET['billId'];
    $sql = "SELECT * FROM flight_invoice as t1 
    INNER JOIN flight as t2 
    ON t1.`Flight_id` = t2.`ID`
    WHERE t1.`Id` = '$invoiceID';";
    // echo $sql;
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($data = $result->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } else{
        echo 'no-data';
    }

    $conn->close();
}

if($action == 'load-bill-detail-bus'){
    $invoiceID = $_GET['billId'];
    $sql = "SELECT * FROM bus_invoice as t1 
    INNER JOIN bus as t2 
    ON t1.`Bus_id` = t2.`ID`
    WHERE t1.`Id` = '$invoiceID';";
    // echo $sql;
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($data = $result->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } else{
        echo 'no-data';
    }

    $conn->close();
}

if($action == 'load-bill-detail-transfer'){
    $invoiceID = $_GET['billId'];
    $sql = "SELECT * FROM taxi_invoice as t1 
    INNER JOIN taxi as t2 
    INNER JOIN taxi_area_detail as t3
    INNER JOIN taxi_area as t4
    INNER JOIN taxi_type as t5
    ON t1.`Taxi_id` = t2.`ID`
    AND t2.`Id` = t3.`Taxi_id`
    AND t3.`Pickpoint_id` = t4.`Id`
    AND t2.`Type_id` = t5.`Id`
    WHERE t1.`Id` = '$invoiceID';";
    // print_r($sql);
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($data = $result->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } else{
        echo 'no-data';
    }

    $conn->close();
}

if($action == 'load-bill-detail-hotel'){
    $invoiceID = $_GET['billId'];
    $sql = "SELECT * FROM room_invoice as t1 
    INNER JOIN room as t2
    INNER JOIN hotel as t3
    ON t1.`Room_id` = t2.`Id`
    AND t2.`Hotel_id` = t3.`Id`
    WHERE t1.`Id` = '$invoiceID';";
    // print_r($sql);
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($data = $result->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
    } else{
        echo 'no-data';
    }

    $conn->close();
}