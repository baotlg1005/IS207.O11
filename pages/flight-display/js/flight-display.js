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


var flightSearchInfo = JSON.parse(sessionStorage.flightSearchInfo);

console.log(flightSearchInfo);