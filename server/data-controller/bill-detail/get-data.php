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