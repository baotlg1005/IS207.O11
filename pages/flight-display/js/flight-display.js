let sortType;

const sortContainer = document.getElementById("sort-container");
const sortTypeDropdown = document.getElementById("sort-type-dropdown");
const sortTypeItem = sortTypeDropdown.querySelectorAll(".sort-type-item");

sortType = sortTypeDropdown
  .querySelector(".sort-type-item.select")
  .querySelector(".text").innerText;

const sortTypeValue = document.getElementById("sort-type-value");

sortContainer.addEventListener("click", (e) => {
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
  resultItem.querySelector(".flight-info .departure .time").innerText =
    data.departureTime;
  resultItem.querySelector(".flight-info .departure .location").innerText =
    data.departureLocation;
  resultItem.querySelector(".flight-info .destination .time").innerText =
    data.destinationTime;
  resultItem.querySelector(".flight-info .destination .location").innerText =
    data.destinationLocation;
  resultItem.querySelector(".flight-info .price .price-text").innerText =
    data.price;
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


var flightSearchInfo = JSON.parse(sessionStorage.flightSearchInfo);

console.log(flightSearchInfo);