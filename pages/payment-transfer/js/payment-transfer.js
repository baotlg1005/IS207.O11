let transferSearchInfo;

if (sessionStorage.getItem("transferSearchInfo")) {
    transferSearchInfo = JSON.parse(sessionStorage.getItem("transferSearchInfo"))

    // console.log(transferSearchInfo);
}

let transferPaymentInfo;

if (sessionStorage.getItem("transferPaymentInfo")) {
    transferPaymentInfo = JSON.parse(sessionStorage.getItem("transferPaymentInfo"))

    console.log(transferPaymentInfo);
}

window.addEventListener("load", () => {
    document.getElementById("txt-brand").innerHTML = transferPaymentInfo.name;
    document.getElementById("txt-location").innerHTML = transferSearchInfo.location;
    document.getElementById("txt-startDate").innerHTML = changeDateFormat(transferSearchInfo.startDate);
    document.getElementById("txt-startTime").innerHTML = transferSearchInfo.startTime;
    document.getElementById("txt-endDate").innerHTML = changeDateFormat(transferSearchInfo.endDate);
    document.getElementById("txt-endTime").innerHTML = transferSearchInfo.endTime;
    if (transferSearchInfo.haveDriver) {
        document.getElementById("txt-taxiType").innerHTML = "Có tài xế";
    }
    else {
        document.getElementById("txt-taxiType").innerHTML = "Tự lái";
    }
    document.getElementById("txt-price").innerHTML = changeMoneyFormat(transferPaymentInfo.price) + ' VND /ngày';
    document.getElementById("txt-totalPrice").innerHTML =
        changeMoneyFormat(
            calculateTotalDate(
                transferSearchInfo.startDate, transferSearchInfo.endDate, transferSearchInfo.startTime, transferSearchInfo.endTime)
            * transferPaymentInfo.price) + ' VND';

})

function changeDateFormat(date) {
    let dateArray = date.split('-');
    let day = dateArray[2];
    let month = dateArray[1];
    let year = dateArray[0];
    let monthArray = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4',
        'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8',
        'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
    return `${day} ${monthArray[month - 1]}, ${year}`;
}

function changeMoneyFormat(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculateTotalDate(startDate, endDate, startTime, endTime) {
    let totalDate = 0;
    let startDateArray = startDate.split('-');
    let endDateArray = endDate.split('-');
    let startTimeArray = startTime.split(':');
    let endTimeArray = endTime.split(':');
    let startDateObj = new Date(startDateArray[0], startDateArray[1], startDateArray[2], startTimeArray[0], startTimeArray[1]);
    let endDateObj = new Date(endDateArray[0], endDateArray[1], endDateArray[2], endTimeArray[0], endTimeArray[1]);
    let timeDiff = endDateObj.getTime() - startDateObj.getTime();
    totalDate = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return totalDate;
}

const btnPayment = document.querySelector(".btn-payment");

let totalPrice = calculateTotalDate(
    transferSearchInfo.startDate, transferSearchInfo.endDate, transferSearchInfo.startTime, transferSearchInfo.endTime)
    * transferPaymentInfo.price;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

btnPayment.addEventListener("click", function () {
    let userId = getCookie("userId");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);
            if (result == "success") {
                alert("Thanh toán thành công!");
                window.location.href = "../account/index.html?nav=bill-pane";
            }
            else {
                alert("Thanh toán thất bại!");
                window.location.href = "../main/index.html";
            }
        }
    };
    xhttp.open("POST", "../../server/data-controller/payment-transfer/post-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("action=payment"
        + "&userID=" + userId
        + "&taxiID=" + transferPaymentInfo.transferID
        + "&startDate=" + transferSearchInfo.startDate
        + "&startTime=" + transferSearchInfo.startTime
        + "&endDate=" + transferSearchInfo.endDate
        + "&endTime=" + transferSearchInfo.endTime
        + "&totalPrice=" + totalPrice);
})