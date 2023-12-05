window.addEventListener("load", LoadBillDetail);
{/* <div class="container payment-window">
<div class="title border-bottom">
    <h1 class="text">Chi tiết hóa đơn</h1>
</div>
<div class="info-container flex-column border-bottom" id="payment-window__flight-info">
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Ngày nhận phòng:</div>
            <div class="text" id="txt-startDate"></div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Ngày trả phòng:</div>
            <div class="text" id="txt-endDate"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="one-row-content-container content-container flex-row align-center">
            <div class="label">Tên khách sạn:</div>
            <div class="text" id="txt-name"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="one-row-content-container content-container flex-row align-center">
            <div class="label">Địa chỉ:</div>
            <div class="text" id="txt-address"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="one-row-content-container content-container flex-row align-center">
            <div class="label">Loại phòng:</div>
            <div class="text" id="txt-roomName"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="one-row-content-container content-container flex-row align-center">
            <div class="label">Số người ở:</div>
            <div class="text" id="txt-guestNum"></div>
        </div>
    </div>
</div>
<div class="info-container flex-column" id="payment-window__price-info">
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Đơn giá:</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label fs-16" id="txt-price"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Tổng giá tiền</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label" id="txt-totalPrice"></div>
        </div>
    </div>
</div>
<div class="justify-end d-flex">
    <a class="btn-default btn-payment" href="../account/index.html?nav=bill-pane" style="background-color: #236eff;">
        <div class="text">Quay lại</div>
    </a>
</div>
</div> */}
// Address
// : 
// "28 Đường Thi Sách, Thắng Tam, Thành phố Vũng Tầu, Bà Rịa - Vũng Tàu"
// Area
// : 
// "Bà Rịa - Vũng Tàu"
// Check_in
// : 
// "2023-12-05 00:00:00"
// Check_out
// : 
// "2023-12-05 00:00:00"
// Hotel_id
// : 
// "MH-TSVT"
// Id
// : 
// "MH-TSVT"
// Invoice_id
// : 
// "I656c41bcb3de1"
// Max
// : 
// "1"
// Name
// : 
// "Milan Homestay - The Song Vung Tau"
// Price
// : 
// "385400"
// Room_id
// : 
// "CHMPN267"
// State
// : 
// "Rented"
function LoadBillDetail() {
    let billId = sessionStorage.getItem("billId");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        try {
            let results = JSON.parse(this.responseText);
            let billDetail = results[0];
            console.log(billDetail);
            document.getElementById("txt-startDate").innerHTML = changeDateAndTimeFormat(billDetail.Check_in);
            document.getElementById("txt-endDate").innerHTML = changeDateAndTimeFormat(billDetail.Check_out);
            document.getElementById("txt-name").innerHTML = billDetail.Name;
            document.getElementById("txt-address").innerHTML = billDetail.Address;
            document.getElementById("txt-roomName").innerHTML = billDetail.Room_id;
            document.getElementById("txt-guestNum").innerHTML = billDetail.Max;
            document.getElementById("txt-price").innerHTML = changeMoneyFormat(billDetail.Price) + " VNĐ";
            document.getElementById("txt-totalPrice").innerHTML = changeMoneyFormat(billDetail.Price) + " VNĐ";
        } catch (err) {
            console.log(err);
        }
        }
    };
    xhttp.open(
        "GET",
        "../../server/data-controller/bill-detail/get-data.php?action=load-bill-detail-hotel&billId=" +
        billId,
        true
    );
    xhttp.send();
    }

function changeDateFormat(date) {
    let dateArr = date.split("-");
    let day = dateArr[2];
    let month = dateArr[1];
    let year = dateArr[0];
    return day + " tháng " + month + ", " + year;
}

function changeDateAndTimeFormat(dateAndTime) {
    let dateAndTimeArr = dateAndTime.split(" ");
    let date = changeDateFormat(dateAndTimeArr[0]);
    let time = dateAndTimeArr[1];
    return time + ' - ' + date;
}

function changeMoneyFormat(money) {
    //check if money is a number then convert to string
    if (typeof money == "number") {
        money = money.toString();
    }
    let moneyArr = money.split("");
    let moneyFormat = "";
    let count = 0;
    for (let i = moneyArr.length - 1; i >= 0; i--) {
        count++;
        moneyFormat = moneyArr[i] + moneyFormat;
        if (count % 3 == 0 && i != 0) {
            moneyFormat = "." + moneyFormat;
        }
    }
    return moneyFormat;
}