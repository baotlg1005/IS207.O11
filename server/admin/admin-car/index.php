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
            <div class="admin-content-pane" id="car-pane">
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
                                        <option class="old-id hide" value=""></option>
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

                            </div>
                            <div class="info-col" id="car-info-col-2">
                                <div class="input-block">
                                    <div class="title">
                                        <div class="text">Số ghế:</div>
                                    </div>
                                    <input class="input car-form-input" type="text" id="car-txt-seat">
                                </div>
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
                            <td>X02</td>
                            <td>Không có tài xế</td>
                            <td>TOYOTA</td>
                            <td>12</td>
                            <td>5</td>
                            <td>2500000</td>
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

    <script src="../../resources/js/admin-car.js" defer></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>