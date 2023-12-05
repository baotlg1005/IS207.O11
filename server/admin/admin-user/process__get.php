<?php

//get flight table data  
$sql = "SELECT us.`Passport_id`, us.`Id`, us.`Name`, us.`Sex`, us.`Birthday`, us.`Phone`, us.`Email`, us.`Nationality`, pp.`Nation`, pp.`Expiration` FROM user us, passport pp WHERE us.`Passport_id` = pp.`Id`";
$user = $conn->query($sql);

$conn->close();
