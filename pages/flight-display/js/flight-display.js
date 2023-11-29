let sortType;
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
  pageLimit += 6;
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

if (sessionStorage.getItem("flightSearchInfo")) {
  flightSearchInfo = JSON.parse(sessionStorage.getItem("flightSearchInfo"));
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

window.onload = function (e) {
  loadResult();
}

function loadResult() {
  searchDestination.innerHTML= flightSearchInfo.oneFlightInfo.destination;
  searchDepature.innerHTML= flightSearchInfo.oneFlightInfo.departure;
  searchDepartureDate.innerHTML= changeDateFormat(flightSearchInfo.oneFlightInfo.departureDate);
  searchSeatType.innerHTML= flightSearchInfo.seatType;
  searchPassenger.innerHTML= flightSearchInfo.passengerQuantity;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let searchResults = JSON.parse(this.responseText);
      if (searchResults.length > 0) {
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
              <a class="btn-default select-btn" href="../payment-flight/index.html">
                  <div class="text">Chọn</div>
              </a>
            </div>
          </div>
            `
        }
      }
      else {
        document.getElementById("result-container").innerHTML += "0 results";
      }
    }
  };
  xhttp.open("POST", "../../server/data-controller/flight/get-data.php", true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`action=load&pageLimit=${pageLimit}&sortType=${sortType}&seatType=${flightSearchInfo.seatType}&departure=${flightSearchInfo.oneFlightInfo.departure}&destination=${flightSearchInfo.oneFlightInfo.destination}&departureDate=${flightSearchInfo.oneFlightInfo.departureDate}`);
}

function changeMoneyFormat(money) {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let paymentInfo = {
  flightID:"",
  ticketNumber: 0,
};

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('select-btn')) {
    let id = e.target.closest(".result-item").id;
    paymentInfo.flightID = id.replace("result-item-", "");
    sessionStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
  }
});
