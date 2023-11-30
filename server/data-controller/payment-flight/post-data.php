<?php

require_once('../connect.php');

$action = $_POST["action"];

$totalPrice = $_POST["totalPrice"];
$userID = "1";
$flightID = $_POST["flightID"];
$ticketNum = $_POST["ticketNum"];


if ($action == "payment") {
    $invoiceID = uniqid("INVOICE");
    $flightInvoiceID = uniqid("FINVOICE");
    createInvoice($conn, $invoiceID, $totalPrice, $userID, $flightInvoiceID, $flightID, $ticketNum);
}
function createInvoice($conn, $invoiceID, $totalPrice, $userID, $flightInvoiceID, $flightID, $ticketNum)
{
    $sql = "INSERT INTO invoice(Id,User_id,Total) VALUES('$invoiceID', '$userID', '$totalPrice');";
    $sql .= "INSERT INTO flight_invoice(Id, Flight_id, Invoice_id, Num_Ticket)
    VALUES('$flightInvoiceID', '$flightID', '$invoiceID', '$ticketNum');";
    if ($conn->multi_query($sql) === TRUE) {
        $success = "success";
        echo json_encode($success, JSON_UNESCAPED_UNICODE);
    } else {
        $error = "error";
        echo json_encode($error, JSON_UNESCAPED_UNICODE);
    }
}