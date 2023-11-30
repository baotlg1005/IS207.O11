<?php
require_once('../connect.php'); 

$action = $_POST["action"];

if ($action == "payment") { 
    $sql = "SELECT Id from invoice LIMIT 1";
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc())
    {
        $data = $result->fetch_all(MYSQLI_ASSOC);
        print_r($row); 
        // echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}