{/* <div id="feature__flight-search" class="container-fluid">
<div class="flight-search__config">
    <div class="config__flight-type" data-flight-type="one">
        <div class="btn-toggle active" data-flight-type="one">
            <div class="text">
                Một chiều / Khứ hồi
            </div>
        </div>
        <div class="btn-toggle" data-flight-type="many">
            <div class="text">
                Nhiều thành phố
            </div>
        </div>
    </div>
    <div class="config__ticket-info">
        <div class="btn-dropdown ticket-info__passenger-quantity">
            <div class="info passenger-quantity__info">
                <ion-icon class="icon" name="people"></ion-icon>
                <div class="text">
                    1 Người lớn, 0 trẻ em, 0 em bé
                </div>
                <ion-icon class="drop-down-icon" name="chevron-down-outline"></ion-icon>
            </div>
            <div class="dropdown-panel dropdown-panel--set-quantity passenger-quantity__dropdown-panel hide">
                <div class="dropdown-panel__title">
                    <div class="text">Số hành khách</div>
                </div>
                <div class="dropdown-panel__item" data-passenger-type="adult">
                    <ion-icon class="item__icon" name="body-outline"></ion-icon>
                    <div class="item__title">
                        <div class="text">Người lớn</div>
                        <div class="comment">(từ 12 tuổi)</div>
                    </div>
                    <div class="item__set-quantity">
                        <ion-icon class="set-quantity__icon increase" name="add-circle-outline"></ion-icon>
                        <div class="set-quantity__quantity">1</div>
                        <ion-icon class="set-quantity__icon decrease"
                            name="remove-circle-outline"></ion-icon>
                    </div>
                </div>
                <div class="dropdown-panel__item" data-passenger-type="child">
                    <ion-icon class="item__icon" name="body-outline"></ion-icon>
                    <div class="item__title">
                        <div class="text">Trẻ em</div>
                        <div class="comment">(từ 2 - 11 tuổi)</div>
                    </div>
                    <div class="item__set-quantity">
                        <ion-icon class="set-quantity__icon increase" name="add-circle-outline"></ion-icon>
                        <div class="set-quantity__quantity">1</div>
                        <ion-icon class="set-quantity__icon decrease"
                            name="remove-circle-outline"></ion-icon>
                    </div>
                </div>
                <div class="dropdown-panel__item" data-passenger-type="baby">
                    <ion-icon class="item__icon" name="body-outline"></ion-icon>
                    <div class="item__title">
                        <div class="text">Em bé</div>
                        <div class="comment">(dưới 2 tuổi)</div>
                    </div>
                    <div class="item__set-quantity">
                        <ion-icon class="set-quantity__icon increase" name="add-circle-outline"></ion-icon>
                        <div class="set-quantity__quantity">1</div>
                        <ion-icon class="set-quantity__icon decrease"
                            name="remove-circle-outline"></ion-icon>
                    </div>
                </div>
                <div class="dropdown-panel__confirm-btn">
                    <div class="text">Xong</div>
                </div>
            </div>
        </div>
        <div class="btn-dropdown ticket-info__seat-type" data-seat-type="economy">
            <div class="info seat-type__info">
                <ion-icon name="star"></ion-icon>
                <div class="text">
                    Phổ thông
                </div>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>

            <div class="dropdown-panel seat-type__dropdown-panel hide">
                <div class="dropdown-panel__item selected" data-ticket-type="economy">
                    <ion-icon name="ellipse" class="selected"></ion-icon>
                    <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                    <div class="text">
                        Phổ thông
                    </div>
                </div>
                <div class="dropdown-panel__item" data-ticket-type="business">
                    <ion-icon name="ellipse" class="selected"></ion-icon>
                    <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                    <div class="text">
                        Thương gia
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<form action="" id="flight-search__search-form--one" class="search-form">
    <div class="search-form__input-container">
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Từ
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__departure" 
                    class="departure__input" 
                    type="text"
                    placeholder="Điểm đi" 
                    autocomplete="off"
                >
            </div>
        </div>
        <div class="input-block left-connect">
            <div class="title">
                <div class="text">
                    Đến
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__destination" 
                    class="destination__input" 
                    type="text"
                    placeholder="Điểm đến" 
                    autocomplete="off"
                >
            </div>
        </div>
    </div>
    <div class="search-form__input-container">
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Ngày đi
                </div> 
            </div>
            <div class="input">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__departure-date" 
                    class="departure-date__input" 
                    type="date" 
                    placeholder="Ngày đi"
                >
            </div>
        </div>
        <div class="input-block left-connect">
            <div class="title">
                <input 
                    id="flight-search__have-return" 
                    type="checkbox" 
                >
                <div class="text">
                    Khứ hồi
                </div>
            </div>
            <div class="input disabled">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__return-date" 
                    class="return-date__input" 
                    type="date"
                    placeholder="Ngày về"
                >
            </div>
        </div>
    </div>
    <div class="search-form__btn-container">
        <div id="search-form__submit-btn--one-flight" class="btn-submit">
            <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
    
</form>
<form action="" id="flight-search__search-form--many" class="search-form search-form--many hide">
    <div class="search-form-container">
        <div id="search-form--" class="search-form-container__item template hide">
            <div class="search-form__input-container">
                <div class="input-block right-connect">
                    <div class="title">
                        <div class="text">
                            Từ
                        </div>
                    </div>
                    <div class="input">
                        <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                        <input 
                            class="departure__input" 
                            type="text"
                            placeholder="Điểm đi" 
                            autocomplete="off"
                        >
                    </div>
                </div>
                <div class="input-block left-connect">
                    <div class="title">
                        <div class="text">
                            Đến
                        </div>
                    </div>
                    <div class="input">
                        <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                        <input 
                            class="destination__input" 
                            type="text"
                            placeholder="Điểm đến" 
                            autocomplete="off"
                        >
                    </div>
                </div>
            </div>
            <div class="search-form__input-container">
                <div class="input-block">
                    <div class="title">
                        <div class="text">
                            Ngày đi
                        </div> 
                    </div>
                    <div class="input">
                        <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                        <input 
                            class="departure-date__input" 
                            type="date" 
                            placeholder="Ngày đi"
                        >
                    </div>
                </div>
            </div>
            <div class="search-form__remove-btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </div>
        </div>
    </div>
    <div class="search-form__btn-group">
        <div id="search-form__add-more-btn" class="btn-default btn-add-more">
            <ion-icon name="add-circle-outline"></ion-icon>
            <div class="text">
                Thêm chuyến bay khác
            </div>
        </div>
        <div id="search-form__submit-btn--many-flight" class="btn-submit">
            <ion-icon name="search-outline"></ion-icon>
            <div class="text">
                Tìm chuyến bay
            </div>
        </div>
    </div>
</form>
</div> */}

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

//one flight search form EVENT
// make sure departure and destination are not empty
// make sure departure and destination are not the same
// make sure return date is not empty if have return is checked
// make sure departure date is not after return date

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
        if (manyFlightInfo.length < 4) {
            addMoreFlightBtn.classList.remove("disable")
        }
        if (manyFlightInfo.length < 3) {
            searchFormContainer.classList.remove("can-remove");
        }
        manyFlightInfo = manyFlightInfo.filter(flightInfo => flightInfo.id !== newFlightInfo.id)
        ReIndexFlightInfo()
        searchFormContainer.removeChild(newFlightInfo)
    })

    return newFlightInfo
}

// if manyFlightInfo is more than 4, disable add more btn
// if manyFlightInfo is more than 2, enable remove btn
addMoreFlightBtn.addEventListener("click", () => {
    if (manyFlightInfo.length >= 4) return;
    if (manyFlightInfo.length >= 2) {
        searchFormContainer.classList.add("can-remove");
    }
    const newFlightInfo = CreateNewFlightInfo()
    if(manyFlightInfo.length === 4) {
        addMoreFlightBtn.classList.add("disable")
    }
})

//create 2 default flight info for many flight search form
CreateNewFlightInfo()
CreateNewFlightInfo()