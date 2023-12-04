<?php
require_once('../connect.php');

$action = $_GET['action'];

if($action == 'load-recom'){
    //make an array from all countbus funcion
    $arr = array(
        'hcm' => countBusHCM($conn),
        'hp' => countBusHP($conn),
        'ht' => countBusHT($conn),
        'ld' => countBusLD($conn),
        'kh' => countBusKH($conn),
        'dn' => countBusDN($conn),
        'vt' => countBusVT($conn),
        'ag' => countBusAG($conn)
    );

    echo json_encode($arr, JSON_UNESCAPED_UNICODE);

    $conn->close();
}

function countBusHCM($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'TP Hồ Chí Minh'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusHP($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'Hải Phòng'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusHT($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'Hà Tĩnh'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusLD($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'Lâm Đồng'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusKH($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'Khánh Hòa'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusDN($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'Đà Nẵng'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusVT($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'Bà Rịa - Vũng Tàu'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countBusAG($conn) {
    $sql = "SELECT COUNT(*) FROM bus WHERE `To` = 'An Giang'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

