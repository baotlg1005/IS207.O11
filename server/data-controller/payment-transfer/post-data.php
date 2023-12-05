<?php

require_once('../connect.php');
require_once('./transfer-bill-info.php');

$action = $_POST["action"];

$transferBillInfo = new TransferBillInfo();
$transferBillInfo->ID = $_POST["taxiID"];
$transferBillInfo->startDate = $_POST["startDate"];
$transferBillInfo->startTime = $_POST["startTime"];
$transferBillInfo->endDate = $_POST["endDate"];
$transferBillInfo->endTime = $_POST["endTime"];
$transferBillInfo->totalPrice = $_POST["totalPrice"];

$userID = $_POST["userID"];

if ($action == "payment") {
    $invoiceID = uniqid("I");
    $taxiInvoiceID = uniqid("TI");

    $sql = "INSERT INTO invoice(Id,User_id,Total) VALUES('$invoiceID', '$userID', '$transferBillInfo->totalPrice');";
    $sql .= "INSERT INTO taxi_invoice(Id, Taxi_id, DepartureDay, TimeStart, ArrivalTime, TimeEnd, Invoice_id)
    VALUES('$taxiInvoiceID', '$transferBillInfo->ID', '$transferBillInfo->startDate', '$transferBillInfo->startTime', '$transferBillInfo->endDate', '$transferBillInfo->endTime', '$invoiceID');";
    $sql .= "UPDATE taxi SET `State` = 'Rented' WHERE Id = '$transferBillInfo->ID'";
    if ($conn->multi_query($sql) === TRUE) {
        $success = "success";
        echo json_encode($success, JSON_UNESCAPED_UNICODE);
    } else {
        $error = "error";
        echo json_encode($error, JSON_UNESCAPED_UNICODE);
    }

    $conn->close();
}