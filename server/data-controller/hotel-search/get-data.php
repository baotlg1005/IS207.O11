<?php
require_once('../connect.php');

$action = $_GET['action'];

if($action == 'load-recom'){
    //make an array from all counthotel funcion
    $arr = array(
        'hcm' => countHotelHCM($conn),
        'hn' => countHotelHN($conn),
        'dn' => countHotelDN($conn),
        'vt' => countHotelVT($conn)
    );
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);

    $conn->close();
}

function countHotelHCM($conn) {
    $sql = "SELECT COUNT(*) FROM hotel WHERE Area = 'Thành Phố Hồ Chí Minh'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countHotelHN($conn) {
    $sql = "SELECT COUNT(*) FROM hotel WHERE Area = 'Hà Nội'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countHotelDN($conn) {
    $sql = "SELECT COUNT(*) FROM hotel WHERE Area = 'Đà Nẵng'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}

function countHotelVT($conn) {
    $sql = "SELECT COUNT(*) FROM hotel WHERE Area = 'Bà Rịa - Vũng Tàu'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}