window.addEventListener("load", LoadBillDetail);

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