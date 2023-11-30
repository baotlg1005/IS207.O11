const filterItems = document.querySelectorAll(".filter-item")
const resultContainer = document.getElementById("result-container")
const resultItemTemplate = document.getElementById("result-item-template")
const itemFilters = document.querySelectorAll(".item-filter")
const sort = document.querySelector("#sort")
const itemSort = sort.querySelectorAll(".item-filter")
let searchInfoTitle = document.getElementById("search-info-title")
const searchInfoDescription = document.getElementById("search-info-description")
const btnShowMore = document.getElementById("btn-showMore");
let imgs = []
let pageLimit = 11;
let action = "showResultASC"
fetch('../../resources/images/imgs_taxi.json')
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

btnShowMore.addEventListener("click", (e) => {
    pageLimit += 10;
    getData();
})

filterItems.forEach(item=>{
    const typeOfFilter = item.querySelector(".type-of-item-filter")
    const dropdownItemFilter = item.querySelector(".dropdown-item-filter")
    typeOfFilter.addEventListener("click",()=>{
        dropdownItemFilter.classList.toggle("hide")
    })
})

itemFilters.forEach(item=>{
    const iconSelect = item.querySelector(".icon.select")
    const iconUnselect = item.querySelector(".icon.unselect")
    if (item.id!="max-price"&&item.id!="min-price"){
    item.addEventListener("click",()=>{
            item.classList.toggle("select")
            item.classList.toggle("unselect")
            iconSelect.classList.toggle("hide")
            iconUnselect.classList.toggle("hide")
        }
    )}
})

itemSort.forEach(item=>{
    const iconSelect = item.querySelector(".icon.select")
    const iconUnselect = item.querySelector(".icon.unselect")
    item.addEventListener("click",()=>{
        if (item.classList.contains("unselect")){
            resultContainer.innerHTML = ""
            if (item.id=="max-price"){
                action = "showResultDESC"
            }
            else{
                action = "showResultASC"
                
            }
            getData()
            item.classList.remove("unselect")
            item.classList.add("select")
            iconSelect.classList.remove("hide")
            iconUnselect.classList.add("hide")
            itemSort.forEach(item2=>{
                const iconSelect = item2.querySelector(".icon.select")
                const iconUnselect = item2.querySelector(".icon.unselect")
                if (item2!=item && item2.classList.contains("select")){
                    item2.classList.remove("select")
                    item2.classList.add("unselect")
                    iconSelect.classList.add("hide")
                    iconUnselect.classList.remove("hide")
                }
            })
        }
    }
    )
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

    let link = 'https://ik.imagekit.io/tvlk/image/imageResource/2021/11/18/1637208308735-14c75db4b125d8cc4a19d7b6f6906e96.jpeg?tr=q-75,w-140';
    for (let item of imgs){
        if (data.Name.indexOf(item.img_name) > -1){
            link = item.img_src
            break
        }
    }
    document.getElementById("result-container").innerHTML+=
    `<div id="${data.Id}" class="result-item">
    <img src="${link}"
        alt="" class="result-item-img">
    <div class="col">
        <div class="text-info">
            <div class="title">
                ${data.Name}
            </div>
            <div class="description">
                <div class="detail">
                    <div id="luggage" class="description-item hightlight">
                        ${data.Luggage}
                    </div>
                    <div id="numofSeat" class="description-item hightlight">
                        ${data.NumofSeat}
                    </div>
                </div>
                <div class="detail">
                    <div id="type-of-car" class="description-item">
                        ${data.Type}
                    </div>
                    <div id="num-of-provider" class="description-item hightlight">
                        Hiện có 1 nhà cung cấp
                    </div>
                </div>
            </div>
        </div>
        <div class="booking">
            <div id="price" class="price-item">
                <div class=price-text>${changeMoneyFormat(data.Price)} VND</div>
                <div class="text"> /ngày</div>
            </div>
            <a id="change-search-info" class="btn-default" href="../payment">
                <div class="text">Tiếp tục</div>
            </a>
        </div>
    </div>
</div>`
}

let transferSearchInfo;
//check if session storage flightSearchInfo is exist
if (sessionStorage.getItem("transferSearchInfo")) {
  transferSearchInfo = JSON.parse(sessionStorage.getItem("transferSearchInfo"))
  searchInfoDescription.innerText = transferSearchInfo.location+' • '+changeDateFormat(transferSearchInfo.startDate)+' '+transferSearchInfo.startTime+' • '+changeDateFormat(transferSearchInfo.endDate)+' '+transferSearchInfo.endTime
    if (transferSearchInfo.haveDriver){
        searchInfoTitle.innerHTML = `Có tài xế`
    }
    else{
        searchInfoTitle.innerHTML = `Tự lái`
    }
}

 

function getData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        try{
        console.log(this.responseText);
        let searchResults = JSON.parse(this.responseText);
            document.getElementById("result-container").innerHTML = " ";
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
    xhttp.open("POST", "../../server/data-controller/transfer/get-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=${action}&pageLimit=${pageLimit}&location=${transferSearchInfo.location}&startDate=${transferSearchInfo.startDate}&startTime=${transferSearchInfo.startTime}&endDate=${transferSearchInfo.endDate}&endTime=${transferSearchInfo.endTime}&haveDriver=${transferSearchInfo.haveDriver}`)
}

window.onload = function (e) {
    getData()
} 



