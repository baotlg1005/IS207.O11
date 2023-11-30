// // data = [{"Id": "DHDN", "Name": "Davue Hotel Da Nang", "Address": "57-59 Đỗ Bí, Mỹ An, Ngũ Hành Sơn, Đà Nẵng, Việt Nam"},
// // {"Id": "GPHDN", "Name": "Gold Plaza Hotel Da Nang", "Address": "11 Trần Thị Lý, Quận Hải Châu, Đà Nẵng, Việt Nam"},
// // {"Id": "LBH", "Name": "La Beach Hotel", "Address": "22 Lê Bình, Phước Mỹ, Sơn Trà, Đà Nẵng, Việt Nam"},
// // {"Id": "AHDN", "Name": "Alibaba Hotel Da Nang", "Address": "168 Hồ Nghinh, Phước Mỹ, Sơn Trà, Đà Nẵng, Việt Nam, 55000\nXem bản đồ"},
// // {"Id": "SH&A", "Name": "Seashore Hotel & Apartment ", "Address": "15-16 Hoàng Sa, Mân Thái, Sơn Trà, Đà Nẵng, Việt Nam"},
// // {"Id": "KsLVS", "Name": "Khách sạn La Vela Saigon", "Address": "280 đường Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, phường 8, Quận 3, Thành phố Hồ Chí Minh, Việt Nam, 70000\nXem bản đồ"}]

const AllFilerContainer = document.getElementById("all-filter-container");
const FacilitiesFilerContainer = document.getElementById("facilities-filter-container");
const AllchildNodes = AllFilerContainer.childNodes;
const FacilitieschildNodes = FacilitiesFilerContainer.childNodes;
var temp = document.getElementById("hotel-book-advance-sorting-list-id");

const FacilitySelect = document.getElementById('facilities-hotel');
const FacilitySelectQuantity = FacilitySelect.querySelector('.guest-and-room-quantity');
const FacilitySelectQuantityInfo = FacilitySelectQuantity.querySelector('.guest-and-room-quantity__info');
const FacilitySelectQuantityDropdownPanel = FacilitySelectQuantity.querySelector('.guest-and-room-quantity__dropdown-panel');
const FacilitySelectQuantityItems = FacilitySelectQuantityDropdownPanel.querySelectorAll('.dropdown-panel__item');

const location_title = document.getElementById('location');
const checkInTime = document.getElementById('checkInTime');
const numOfPass = document.getElementById('numOfPass');

for (let i = 0; i < FacilitySelectQuantityItems.length; i++)
{
    let RatingCheckBox = FacilitySelectQuantityItems[i].querySelector('.FacilitiesCBox');
    let RatingContent = FacilitySelectQuantityItems[i].querySelector('.facilities-content').innerHTML;
    RatingCheckBox.addEventListener('change', function() {
        if (this.checked) {
            temp.style.marginTop = "140px";

            let childnewElement = document.createElement('div');
            let newElement_text = document.createElement("div");
            newElement_text.textContent = RatingContent;
            childnewElement.style.border = '1px solid black';
            childnewElement.id = 'facilities-filter-container ' + i;
            childnewElement.style.width = 'auto';
            childnewElement.style.borderRadius = '10px';
            childnewElement.style.padding = '2px';
            childnewElement.style.display = 'flex';
            childnewElement.style.flexDirection = 'row';
            childnewElement.style.alignItems = "center";
            childnewElement.style.gap="5px";
            let newElement = document.createElement("ion-icon");
            newElement.name = "close-outline";
            newElement.addEventListener("click",function(){
                let remove_element = document.getElementById('facilities-filter-container ' + i);
                let parentElement = remove_element.parentNode;
                parentElement.removeChild(remove_element);
                let FacilitiesCheckBox = FacilitySelectQuantityItems[i].querySelector('.FacilitiesCBox');
                FacilitiesCheckBox.checked = false
            });
            let all_filter_container = document.getElementById("facilities-filter-container")
            all_filter_container.appendChild(childnewElement);
            childnewElement.appendChild(newElement_text);
            childnewElement.appendChild(newElement);
            FilerContainer.style.overflowY = 'visible';
        } 
        else {
            let all_filter_container = document.getElementById("facilities-filter-container")
            let existingElement = document.getElementById('facilities-filter-container ' + i)
            if (existingElement) {
                all_filter_container.removeChild(existingElement);
            }
        }
    });
}
// //guestAndRoomQuantity EVENT
const ArrowImage = FacilitySelectQuantityInfo.querySelector('.arrow-icon')
FacilitySelectQuantityInfo.addEventListener('click', () => {
    FacilitySelectQuantityDropdownPanel.classList.toggle('hide');
    let imageArrow = ArrowImage.querySelector('.drop-down-icon');
    if(imageArrow.name === "chevron-up-outline")
    {
        imageArrow.name = "chevron-down-outline";
    }
    else
        imageArrow.name = "chevron-up-outline";
});
// click outside to close dropdown panel
document.addEventListener('click', (e) => {
    if (!FacilitySelectQuantity.contains(e.target)) {
        FacilitySelectQuantityDropdownPanel.classList.add('hide');
        let imageArrow = ArrowImage.querySelector('.drop-down-icon')
        imageArrow.name = "chevron-down-outline";
    }
});


