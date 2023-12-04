<?php
require_once('../connect.php');

$action = $_GET['action'];

if($action == 'load-recom'){
    //make an array from all counthotel funcion
    $arr = array(
        'hcm' => countFlightHCM($conn),
        'hn' => countFlightHN($conn),
        'dl' => countFlightDL($conn),
        'pq' => countFlightPQ($conn)
    );
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);

    $conn->close();
}

function countFlightHCM($conn) {
    $sql = "SELECT COUNT(*) FROM flight WHERE `To` = 'TP HCM (SGN)'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countFlightHN($conn) {
    $sql = "SELECT COUNT(*) FROM flight WHERE `To` = 'Hà Nội (HAN)'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countFlightDL($conn) {
    $sql = "SELECT COUNT(*) FROM flight WHERE `To` = 'Đà Lạt (DLI)'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countFlightPQ($conn) {
    $sql = "SELECT COUNT(*) FROM flight WHERE `To` = 'P. Quốc (PQC)'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}