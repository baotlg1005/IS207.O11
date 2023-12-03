window.addEventListener("load", LoadBillDetail);
{/* <div class="container payment-window">
<div class="title border-bottom">
    <h1 class="text">Chi tiết hóa đơn</h1>
</div>
<div class="info-container flex-column border-bottom" id="payment-window__flight-info">
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Điểm đi:</div>
            <div class="text" id="txt-from"></div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Điểm đến:</div>
            <div class="text" id="txt-to"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Điểm lên xe:</div>
            <div class="text" id="txt-pickPoint"></div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Điểm xuống xe:</div>
            <div class="text" id="txt-desPoint"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Ngày khởi hành:</div>
            <div class="text" id="txt-departureDate"></div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Giờ khởi hành:</div>
            <div class="text" id="txt-departureTime"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Thời gian di chuyển:</div>
            <div class="text" id="txt-travelTime"></div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Giờ đến:</div>
            <div class="text" id="txt-arrivalTime"></div>
        </div>
    </div>
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Tên nhà xe:</div>
            <div class="text" id="txt-brand"></div>
        </div>
        <div class="content-container flex-row align-center">
            <div class="label">Loại xe:</div>
            <div class="text" id="txt-busType"></div>
        </div>
    </div>
</div>
<div class="info-container flex-column" id="payment-window__price-info">
    <div class="container row-container flex-row justify-between">
        <div class="content-container flex-row align-center">
            <div class="label">Số vé:</div>
            <div class="text" id="txt-ticket"></div>
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
function LoadBillDetail() {
    let billId = sessionStorage.getItem("billId");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        try {
            let results = JSON.parse(this.responseText);
            let billDetail = results[0];
            document.getElementById("txt-from").innerHTML = billDetail.From;
            document.getElementById("txt-to").innerHTML = billDetail.To;
            document.getElementById("txt-pickPoint").innerHTML = billDetail.PickPoint;
            document.getElementById("txt-desPoint").innerHTML = billDetail.DesPoint;
            document.getElementById("txt-departureDate").innerHTML = changeDateFormat(billDetail.Date);
            document.getElementById("txt-departureTime").innerHTML = billDetail.DepartureTime;
            document.getElementById("txt-travelTime").innerHTML = billDetail.TravelTime;
            document.getElementById("txt-arrivalTime").innerHTML = billDetail.ArrivalTime;
            document.getElementById("txt-brand").innerHTML = billDetail.Name;
            document.getElementById("txt-busType").innerHTML = billDetail.SeatCount;
            document.getElementById("txt-ticket").innerHTML = 'x' + billDetail.Num_ticket;
            document.getElementById("txt-price").innerHTML = changeMoneyFormat(billDetail.Price) + " VND";
            document.getElementById("txt-totalPrice").innerHTML = changeMoneyFormat(+billDetail.Price * +billDetail.Num_ticket) + " VND";


        } catch (err) {
            console.log(err);
        }
        }
    };
    xhttp.open(
        "GET",
        "../../server/data-controller/bill-detail/get-data.php?action=load-bill-detail-bus&billId=" +
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