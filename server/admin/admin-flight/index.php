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
            <div class="admin-content-pane" id="flight-pane">
                <form  method="POST" action="./process__submit.php" class="info-form" id="flight-info-form">
                    <input type="hidden" name="action" id="flight-txt-action" value="create">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Thông tin chuyến bay</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="flight-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã chuyến bay:</div>
                                    </div>
                                    <select id="flight-txt-id" class="input flight-form-input" name="ID">
                                        <option value="newid">Tạo mã mới</option>
                                        <option class="old-id hide" value=""></option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên hãng:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-name" name="Name">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Hạng ghế:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-seat" name="SeatClass">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giá vé:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-price" name="Price">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm đi:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-location" name="From">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm đến:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-destination" name="To">
                                </div>
                            </div>
                            <div class="info-col" id="flight-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm dừng:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-stop" name="Stop/Direct">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Ngày đi:</div>
                                    </div>
                                    <input class="input flight-form-input" type="date" id="flight-txt-date" name="Date">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ đi:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-startTime" name="DepartureTime">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ đến:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-arrivalTime" name="ArrivalTime">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Thời gian bay:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-time" name="TravelTime">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="btn-container">
                        <button class="btn-default flight-btn" id="flight-btn-save" type="submit">
                            <div class="text">Lưu thông tin</div>
                        </button>
                        <button class="btn-default flight-btn" id="flight-btn-clear" type="reset">
                            <div class="text">Clear</div>
                        </button>
                    </div>
                </form>
                <table id="flight-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã chuyến bay</th>
                            <th>Tên hãng</th>
                            <th>Hạng ghế</th>
                            <th>Giá vé (VNĐ)</th>
                            <th>Điểm đi</th>
                            <th>Điểm đến</th>
                            <th>Điểm dừng</th>
                            <th>Ngày đi</th>
                            <th>Giờ đi</th>
                            <th>Giờ đến</th>
                            <th>Thời gian</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            require_once("../connect.php");
                            require_once("./process__get.php");
                            foreach ($flight as $row){
                                $flight_id = $row["ID"];
                                $flight_company_name = $row["Name"];
                                $flight_seat_class = $row["SeatClass"];
                                $flight_price = $row["Price"];
                                $flight_from = $row["From"];
                                $flight_to = $row["To"];
                                $flight_stop_or_direct = $row["Stop/Direct"];
                                $flight_date = $row["Date"];    
                                $flight_departure_time = $row["DepartureTime"];
                                $flight_arrival_time = $row["ArrivalTime"];
                                $flight_travel_time = $row["TravelTime"];

                                

                                echo "<tr class=\"flight-info-row\">";
                                    echo "<td class=\"flight-info__id\">" . $flight_id . "</td>";
                                    echo "<td  class=\"flight-info__company_name\">" . $flight_company_name . "</td>";
                                    echo "<td  class=\"flight-info__seat_class\">" . $flight_seat_class . "</td>";
                                    echo "<td  class=\"flight-info__price\">" . $flight_price . "</td>";
                                    echo "<td  class=\"flight-info__from\">" . $flight_from . "</td>";
                                    echo "<td  class=\"flight-info__to\">" . $flight_to . "</td>";
                                    echo "<td  class=\"flight-info__stop_or_direct\">" . $flight_stop_or_direct . "</td>";
                                    echo "<td  class=\"flight-info__date\">" . $flight_date . "</td>";
                                    echo "<td  class=\"flight-info__departure_time\">" . $flight_departure_time . "</td>";
                                    echo "<td  class=\"flight-info__arrival_time\">" . $flight_arrival_time . "</td>";
                                    echo "<td  class=\"flight-info__travel_time\">" . $flight_travel_time . "</td>";
                                    echo "<td>";
                                        echo "<div class=\"table-btn-group\">";
                                            echo "<button class=\"table-btn btn-default table-btn-modify\" type=\"button\" data-id=\"". $flight_id ."\">";
                                                echo "<div class=\"text\">Sửa</div>";
                                            echo "</button>";
                                            echo "<a href='./process__delete.php?id=".$flight_id."' onclick=\"return confirm('Are you sure you want to delete this item?');\" class=\"table-btn btn-default table-btn-delete\" type=\"button\" data-id=\"". $flight_id ."\">";
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

    <script src="../../resources/js/admin-flight.js" defer></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>