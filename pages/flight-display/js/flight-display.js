let sortType;

const sortContainer = document.getElementById("sort-container");
const sortValueSelect = document.getElementById("sort-value-select");
const sortTypeDropdown = document.getElementById("sort-type-dropdown");
const sortTypeItem = sortTypeDropdown.querySelectorAll(".sort-type-item");

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
    console.log(sortType);
  });
});

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

resultContainer.appendChild(
  createResultItem({
    id: 1,
    planeName: "Vietjet Air",
    departureTime: "10:00",
    departureLocation: "Hà Nội",
    destinationTime: "11:00",
    destinationLocation: "Đà Nẵng",
    price: "1.000.000",
  })
);
let flightSearchInfo;
//check if session storage flightSearchInfo is exist
if (sessionStorage.getItem("flightSearchInfo")) {
  flightSearchInfo = JSON.parse(sessionStorage.getItem("flightSearchInfo"));
  //get data from session storage

}

window.onload = function (e) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let searchResults = JSON.parse(this.responseText);
      if (searchResults.length > 0) {
        document.getElementById("result-container").innerHTML = " ";
        let maxLength = searchResults.length>10?10:searchResults.length;
        for (let i = 0; i < maxLength; i++) {
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
                  <div class="price-text">${searchResults[i].Price} VND</div>
                  <div class="text">/khách</div>
              </div>
            </div>
            <div class="row">
              <div class="btn-default select-btn">
                  <div class="text">Chọn</div>
              </div>
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
  xhttp.send(`action=showresult&seatType=${flightSearchInfo.seatType}&departure=${flightSearchInfo.oneFlightInfo.departure}&destination=${flightSearchInfo.oneFlightInfo.destination}&departureDate=${flightSearchInfo.oneFlightInfo.departureDate}&haveReturn=${flightSearchInfo.oneFlightInfo.haveReturn}&returnDate=${flightSearchInfo.oneFlightInfo.returnDate}`);
}
