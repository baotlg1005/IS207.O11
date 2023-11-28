const filterItems = document.querySelectorAll(".filter-item")
const resultContainer = document.getElementById("result-container")
const resultItemTemplate = document.getElementById("result-item-template")
const itemFilters = document.querySelectorAll(".item-filter")
const sort = document.querySelector("#sort")
const itemSort = sort.querySelectorAll(".item-filter")
const searchInfoTitle = document.getElementById("search-info-title")
const searchInfoDescription = document.getElementById("search-info-description")
fetch('../../resources/images/imgs_taxi.json')
  .then(response => response.json())
  .then(data => {
    const imgs = data.imgs;
    console.log(imgs);
  });


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
                getData("showResultDESC")
            }
            else{
                getData("showResultASC")
            }
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

function createResultItem(data){
    let price = ''
    let count = 0
    for (let i=data.Price.length-1;i>=0;i--){
        if (count==3){
            price = '.'+price
        }
        price = data.Price[i]+price
        if (count==3){
            count=1
        }
        else{
            count++
        }
    }
    let link = ''
    for (let item of imgs){
        if (item.img_name in data.Name){
            link = item.img_link
            break
        }
    }
    if (link==''){
        link = 'https://ik.imagekit.io/tvlk/image/imageResource/2021/11/18/1637208308735-14c75db4b125d8cc4a19d7b6f6906e96.jpeg?tr=q-75,w-140'}
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
                <div class=price-text>${price} VND</div>
                <div class="text"> /ngày</div>
            </div>
            <a id="change-search-info" class="btn-default" href="/pages/payment/payment.html">
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
}


searchInfoDescription.innerText = transferSearchInfo.location+' • '+transferSearchInfo.startDate+' '+transferSearchInfo.startTime+' • '+transferSearchInfo.endDate+' '+transferSearchInfo.endTime

function getData(action){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let searchResults = JSON.parse(this.responseText);
        searchInfoTitle.innerText = searchResults[0].Type
        if (searchResults.length > 0) {
            searchResults.forEach(item=>{
                createResultItem(item)
            })
          }
        else{
            console.log("Không tìm thấy kết quả phù hợp")
            document.getElementById("result-container").innerHTML=
            `<div class="title">Không tìm thấy kết quả phù hợp</div>`
        }
        }
      }
    xhttp.open("POST", "../../server/data-controller/transfer/get-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=${action}&location=${transferSearchInfo.location}&startDate=${transferSearchInfo.startDate}&startTime=${transferSearchInfo.startTime}&endDate=${transferSearchInfo.endDate}&endTime=${transferSearchInfo.endTime}&haveDriver=${transferSearchInfo.haveDriver}`)
}

window.onload = function (e) {
    getData("showResultASC")
} 



