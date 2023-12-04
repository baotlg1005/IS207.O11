let sortType = "Giá thấp nhất";
let pageLimit = 11;

const sortContainer = document.getElementById("sort-container");
const sortValueSelect = document.getElementById("sort-value-select");
const sortTypeDropdown = document.getElementById("sort-type-dropdown");
const sortTypeItem = sortTypeDropdown.querySelectorAll(".sort-type-item");
const btnShowMore = document.getElementById("btn-showMore");
const searchInfoBlock = document.querySelector(".search-info-block");
const searchDepature = searchInfoBlock.querySelector(".departure .text");
const searchDestination = searchInfoBlock.querySelector(".destination .text");
const searchDepartureDate = searchInfoBlock.querySelector(".date .text");
const searchSeatType = searchInfoBlock.querySelector(".seat-type .text");
const searchPassenger = searchInfoBlock.querySelector(".passenger-quantity .text");

sortType = sortTypeDropdown
  .querySelector(".sort-type-item.select")
  .querySelector(".text").innerText;

const sortTypeValue = document.getElementById("sort-type-value");

sortValueSelect.addEventListener("click", (e) => {
  //check if click on dropdown then return
  if (e.target.closest("#sort-type-dropdown")) return;
  sortContainer.classList.toggle("show-dropdown");
});

sortTypeItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    sortTypeDropdown
      .querySelector(".sort-type-item.select")
      .classList.remove("select");
    item.classList.add("select");
    sortTypeValue.innerText = item.querySelector(".text").innerText;
    sortType = sortTypeValue.innerText;
    loadResult();
  });
});

btnShowMore.addEventListener("click", (e) => {
  pageLimit += 10;
  loadResult();
})


const resultContainer = document.getElementById("result-container");
const resultItemTemplate = document.getElementById("result-item-template");

function createResultItem(data) {
  const resultItem = resultItemTemplate.cloneNode(true);
  resultItem.id = resultItem.id.replace("template", data.id);
  resultItem.classList.add("result-item");
  resultItem.querySelector(".plane-name .text").innerText = data.planeName;
  resultItem.querySelector(".departure .time").innerText =
    data.departureTime;
  resultItem.querySelector(".departure .location").innerText =
    data.departureLocation;
  resultItem.querySelector(".destination .time").innerText =
    data.destinationTime;
  resultItem.querySelector(".destination .location").innerText =
    data.destinationLocation;
  resultItem.querySelector(".price .price-text").innerText = data.price + ' VND';
  return resultItem;
}

let flightSearchInfo;
let numOfSeat

if (sessionStorage.getItem("flightSearchInfo")) {
  flightSearchInfo = JSON.parse(sessionStorage.getItem("flightSearchInfo"));
  numOfSeat = flightSearchInfo.passengerQuantity.adult + flightSearchInfo.passengerQuantity.child + flightSearchInfo.passengerQuantity.baby;
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

window.onload = function () {
  searchDestination.innerHTML = flightSearchInfo.oneFlightInfo.destination;
  searchDepature.innerHTML = flightSearchInfo.oneFlightInfo.departure;
  searchDepartureDate.innerHTML = changeDateFormat(flightSearchInfo.oneFlightInfo.departureDate);
  if (flightSearchInfo.seatType == 'economy') {
    searchSeatType.innerHTML = 'Phổ thông';
  }
  else if (flightSearchInfo.seatType == 'business') {
    searchSeatType.innerHTML = 'Thương gia';
  }
  searchPassenger.innerHTML = (flightSearchInfo.passengerQuantity.adult + flightSearchInfo.passengerQuantity.child + flightSearchInfo.passengerQuantity.baby) + " hành khách";
  sortType = "Giá thấp nhất";
  loadResult();
}

function loadResult() {
  searchDestination.innerHTML = flightSearchInfo.oneFlightInfo.destination;
  searchDepature.innerHTML = flightSearchInfo.oneFlightInfo.departure;
  searchDepartureDate.innerHTML = changeDateFormat(flightSearchInfo.oneFlightInfo.departureDate);
  if (flightSearchInfo.seatType == 'economy') {
    searchSeatType.innerHTML = 'Phổ thông';
  }
  else if (flightSearchInfo.seatType == 'business') {
    searchSeatType.innerHTML = 'Thương gia';
  }
  searchPassenger.innerHTML = (flightSearchInfo.passengerQuantity.adult + flightSearchInfo.passengerQuantity.child + flightSearchInfo.passengerQuantity.baby) + " hành khách";

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let searchResults = JSON.parse(this.responseText);
        document.getElementById("result-container").innerHTML = " ";
        for (let i = 0; i < searchResults.length; i++) {
          document.getElementById("result-container").innerHTML += `
          <div id="result-item-${searchResults[i].ID}" class="result-item">
            <div class="row">
              <div class="plane-name">
                  <ion-icon name="airplane"></ion-icon> 
                  <div class="text">${searchResults[i].Name}</div>
              </div>
              <div class="time-and-location">
                  <div class="departure">
                      <div class="time">${searchResults[i].DepartureTime}</div>
                      <div class="location">${searchResults[i].From}</div>
                  </div>
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                  <div class="destination">
                      <div class="time">${searchResults[i].ArrivalTime}</div>
                      <div class="location">${searchResults[i].To}</div>
                  </div>
              </div>
              <div class="price">
                  <div class="price-text">${changeMoneyFormat(searchResults[i].Price)} VND</div>
                  <div class="text">/khách</div>
              </div>
            </div>
            <div class="row">
              <div class="btn-default select-btn">
                  <div class="text">Chọn</div>
              </div>
            </div>
          </div>`
        }
        btnShowMore.classList.remove("hide");
      }
      catch (err) {
        document.getElementById("result-container").innerHTML =
          `<div class="title">Không tìm thấy kết quả phù hợp</div>`
        btnShowMore.classList.add("hide");
      }
    }
  };
  xhttp.open("POST", "../../server/data-controller/flight/get-data.php", true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`action=load&pageLimit=${pageLimit}&sortType=${sortType}&seatType=${flightSearchInfo.seatType}&departure=${flightSearchInfo.oneFlightInfo.departure}&destination=${flightSearchInfo.oneFlightInfo.destination}&departureDate=${flightSearchInfo.oneFlightInfo.departureDate}&numOfSeat=${numOfSeat}`);
}

function changeMoneyFormat(money) {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let flightPaymentInfo = {
  flightID: "",
  ticketNumber: 0,
};

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

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('select-btn')) {
    const userId = getCookie("userId");
    if (!userId) {
        window.location.href = "../login"
        return;
    }
    const userAuth = getCookie("userAuth");
    if (userAuth == "false") {
        window.location.href = "../account"
        return;
    }
      let id = e.target.closest(".result-item").id;
      flightPaymentInfo.flightID = id.substring(12);
      flightPaymentInfo.ticketNumber = flightSearchInfo.passengerQuantity.adult + flightSearchInfo.passengerQuantity.child + flightSearchInfo.passengerQuantity.baby;
      sessionStorage.setItem("flightPaymentInfo", JSON.stringify(flightPaymentInfo));
      window.location.href = "../payment-flight";
  }
});