const RatingSelect = document.getElementById('rating-hotel');
const RatingSelectQuantity = RatingSelect.querySelector('.rating-hotel-quantity');
const RatingSelectQuantityInfo = RatingSelectQuantity.querySelector('.rating-hotel-quantity__info');
const RatingSelectQuantityDropdownPanel = RatingSelectQuantity.querySelector('.rating-hotel-quantity__dropdown-panel');
const RatingSelectQuantityItems = RatingSelectQuantityDropdownPanel.querySelectorAll('.dropdown-panel__item');

//guestAndRoomQuantity EVENT
const RatingArrowImage = RatingSelectQuantityInfo.querySelector('.arrow-icon')
RatingSelectQuantityInfo.addEventListener('click', () => {
    RatingSelectQuantityDropdownPanel.classList.toggle('hide');
    let imageArrow = RatingArrowImage.querySelector('.drop-down-icon');
    if(imageArrow.name === "chevron-up-outline")
    {
        imageArrow.name = "chevron-down-outline";
    }
    else
        imageArrow.name = "chevron-up-outline";
});

// click outside to close dropdown panel
document.addEventListener('click', (e) => {
    if (!RatingSelectQuantity.contains(e.target)) {
        RatingSelectQuantityDropdownPanel.classList.add('hide');
        let imageArrow = RatingArrowImage.querySelector('.drop-down-icon')
        imageArrow.name = "chevron-down-outline";
    }
});

// // add filter
for (let i = 0; i <= 4; i++)
{
    let RatingCheckBox = RatingSelectQuantityItems[i].querySelector('.CBox');
    let RatingContent = RatingSelectQuantityItems[i].querySelector('.rating-content').innerHTML;
    RatingCheckBox.addEventListener('change', function() {
        if (this.checked) {
            temp.style.marginTop = "140px";

            let childnewElement = document.createElement('div');
            let newElement_ = document.createElement('div');
            newElement_.innerHTML = RatingContent;
            childnewElement.id = 'all-filter-container ' + i;
            newElement_.style.width = '170px';
            childnewElement.style.borderRadius = '10px';
            childnewElement.style.padding = '2px';
            childnewElement.style.display = 'flex';
            childnewElement.style.flexDirection = 'row';
            childnewElement.style.alignItems = "center";
            childnewElement.style.gap="3px";
            childnewElement.appendChild(newElement_);
            let newElement = document.createElement("ion-icon");
            newElement.name = "close-outline";
            newElement.addEventListener("click",function(){
                let remove_element = document.getElementById('all-filter-container ' + i);
                let parentElement = remove_element.parentNode;
                parentElement.removeChild(remove_element);
                let FacilitiesCheckBox = RatingSelectQuantityItems[i].querySelector('.CBox');
                FacilitiesCheckBox.checked = false
            });
            childnewElement.appendChild(newElement);
            let all_filter_container = document.getElementById("all-filter-container")
            all_filter_container.appendChild(childnewElement);
        } 
        else {
            let all_filter_container = document.getElementById("all-filter-container")
            let existingElement = document.getElementById('all-filter-container ' + i)
            if (existingElement) {
                all_filter_container.removeChild(existingElement);
            }
        }
    });
}
const FilterResetBtn = document.getElementById("hotel-reset-text")
FilterResetBtn.addEventListener("click", function(){
    temp.style.marginTop = "50px";
    let container = document.getElementById('all-filter-container');
    let container_facilities = document.getElementById('facilities-filter-container');
    // Remove all child elements
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    while (container_facilities.firstChild) {
        container_facilities.removeChild(container_facilities.firstChild);
    }
    for (let i = 0; i < RatingSelectQuantityItems.length; i++)
    {
        let RatingCheckBox = RatingSelectQuantityItems[i].querySelector('.CBox');
        RatingCheckBox.checked = false;
    }
    for (let k = 0; k < FacilitySelectQuantityItems.length; k++)
    {
        let FacilitiesCheckBox = FacilitySelectQuantityItems[k].querySelector('.FacilitiesCBox');
        FacilitiesCheckBox.checked = false;
    }
});

