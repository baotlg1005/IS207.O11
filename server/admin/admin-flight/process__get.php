<?php

//get flight table data  
$sql = "SELECT * FROM flight";
$flight = $conn->query($sql);

$conn->close();
