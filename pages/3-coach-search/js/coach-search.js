{/* <div id="feature__coach-search" class="container-fluid feature__item">
<div class="coach-search__config config">
    <div class="btn-dropdown config__passenger-quantity">
        <div class="info">
            <ion-icon class="icon" name="people"></ion-icon>
            <div class="text">
                1 hành khách
            </div>
            <ion-icon class="drop-down-icon" name="chevron-down-outline"></ion-icon>
        </div>
        <div class="dropdown-panel hide">
            <div class="dropdown-panel__item selected" data-ticket-type="1">
                <ion-icon name="ellipse" class="selected"></ion-icon>
                <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                <div class="text">
                    1 hành khách
                </div>
            </div>
            <div class="dropdown-panel__item" data-ticket-type="2">
                <ion-icon name="ellipse" class="selected"></ion-icon>
                <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                <div class="text">
                    2 hành khách
                </div>
            </div>
            <div class="dropdown-panel__item" data-ticket-type="3">
                <ion-icon name="ellipse" class="selected"></ion-icon>
                <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                <div class="text">
                    3 hành khách
                </div>
            </div>
        </div>
    </div>
</div>
<form action="" id="coach-search__search-form" class="search-form">
    <div class="search-form__input-container">
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Từ
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                <input id="coach-search__departure" class="departure__input" type="text"
                    placeholder="Điểm đi" autocomplete="off">
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
                <input id="coach-search__destination" class="destination__input" type="text"
                    placeholder="Điểm đến" autocomplete="off">
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
                <input id="coach-search__departure-date" class="departure-date__input" type="date"
                    placeholder="Ngày đi">
            </div>
        </div>
        <div class="input-block left-connect">
            <div class="title">
                <input id="coach-search__have-return" type="checkbox">
                <div class="text">
                    Khứ hồi
                </div>
            </div>
            <div class="input disabled">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input id="coach-search__return-date" class="return-date__input" type="date"
                    placeholder="Ngày về">
            </div>
        </div>
    </div>
    <div class="search-form__btn-container">
        <div id="search-form__submit-btn--coach" class="btn-submit">
            <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
</form>
</div> */}

const searchInfo = {
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    haveReturn: false,
    passengerQuantity: 1,
}

const featureCoachSearch = document.getElementById('feature__coach-search');
const coachSearchConfig = featureCoachSearch.querySelector('.coach-search__config');
const passengerQuantity = coachSearchConfig.querySelector('.config__passenger-quantity');
const passengerQuantityInfo = passengerQuantity.querySelector('.info');
const passengerQuantityDropdownPanel = passengerQuantity.querySelector('.dropdown-panel');
const dropdownPanelItems = passengerQuantityDropdownPanel.querySelectorAll('.dropdown-panel__item');

const coachSearchForm = featureCoachSearch.querySelector('#coach-search__search-form');
const departureInput = coachSearchForm.querySelector('.departure__input');
const destinationInput = coachSearchForm.querySelector('.destination__input');
const departureDateInput = coachSearchForm.querySelector('.departure-date__input');
const returnDateInput = coachSearchForm.querySelector('.return-date__input');
const searchBtn = coachSearchForm.querySelector('#search-form__submit-btn--coach');

// passengerQuantity EVENT

passengerQuantity.addEventListener('click', () => {
    passengerQuantityDropdownPanel.classList.toggle('hide');
})

// click outside passengerQuantityDropdownPanel to close it
document.addEventListener('click', (e) => {
    if (!passengerQuantity.contains(e.target)) {
        passengerQuantityDropdownPanel.classList.add('hide');
    }
})

// click on dropdownPanelItems to select
dropdownPanelItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownPanelItems.forEach(item => {
            item.classList.remove('selected');
        })
        item.classList.add('selected');
        passengerQuantityInfo.querySelector('.text').innerHTML = item.querySelector('.text').innerHTML;
        searchInfo.passengerQuantity = item.dataset.ticketType;
    })
})

//haveReturn EVENT
const haveReturnCheckbox = coachSearchForm.querySelector('#coach-search__have-return');
haveReturnCheckbox.addEventListener('change', () => {
    searchInfo.haveReturn = haveReturnCheckbox.checked;
    const returnDateInput = coachSearchForm.querySelector('.return-date__input');
    const returnDateInputContainer = coachSearchForm.querySelector('.return-date__input').parentElement;
    if (searchInfo.haveReturn) {
        returnDateInputContainer.classList.remove('disabled');
        returnDateInput.disabled = false;
    } else {
        returnDateInputContainer.classList.add('disabled');
        returnDateInput.disabled = true;
    }
})

searchBtn.addEventListener('click', () => {
    searchInfo.departure = departureInput.value;
    searchInfo.destination = destinationInput.value;
    searchInfo.departureDate = departureDateInput.value;
    searchInfo.returnDate = returnDateInput.value;

    console.log(searchInfo);
})