<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../resource/css/main-style.css">
    <link rel="stylesheet" href="../resource/css/btn.css">
    <link rel="stylesheet" href="../resource/css/input-block.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css">

    <link rel="stylesheet" href="../resource/css/admin.css">

    <script src="https://code.jquery.com/jquery-3.7.0.js" defer></script>
    <script src="https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js" defer></script>
    <script src="../resource/js/admin.js" defer></script>
    <script src="../resource/js/admin-navbar.js" defer></script>
</head>

<body>
    <div class="container-fluid admin-window">
        <div class="admin-navbar">
            <button type="button" class="btn-default nav-pill" id="btn-admin-user">
                <div class="text">Quản lý người dùng</div>
            </button>
            <button type="button" class="btn-default nav-pill" id="btn-admin-flight">
                <div class="text">Quản lý chuyến bay</div>
            </button>
            <button type="button" class="btn-default nav-pill" id="btn-admin-car">
                <div class="text">Quản lý xe dịch vụ</div>
            </button>
            <button type="button" class="btn-default nav-pill" id="btn-admin-bus">
                <div class="text">Quản lý xe khách</div>
            </button>
            <button type="button" class="btn-default nav-pill" id="btn-admin-hotel">
                <div class="text">Quản lý khách sạn</div>
            </button>
            <button type="button" class="btn-default nav-pill" id="btn-admin-bill">
                <div class="text">Quản lý hóa đơn</div>
            </button>
        </div>
        <div class="admin-content-window">
            <div class="admin-content-pane" id="user-pane">
                <form class="info-form" id="user-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Thông tin cá nhân</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="user-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã người dùng:</div>
                                    </div>
                                    <select id="user-txt-id" class="input user-form-input">
                                        <option value="newid">Tạo mã mới</option>
                                        <option value="nd01">ND01</option>
                                        <option value="nd02">ND02</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Họ tên:</div>
                                    </div>
                                    <input class="input user-form-input" type="text" id="user-txt-name">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giới tính:</div>
                                    </div>
                                    <select id="txt-user-gender" class="input user-form-input">
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Ngày sinh:</div>
                                    </div>
                                    <input class="input user-form-input" type="date" id="user-txt-bdate">
                                </div>
                            </div>
                            <div class="info-col" id="user-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Email:</div>
                                    </div>
                                    <input class="input user-form-input" type="text" id="user-txt-email">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Quốc tịch:</div>
                                    </div>
                                    <input class="input user-form-input" type="text" id="user-txt-nation">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">SĐT:</div>
                                    </div>
                                    <input class="input user-form-input" type="text" id="user-txt-phone">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Thông tin hộ chiếu</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="user-info-col-3">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Quốc gia cấp hộ chiếu:</div>
                                    </div>
                                    <input class="input user-form-input" type="text" id="user-txt-ppnation">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Ngày hết hạn hộ chiếu:</div>
                                    </div>
                                    <input class="input user-form-input" type="date" id="user-txt-ppdate">
                                </div>
                            </div>
                        </div>
                        <div class="btn-container">
                            <button class="btn-default user-btn" id="user-btn-save" type="button">
                                <div class="text">Lưu thông tin</div>
                            </button>
                            <button class="btn-default user-btn" id="user-btn-clear" type="reset">
                                <div class="text">Clear</div>
                            </button>
                        </div>
                    </div>
                </form>
                <table id="user-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã người dùng</th>
                            <th>Họ tên</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Quốc tịch</th>
                            <th>SĐT</th>
                            <th>Quốc gia cấp hộ chiếu</th>
                            <th>Ngày hết hạn hộ chiếu</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ND01</td>
                            <td>Người Dùng 1</td>
                            <td>Nam</td>
                            <td>01/01/1990</td>
                            <td>nd01@example.com</td>
                            <td>Vietnam</td>
                            <td>123456789</td>
                            <td>Vietnam</td>
                            <td>01/01/2030</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ND02</td>
                            <td>Người Dùng 2</td>
                            <td>Nữ</td>
                            <td>05/10/1985</td>
                            <td>nd02@example.com</td>
                            <td>USA</td>
                            <td>987654321</td>
                            <td>USA</td>
                            <td>05/10/2025</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ND03</td>
                            <td>Người Dùng 3</td>
                            <td>Nam</td>
                            <td>15/07/1995</td>
                            <td>nd03@example.com</td>
                            <td>France</td>
                            <td>555555555</td>
                            <td>France</td>
                            <td>15/07/2035</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="admin-content-pane hide" id="flight-pane">
                <form method="POST" action="./flight/process__submit.php" class="info-form" id="flight-info-form">
                    <input id="flight-txt-action" type="hidden" name="action" value="create">	
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
                                    <select id="flight-txt-id" class="input flight-form-input" name='ID'>
                                        <option value="newid">Tạo mã mới</option>
                                        <option class="old-id hide" value=""></option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên hãng:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-name" name='Name'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Hạng ghế:</div>
                                    </div>
                                    <!-- <input class="input flight-form-input" type="text" id="flight-txt-seat"> -->
                                    <select id="flight-txt-seat" class="input flight-form-input" name='SeatClass'>
                                        <option value="economy">Phổ thông</option>
                                        <option value="business" selected>Thương gia</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giá vé:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-price" name='Price'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm đi:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-location" name='From'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm đến:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-destination" name='To'>
                                </div>
                            </div>
                            <div class="info-col" id="flight-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Điểm dừng:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-stop" name='Stop/Direct'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Ngày đi:</div>
                                    </div>
                                    <input class="input flight-form-input" type="date" id="flight-txt-date" name='Date'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ đi:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-startTime" name='DepartureTime'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ đến:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-arrivalTime" name='ArrivalTime'>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Thời gian bay:</div>
                                    </div>
                                    <input class="input flight-form-input" type="text" id="flight-txt-time" name='TravelTime'>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="btn-container">
                        <button class="btn-default flight-btn" id="flight-btn-save" type="submit" disabled>
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
                            require_once("connect.php");
                            require_once("./flight/process__get.php");
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

                                // print_r($row);

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
                                            echo "<button class=\"table-btn btn-default table-btn-delete\" type=\"button\" data-id=\"". $flight_id ."\">";
                                                echo "<div class=\"text\">Xóa</div>";
                                            echo "</button>";
                                        echo "</div>";
                                    echo "</td>";
                                echo "</tr>";

                                // break;
                            }
                        ?>
                    </tbody>
                </table>
            </div>
            <div class="admin-content-pane hide" id="car-pane">
                <form class="info-form" id="car-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Thông tin xe dịch vụ</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="car-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã xe:</div>
                                    </div>
                                    <select id="car-txt-id" class="input car-form-input">
                                        <option value="newid">Tạo mã mới</option>
                                        <option value="nd01">X01</option>
                                        <option value="nd02">X02</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Loại dịch vụ:</div>
                                    </div>
                                    <select id="car-txt-type" class="input car-form-input">
                                        <option value="nd01">Có tài xế</option>
                                        <option value="nd02">Không có tài xế</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên hãng:</div>
                                    </div>
                                    <input class="input car-form-input" type="text" id="car-txt-name">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Số ghế:</div>
                                    </div>
                                    <input class="input car-form-input" type="text" id="car-txt-seat">
                                </div>
                            </div>
                            <div class="info-col" id="car-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Số hành lý:</div>
                                    </div>
                                    <input class="input car-form-input" type="text" id="car-txt-luggage">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giá tiền:</div>
                                    </div>
                                    <input class="input car-form-price" type="text" id="car-txt-price">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên khu vực:</div>
                                    </div>
                                    <select id="car-txt-area" class="input car-form-input">
                                        <option value="nd01">Quận 1</option>
                                        <option value="nd02">Quận 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="btn-container">
                        <button class="btn-default car-btn" id="car-btn-save" type="button">
                            <div class="text">Lưu thông tin</div>
                        </button>
                        <button class="btn-default car-btn" id="car-btn-clear" type="reset">
                            <div class="text">Clear</div>
                        </button>
                    </div>
                </form>
                <table id="car-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã xe</th>
                            <th>Loại dịch vụ</th>
                            <th>Tên hãng</th>
                            <th>Số ghế</th>
                            <th>Số hành lý</th>
                            <th>Giá tiền (VNĐ)</th>
                            <th>Tên khu vực</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>X01</td>
                            <td>Có tài xế</td>
                            <td>TOYOTA</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3000000</td>
                            <td>Quận 1</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>X02</td>
                            <td>Không có tài xế</td>
                            <td>TOYOTA</td>
                            <td>12</td>
                            <td>5</td>
                            <td>2500000</td>
                            <td>Quận 2</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="admin-content-pane hide" id="bus-pane">
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
                                        <option value="nd01">B01</option>
                                        <option value="nd02">B02</option>
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
                        <tr>
                            <td>B01</td>
                            <td>4</td>
                            <td>TOYOTA</td>
                            <td>Hanoi</td>
                            <td>Ho Chi Minh City</td>
                            <td>08:00 AM</td>
                            <td>10:30 AM</td>
                            <td>3000000</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>B02</td>
                            <td>12</td>
                            <td>HONDA</td>
                            <td>Dubai</td>
                            <td>New York</td>
                            <td>02:00 PM</td>
                            <td>08:00 PM</td>
                            <td>2500000</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="admin-content-pane hide" id="hotel-pane">
                <form class="info-form" id="hotel-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Thông tin khách sạn</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="hotel-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã khách sạn:</div>
                                    </div>
                                    <select id="hotel-txt-id" class="input hotel-form-input">
                                        <option value="newid">Tạo mã mới</option>
                                        <option value="nd01">H01</option>
                                        <option value="nd02">H02</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên khách sạn:</div>
                                    </div>
                                    <input class="input hotel-form-input" type="text" id="hotel-txt-name">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Địa chỉ:</div>
                                    </div>
                                    <input class="input hotel-form-address" type="text" id="hotel-txt-address">
                                </div>
                            </div>
                            <div class="info-col" id="hotel-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã phòng:</div>
                                    </div>
                                    <select id="hotel-txt-roomid" class="input hotel-form-roomid">
                                        <option value="newid">Tạo mã mới</option>
                                        <option value="nd01">P01</option>
                                        <option value="nd02">P02</option>
                                    </select>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Số khách tối đa:</div>
                                    </div>
                                    <input class="input hotel-form-maxGuest" type="text" id="hotel-txt-maxGuest">
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Gía phòng:</div>
                                    </div>
                                    <input class="input hotel-form-roomPrice" type="text" id="hotel-txt-roomPrice">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="btn-container">
                        <button class="btn-default hotel-btn" id="hotel-btn-save" type="button">
                            <div class="text">Lưu thông tin</div>
                        </button>
                        <button class="btn-default hotel-btn" id="hotel-btn-clear" type="reset">
                            <div class="text">Clear</div>
                        </button>
                    </div>
                </form>
                <table id="hotel-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã khách sạn</th>
                            <th>Tên khách sạn</th>
                            <th>Địa chỉ</th>
                            <th>Mã phòng</th>
                            <th>Số khách tối đa</th>
                            <th>Giá phòng</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>H01</td>
                            <td>Hotel A</td>
                            <td>456 Đường Lê Lợi, Quận 3, TP.Hồ Chí Minh</td>
                            <td>P01</td>
                            <td>2</td>
                            <td>1500000</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>H02</td>
                            <td>Hotel B</td>
                            <td>123 Đường Nguyễn Du, Quận 1, TP.Hồ Chí Minh</td>
                            <td>P02</td>
                            <td>4</td>
                            <td>2000000</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="admin-content-pane hide" id="bill-pane">
                <form class="info-form" id="flightbill-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Chi tiết hóa đơn chuyến bay</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="flightbill-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã hóa đơn:</div>
                                    </div>
                                    <input class="input flightbill-form-billid" type="text" id="flightbill-txt-billid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã chuyến bay:</div>
                                    </div>
                                    <input class="input flightbill-form-flightid" type="text"
                                        id="flightbill-txt-flightid" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã khách hàng:</div>
                                    </div>
                                    <input class="input flightbill-form-userid" type="text" id="flightbill-txt-userid"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="flightbill-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên khách hàng:</div>
                                    </div>
                                    <input class="input flightbill-form-username" type="text"
                                        id="flightbill-txt-username" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Số ghế:</div>
                                    </div>
                                    <input class="input flightbill-form-seat" type="text" id="flightbill-txt-seat"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tổng tiền:</div>
                                    </div>
                                    <input class="input flightbill-form-price" type="text" id="flightbill-txt-price"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="flightbill-info-col-3">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Trạng thái:</div>
                                    </div>
                                    <select id="flightbill-txt-status" class="input flightbill-form-status">
                                        <option value="yes">Đã thanh toán</option>
                                        <option value="no">Chưa thanh toán</option>
                                    </select>
                                </div>
                                <div class="btn-container flightbill-btn-container">
                                    <button class="btn-default flightbill-btn" id="flightbill-btn-save" type="button">
                                        <div class="text">Cập nhật trạng thái</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <table id="flightbill-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã hóa đơn</th>
                            <th>Mã chuyến bay</th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số ghế</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CBHD01</td>
                            <td>CB01</td>
                            <td>ND01</td>
                            <td>Nguyễn Văn A</td>
                            <td>4</td>
                            <td>3000000</td>
                            <td>Chưa thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>CBHD02</td>
                            <td>CB02</td>
                            <td>ND02</td>
                            <td>Trần Thị B</td>
                            <td>12</td>
                            <td>5000000</td>
                            <td>Đã thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form class="info-form" id="carbill-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Chi tiết hóa đơn thuê xe</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="carbill-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã hóa đơn:</div>
                                    </div>
                                    <input class="input carbill-form-billid" type="text" id="carbill-txt-billid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã xe:</div>
                                    </div>
                                    <input class="input carbill-form-carid" type="text" id="carbill-txt-carid" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã khách hàng:</div>
                                    </div>
                                    <input class="input carbill-form-userid" type="text" id="carbill-txt-userid"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="carbill-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên khách hàng:</div>
                                    </div>
                                    <input class="input carbill-form-username" type="text" id="carbill-txt-username"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ bắt đầu:</div>
                                    </div>
                                    <input class="input carbill-form-price" type="text" id="carbill-txt-price" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ kết thúc:</div>
                                    </div>
                                    <input class="input carbill-form-price" type="text" id="carbill-txt-price" disabled>
                                </div>
                            </div>
                            <div class="info-col" id="carbill-info-col-3">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tổng tiền:</div>
                                    </div>
                                    <input class="input carbill-form-price" type="text" id="carbill-txt-price" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Trạng thái:</div>
                                    </div>
                                    <select id="carbill-txt-status" class="input carbill-form-status">
                                        <option value="yes">Đã thanh toán</option>
                                        <option value="no">Chưa thanh toán</option>
                                    </select>
                                </div>
                                <div class="btn-container carbill-btn-container">
                                    <button class="btn-default carbill-btn" id="carbill-btn-save" type="button">
                                        <div class="text">Cập nhật trạng thái</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <table id="carbill-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã hóa đơn</th>
                            <th>Mã xe</th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Giờ bắt đầu</th>
                            <th>Giờ kết thúc</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CHD01</td>
                            <td>X01</td>
                            <td>ND01</td>
                            <td>Nguyễn Văn A</td>
                            <td>08:00 AM</td>
                            <td>10:30 AM</td>
                            <td>3000000</td>
                            <td>Đã thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>CHD02</td>
                            <td>X02</td>
                            <td>ND02</td>
                            <td>Trần Thị B</td>
                            <td>02:00 PM</td>
                            <td>08:00 PM</td>
                            <td>5000000</td>
                            <td>Chưa thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form class="info-form" id="hotelbill-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Chi tiết hóa đơn khách sạn</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="hotelbill-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã hóa đơn:</div>
                                    </div>
                                    <input class="input hotelbill-form-billid" type="text" id="hotelbill-txt-billid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã phòng:</div>
                                    </div>
                                    <input class="input hotelbill-form-roomid" type="text"
                                        id="hotelbill-txt-roomid" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã khách sạn:</div>
                                    </div>
                                    <input class="input hotelbill-form-hotelid" type="text" id="hotelbill-txt-hotelid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã khách hàng:</div>
                                    </div>
                                    <input class="input hotelbill-form-userid" type="text" id="hotelbill-txt-userid"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="hotelbill-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên khách hàng:</div>
                                    </div>
                                    <input class="input hotelbill-form-username" type="text"
                                        id="hotelbill-txt-username" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Ngày nhận phòng:</div>
                                    </div>
                                    <input class="input hotelbill-form-checkin" type="date" id="hotelbill-txt-checkin"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Ngày trả phòng:</div>
                                    </div>
                                    <input class="input hotelbill-form-checkout" type="date" id="hotelbill-txt-checkout"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tổng tiền:</div>
                                    </div>
                                    <input class="input hotelbill-form-price" type="text" id="hotelbill-txt-price"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="hotelbill-info-col-3">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Trạng thái:</div>
                                    </div>
                                    <select id="hotelbill-txt-status" class="input hotelbill-form-status">
                                        <option value="yes">Đã thanh toán</option>
                                        <option value="no">Chưa thanh toán</option>
                                    </select>
                                </div>
                                <div class="btn-container hotelbill-btn-container">
                                    <button class="btn-default hotelbill-btn" id="hotelbill-btn-save" type="button">
                                        <div class="text">Cập nhật trạng thái</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <table id="hotelbill-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã hóa đơn</th>
                            <th>Mã phòng</th>
                            <th>Mã khách sạn</th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Ngày nhận phòng</th>
                            <th>Ngày trả phòng</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HHD01</td>
                            <td>P01</td>
                            <td>H01</td>
                            <td>ND01</td>
                            <td>Nguyễn Văn A</td>
                            <td>2023-12-01</td>
                            <td>2023-12-03</td>
                            <td>4500000</td>
                            <td>Đã thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>HHD02</td>
                            <td>P02</td>
                            <td>H02</td>
                            <td>ND02</td>
                            <td>Trần Thị B</td>
                            <td>2023-12-05</td>
                            <td>2023-12-08</td>
                            <td>6000000</td>
                            <td>Chưa thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form class="info-form" id="busbill-info-form">
                    <div class="info-window">
                        <div class="pane-text-container">
                            <div class="pane-text">Chi tiết hóa đơn xe khách</div>
                        </div>
                        <div class="info-content">
                            <div class="info-col" id="busbill-info-col-1">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã hóa đơn:</div>
                                    </div>
                                    <input class="input busbill-form-billid" type="text" id="busbill-txt-billid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã vé:</div>
                                    </div>
                                    <input class="input busbill-form-ticketid" type="text"
                                        id="busbill-txt-ticketid" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã xe:</div>
                                    </div>
                                    <input class="input busbill-form-carid" type="text" id="busbill-txt-carid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã khách hàng:</div>
                                    </div>
                                    <input class="input busbill-form-userid" type="text" id="busbill-txt-userid"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="busbill-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tên khách hàng:</div>
                                    </div>
                                    <input class="input busbill-form-username" type="text"
                                        id="busbill-txt-username" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ bắt đầu:</div>
                                    </div>
                                    <input class="input busbill-form-checkin" type="text" id="busbill-txt-checkin"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ kết thúc:</div>
                                    </div>
                                    <input class="input busbill-form-checkout" type="text" id="busbill-txt-checkout"
                                        disabled>
                                </div>
                            </div>
                            <div class="info-col" id="busbill-info-col-3">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Tổng tiền:</div>
                                    </div>
                                    <input class="input busbill-form-price" type="text" id="busbill-txt-price"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Trạng thái:</div>
                                    </div>
                                    <select id="busbill-txt-status" class="input busbill-form-status">
                                        <option value="yes">Đã thanh toán</option>
                                        <option value="no">Chưa thanh toán</option>
                                    </select>
                                </div>
                                <div class="btn-container busbill-btn-container">
                                    <button class="btn-default busbill-btn" id="busbill-btn-save" type="button">
                                        <div class="text">Cập nhật trạng thái</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <table id="busbill-table" class="admin-table display">
                    <thead>
                        <tr>
                            <th>Mã hóa đơn</th>
                            <th>Mã vé</th>
                            <th>Mã xe</th>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Giờ bắt đầu</th>
                            <th>Giờ bắt đầu</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BHD01</td>
                            <td>T01</td>
                            <td>C01</td>
                            <td>ND01</td>
                            <td>Nguyễn Văn A</td>
                            <td>08:00 AM</td>
                            <td>10:30 AM</td>
                            <td>3000000</td>
                            <td>Đã thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>BHD02</td>
                            <td>T02</td>
                            <td>C02</td>
                            <td>ND02</td>
                            <td>Trần Thị B</td>
                            <td>02:00 PM</td>
                            <td>08:00 PM</td>
                            <td>5000000</td>
                            <td>Chưa thanh toán</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default" type="button" id="table-btn-modify">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default" type="button" id="table-btn-delete">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
    </div>

    <script src="../resource/js/admin-content-pane.js" defer></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>