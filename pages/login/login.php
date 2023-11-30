<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_ie104";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$emailOrPhone = $_POST['emailOrPhone'];
$password = $_POST['password'];

$sql = "SELECT * FROM user WHERE (Phone = ? OR Email = ?) AND Password = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $emailOrPhone, $emailOrPhone, $password);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(array('status' => 'success'));
} else {
    echo json_encode(array('status' => 'error'));
}

$stmt->close();
$conn->close();
?>
