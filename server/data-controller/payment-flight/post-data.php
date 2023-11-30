<?php

require_once('../connect.php');

$action = $_POST["action"];

$totalPrice = $_POST["totalPrice"];
$userID = "1";
$flightID = $_POST["flightID"];
$ticketNum = $_POST["ticketNum"];


if ($action == "payment") {
    $invoiceID = getInvoiceID($conn) + 1;
    $flightInvoiceID = getFlightInvoiceID($conn) + 1;
    createInvoice($conn, $invoiceID, $totalPrice, $userID, $flightInvoiceID, $flightID, $ticketNum);

    $conn->close();
}

function getInvoiceID($conn)
{
    $sql = "SELECT MAX(Id) AS InvoiceID FROM invoice";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $invoiceID = $row["InvoiceID"];

    return $invoiceID;
}

function getFlightInvoiceID($conn) {
    $sql = "SELECT MAX(Id) AS FlightInvoiceID FROM flight_invoice";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $flightInvoiceID = $row["FlightInvoiceID"];

    return $flightInvoiceID;
}

function createInvoice($conn, $invoiceID, $totalPrice, $userID, $flightInvoiceID, $flightID, $ticketNum)
{
    $sql = "INSERT INTO invoice(Id,User_id,Total) VALUES('$invoiceID', '$userID', '$totalPrice')";
    $sql .= "INSERT INTO flight_invoice(Id, Flight_id, Invoice_id, Num_Ticket)
    VALUES('$flightInvoiceID', '$flightID', '$invoiceID', '$ticketNum')";
    if ($conn->multi_query($sql) === TRUE) {
        echo"Invoice created";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}