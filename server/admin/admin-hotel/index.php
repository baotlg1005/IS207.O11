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
            <div class="admin-content-pane" id="hotel-pane">
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
                                        <option class="old-id hide" value=""></option>
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
                                    <textarea class="hotel-form-address" type="text" id="hotel-txt-address"></textarea>
                                </div>
                            </div>
                            <div class="info-col" id="hotel-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Mã phòng:</div>
                                    </div>
                                    <select id="hotel-txt-roomId" class="input hotel-form-roomId">
                                        <option value="newid">Tạo mã mới</option>
                                        <option class="old-id2 hide" value=""></option>
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
                            <td>H02</td>
                            <td>Hotel B</td>
                            <td>123 Đường Nguyễn Du, Quận 1, TP.Hồ Chí Minh</td>
                            <td>P02</td>
                            <td>4</td>
                            <td>2000000</td>
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

    <script src="../../resources/js/admin-hotel.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>