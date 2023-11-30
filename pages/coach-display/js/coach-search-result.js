let sortType = "Giá thấp nhất";
const sortContainer = document.getElementById("sort-container");
const sortValueSelect = document.getElementById("sort-value-select");
const sortTypeDropdown = document.getElementById("sort-type-dropdown");
const sortTypeItem = sortTypeDropdown.querySelectorAll(".sort-type-item");
const searchBarDeparture = document.getElementById("search-bar-departure");
const searchBarArrival = document.getElementById("search-bar-arrival");
const searchBarDate = document.getElementById("search-bar-date");
const searchBarPassenger = document.getElementById("search-bar-passenger");
const btnShowMore = document.getElementById("btn-showMore");
let imgs = []
let pageLimit = 11;
let action = "Giá thấp nhất"

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
    action = sortType;
    console.log(action);
    getData();
  });
});

function changeMoneyFormat(money) {
    console.log(money);
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
btnShowMore.addEventListener("click", (e) => {
    pageLimit += 10;
    getData();
})
function createResultItem(data){

    // let link = 'https://ik.imagekit.io/tvlk/image/imageResource/2021/11/18/1637208308735-14c75db4b125d8cc4a19d7b6f6906e96.jpeg?tr=q-75,w-140';
    // for (let item of imgs){
    //     if (data.Name.indexOf(item.img_name) > -1){
    //         link = item.img_src
    //         break
    //     }
    // }
    document.getElementById("list-item").innerHTML+=
    `<div class="bus-book__BusItem">
    <div class="bus-book__BusBrand">
      <div class="text">${data.Name}</div>
    </div>
    <div class="bus-book__Place_Time_Price">
      <div class="bus-book__Depature_Info">
        <div class="bus-book__Start_Time">${data.DepartureTime}</div>
        <div class="bus-book__Start_Place">${data.PickPoint}</div>
      </div>
      <div class="icon">
        <img class="vector6" alt="" src="./public/external/coach-vector6.svg" />
      </div>
      <div class="bus-book__Arrival_Info">
        <div class="bus-book__Arrival_Time">${data.ArrivalTime}</div>
        <div class="bus-book__Arrival_Place">${data.DesPoint}</div>
      </div>
      <div class="bus-book__Duration">
        <div class="time">${data.TravelTime}</div>
      </div>
      <div class="bus-book__Price">
        <div class="price">${changeMoneyFormat(data.Price)}</div>
        <div class="units">/khách</div>
      </div>
    </div>
    <div class="bus-book__Detail_Payment">
      <div class="navigation-item">
        <b class="text">Chi tiết</b>
      </div>
      <div class="bus-book__Payment">
        <a class="payment" href="../payment">Chọn</a>
      </div>
    </div>
  </div>`
}


 
let CoachSearchInfo;
function getData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        try{
        console.log(this.responseText);
        let searchResults = JSON.parse(this.responseText);
        // if (searchResults.length > 0) {
            document.getElementById("list-item").innerHTML = " ";
            searchResults.forEach(item=>{
                createResultItem(item)
            })
        }
        catch(e){
            console.log("Không tìm thấy kết quả phù hợp")
            document.getElementById("result-container").innerHTML=
            `<div class="title">Không tìm thấy kết quả phù hợp</div>`
            btnShowMore.style.display = 'none';
        }
        }
      }
    xhttp.open("POST", "../../server/data-controller/coach/get-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=${action}&pageLimit=${pageLimit}&departure=${CoachSearchInfo.departure}&destination=${CoachSearchInfo.destination}&departureDate=${CoachSearchInfo.departureDate}&passengerQuantity=${CoachSearchInfo.passengerQuantity}`)
}

window.onload = function (e) {
    //check if session storage flightSearchInfo is exist
    if (sessionStorage.getItem("CoachSearchInfo")) {
        CoachSearchInfo = JSON.parse(sessionStorage.getItem("CoachSearchInfo"))
        console.log(CoachSearchInfo)
        console.log(action)
        getData()
        searchBarDeparture.innerText = CoachSearchInfo.departure;
        searchBarArrival.innerText = CoachSearchInfo.destination;
        searchBarDate.innerText = changeDateFormat(CoachSearchInfo.departureDate);
        searchBarPassenger.innerText = CoachSearchInfo.passengerQuantity+' vé';                                                                                                   
    //   searchInfoDescription.innerText = transferSearchInfo.location+' • '+transferSearchInfo.startDate+' '+transferSearchInfo.startTime+' • '+transferSearchInfo.endDate+' '+transferSearchInfo.endTime
    //     if (transferSearchInfo.haveDriver){
    //         searchInfoTitle.innerHTML = `Có tài xế`
    //     }
    //     else{
    //         searchInfoTitle.innerHTML = `Tự lái`
    //     }
    }
    else{
        console.log("Không tìm thấy thông tin tìm kiếm")
    }
} 