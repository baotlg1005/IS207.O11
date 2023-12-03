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
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let results = JSON.parse(this.responseText);
        for (let i = 0; i < results.length; i++) {
            CreateBillHTML(results[i]);
        }
      } catch (err) {
        billContainer.innerHTML = `<div class="no-result-text">Không có hoá đơn</div>`;
      }
    }
  };
  xhttp.open(
    "GET",
    "../../server/data-controller/account/get-data.php?action=load-bill&userId=" +
      userId,
    true
  );
  xhttp.send();
}

async function CreateBillHTML(billInfo){
    GetBillId(billInfo.Id)
        .then((billId) => {
            let type = billId.slice(0, 2);
            let title;
            let iconName;
            let detailHref;
            switch (type) {
                case 'FI':
                    title = 'Vé máy bay';
                    iconName = 'airplane';
                    detailHref = `../bill-detail-flight/index.html`;
                    break;
                case 'BI':
                    title = 'Vé xe khách';
                    iconName = 'bus';
                    detailHref = `../bill-detail-bus/index.html`;
                    break;
                case 'TI':
                    title = 'Xe dịch vụ';
                    iconName = 'car';
                    detailHref = `../bill-detail-transfer/index.html`;
                    break;
                default:
                    return;
            }

            billContainer.innerHTML += `
            <div class="bill-item">
                <div class="left-label">
                    <div class="bill-type">
                        <ion-icon name="${iconName}"></ion-icon>
                        <div class="text">
                            ${title}
                        </div>
                    </div>
                    <div class="bill-id">
                        <div class="text">
                            Mã giao dịch:
                        </div>
                        <div class="id-text">
                            ${billId}
                        </div>
                    </div>
                </div>
                <div class="right-label">
                    <div class="bill-price">
                        <div class="text">
                            ${NumberToVND(billInfo.Total)} VND
                        </div>
                    </div>
                    <div class="bill-status">
                        <div class="text">
                            Đã thanh toán
                        </div>
                    </div>
                    <a class="btn-default detail-btn" href="${detailHref}"   
                    onclick="sessionStorage.setItem('billId', '${billId}');">
                        <div class="text">Chi tiết</div>
                    </a>
                </div>
            </div>
            `;
        });
}

async function GetBillId(id){
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            try {
              let results = this.responseText;
              resolve(results);
            } catch (err) {
              reject(err);
            }
          }
        };
        xhttp.open(
          "GET",
          "../../server/data-controller/account/get-data.php?action=get-bill-id&id=" +
            id,
          true
        );
        xhttp.send();
      });
}

function NumberToVND(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}