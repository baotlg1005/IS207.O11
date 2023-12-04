<?php

require_once('../connect.php');

$action = $_POST["action"];

$totalPrice = $_POST["totalPrice"];
$userId = $_POST["userId"];
$flightID = $_POST["flightID"];
$ticketNum = $_POST["ticketNum"];

if ($action == "payment") {
    $invoiceID = uniqid("I");
    $flightInvoiceID = uniqid("FI");
    $seatNum = getSeatNum($conn, $flightID) - $ticketNum;

    $sql = "INSERT INTO invoice(Id,User_id,Total) VALUES('$invoiceID', '$userId', '$totalPrice');";
    $sql .= "INSERT INTO flight_invoice(Id, Flight_id, Invoice_id, Num_Ticket)
    VALUES('$flightInvoiceID', '$flightID', '$invoiceID', '$ticketNum');";
    $sql .= "UPDATE flight SET NumSeat = '$seatNum' WHERE Id = '$flightID'";
    if ($conn->multi_query($sql) === TRUE) {
        $success = "success";
        echo json_encode($success, JSON_UNESCAPED_UNICODE);
    } else {
        $error = "error";
        echo json_encode($error, JSON_UNESCAPED_UNICODE);
    }

    $conn->close();
}

function getSeatNum($conn, $flightID) {
    $sql = "SELECT NumSeat FROM flight WHERE Id = '$flightID'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $seatNum = $row["NumSeat"];
    return $seatNum;
}