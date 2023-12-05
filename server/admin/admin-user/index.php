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
                                        <option class="old-id hide" value=""></option>
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
                                    <select id="user-txt-gender" class="input user-form-input">
                                        <option value="male" selected>Nam</option>
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
                        <tr>
                            <td>ND02</td>
                            <td>Người Dùng 2</td>
                            <td>Nữ</td>
                            <td>Thứ 5, 9 thg 11 2024</td>
                            <td>nd02@example.com</td>
                            <td>USA</td>
                            <td>987654321</td>
                            <td>USA</td>
                            <td>Thứ 5, 2 thg 1 2040</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default table-btn-modify" type="button">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default table-btn-delete" type="button">
                                        <div class="text">Xóa</div>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ND03</td>
                            <td>Người Dùng 3</td>
                            <td>Nam</td>
                            <td>Thứ 5, 12 thg 11 2023</td>
                            <td>nd03@example.com</td>
                            <td>France</td>
                            <td>555555555</td>
                            <td>France</td>
                            <td>Thứ 2, 9 thg 11 2035</td>
                            <td>
                                <div class="table-btn-group">
                                    <button class="table-btn btn-default table-btn-modify" type="button">
                                        <div class="text">Sửa</div>
                                    </button>
                                    <button class="table-btn btn-default table-btn-delete" type="button">
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

    <script src="../../resources/js/admin-user.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>