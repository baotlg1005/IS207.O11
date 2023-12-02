<?php

require_once('../connect.php');

$action = $_POST["action"];

$totalPrice = $_POST["totalPrice"];
$userID = "1";
$busID = $_POST["busID"];
$ticketNumber = $_POST["ticketNumber"];

if ($action == "payment") {
    $invoiceID = uniqid("I");
    $busInvoiceID = uniqid("BI");
    
    $sql = "INSERT INTO invoice(Id, User_id, Total) VALUES('$invoiceID', '$userID', '$totalPrice');";
    $sql .= "INSERT INTO bus_invoice(Id, Bus_id, Num_ticket, Invoice_id)
    VALUES('$busInvoiceID', '$busID', '$ticketNumber', '$invoiceID');";
    if ($conn->multi_query($sql) === TRUE) {
        $success = "success";
        echo json_encode($success, JSON_UNESCAPED_UNICODE);
    } else {
        $error = "error";
        echo json_encode($error, JSON_UNESCAPED_UNICODE);
    }

    $conn->close();
}