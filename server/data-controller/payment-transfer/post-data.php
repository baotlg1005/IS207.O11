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

$userID = "1";

print_r($transferBillInfo);


if ($action == "payment") {
    $invoiceID = uniqid("INVOICE");
    $taxiInvoiceID = uniqid("TINVOICE");

    $sql = "INSERT INTO invoice(Id,User_id,Total) VALUES('$invoiceID', '$userID', '$transferBillInfo->totalPrice');";
    $sql .= "INSERT INTO taxi_invoice(Id, Taxi_id, DepartureDay, TimeStart, ArrivalTime, TimeEnd, Invoice_id)
    VALUES('$taxiInvoiceID', '$transferBillInfo->ID', '$transferBillInfo->startDate', '$transferBillInfo->startTime', '$transferBillInfo->endDate', '$transferBillInfo->endTime', '$invoiceID');";
    if ($conn->multi_query($sql) === TRUE) {
        $success = "success";
        echo json_encode($success, JSON_UNESCAPED_UNICODE);
    } else {
        $error = "error";
        echo json_encode($error, JSON_UNESCAPED_UNICODE);
    }

    $conn->close();
}