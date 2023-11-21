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
            <div class="admin-content-pane " id="bill-pane">
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
                            <td>CBHD02</td>
                            <td>CB02</td>
                            <td>ND02</td>
                            <td>Trần Thị B</td>
                            <td>12</td>
                            <td>5000000</td>
                            <td>Đã thanh toán</td>
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
                                    <input class="input carbill-form-rentTime" type="text" id="carbill-txt-rentTime" disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Giờ kết thúc:</div>
                                    </div>
                                    <input class="input carbill-form-returnTime" type="text" id="carbill-txt-returnTime" disabled>
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
                                    <input class="input hotelbill-form-roomid" type="text" id="hotelbill-txt-roomid"
                                        disabled>
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
                                    <input class="input hotelbill-form-username" type="text" id="hotelbill-txt-username"
                                        disabled>
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
                            <td>Thứ 5, 9 thg 11 2023</td>
                            <td>Thứ 6, 10 thg 11 2023</td>
                            <td>4500000</td>
                            <td>Đã thanh toán</td>
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
                            <td>HHD02</td>
                            <td>P02</td>
                            <td>H02</td>
                            <td>ND02</td>
                            <td>Trần Thị B</td>
                            <td>Thứ 5, 9 thg 11 2024</td>
                            <td>Thứ 6, 10 thg 11 2024</td>
                            <td>6000000</td>
                            <td>Chưa thanh toán</td>
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
                                    <input class="input busbill-form-ticketid" type="text" id="busbill-txt-ticketid"
                                        disabled>
                                </div>
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã xe:</div>
                                    </div>
                                    <input class="input busbill-form-carid" type="text" id="busbill-txt-carid" disabled>
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
                                    <input class="input busbill-form-username" type="text" id="busbill-txt-username"
                                        disabled>
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
                                    <input class="input busbill-form-price" type="text" id="busbill-txt-price" disabled>
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

    <script src="../../resources/js/admin-flight-bill.js"></script>
    <script src="../../resources/js/admin-car-bill.js"></script>
    <script src="../../resources/js/admin-hotel-bill.js"></script>
    <script src="../../resources/js/admin-bus-bill.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>