let HotelSearchInfo = {
    location: '',
    checkinDate: '',
    checkoutDate: '',
    adultQuantity: 1,
    childQuantity: 0,
    roomQuantity: 1
}

const featureHotelSearch = document.getElementById('feature__hotel-search');
const hotelConfig = featureHotelSearch.querySelector('.hotel-search__config');
const guestAndRoomQuantity = hotelConfig.querySelector('.guest-and-room-quantity');
const guestAndRoomQuantityInfo = guestAndRoomQuantity.querySelector('.guest-and-room-quantity__info');
const guestAndRoomQuantityDropdownPanel = guestAndRoomQuantity.querySelector('.guest-and-room-quantity__dropdown-panel');
const guestAndRoomQuantityItems = guestAndRoomQuantityDropdownPanel.querySelectorAll('.dropdown-panel__item');
const guestAndRoomQuantityConfirmBtn = guestAndRoomQuantityDropdownPanel.querySelector('.dropdown-panel__confirm-btn');

const hotelSearchForm = featureHotelSearch.querySelector('#hotel-search__search-form');
const hotelLocationInput = hotelSearchForm.querySelector('#hotel-search__location');
const checkinDateInput = hotelSearchForm.querySelector('#hotel-search__checkin-date');
const checkoutDateInput = hotelSearchForm.querySelector('#hotel-search__checkout-date');
const hotelSubmitBtn = hotelSearchForm.querySelector('#search-form__submit-btn--hotel');

window.addEventListener("load",function(event){
    console.log(HotelSearchInfo);
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let locations = JSON.parse(this.responseText);
            if (locations.length > 0) {
                locations.forEach(item=>{
                    document.getElementById("location").innerHTML += `<option>${item.Area}</option>`
                })
              }
            }
          }
        xhttp.open("POST", "../../server/data-controller/hotel/get-data.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`action=getLocation`)
    });
function GetTodayDate() {
    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth() + 1
    const todayYear = today.getFullYear()
    return `${todayYear}-${todayMonth < 10 ? "0" + todayMonth : todayMonth}-${todayDate < 10 ? "0" + todayDate : todayDate}`
}
const hotelTodayDate = GetTodayDate()
let hotelDate = new Date();
let hotelToday = coachDate.getFullYear() + '-' + (coachDate.getMonth() + 1) + '-' + coachDate.getDate();
input_date = document.querySelector(".checkin-date__input");
input_date.setAttribute("min", coachToday);
input_date.value = transferTodayDate
output_date = document.querySelector(".checkout-date__input");
output_date.setAttribute("min", coachToday);
output_date.value = transferTodayDate
//guestAndRoomQuantity EVENT
guestAndRoomQuantityInfo.addEventListener('click', () => {
    guestAndRoomQuantityDropdownPanel.classList.toggle('hide');
});

// click outside to close dropdown panel
document.addEventListener('click', (e) => {
    if (!guestAndRoomQuantity.contains(e.target)) {
        guestAndRoomQuantityDropdownPanel.classList.add('hide');
    }
});

// set quantity
guestAndRoomQuantityItems.forEach(item => {
    console.log(item)
    const setQuantity = item.querySelector('.item__set-quantity');
    const quantity = setQuantity.querySelector('.set-quantity__quantity');
    const increaseBtn = setQuantity.querySelector('.set-quantity__icon.increase');
    const decreaseBtn = setQuantity.querySelector('.set-quantity__icon.decrease');

    increaseBtn.addEventListener('click', () => {
        quantity.innerText = parseInt(quantity.innerText) + 1;
    });

    decreaseBtn.addEventListener('click', () => {
        if (parseInt(quantity.innerText) > 0) {
            quantity.innerText = parseInt(quantity.innerText) - 1;
        }
    });
});

//confirm btn event
guestAndRoomQuantityConfirmBtn.addEventListener('click', () => {
    guestAndRoomQuantityDropdownPanel.classList.add('hide');
    const adultQuantity = guestAndRoomQuantityItems[0].querySelector('.set-quantity__quantity').innerText;
    const childQuantity = guestAndRoomQuantityItems[1].querySelector('.set-quantity__quantity').innerText;
    const roomQuantity = guestAndRoomQuantityItems[2].querySelector('.set-quantity__quantity').innerText;
    guestAndRoomQuantityInfo.querySelector('.text').innerText = `${adultQuantity} Người lớn, ${childQuantity} trẻ em, ${roomQuantity} phòng`;

    HotelSearchInfo.adultQuantity = adultQuantity;
    HotelSearchInfo.childQuantity = childQuantity;
    HotelSearchInfo.roomQuantity = roomQuantity;
});

//submit btn event
hotelSubmitBtn.addEventListener('click', () => {
    HotelSearchInfo.location = hotelLocationInput.value;
    
    startDate = new Date(checkinDateInput.value)
    if (isNaN(startDate)) {
        alert('Invalid checkin date');
        return;
    }
    startDate = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`;
    HotelSearchInfo.checkinDate = startDate;
    endDate = new Date(checkoutDateInput.value)
    if (isNaN(endDate)) {
        alert('Invalid checkout date');
        return;
    }
    endDate = `${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
    HotelSearchInfo.checkoutDate = endDate;
    if (!HotelSearchInfo.location) {
        alert('Location is required');
        return;
    }
    if (HotelSearchInfo.checkinDate > HotelSearchInfo.checkoutDate) {
        alert('Checkin date must be before checkout date');
        return;
    }
    window.location.href = '../hotel-display/'
    sessionStorage.setItem('HotelSearchInfo', JSON.stringify(HotelSearchInfo))
    
}); 