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
        locations.forEach(item => {
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
        locations.forEach(item => {
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
  departureDate = `${departureDate.getFullYear()}-${departureDate.getMonth() + 1}-${departureDate.getDate()}`;
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
  if (CoachSearchInfo.departure == CoachSearchInfo.destination) {
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
  sessionStorage.setItem('CoachSearchInfo', JSON.stringify(CoachSearchInfo))
}

)

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

const itemHCM = document.getElementById('item-hcm');
const itemHP = document.getElementById('item-haiphong');
const itemDN = document.getElementById('item-danang');
const itemHT = document.getElementById('item-hatinh');
const itemLD = document.getElementById('item-lamdong');
const itemKH = document.getElementById('item-khanhhoa');
const itemVT = document.getElementById('item-vungtau');
const itemAG = document.getElementById('item-angiang');

window.addEventListener('load', () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let results = JSON.parse(this.responseText);
      itemHCM.querySelector('.content .text').innerText = "Có " + results.hcm + " Chuyến xe";
      itemHP.querySelector('.content .text').innerText = "Có " + results.hp + " Chuyến xe";
      itemDN.querySelector('.content .text').innerText = "Có " + results.dn + " Chuyến xe";
      itemHT.querySelector('.content .text').innerText = "Có " + results.ht + " Chuyến xe";
      itemLD.querySelector('.content .text').innerText = "Có " + results.ld + " Chuyến xe";
      itemKH.querySelector('.content .text').innerText = "Có " + results.kh + " Chuyến xe";
      itemVT.querySelector('.content .text').innerText = "Có " + results.vt + " Chuyến xe";
      itemAG.querySelector('.content .text').innerText = "Có " + results.ag + " Chuyến xe";
    }
  }
  xhttp.open("GET", "../../server/data-controller/coach-search/get-data.php?action=load-recom", true);
  xhttp.send();
});

const recomBtn = document.querySelectorAll('.recom-btn');

recomBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const location = btn.parentElement.dataset.location;
    destinationInput.value = location;
    document.documentElement.scrollTop = 0;
  });
});

let busLocation;

window.addEventListener('load', () => {
    if (sessionStorage.getItem("busLocation")) {
      busLocation = JSON.parse(sessionStorage.getItem("busLocation"));
        destinationInput.value = busLocation.value;
    }
});
