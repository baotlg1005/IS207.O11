<?php

//get flight table data  
$sql = "SELECT *, tx.`Id` AS 'TaxiId' FROM taxi tx, taxi_type tt WHERE tx.`Type_id` = tt.`Id`";
$car = $conn->query($sql);

$conn->close();
