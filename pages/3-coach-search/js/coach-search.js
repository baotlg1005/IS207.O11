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