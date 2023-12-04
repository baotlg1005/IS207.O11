let flightSearchInfo = {
    flightType: "one",
    passengerQuantity: {
        adult: 1,
        child: 0,
        baby: 0
    },
    seatType: "economy",
    oneFlightInfo: {
        departure: "",
        destination: "",
        departureDate: "",
        haveReturn: false,
        returnDate: "",
    },
    manyFlightInfo: [
        {
            departure: "",
            destination: "",
            departureDate: "",
        }
    ],
}

const featureFlightSearch = document.querySelector("#feature__flight-search")
const flightSearchConfig = featureFlightSearch.querySelector(".flight-search__config")
const flightTypeConfig = flightSearchConfig.querySelector(".config__flight-type")

const ticketInfoConfig = flightSearchConfig.querySelector(".config__ticket-info")

const passengerQuantityBtn = ticketInfoConfig.querySelector(".ticket-info__passenger-quantity")
const passengerQuantityInfo = passengerQuantityBtn.querySelector(".info")
const passengerQuantityDropdownPanel = passengerQuantityBtn.querySelector(".dropdown-panel")
const passengerQuantityConfirmBtn = passengerQuantityDropdownPanel.querySelector(".dropdown-panel__confirm-btn")
const passengerQuantityItems = passengerQuantityDropdownPanel.querySelectorAll(".dropdown-panel__item")

const seatTypeBtn = ticketInfoConfig.querySelector(".ticket-info__seat-type")
const seatTypeInfo = seatTypeBtn.querySelector(".info")
const seatTypeDropdownPanel = seatTypeBtn.querySelector(".dropdown-panel")
const seatTypeItems = seatTypeDropdownPanel.querySelectorAll(".dropdown-panel__item")

const oneFlightSearchForm = featureFlightSearch.querySelector("#flight-search__search-form--one")
const oneFlightSubmitBtn = oneFlightSearchForm.querySelector("#search-form__submit-btn--one-flight")

const manyFlightSearchForm = featureFlightSearch.querySelector("#flight-search__search-form--many")
const searchFormContainer = manyFlightSearchForm.querySelector(".search-form-container")
const templateFlightInfo = searchFormContainer.querySelector(".template")
const addMoreFlightBtn = manyFlightSearchForm.querySelector("#search-form__add-more-btn")
const manyFlightSubmitBtn = manyFlightSearchForm.querySelector("#search-form__submit-btn--many-flight")

let manyFlightInfo = []



//passenger quantity EVENT
passengerQuantityBtn.addEventListener("click", () => {
    passengerQuantityDropdownPanel.classList.toggle("hide")
})

//click inside passenger quantity dropdown panel not close the dropdown panel
passengerQuantityDropdownPanel.addEventListener("click", (e) => {
    e.stopPropagation()
})

//click outside passenger quantity dropdown panel close the dropdown panel
document.addEventListener("click", (e) => {
    if (passengerQuantityDropdownPanel.classList.contains("hide")) return;
    if (passengerQuantityBtn.contains(e.target)) return;
    passengerQuantityDropdownPanel.classList.add("hide")
})


//increase and decrease passenger quantity
passengerQuantityItems.forEach(item => {
    const passengerType = item.dataset.passengerType
    const setQuantity = item.querySelector(".item__set-quantity")
    const quantity = setQuantity.querySelector(".set-quantity__quantity")
    const increaseBtn = setQuantity.querySelector(".set-quantity__icon.increase")
    const decreaseBtn = setQuantity.querySelector(".set-quantity__icon.decrease")

    quantity.innerText = flightSearchInfo.passengerQuantity[passengerType]

    increaseBtn.addEventListener("click", () => {
        if (flightSearchInfo.passengerQuantity[passengerType] < 9) {
            flightSearchInfo.passengerQuantity[passengerType]++
            quantity.innerText = flightSearchInfo.passengerQuantity[passengerType]
        }
    })
    decreaseBtn.addEventListener("click", () => {
        if (flightSearchInfo.passengerQuantity[passengerType] > 1) {
            flightSearchInfo.passengerQuantity[passengerType]--
            quantity.innerText = flightSearchInfo.passengerQuantity[passengerType]
        }
    })
})

