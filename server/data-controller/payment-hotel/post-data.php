<?php

require_once('../connect.php');

$action = $_POST["action"];

$totalPrice = $_POST["totalPrice"];
$userID = "1";
$roomID = $_POST["roomID"];
$checkIn = $_POST["checkIn"];
$checkOut = $_POST["checkOut"];

if ($action == "payment") {
    $invoiceID = uniqid("I");
    $roomInvoiceID = uniqid("RI");
    $sql = "INSERT INTO invoice(Id,User_id,Total) VALUES('$invoiceID', '$userID', '$totalPrice');";
    $sql .= "INSERT INTO room_invoice(Id, Room_id, Check_in, Check_out, Invoice_id)
    VALUES('$roomInvoiceID', '$roomID', '$checkIn', '$checkOut', '$invoiceID');";
    if ($conn->multi_query($sql) === TRUE) {
        $success = "success";
        echo json_encode($success, JSON_UNESCAPED_UNICODE);
    } else {
        $error = "error";
        echo json_encode($error, JSON_UNESCAPED_UNICODE);
    }

    $conn->close();
}