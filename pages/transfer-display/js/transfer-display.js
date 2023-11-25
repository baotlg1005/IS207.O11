const filterItems = document.querySelectorAll(".filter-item")
filterItems.forEach(item=>{
    const typeOfFilter = item.querySelector(".type-of-item-filter")
    const dropdownItemFilter = item.querySelector(".dropdown-item-filter")
    typeOfFilter.addEventListener("click",()=>{
        dropdownItemFilter.classList.toggle("hide")
    })
})

const itemFilters = document.querySelectorAll(".item-filter")
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
const sort = document.querySelector("#sort")
const itemSort = sort.querySelectorAll(".item-filter")
itemSort.forEach(item=>{
    const iconSelect = item.querySelector(".icon.select")
    const iconUnselect = item.querySelector(".icon.unselect")
    item.addEventListener("click",()=>{
        if (item.classList.contains("unselect")){
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

const resultContainer = document.getElementById("result-container")
const resultItemTemplate = document.getElementById("result-item-template")

function createResultItem(data){
    const resultItem = resultItemTemplate.cloneNode(true)
    resultItem.classList.add("result-item");
    resultItem.id = resultItem.id.replace("template", data.Id)
    resultItem.querySelector(".title").innerText = data.Name
    resultItem.querySelector("#luggage").innerText =data.Luggage
    resultItem.querySelector("#numofSeat").innerText = data.NumofSeat
    resultItem.querySelector("#type-of-car").innerText = data.Type_id
    resultItem.querySelector(".price-item .price-text").innerText = data.Price
    resultItem.querySelector(".result-item-img").setAttribute('src',"https://ik.imagekit.io/tvlk/image/imageResource/2021/11/18/1637208326192-014d03e4ea8f912c822478949676aca7.jpeg?tr=q-75,w-140")
    return resultItem
}
data = [{"Id": "CCH", 
"Type_id": "Tự lái", 
"Name": "City Car (2 Hours)", 
"Luggage": "2 hành lý", 
"NumofSeat": "4 ghế", 
"DepartureTime": " Thứ 2, 20 thg 11 2023 08:00 ", 
"ArrivalTime": " Thứ 2, 20 thg 11 2023 23:59", 
"Price": "508.000 VND", 
"PickPoint": "Tan Son Nhat International Airport (SGN) ", 
"State": "Free"},{"Id": "CCH", 
"Type_id": "Tự lái", 
"Name": "City Car (2 Hours)", 
"Luggage": "2 hành lý", 
"NumofSeat": "4 ghế", 
"DepartureTime": " Thứ 2, 20 thg 11 2023 08:00 ", 
"ArrivalTime": " Thứ 2, 20 thg 11 2023 23:59", 
"Price": "508.000 VND", 
"PickPoint": "Tan Son Nhat International Airport (SGN) ", 
"State": "Free"},{"Id": "CCH", 
"Type_id": "Tự lái", 
"Name": "City Car (8 Hours)", 
"Luggage": "2 hành lý", 
"NumofSeat": "4 ghế", 
"DepartureTime": " Thứ 2, 20 thg 11 2023 08:00 ", 
"ArrivalTime": " Thứ 2, 20 thg 11 2023 23:59", 
"Price": "508.000 VND", 
"PickPoint": "Tan Son Nhat International Airport (SGN) ", 
"State": "Free"}]
for (let i=0;i<data.length;i++){
    resultContainer.appendChild(
        createResultItem(data[i])
    )
}



