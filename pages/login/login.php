<?php
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_ie104";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the POST request
$data = json_decode(file_get_contents('php://input'), true);
$emailOrPhone = $data['emailOrPhone'];
$password = $data['password'];

// Check if the user exists in the database
$sql = "SELECT * FROM user WHERE Email = ? OR Phone = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $emailOrPhone, $emailOrPhone);
$stmt->execute();
$result = $stmt->get_result();
$userExists = $result->num_rows > 0;

if ($userExists) {
    $row = $result->fetch_assoc();
    $storedPassword = $row['Password']; 
    // $passwordIsCorrect = password_verify($password, $storedPassword);
    $passwordIsCorrect = $storedPassword == $password;
    if ($passwordIsCorrect) {
        // User successfully logged in, return success message and user id
        echo json_encode(array('success' => true, 'userId' => $row['Id']));
        // echo json_encode(array('success' => true));

    } else {
        // Password is incorrect, return error message
        echo json_encode(array('success' => false));
    }
} else {
    // User does not exist, return error message
    echo json_encode(array('success' => false));
}
$stmt->close();
$conn->close();