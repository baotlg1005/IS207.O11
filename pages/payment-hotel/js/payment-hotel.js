let HotelSearchInfo;

if (sessionStorage.getItem("HotelSearchInfo")) {
    HotelSearchInfo = JSON.parse(sessionStorage.getItem("HotelSearchInfo"))
}

let hotelPaymentInfo;

if (sessionStorage.getItem("hotelPaymentInfo")) {
    hotelPaymentInfo = JSON.parse(sessionStorage.getItem("hotelPaymentInfo"))
    console.log(hotelPaymentInfo);
}

window.addEventListener('load', () => {
    document.getElementById("txt-startDate").innerText = changeDateFormat(HotelSearchInfo.checkinDate);
    document.getElementById("txt-endDate").innerText = changeDateFormat(HotelSearchInfo.checkoutDate);
    document.getElementById("txt-guestNum").innerText = hotelPaymentInfo.guestNum;
    document.getElementById("txt-name").innerText = hotelPaymentInfo.hotelName;
    document.getElementById("txt-address").innerText = hotelPaymentInfo.hotelAddress;
    document.getElementById("txt-price").innerText = changeMoneyFormat(hotelPaymentInfo.price) + ' VND';
    document.getElementById("txt-totalPrice").innerText = changeMoneyFormat(calculateTotalPrice()) + ' VND';

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let roomInfo = JSON.parse(this.responseText);
            document.getElementById("txt-roomName").innerHTML = roomInfo.Name;
        }
    };

    xhttp.open("GET", "../../server/data-controller/payment-hotel/get-data.php?action=load&roomID=" + hotelPaymentInfo.ID, true);
    xhttp.send();
});

const btnPayment = document.querySelector(".btn-payment");


btnPayment.addEventListener("click", function () { 
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
        };
    };
    xhttp.open("POST", "../../server/data-controller/payment-hotel/post-data.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`action=payment&roomID=${hotelPaymentInfo.ID}&checkIn=${HotelSearchInfo.checkinDate}&checkOut=${HotelSearchInfo.checkoutDate}&totalPrice=${calculateTotalPrice()}`);
});

function calculateTotalPrice() {
    let startDate = new Date(HotelSearchInfo.checkinDate);
    let endDate = new Date(HotelSearchInfo.checkoutDate);
    let totalDate = (endDate - startDate) / (1000 * 60 * 60 * 24);
    let totalprice;
    if (totalDate == 0) {
        totalprice = hotelPaymentInfo.price;
    }
    else {
        totalprice = totalDate * hotelPaymentInfo.price;
    }

    return totalprice;
}

function changeMoneyFormat(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function changeDateFormat(date) {
    let dateArray = date.split('-');
    let day = dateArray[2];
    let month = dateArray[1];
    let year = dateArray[0];
    let monthArray = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4',
        'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8',
        'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
    return `${day}, ${monthArray[month - 1]}, ${year}`;
}