//update passenger quantity info when click confirm button
function UpdatePassengerQuantityInfo() {
    passengerQuantityInfo.querySelector(".text").innerText =
        `${flightSearchInfo.passengerQuantity.adult} Người lớn, ${flightSearchInfo.passengerQuantity.child} trẻ em, ${flightSearchInfo.passengerQuantity.baby} em bé`
}
passengerQuantityConfirmBtn.addEventListener("click", () => {
    UpdatePassengerQuantityInfo()
    passengerQuantityDropdownPanel.classList.add("hide")
})


//seat type EVENT
seatTypeBtn.addEventListener("click", () => {
    seatTypeDropdownPanel.classList.toggle("hide")
})

//click outside seat type dropdown panel close the dropdown panel
document.addEventListener("click", (e) => {
    if (seatTypeDropdownPanel.classList.contains("hide")) return;
    if (seatTypeBtn.contains(e.target)) return;
    seatTypeDropdownPanel.classList.add("hide")
})

//click seat type item to select seat type
seatTypeItems.forEach(item => {
    item.addEventListener("click", () => {
        seatTypeItems.forEach(item => item.classList.remove("selected"))
        item.classList.add("selected")
        flightSearchInfo.seatType = item.dataset.ticketType
        seatTypeInfo.querySelector(".text").innerText = item.querySelector(".text").innerText
        seatTypeDropdownPanel.classList.add("hide")
    })
})

//haveReturn EVENT
//many flight search form EVENT

// add more btn EVENT
function ReIndexFlightInfo() {
    manyFlightInfo.forEach((flightInfo, index) => {
        flightInfo.id = `search-form--${index}`
    })
}
function CreateNewFlightInfo() {
    const newFlightInfo = templateFlightInfo.cloneNode(true)
    newFlightInfo.classList.remove("template")
    newFlightInfo.classList.remove("hide")
    searchFormContainer.appendChild(newFlightInfo)

    newFlightInfo.id = `search-form--${manyFlightInfo.length}`
    manyFlightInfo.push(newFlightInfo)

    //add remove btn EVENT
    const removeBtn = newFlightInfo.querySelector(".search-form__remove-btn")
    // if manyFlightInfo is less than 4 and add more btn is disable, enable add more btn
    // if manyFlightInfo is less than 3, disable remove btn
    removeBtn.addEventListener("click", () => {
        manyFlightInfo = manyFlightInfo.filter(flightInfo => flightInfo.id !== newFlightInfo.id)
        ReIndexFlightInfo()
        searchFormContainer.removeChild(newFlightInfo)
        if (manyFlightInfo.length < 4) {
            addMoreFlightBtn.classList.remove("disable")
        }
        if (manyFlightInfo.length < 3) {
            searchFormContainer.classList.remove("can-remove");
        }
    })

    return newFlightInfo
}

// if manyFlightInfo is more than 4, disable add more btn
// if manyFlightInfo is more than 2, enable remove btn
addMoreFlightBtn.addEventListener("click", () => {
    if (manyFlightInfo.length == 4) return;
    const newFlightInfo = CreateNewFlightInfo()
    if (manyFlightInfo.length == 4) {
        addMoreFlightBtn.classList.add("disable")
    }
    if (manyFlightInfo.length > 2) {
        searchFormContainer.classList.add("can-remove");
    }
})

//create 2 default flight info for many flight search form
CreateNewFlightInfo()
CreateNewFlightInfo()


// submit btn EVENT

