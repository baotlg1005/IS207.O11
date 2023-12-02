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

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$phone = $data['phone'];
$password = $data['password'];

$sql = "SELECT * FROM user WHERE Email = ? OR Phone = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $phone);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(array('status' => 'error', 'message' => 'Email or phone already exists.'));
} else {
    $unique_id = uniqid();
    $sql = "INSERT INTO user (UniqueID, Email, Phone, Password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $unique_id, $email, $phone, $password);

    if ($stmt->execute()) {
        echo json_encode(array('status' => 'success'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Error: ' . $stmt->error));
    }
}

$stmt->close();
$conn->close();
?>