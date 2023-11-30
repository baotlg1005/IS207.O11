let CoachSearchInfo = {
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
const departureInput = coachSearchForm.querySelector('#coach-search__departure');
const destinationInput = coachSearchForm.querySelector('#coach-search__destination');
const departureDateInput = coachSearchForm.querySelector('#coach-search__departure-date');
const returnDateInput = coachSearchForm.querySelector('#coach-search__return-date');
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
        CoachSearchInfo.passengerQuantity = item.dataset.ticketType;
    })
})

//haveReturn EVENT
const haveReturnCheckbox = coachSearchForm.querySelector('#coach-search__have-return');
haveReturnCheckbox.addEventListener('change', () => {
    CoachSearchInfo.haveReturn = haveReturnCheckbox.checked;
    const returnDateInput = coachSearchForm.querySelector('.return-date__input');
    const returnDateInputContainer = coachSearchForm.querySelector('.return-date__input').parentElement;
    if (CoachSearchInfo.haveReturn) {
        returnDateInputContainer.classList.remove('disabled');
        returnDateInput.disabled = false;
    } else {
        returnDateInputContainer.classList.add('disabled');
        returnDateInput.disabled = true;
    }
})
function GetTodayDate() {
    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth() + 1
    const todayYear = today.getFullYear()
    return `${todayYear}-${todayMonth < 10 ? "0" + todayMonth : todayMonth}-${todayDate < 10 ? "0" + todayDate : todayDate}`
}
const todayDate = GetTodayDate()
let date = new Date();
let today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
input_date = document.querySelector("#coach-search__departure-date");
input_date.value = todayDate
input_date.setAttribute("min", today);

window.onload = function (e) {
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let locations = JSON.parse(this.responseText);
            if (locations.length > 0) {
                locations.forEach(item=>{
                    document.getElementById("departure-location").innerHTML += `<option>${item.From}</option>`
                })
              }
            }
          }
        xhttp.open("POST", "../../server/data-controller/coach/get-data.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`action=getDepartureLocation`)
    let xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let locations = JSON.parse(this.responseText);
            if (locations.length > 0) {
                locations.forEach(item=>{
                    document.getElementById("arrival-location").innerHTML += `<option>${item.To}</option>`
                })
              }
            }
          }
        xhttp2.open("POST", "../../server/data-controller/coach/get-data.php", true);
        xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp2.send(`action=getArrivalLocation`)
}


searchBtn.addEventListener('click', () => {
    CoachSearchInfo.departure = departureInput.value;
    CoachSearchInfo.destination = destinationInput.value;
    departureDate = new Date(departureDateInput.value)
    if (isNaN(departureDate)) {
        alert('Invalid checkin date');
        return;
    }
    departureDate = `${departureDate.getFullYear()}-${departureDate.getMonth()+1}-${departureDate.getDate()}`;
    CoachSearchInfo.departureDate = departureDate
    // CoachSearchInfo.returnDate = returnDateInput.value;
    // returnDate = new Date(returnDateInput.value)
    // if (isNaN(returnDate)) {
    //     alert('Invalid checkin date');
    //     return;
    // }
    // returnDate = `${returnDate.getFullYear()}-${returnDate.getMonth()+1}-${returnDate.getDate()}`;
    // CoachSearchInfo.returnDate = returnDate

    if (!CoachSearchInfo.departure) {
        alert('Location is required');
        return;
      }
    if (!CoachSearchInfo.destination) {
        alert('Location is required');
        return;
      }
    if (CoachSearchInfo.departure== CoachSearchInfo.destination) {
        alert('Departure location and arrival location must not be the same');
        return;
      }
    if (!CoachSearchInfo.departureDate) {
        alert('Departure date is required');
        return;
    }


    // if (!transferSearchInfo.returnDate) {
    //     alert('End time is required');
    //     return;
    // }
    window.location.href = '../coach-display/'
    console.log(JSON.stringify(CoachSearchInfo))
        sessionStorage.setItem('CoachSearchInfo', JSON.stringify(CoachSearchInfo))}
  
)
