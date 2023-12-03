window.addEventListener("load", LoadBillDetail);
{/* <div class="container payment-window">
<div class="title border-bottom">
    <h1 class="text">Chi tiết hóa đơn</h1>
</div>
<div class="info-container flex-column border-bottom" id="payment-window__flight-info">
    <div class="container row-container flex-row justify-between">
        <div class="one-row-content-container content-container flex-row align-center">
            <div class="label">Địa điểm:</div>
            <div class="text" id="txt-location">TP Hồ Chí Minh</div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Ngày bắt đầu:</div>
            <div class="text" id="txt-startDate">16 tháng 12, 2023</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Giờ bắt đầu:</div>
            <div class="text" id="txt-startTime">00:00</div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Ngày kết thúc:</div>
            <div class="text" id="txt-endDate">18 tháng 12, 2023</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Giờ kết thúc:</div>
            <div class="text" id="txt-endTime">22:00</div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Tên hãng:</div>
            <div class="text" id="txt-brand">Hyundai Grand i10</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Loại xe:</div>
            <div class="text" id="txt-taxiType">Không có tài xế</div>
        </div>
    </div>
</div>
<div class="info-container flex-column" id="payment-window__price-info">
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Đơn giá:</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label fs-16" id="txt-price">589.280 VND /ngày</div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Tổng giá tiền:</div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label" id="txt-totalPrice">11.100.000 VND</div>
        </div>
    </div>
</div>
<div class="justify-end d-flex">
    <a class="btn-default btn-payment" href="../account/index.html?nav=bill-pane" style="background-color: #236eff;">
        <div class="text">Quay lại</div>
    </a>
</div>
</div> */}
function LoadBillDetail() {
    let billId = sessionStorage.getItem("billId");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        try {
            let results = JSON.parse(this.responseText);
            let billDetail = results[0];
            console.log(billDetail);
            document.getElementById("txt-location").innerHTML = billDetail.PickPoint;
            document.getElementById("txt-startDate").innerHTML = changeDateFormat(billDetail.DepartureDay);
            document.getElementById("txt-startTime").innerHTML = billDetail.TimeStart;
            document.getElementById("txt-endDate").innerHTML = changeDateFormat(billDetail.ArrivalTime);
            document.getElementById("txt-endTime").innerHTML = billDetail.TimeEnd;
            document.getElementById("txt-brand").innerHTML = billDetail.Name;
            document.getElementById("txt-taxiType").innerHTML = billDetail.Type;
            document.getElementById("txt-price").innerHTML = changeMoneyFormat(billDetail.Price) + " VND /ngày";
            document.getElementById("txt-totalPrice").innerHTML = changeMoneyFormat(billDetail.Price) + " VND";

        } catch (err) {
            console.log(err);
        }
        }
    };
    xhttp.open(
        "GET",
        "../../server/data-controller/bill-detail/get-data.php?action=load-bill-detail-transfer&billId=" +
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