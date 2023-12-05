<?php
require_once('../connect.php');

$action = $_GET['action'];

if($action == 'load-recom'){
    //make an array from all counthotel funcion
    $arr = array(
    //tsn, nb, dn, hcm, dl, hn, hp, ct
        'tsn' => countTaxi($conn, '1'),
        'nb' => countTaxi($conn, '2'),
        'dn' => countTaxi($conn, '3'),
        'hcm' => countTaxi($conn, '5'),
        'dl' => countTaxi($conn, '4'),
        'hn' => countTaxi($conn, '6'),
        'hp' => countTaxi($conn, '7'),
        'ct' => countTaxi($conn, '8')
    );
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);

    $conn->close();
}

function countTaxi($conn, $id) {
    $sql = "SELECT COUNT(*) FROM taxi_area_detail WHERE `Pickpoint_id` = '$id'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    return $row[0];
}