// one flight submit btn EVENT
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
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
oneFlightSubmitBtn.addEventListener("click", () => {

    //check isSignedIn or not if not redirect to sign-in page, check by check is have userId in cookie

    const departure = oneFlightSearchForm.querySelector("#flight-search__departure").value
    const destination = oneFlightSearchForm.querySelector("#flight-search__destination").value
    const departureDate = oneFlightSearchForm.querySelector("#flight-search__departure-date").value

    flightSearchInfo.oneFlightInfo.departure = departure
    flightSearchInfo.oneFlightInfo.destination = destination
    flightSearchInfo.oneFlightInfo.departureDate = departureDate

    if (!flightSearchInfo.oneFlightInfo.departure) {
        alert('Location is required');
        return
    }
    if (!flightSearchInfo.oneFlightInfo.destination) {
        alert('Location is required');
        return
    }
    if (flightSearchInfo.oneFlightInfo.departure === flightSearchInfo.oneFlightInfo.destination) {
        alert('Departure and destination must be different');
        return
    }

    console.log(flightSearchInfo);
    sessionStorage.setItem('flightSearchInfo', JSON.stringify(flightSearchInfo));

    window.location.href = "../flight-display/"
})
// many flight submit btn EVENT

manyFlightSubmitBtn.addEventListener("click", () => {
    manyFlightInfo.forEach(flightInfo => {
        const departure = flightInfo.querySelector(".departure__input").value
        const destination = flightInfo.querySelector(".destination__input").value
        const departureDate = flightInfo.querySelector(".departure-date__input").value

        flightInfo.departure = departure
        flightInfo.destination = destination
        flightInfo.departureDate = departureDate
    })

    console.log(flightSearchInfo)
})

//get today date and set it to be the value of departure-date__input when the page is loaded
function GetTodayDate() {
    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth() + 1
    const todayYear = today.getFullYear()
    return `${todayYear}-${todayMonth < 10 ? "0" + todayMonth : todayMonth}-${todayDate < 10 ? "0" + todayDate : todayDate}`
}
const todayDate = GetTodayDate()
const departureDateInputs = featureFlightSearch.querySelectorAll(".departure-date__input")

departureDateInputs.forEach(input => {
    input.value = todayDate
    input.setAttribute("min", todayDate);
})
window.onload = function (e) {
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            try{
            console.log(this.responseText);
            let locations = JSON.parse(this.responseText);
                locations.forEach(item=>{
                    document.getElementById("departureLocation").innerHTML += `<option>${item.From}</option>`
                })
            }
            catch(e){
                console.log(e);
            }}
          }
        xhttp.open("POST", "../../server/data-controller/flight/get-data.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`action=getDepartureLocation`)
    let xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            try{
            console.log(this.responseText);
            let locations = JSON.parse(this.responseText);
                locations.forEach(item=>{
                    document.getElementById("arrivalLocation").innerHTML += `<option>${item.To}</option>`
                })
            }
            catch(e){
                console.log(e);
            }}
          }
        xhttp2.open("POST", "../../server/data-controller/flight/get-data.php", true);
        xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp2.send(`action=getArrivalLocation`)
    }

    const recomItem = document.querySelectorAll('.recom-item');

recomItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
        //remove hide class in recom-btn in this item
        item.querySelector('.recom-btn').classList.remove('hide');
        //add show class in recom-btn in this item
        item.querySelector('.recom-btn').classList.add('show');
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.recom-btn').classList.remove('show');
        item.querySelector('.recom-btn').classList.add('hide');
    });
});

const itemHN = document.getElementById('item-hanoi');
const itemDN = document.getElementById('item-danang');
const itemHCM = document.getElementById('item-hcm');
const itemVT = document.getElementById('item-vungtau');

// window.addEventListener('load', () => {
//     console.log(HotelSearchInfo);
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//             let results = JSON.parse(this.responseText);
//                 itemHN.querySelector('.content .text').innerText = "Có " + results.hn + " khách sạn";
//                 itemDN.querySelector('.content .text').innerText = "Có " + results.dn + " khách sạn";
//                 itemHCM.querySelector('.content .text').innerText = "Có " + results.hcm + " khách sạn";
//                 itemVT.querySelector('.content .text').innerText = "Có " + results.vt + " khách sạn";
//         }
//     }
//     xhttp.open("GET", "../../server/data-controller/hotel-search/get-data.php?action=load-recom", true);
//     xhttp.send();
// });

// const recomBtn = document.querySelectorAll('.recom-btn');

// recomBtn.forEach(btn => { 
//     btn.addEventListener('click', () => {
//         const location = btn.parentElement.dataset.location;
//         locationInput.value = location;
//         document.documentElement.scrollTop = 0;
//     });
// });
