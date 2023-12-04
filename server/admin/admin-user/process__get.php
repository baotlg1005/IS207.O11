<?php

$sql = "SELECT * FROM user
        INNER JOIN passport ON user.Passport_id = passport.Id";
$user = $conn->query($sql);

$conn->close();
