let flightPaymentInfo;
let totalPrice;

const btnPayment = document.querySelector(".btn-payment");

if (sessionStorage.getItem("flightPaymentInfo")) {
    flightPaymentInfo = JSON.parse(sessionStorage.getItem("flightPaymentInfo"));
}

window.onload = function () {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let flightInfo = JSON.parse(this.responseText);
            if (flightInfo) {
                document.getElementById("payment-window__flight-info").innerHTML = "";
                document.getElementById("payment-window__price-info").innerHTML = "";
                document.getElementById("payment-window__flight-info").innerHTML += `
                    <div class="container row-container flex-row justify-between">
                    <div class="content-container flex-row align-center">
                        <div class="label">Điểm đi:</div>
                        <div class="text" id="txt-from">${flightInfo.From}</div>
                    </div>
                    <div class="content-container flex-row align-center">
                        <div class="label">Điểm đến:</div>
                        <div class="text" id="txt-to">${flightInfo.To}</div>
                    </div>
                </div>
                <div class="container row-container flex-row justify-between">
                    <div class="content-container flex-row align-center">
                        <div class="label">Ngày khởi hành:</div>
                        <div class="text" id="txt-departureDate">${changeDateFormat(flightInfo.Date)}</div>
                    </div>
                    <div class="content-container flex-row align-center">
                        <div class="label">Giờ khởi hành:</div>
                        <div class="text" id="txt-departureTime">${flightInfo.DepartureTime}</div>
                    </div>
                </div>
                <div class="container row-container flex-row justify-between">
                    <div class="content-container flex-row align-center">
                        <div class="label">Thời gian bay:</div>
                        <div class="text" id="txt-travelTime">${flightInfo.TravelTime}</div>
                    </div>
                    <div class="content-container flex-row align-center">
                        <div class="label">Giờ hạ cánh:</div>
                        <div class="text" id="txt-arrivalTime">${flightInfo.ArrivalTime}</div>
                    </div>
                </div>
                <div class="container row-container flex-row justify-between">
                    <div class="content-container flex-row align-center">
                        <div class="label">Tên hãng:</div>
                        <div class="text" id="txt-brand">${flightInfo.Name}</div>
                    </div>
                    <div class="content-container flex-row align-center">
                        <div class="label">Hạng ghế:</div>
                        <div class="text" id="txt-seatType">${flightInfo.SeatClass}</div>
                    </div>
                </div>`
                document.getElementById("payment-window__price-info").innerHTML += `
                    <div class="container row-container flex-row justify-between">
                    <div class="content-container flex-row align-center">
                        <div class="label">Số vé:</div>
                        <div class="text" id="txt-ticket">x ${flightPaymentInfo.ticketNumber}</div>
                    </div>
                    <div class="content-container flex-row align-center">
                        <div class="label fs-16" id="txt-price">${changeMoneyFormat(flightInfo.Price)} VND</div>
                    </div>
                </div>
                <div class="container row-container flex-row justify-between">
                    <div class="content-container flex-row align-center">
                        <div class="label">Tổng giá tiền</div>
                    </div>
                    <div class="content-container flex-row align-center">
                        <div class="label" id="txt-totalPrice">${changeMoneyFormat(flightInfo.Price * flightPaymentInfo.ticketNumber)} VND</div>
                    </div>
                </div>`
                totalPrice = flightInfo.Price * flightPaymentInfo.ticketNumber;
            }
            else {
                document.getElementById("payment-window__flight-info").innerHTML += "ERROR";
                document.getElementById("payment-window__price-info").innerHTML += "ERROR";
            }
        }
    };
    xhttp.open("POST", "../../server/data-controller/payment-flight/get-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=load&flightID=${flightPaymentInfo.flightID}`);
}

function changeDateFormat(date) {
    //change date format from 'yyyy-mm-dd' to 'dd, thng mm, yyyy'
    let dateArray = date.split('-');
    let day = dateArray[2];
    let month = dateArray[1];
    let year = dateArray[0];
    let monthArray = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4',
        'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8',
        'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
    return `${day}, ${monthArray[month - 1]}, ${year}`;
}

function changeMoneyFormat(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

btnPayment.addEventListener("click", function () { 
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Payment success");
        }
    };
    xhttp.open("POST", "../../server/data-controller/payment-flight/post-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=payment&totalPrice=${totalPrice}&flightID=${flightPaymentInfo.flightID}&ticketNum=${flightPaymentInfo.ticketNumber}`);
})