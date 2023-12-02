const userId = getCookie("userId");

const billContainer = document.getElementById("bill-container");

window.addEventListener("load", LoadBill);

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function LoadBill() {
    console.log("Load Bill");

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let results = JSON.parse(this.responseText);
        console.log("result" + results);
      } catch (err) {
        console.log("Không tìm thấy kết quả phù hợp")
        billContainer.innerHTML=
        `<div class="no-result-text">Không tìm thấy kết quả phù hợp</div>`
        btnShowMore.style.display = 'none';
      }
    }
    xhttp.open(
      "GET",
      "../../server/data-controller/account/get-data.php?action=loadBill&userId=",
      true
    );
  };
}

function createFlightBill(billInfo) {
  return `
    <div class="cart-item flight-paid-bill">
        <div class="item-label">
            <div class="item-title-container"> <ion-icon name="airplane-outline"></ion-icon>
                <div class="item-title">
                    Vé máy bay
                </div>
            </div>
            <div class="item-text flight-paid-bill-name">VietJet Air</div>
            <div class="item-text flight-paid-bill-location">
                <div class="item-text flight-paid-bill-fromlocation">
                    TP HCM
                </div>
                <ion-icon name="arrow-forward-outline"></ion-icon>
                <div class="item-text flight-paid-bill-tolocation">
                    Hà Nội
                </div>
            </div>

            <div class="item-text flight-paid-bill-date">CN, 30 thng 11, 2025, 06:20</div>
            <div class="item-text flight-paid-bill-airport">Sân bay quốc tế Tân Sơn Nhất, Nhà ga 1</div>
        </div>
        <div class="item-actions">
            <div class="item-title-container" style="justify-content: right;">
                <div class="item-title flight-paid-bill-price" style="color: #FF5E1F;">
                    5.000.000 VNĐ
                </div>
                <div class="item-text">Đã thanh toán</div>
            </div>
            <button class="btn-default flight-paid-bill-pay-btn" type="button">
                <div class="text">Chi tiết</div>
            </button>
        </div>
    </div>
    `;
}

function createHotelBill(billInfo) {
  return `
    <div class="cart-item hotel-paid-bill">
        <div class="item-label">
            <div class="item-title-container"> <ion-icon name="business-outline"></ion-icon>
                <div class="item-title">
                    Phòng khách sạn
                </div>
            </div>
            <div class="item-text hotel-paid-bill-name">Davue Hotel Da Nang</div>
            <div class="item-text hotel-paid-bill-address">
                57-59 Đỗ Bí, Mỹ An, Ngũ Hành Sơn, Đà Nẵng, Việt Nam, 550000
            </div>
            <div class="item-text hotel-paid-bill-checkin">Từ: CN, 30 thng 11, 2025, 06:20</div>
            <div class="item-text hotel-paid-bill-checkout">Đến: T2, 31 thng 11, 2025, 06:20</div>
        </div>
        <div class="item-actions">
            <div class="item-title-container" style="justify-content: right;">
                <div class="item-title hotel-paid-bill-price" style="color: #FF5E1F;">
                    5.000.000 VNĐ
                </div>
                <div class="item-text">Đã thanh toán</div>
            </div>
            <button class="btn-default hotel-paid-bill-pay-btn" type="button">
                <div class="text">Chi tiết</div>
            </button>
        </div>
    </div>
    `;
}

function createBusBill(billInfo) {
  return `
    <div class="cart-item bus-paid-bill">
        <div class="item-label">
            <div class="item-title-container"> <ion-icon name="bus-outline"></ion-icon>
                <div class="item-title">
                    Vé xe khách
                </div>
            </div>
            <div class="item-text bus-paid-bill-name">Phương Trang</div>
            <div class="item-text bus-paid-bill-location">
                <div class="item-text bus-paid-bill-fromlocation">
                    TP HCM
                </div>
                <ion-icon name="arrow-forward-outline"></ion-icon>
                <div class="item-text bus-paid-bill-tolocation">
                    Hà Nội
                </div>
            </div>

            <div class="item-text bus-paid-bill-date">CN, 30 thng 11, 2025, 06:20</div>
            <div class="item-text bus-paid-bill-address">Bến xe Miền Tây</div>
        </div>
        <div class="item-actions">
            <div class="item-title-container" style="justify-content: right;">
                <div class="item-title bus-paid-bill-price" style="color: #FF5E1F;">
                    5.000.000 VNĐ
                </div>
                <div class="item-text">Đã thanh toán</div>
            </div>
            <button class="btn-default bus-paid-bill-pay-btn" type="button">
                <div class="text">Chi tiết</div>
            </button>
        </div>
    </div>                  
    `;
}

function createCarBill(billInfo) {
  return `
    <div class="cart-item car-paid-bill">
        <div class="item-label">
            <div class="item-title-container"> <ion-icon name="car-outline"></ion-icon>
                <div class="item-title">
                    Xe dịch vụ
                </div>
            </div>
            <div class="item-text car-paid-bill-name">TOYOTA</div>
            <div class="item-text car-paid-bill-type">Có tài xế</div>
            <div class="item-text car-paid-bill-date">CN, 30 thng 11, 2025, 06:20</div>
            <div class="item-text car-paid-bill-location">Sân bay quốc tế Tân Sơn Nhất, Nhà ga 1</div>
        </div>
        <div class="item-actions">
            <div class="item-title-container" style="justify-content: right;">
                <div class="item-title car-paid-bill-price" style="color: #FF5E1F;">
                    5.000.000 VNĐ
                </div>
                <div class="item-text">Đã thanh toán</div>
            </div>
            <button class="btn-default car-paid-bill-pay-btn" type="button">
                <div class="text">Chi tiết</div>
            </button>
        </div>
    </div>
    `;
}