if (AllchildNodes.length === 0 && FacilitieschildNodes.length === 0)
{
    temp.style.marginTop = "50px";
}

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1900000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
const FilterPriceBtn = document.getElementById("reset-filter");
FilterPriceBtn.addEventListener("click", function()
{
    let inputMin = document.getElementById("InputMin");
    let inputMax = document.getElementById("InputMax");
    inputMin.value = 0;
    inputMax.value = 24000000;
    rangeInput[0].value = 0;
    rangeInput[1].value = 24000000;
    range.style.left = ((0 / rangeInput[0].max) * 100) + "%";
    range.style.right = 100 - (24000000 / rangeInput[1].max) * 100 + "%";
})

// const resultContainer = document.getElementById("detail-hotel-book-list-id")
// const resultItemTemplate = document.getElementById("hotel-item-template")

// function createResultItem(data_){
//     let resultItem = resultItemTemplate.cloneNode(true)
//     // resultItem.classList.add("hotel-item");
//     resultItem.id = resultItem.id.replace("template", data_.Id)
    
//     let tempName = resultItem.querySelector(".hotel-item-info").querySelector(".hotel-item-1")
//     tempName.querySelector("#hotel-name").textContent = data_.Name

//     let tempAddress = resultItem.querySelector(".hotel-item-info").querySelector(".hotel-item-2").querySelector(".hotel-book-position-frame")
//     tempAddress.querySelector("#position-hotel").textContent = data_.Address


//     return resultItem
// }

// for (let i=0;i<data.length;i++){
//     resultContainer.appendChild(createResultItem(data[i]))
// }
imgs = [];
let pageLimit = 10; 
let action = "showResult"
fetch('../../resources/images/imgs_hotel.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    imgs = data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching and parsing JSON:', error);
  });
