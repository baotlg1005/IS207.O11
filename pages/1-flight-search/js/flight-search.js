let searchInfo = {
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
const flightTypeBtns = flightTypeConfig.querySelectorAll(".btn-toggle")
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

// Flight type toggle EVENT
flightTypeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        flightTypeBtns.forEach(btn => btn.classList.remove("active"))
        btn.classList.add("active")
        searchInfo.flightType = btn.dataset.flightType
        if (btn.dataset.flightType === "one") {
            document.querySelector("#flight-search__search-form--one").classList.remove("hide")
            document.querySelector("#flight-search__search-form--many").classList.add("hide")
        } else {
            document.querySelector("#flight-search__search-form--one").classList.add("hide")
            document.querySelector("#flight-search__search-form--many").classList.remove("hide")
        }
    })
})

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
    if(passengerQuantityDropdownPanel.classList.contains("hide")) return;
    if(passengerQuantityBtn.contains(e.target)) return;
    passengerQuantityDropdownPanel.classList.add("hide")
})


//increase and decrease passenger quantity
passengerQuantityItems.forEach(item => {
    const passengerType = item.dataset.passengerType
    const setQuantity = item.querySelector(".item__set-quantity")
    const quantity = setQuantity.querySelector(".set-quantity__quantity")
    const increaseBtn = setQuantity.querySelector(".set-quantity__icon.increase")
    const decreaseBtn = setQuantity.querySelector(".set-quantity__icon.decrease")

    quantity.innerText = searchInfo.passengerQuantity[passengerType]

    increaseBtn.addEventListener("click", () => {
        if (searchInfo.passengerQuantity[passengerType] < 9) {
            searchInfo.passengerQuantity[passengerType]++
            quantity.innerText = searchInfo.passengerQuantity[passengerType]
        }
    })
    decreaseBtn.addEventListener("click", () => {
        if (searchInfo.passengerQuantity[passengerType] > 0) {
            searchInfo.passengerQuantity[passengerType]--
            quantity.innerText = searchInfo.passengerQuantity[passengerType]
        }
    })
})

//update passenger quantity info when click confirm button
function UpdatePassengerQuantityInfo() {
    passengerQuantityInfo.querySelector(".text").innerText = 
        `${searchInfo.passengerQuantity.adult} Người lớn, ${searchInfo.passengerQuantity.child} trẻ em, ${searchInfo.passengerQuantity.baby} em bé`
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
    if(seatTypeDropdownPanel.classList.contains("hide")) return;
    if(seatTypeBtn.contains(e.target)) return;
    seatTypeDropdownPanel.classList.add("hide")
})

//click seat type item to select seat type
seatTypeItems.forEach(item => {
    item.addEventListener("click", () => {
        seatTypeItems.forEach(item => item.classList.remove("selected"))
        item.classList.add("selected")
        searchInfo.seatType = item.dataset.ticketType
        seatTypeInfo.querySelector(".text").innerText = item.querySelector(".text").innerText
        seatTypeDropdownPanel.classList.add("hide")
    })
})

//haveReturn EVENT
const haveReturnCheckbox = oneFlightSearchForm.querySelector('#flight-search__have-return');
haveReturnCheckbox.addEventListener('change', () => {
    searchInfo.haveReturn = haveReturnCheckbox.checked;
    const returnDateInput = oneFlightSearchForm.querySelector('.return-date__input');
    const returnDateInputContainer = oneFlightSearchForm.querySelector('.return-date__input').parentElement;
    if (searchInfo.haveReturn) {
        returnDateInputContainer.classList.remove('disabled');
        returnDateInput.disabled = false;
    } else {
        returnDateInputContainer.classList.add('disabled');
        returnDateInput.disabled = true;
    }
})

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
    if(manyFlightInfo.length == 4) {
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

oneFlightSubmitBtn.addEventListener("click", () => {
    const departure = oneFlightSearchForm.querySelector("#flight-search__departure").value
    const destination = oneFlightSearchForm.querySelector("#flight-search__destination").value
    const departureDate = oneFlightSearchForm.querySelector("#flight-search__departure-date").value
    const haveReturn = oneFlightSearchForm.querySelector("#flight-search__have-return").checked
    const returnDate = oneFlightSearchForm.querySelector("#flight-search__return-date").value

    searchInfo.oneFlightInfo.departure = departure
    searchInfo.oneFlightInfo.destination = destination
    searchInfo.oneFlightInfo.departureDate = departureDate
    searchInfo.oneFlightInfo.haveReturn = haveReturn
    searchInfo.oneFlightInfo.returnDate = returnDate

    console.log(searchInfo)
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

    console.log(searchInfo)
})