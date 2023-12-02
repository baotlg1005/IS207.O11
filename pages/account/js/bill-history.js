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
        let prom = []
        for (let i = 0; i < results.length; i++) {
            prom.push(GetBillId(results[i].Id));
        }
        Promise.all(prom).then((billIds) => {
            for (let i = 0; i < results.length; i++) {
                let type = billIds[i].slice(0, 2);
                let billInfo;
                switch (type) {
                    case 'FI':
                        console.log('flight');      
                        let prom = GetFlightBillInfo(billIds[i]);
                        prom.then((billInfo) => {
                        });
                        break;
                    case 'TI':
                        console.log('taxi');
                        break;
                    case 'BI':
                        console.log('coach');
                        break;
                    default:
                        continue;
                }
            }
        });
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

function GetBillId(billId){
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
          "../../server/data-controller/account/get-data.php?action=get-bill-id&billId=" + billId,
          true
        );
        xhttp.send();
      });
}