<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href=' http://fonts.googleapis.com/css?family=Inter' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../../resources/css/main-style.css">
    <link rel="stylesheet" href="../../resources/css/btn.css">
    <link rel="stylesheet" href="../../resources/css/input-block.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css">

    <link rel="stylesheet" href="../../resources/css/admin.css">

    <script src="https://code.jquery.com/jquery-3.7.0.js" defer></script>
    <script src="https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js" defer></script>
    <script src="../../resources/js/admin.js" defer></script>
</head>

<body>
    <div class="container-fluid admin-accountbar">account</div>
    <div class="container-fluid admin-window">
        <div class="admin-navbar">
            <a href="../admin-user" type="button" class="btn-default nav-pill" id="btn-admin-user">
                <div class="text">Quản lý người dùng</div>
            </a>
            <a href="../admin-flight" type="button" class="btn-default nav-pill" id="btn-admin-flight">
                <div class="text">Quản lý chuyến bay</div>
            </a>
            <a href="../admin-car" type="button" class="btn-default nav-pill" id="btn-admin-car">
                <div class="text">Quản lý xe dịch vụ</div>
            </a>
            <a href="../admin-bus" type="button" class="btn-default nav-pill" id="btn-admin-bus">
                <div class="text">Quản lý xe khách</div>
            </a>
            <a href="../admin-hotel" type="button" class="btn-default nav-pill" id="btn-admin-hotel">
                <div class="text">Quản lý khách sạn</div>
            </a>
            <a href="../admin-bill" type="button" class="btn-default nav-pill" id="btn-admin-bill">
                <div class="text">Quản lý hóa đơn</div>
            </a>
        </div>
        <div class="admin-content-window">
            <div class="admin-content-pane" id="bus-pane">
                <form class="info-form" id="bus-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Thông tin xe khách</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="bus-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã xe:</div>
                                    </div>
                                    <select id="bus-txt-id" class="input bus-form-input">
                                        <option value="newid">Tạo mã mới</option>
                                        <option class="old-id hide" value=""></option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Số ghế:</div>
                                    </div>
                                    <input class="input bus-form-input" type="text" id="bus-txt-seat">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giá tiền:</div>
                                    </div>
                                    <input class="input bus-form-price" type="text" id="bus-txt-price">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên hãng:</div>
                                    </div>
                                    <input class="input bus-form-input" type="text" id="bus-txt-name">
                                </div>
                            </div>
                            <div class="info-col" id="bus-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm đi:</div>
                                    </div>
                                    <input class="input bus-form-input" type="text" id="bus-txt-location">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm đến:</div>
                                    </div>
                                    <input class="input bus-form-price" type="text" id="bus-txt-destination">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ đi:</div>
                                    </div>
                                    <input class="input bus-form-startTime" type="text" id="bus-txt-startTime">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ đến:</div>
                                    </div>
                                    <input class="input bus-form-arrivalTime" type="text" id="bus-txt-arrivalTime">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="btn-container">
                        <button class="btn-default bus-btn" id="bus-btn-save" type="button">
                            <div class="text">Lưu thông tin</div>
                        </button>
                        <button class="btn-default bus-btn" id="bus-btn-clear" type="reset">
                            <div class="text">Clear</div>
                        </button>
                    </div>
                </form>
                <table id="bus-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã xe</th>
                            <th>Số ghế</th>
                            <th>Tên hãng</th>
                            <th>Điểm đi</th>
                            <th>Điểm đến</th>
                            <th>Giờ đi</th>
                            <th>Giờ đến</th>
                            <th>Giá vé</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                        require_once("../connect.php");
                        require_once("./process__get.php");
                        foreach ($car as $row) {
                            $car_id = $row["TaxiId"];
                            $car_type = $row["Type"];
                            $car_brand = $row["Name"];
                            $car_seatNum = $row["NumofSeat"];
                            $car_luggage = $row["Luggage"];
                            $car_price = $row["Price"];
                            $car_state = $row["State"];

                            echo "<tr class=\"info-info-row\">";
                            echo "<td class=\"car-info__id\">" . $car_id . "</td>";
                            echo "<td  class=\"car-info__type\">" . $car_type . "</td>";
                            echo "<td  class=\"car-info__brand\">" . $car_brand . "</td>";
                            echo "<td  class=\"car-info__seatNum\">" . $car_seatNum . "</td>";
                            echo "<td  class=\"car-info__luggage\">" . $car_luggage . "</td>";
                            echo "<td  class=\"car-info__price\">" . $car_price . "</td>";
                            echo "<td  class=\"car-info__state\">" . $car_state . "</td>";
                            echo "<td>";
                            echo "<div class=\"table-btn-group\">";
                            // echo "<button class=\"table-btn btn-default table-btn-modify\" type=\"button\" data-id=\"". $user_id ."\">";
                            //     echo "<div class=\"text\">Sửa</div>";
                            // echo "</button>";
                            echo "<a href='./process__delete.php?id=" . $car_id . "' onclick=\"return confirm('Are you sure you want to delete this item?');\" class=\"table-btn btn-default table-btn-delete\" type=\"button\" data-id=\"" . $car_id . "\">";
                            echo "<div class=\"text\">Xóa</div>";
                            echo "</a>";
                            echo "</div>";
                            echo "</td>";
                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
    </div>

    <script src="../../resources/js/admin-bus.js" defer></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>