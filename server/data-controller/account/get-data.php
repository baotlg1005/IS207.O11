<?php
require_once('../connect.php');

$action = $_GET['action'];

if($action == 'load-bill'){
    $userId = $_GET['userId'];
    $sql = "SELECT * FROM invoice 
    WHERE `User_id` = '$userId'
    ORDER BY `Id` DESC;
    ";
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

if($action == 'get-bill-id'){
    $invoiceID = $_GET["id"];

    $conn->query("SET @out_invoiceID = ''");
    $conn->query("CALL GetInvoiceID('$invoiceID', @out_invoiceID)");

    $result = $conn->query("SELECT @out_invoiceID as out_invoiceID");
    $row = $result->fetch_assoc();
    $out_invoiceID = $row['out_invoiceID'];

    echo $out_invoiceID;

    $conn->close();
}

if($action == 'load-account-info'){
    $userId = $_GET['userId'];
    $sql = "SELECT * FROM user as t1 
    INNER JOIN passport as t2 
    ON t1.`Passport_id` = t2.`Id`
    WHERE t1.`Id` = '$userId';";
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