const btnShowMore = document.getElementById("btn-showMore");
btnShowMore.addEventListener("click", (e) => {
    pageLimit += 10;
    getData();
})
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
function createResultItem(data){

    let link1 = 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019543-67f76e17c47cc0e0d64887dc42349d7e.jpeg?_src=imagekit&tr=c-at_max,h-144,q-40,w-287'
    let link2 = 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20023314-ad8ff0eb27f6d8a8dd5bc41e4a8a10cb.jpeg?_src=imagekit&tr=h-50,q-40,w-94'
    let link3 = 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20023314-73c2dcb0f4fcb55547c1cbf4e426f85f.jpeg?_src=imagekit&tr=h-50,q-40,w-94'
    let link4 = 'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67757118-3000x2695-FIT_AND_TRIM-9e0ae1cc48ae4effc54738916dbfc0fb.jpeg?_src=imagekit&tr=h-50,q-40,w-94'
    for (let item of imgs){
        if (data.roomname.indexOf(item.img_name) > -1){
          
            link1 = item.img_src[0]
            link2 = item.img_src[1]
            link3 = item.img_src[2]
            link4 = item.img_src[3]
            console.log(link1)
            break
        }
    }
    document.getElementById("detail-hotel-book-list-id").innerHTML+=
    `<div id="hotel-item-template" class = "hotel-item">
    <div class="image-hotel-item">
      <img src='${link1}' alt="room1" class="image-hotel-item-main"> 
      <div class="image-hotel-item-sub-frame">
        <img src='${link2}' alt="room2" class="image-hotel-item-sub"> 
        <img src='${link3}' alt="room3" class="image-hotel-item-sub"> 
        <img src='${link4}' alt="room4" class="image-hotel-item-sub"> 
      </div>
    </div>
    <div class="hotel-item-info">
      <div class="hotel-item-1">
        <div id = "hotel-name" class="name-hotel-item">
            ${data.hotelname}
        </div>
        <!-- <div class="rating-hotel-item">
          <div class="hotel-rating-point" style="margin-bottom:5px">8.7</div>
          <div style="color:#687176">Ấn tượng</div>
        </div> -->
        <div class="price-hotel-item">${changeMoneyFormat(data.price)} VND</div>
      </div>
     <div class="rating-star-hotem-item">
        <ion-icon name="star" class="star" style="color:yellow"></ion-icon>
        <ion-icon name="star" class="star" style="color:yellow"></ion-icon>
        <ion-icon name="star" class="star" style="color:yellow"></ion-icon>
        <ion-icon name="star" class="star" style="color:yellow"></ion-icon>
        <ion-icon name="star" class="star" style="color:yellow"></ion-icon>
      </div> 
      <div class="hotel-item-2">
        <div class="hotel-book-position-frame">
            <ion-icon name="location-outline" style="color: black; width: 20px; height: 20px;"></ion-icon>
            <div id="position-hotel" class="hotel-book-position-text">
                  ${data.address}
            </div>
        </div>
      </div>
      <div class="selected-btn-frame">
        <a class="selected-btn" href="../payment" style="outline:none;"> Chọn phòng</a>
      </div>
    </div>
  </div>`
}

let HotelSearchInfo;
// check if session storage flightSearchInfo is exist
if (sessionStorage.getItem("HotelSearchInfo")) {
  HotelSearchInfo = JSON.parse(sessionStorage.getItem("HotelSearchInfo"))}
//   searchInfoDescription.innerText = transferSearchInfo.location+' • '+transferSearchInfo.startDate+' '+transferSearchInfo.startTime+' • '+transferSearchInfo.endDate+' '+transferSearchInfo.endTime
//     if (transferSearchInfo.haveDriver){
//         searchInfoTitle.innerHTML = `Có tài xế`
//     }
//     else{
//         searchInfoTitle.innerHTML = `Tự lái`
//     }
// }

 

function getData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        try{
        console.log(this.responseText);
        let searchResults = JSON.parse(this.responseText);
            document.getElementById("detail-hotel-book-list-id").innerHTML = " ";
            searchResults.forEach(item=>{
                createResultItem(item)
            })
          }
        catch(e){
            console.log("Không tìm thấy kết quả phù hợp")
            document.getElementById("detail-hotel-book-list-id").innerHTML=
            `<div class="title">Không tìm thấy kết quả phù hợp</div>`
            btnShowMore.style.display = 'none';
        }
        }
      }
    xhttp.open("POST", "../../server/data-controller/hotel/get-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=${action}&pageLimit=${pageLimit}&location=${HotelSearchInfo.location}&checkinDate=${HotelSearchInfo.checkinDate}&checkoutDate=${HotelSearchInfo.checkoutDate}&adultQuantity=${HotelSearchInfo.adultQuantity}&childQuantity=${HotelSearchInfo.childQuantity}&roomQuantity=${HotelSearchInfo.roomQuantity}`)
}

window.onload = function (e) {
    location_title.innerText = HotelSearchInfo.location
    checkInTime.innerText = changeDateFormat(HotelSearchInfo.checkinDate) + ' - ' +changeDateFormat(HotelSearchInfo.checkoutDate)
    numOfPass.innerText = HotelSearchInfo.adultQuantity + ' người lớn, ' + HotelSearchInfo.childQuantity + ' trẻ em, ' + HotelSearchInfo.roomQuantity + ' phòng'
    getData()
} 